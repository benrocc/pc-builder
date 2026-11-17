// Source images are selected by catalog ID. The canvas uses millimeters in the
// side-on plane so swapping a card changes its displayed length and thickness.
const CASE_VARIANTS = ["case-903-black", "case-903-white"];
const GPU_VARIANTS = [
  "gpu-nvidia-founders-edition-geforce-rtx-5090",
  "gpu-zotac-rtx-5090-solid-oc"
];
const PREVIEW_BOARD = "board-b850";
const CASE_WIDTH = 478;
const CASE_HEIGHT = 493;
const PREVIEW_ASSETS = {
  "case-903-black": {
    src: "https://gzhls.at/pix/d4/9c/d49c060fd322c1b9-n.webp",
    credit: "https://geizhals.de/montech-air-903-max-black-a2974784.html",
    mask: [[.024, .003], [.94, .003], [.997, .07], [.997, .893], [.929, .956], [.906, .996],
      [.756, .996], [.689, .953], [.268, .953], [.193, .996], [.05, .996], [.024, .953]]
  },
  "case-903-white": {
    src: "https://gzhls.at/pix/54/98/5498a9b91f9bc116-n.webp",
    credit: "https://geizhals.de/montech-air-903-max-white-a2974792.html",
    mask: [[.014, .004], [.93, .004], [1, .075], [1, .90], [.934, .958], [.91, 1],
      [.75, 1], [.68, .956], [.27, .956], [.19, 1], [.045, 1], [.014, .956]]
  },
  [PREVIEW_BOARD]: {
    src: "https://storage-asset.msi.com/global/picture/product/product_1736159752859b0d59d04f539fee0f53b5742d9275.webp",
    credit: "https://www.msi.com/Motherboard/MAG-B850-TOMAHAWK-MAX-WIFI/Gallery",
    crop: [205, 46, 590, 708]
  },
  "cooler-pa": {
    src: "https://www.thermalright.com/wp-content/uploads/2021/10/PA120-SE-%E4%B8%BB%E5%9B%BE-3.jpg",
    credit: "https://www.thermalright.com/product/peerless-assassin-120-se/",
    // Look down at the fins and fan edges, as through the case window.
    basis: [[.135, .533], [.135, .033], [.866, .533]],
    mask: [[0, .014], [.21, .014], [.23, 0], [.54, .02], [.57, .043], [.97, .056],
      [1, .077], [1, .924], [.97, .944], [.57, .959], [.54, .986], [.22, .985], [.2, 1], [0, .982]]
  },
  "ram-32": {
    src: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_172087586?align=center&cdx=536&cdy=402&cox=0&coy=0&ex=536&ey=402&format=jpg&quality=80&resizesource=&sp=yes&strip=yes&trim=&unsharp=1.5x1+0.7+0.02&x=536&y=402",
    credit: "https://www.mediaworld.it/it/product/_memoria-ram-patriot-memory-viper-venom-pvv532g600c30k-155799285.html",
    basis: [[.211, .059], [.191, .079], [.794, .671]]
  },
  [GPU_VARIANTS[0]]: {
    src: "https://lanoc.org/images/reviews/2025/nvidia_rtx_5090_fe/image_32.jpg",
    credit: "https://lanoc.org/review/video-cards/nvidia-rtx-5090-founders-edition?start=2",
    basis: [[.948, .785], [.049, .785], [.948, .210]],
    mask: [[0, .03], [.08, 0], [.99, 0], [1, .08], [1, .94], [.99, 1], [.007, 1], [0, .89]]
  },
  [GPU_VARIANTS[1]]: {
    src: "https://img.4gamers.com.tw/puku-clone-version/fa2d19d1a44ddfe79e9e0186a92ffc2a8971e081.jpg",
    credit: "https://www.4gamers.com.tw/news/detail/70142/zotac-gaming-geforce-rtx-5090-solid-oc-review",
    crop: [120, 256, 1053, 253],
    mask: [[0, .3], [.04, .17], [.09, .06], [.64, 0], [.94, .012], [.995, .094],
      [1, .95], [.86, .97], [.72, .98], [.18, .99], [.016, 1], [0, .86]]
  }
};

const previewImages = new Map();

function loadPreviewImage(src) {
  if (!previewImages.has(src)) {
    const pending = new Promise((resolve) => {
      const image = new Image();
      image.referrerPolicy = "no-referrer";
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = src;
    });
    previewImages.set(src, pending);
  }
  return previewImages.get(src);
}

function drawPreviewLayer(context, asset, image, [x, y, width, height]) {
  context.save();
  context.translate(x, y);
  context.scale(width, height);
  if (asset.mask) {
    context.beginPath();
    asset.mask.forEach(([px, py], i) => i ? context.lineTo(px, py) : context.moveTo(px, py));
    context.closePath();
    context.clip();
  }
  if (asset.basis) {
    // Rectify the sampled face of an angled product image into the side view.
    const [[ox, oy], [rx, ry], [bx, by]] = asset.basis;
    const sourceTransform = new DOMMatrix([rx - ox, ry - oy, bx - ox, by - oy, ox, oy]).inverse();
    context.beginPath();
    context.rect(0, 0, 1, 1);
    context.clip();
    const { a, b, c, d, e, f } = sourceTransform;
    context.transform(a, b, c, d, e, f);
    context.drawImage(image, 0, 0, 1, 1);
  } else {
    const [sx, sy, sw, sh] = asset.crop || [0, 0, image.naturalWidth, image.naturalHeight];
    context.drawImage(image, sx, sy, sw, sh, 0, 0, 1, 1);
  }
  context.restore();
}

function previewLayers(selection, assets) {
  const layers = [];
  const unavailable = [];
  function add(part, bounds) {
    if (!part) return;
    const asset = assets[part.id];
    if (asset) layers.push({ part, asset, bounds });
    else if (!unavailable.includes(part.name)) unavailable.push(part.name);
  }

  add(selection.case, [0, 0, CASE_WIDTH, CASE_HEIGHT]);
  const board = selection.motherboard;
  const gpu = selection.gpu;
  const cooler = selection.cooler;
  if (board?.id !== PREVIEW_BOARD) {
    if (board) unavailable.push(board.name);
    return { layers, unavailable };
  }

  // Rear of the case is at the left. These mount positions are aligned to the
  // rear I/O and first PCIe slot in the side-on product references.
  add(board, [44, 55, 244, 305]);
  const kitSticks = selection.ram.flatMap((kit) => Array(kit.sticks).fill(kit)).slice(0, 4);
  const dimmX = { 1: [235], 2: [235, 257], 3: [235, 246, 257], 4: [224, 235, 246, 257] };
  kitSticks.forEach((kit, index) => add(kit, [dimmX[kitSticks.length][index], 85, 7, 137]));
  if (cooler) add(cooler, [111, 94, 125, 120]);
  else if (selection.cpu) add(selection.cpu, [154, 134, 40, 40]);
  // The visible span from the rear slot to the front fan is 369 canvas units
  // in these photos. Montech rates that span at 400 mm.
  if (gpu) add(gpu, [43, 241, gpu.lengthMm * 369 / 400, gpu.thicknessMm]);
  return { layers, unavailable };
}

function createBuildPreview(assets, lookupPart, seatPart) {
  const canvas = document.getElementById("preview-canvas");
  const message = document.getElementById("preview-message");
  const coverage = document.getElementById("preview-coverage");
  const clearance = document.getElementById("preview-clearance");
  const sources = document.getElementById("preview-sources");
  const controls = document.getElementById("preview-options");
  const caseSelect = document.getElementById("preview-case");
  const gpuSelect = document.getElementById("preview-gpu");
  let revision = 0;

  for (const [select, ids] of [[caseSelect, CASE_VARIANTS], [gpuSelect, GPU_VARIANTS]]) {
    ids.forEach((id) => select.add(new Option(lookupPart(id).short, id)));
    select.addEventListener("change", () => seatPart(select.value));
  }

  return async function renderPreview(selection) {
    const currentRevision = ++revision;
    const caseId = selection.case?.id;
    const gpuId = selection.gpu?.id;
    const hasCaseOptions = caseId === "case-903" || CASE_VARIANTS.includes(caseId);
    controls.hidden = !hasCaseOptions;
    caseSelect.value = CASE_VARIANTS.includes(caseId) ? caseId : "";
    gpuSelect.value = GPU_VARIANTS.includes(gpuId) ? gpuId : "";

    const gpu = selection.gpu;
    const limit = selection.case?.gpuClear;
    const cardLength = gpu?.lengthMm;
    clearance.hidden = !limit || !cardLength || !!gpu?.lengthApprox;
    if (!clearance.hidden) {
      const margin = Math.round((limit - cardLength) * 10) / 10;
      clearance.textContent = cardLength + " mm GPU · " + limit + " mm case limit · "
        + (margin >= 0 ? margin + " mm length margin" : -margin + " mm over the length limit");
    }

    canvas.hidden = true;
    message.hidden = false;
    coverage.hidden = true;
    sources.hidden = true;
    if (!caseId) {
      message.textContent = "Seat flagship or choose a case to see the build.";
      return;
    }
    if (!assets[caseId]) {
      message.textContent = hasCaseOptions
        ? "Choose black or white to preview the AIR 903 MAX."
        : "Preview unavailable for " + selection.case.name + ".";
      return;
    }

    message.textContent = "Loading product images…";
    const { layers, unavailable } = previewLayers(selection, assets);
    const images = await Promise.all(layers.map(({ asset }) => loadPreviewImage(asset.src)));
    if (currentRevision !== revision) return;
    if (!images[0]) {
      message.textContent = "The case image couldn’t load. Try reloading the page.";
      return;
    }

    const context = canvas.getContext("2d");
    context.setTransform(canvas.width / CASE_WIDTH, 0, 0, canvas.height / CASE_HEIGHT, 0, 0);
    context.clearRect(0, 0, CASE_WIDTH, CASE_HEIGHT);
    const shown = new Map();
    const boardFailed = selection.motherboard?.id === PREVIEW_BOARD && !images[1];
    layers.forEach(({ part, asset, bounds }, index) => {
      if (boardFailed && index > 1) return;
      if (!images[index]) {
        if (!unavailable.includes(part.name)) unavailable.push(part.name);
        return;
      }
      drawPreviewLayer(context, asset, images[index], bounds);
      shown.set(part.name, asset.credit);
    });

    canvas.setAttribute("aria-label", "Side view of " + [...shown.keys()].join(", "));
    canvas.hidden = false;
    message.hidden = true;
    const needsBoard = !selection.motherboard && (gpu || selection.cooler || selection.ram.length || selection.cpu);
    const notices = [];
    if (needsBoard) notices.push("Add a motherboard to show installed parts.");
    if (selection.motherboard && (boardFailed || selection.motherboard.id !== PREVIEW_BOARD)) {
      notices.push("The case is shown empty until this motherboard has a verified layout.");
    }
    if (unavailable.length) notices.push("Preview unavailable for " + unavailable.join(", ") + ".");
    coverage.textContent = notices.join(" ");
    coverage.hidden = !notices.length;

    const links = document.getElementById("preview-credits");
    links.replaceChildren();
    for (const [name, url] of shown) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = name;
      item.append(link);
      links.append(item);
    }
    sources.hidden = false;
  };
}
