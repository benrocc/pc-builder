// Source images are selected by catalog ID. The canvas uses millimeters in the
// side-on plane so swapping a card changes its displayed length and thickness.
const CASE_VARIANTS = ["case-903-black", "case-903-white"];
const GPU_VARIANTS = [
  "gpu-nvidia-founders-edition-geforce-rtx-5090",
  "gpu-zotac-rtx-5090-solid-oc"
];
const CASE_WIDTH = 478;
const CASE_HEIGHT = 493;
// The rear expansion slot to front fan span is 369 units in the case photo.
const CASE_DEPTH_SCALE = 369 / 400;
const BOARD_LAYOUTS = {
  "board-b850": {
    socket: [174, 154], dimmX: [224, 235, 246, 257], dimmY: 85, gpuY: 241
  },
  "board-gigabyte-z790-eagle-ax": {
    socket: [172, 149], dimmX: [223, 232, 241, 250], dimmY: 101, gpuY: 240
  }
};
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
  "board-b850": {
    src: "https://storage-asset.msi.com/global/picture/product/product_1736159752859b0d59d04f539fee0f53b5742d9275.webp",
    credit: "https://www.msi.com/Motherboard/MAG-B850-TOMAHAWK-MAX-WIFI/Gallery",
    crop: [205, 46, 590, 708]
  },
  "board-gigabyte-z790-eagle-ax": {
    src: "https://www.avadirect.com/Pictures/Big/17308506_1.png",
    credit: "https://www.avadirect.com/Z790-EAGLE-AX-Intel-Z690-Chipset-LGA-1700-ATX-Motherboard/Product/17308506",
    crop: [98, 43, 511, 628]
  },
  "cpu-3ZmNnQ": {
    src: "https://diskloop.com/media/catalog/product/cache/c15eb52e76245814219ee020a67d27a9/s/r/srn7r.jpg",
    credit: "https://diskloop.com/srn7r-intel-processor.html",
    crop: [95, 97, 336, 402],
    mask: [[.004, 0], [.31, .002], [.34, .015], [.36, .002], [.77, .002], [.79, .015],
      [.82, .003], [.996, .004], [1, 1], [.82, 1], [.8, .986], [.78, 1],
      [.35, 1], [.33, .987], [.31, 1], [0, 1]]
  },
  "cooler-pa": {
    src: "https://www.thermalright.com/wp-content/uploads/2021/10/PA120-SE-%E4%B8%BB%E5%9B%BE-3.jpg",
    credit: "https://www.thermalright.com/product/peerless-assassin-120-se/",
    // Look down at the fins and fan edges, as through the case window.
    basis: [[.135, .533], [.135, .033], [.866, .533]],
    mask: [[0, .014], [.21, .014], [.23, 0], [.54, .02], [.57, .043], [.97, .056],
      [1, .077], [1, .924], [.97, .944], [.57, .959], [.54, .986], [.22, .985], [.2, 1], [0, .982]]
  },
  "cooler-thermalright-aqua-elite-v3": {
    src: "https://www.thermalright.com/wp-content/uploads/2023/07/3-2.jpg",
    credit: "https://www.thermalright.com/product/aqua-elite-360-v3/",
    crop: [198, 34, 1219, 1434],
    mask: [[0, .23], [.013, .193], [.064, .161], [.275, .161], [.284, .05], [.299, .019],
      [.345, .003], [.475, .003], [.508, .016], [.532, .053], [.54, .158], [.71, .156],
      [.759, .185], [.797, .24], [.867, .23], [.909, .237], [.955, .266], [.992, .33],
      [.994, .393], [.964, .425], [.994, .515], [1, .583], [.973, .643], [.985, .678],
      [.932, .713], [.883, .71], [.839, .691], [.837, .758], [.805, .802], [.71, .874],
      [.534, .881], [.53, .947], [.508, .982], [.473, .997], [.341, .998], [.301, .984],
      [.28, .953], [.278, .881], [.174, .879], [.129, .842], [.063, .839], [.021, .823], [.002, .789]],
    radiator: {
      // The manufacturer's installed photo shows the topside mount and fan faces.
      src: "https://www.thermalright.com/wp-content/uploads/2023/07/5-2.jpg",
      crop: [0, 0, 1500, 479],
      mask: [[0, 0], [1, 0], [1, .95], [.96, .98], [.055, 1], [0, .96]],
      lengthMm: 396
    }
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

function previewLayers(selection, assets, hideCooler) {
  const layers = [];
  const unavailable = [];
  function add(part, bounds, asset = assets[part.id]) {
    if (asset) layers.push({ part, asset, bounds });
    else if (!unavailable.includes(part.name)) unavailable.push(part.name);
  }

  add(selection.case, [0, 0, CASE_WIDTH, CASE_HEIGHT]);
  const board = selection.motherboard;
  const gpu = selection.gpu;
  const cooler = hideCooler ? null : selection.cooler;
  const layout = BOARD_LAYOUTS[board?.id];
  if (!layout) {
    if (board) unavailable.push(board.name);
    return { layers, unavailable };
  }

  // Rear of the case is at the left. These mount positions are aligned to the
  // rear I/O and first PCIe slot in the side-on product references.
  add(board, [44, 55, 244, 305]);
  const [socketX, socketY] = layout.socket;
  const kitSticks = selection.ram.flatMap((kit) => Array(kit.sticks).fill(kit)).slice(0, 4);
  const dimmSlots = [[], [1], [1, 3], [1, 2, 3], [0, 1, 2, 3]][kitSticks.length];
  kitSticks.forEach((kit, index) => add(kit, [layout.dimmX[dimmSlots[index]], layout.dimmY, 7, 137]));
  if (selection.cpu && !assets[cooler?.id] && selection.cpu.socket === board.socket) {
    add(selection.cpu, [socketX - 18.75, socketY - 22.5, 37.5, 45]);
  }
  const pump = assets[cooler?.id];
  const radiator = pump?.radiator;
  let tubes;
  if (radiator) {
    const radiatorWidth = radiator.lengthMm * CASE_DEPTH_SCALE;
    add(cooler, [51, 23, radiatorWidth, 70], { ...radiator, credit: pump.credit });
    tubes = { radiatorX: 51 + radiatorWidth, pumpX: socketX + 40, pumpY: socketY };
    add(cooler, [socketX - 34, socketY - 49, 78, 92]);
  } else if (cooler) {
    add(cooler, [socketX - 63, socketY - 60, 125, 120]);
  }
  if (gpu) add(gpu, [43, layout.gpuY, gpu.lengthMm * CASE_DEPTH_SCALE, gpu.thicknessMm]);
  return { layers, unavailable, tubes };
}

function drawCoolerTubes(context, { radiatorX, pumpX, pumpY }) {
  context.save();
  context.lineCap = "round";
  for (const offset of [0, 11]) {
    context.beginPath();
    context.moveTo(radiatorX - 13 - offset, 51);
    context.bezierCurveTo(radiatorX + 53 - offset, 147, radiatorX - 72, pumpY + 56 - offset, pumpX, pumpY + 12 - offset);
    for (const [color, width] of [["#0d0e10", 10], ["#2a2c2f", 7], ["#3c3e41", 2]]) {
      context.strokeStyle = color;
      context.lineWidth = width;
      context.stroke();
    }
  }
  context.restore();
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
  const cpuToggle = document.getElementById("preview-hide-cooler");
  let revision = 0;
  let activeSelection;

  for (const [select, ids] of [[caseSelect, CASE_VARIANTS], [gpuSelect, GPU_VARIANTS]]) {
    ids.forEach((id) => select.add(new Option(lookupPart(id).short, id)));
    select.addEventListener("change", () => seatPart(select.value));
  }

  cpuToggle.addEventListener("change", () => renderPreview(activeSelection));

  async function renderPreview(selection) {
    activeSelection = selection;
    const currentRevision = ++revision;
    const caseId = selection.case?.id;
    const gpuId = selection.gpu?.id;
    const hasCaseOptions = caseId === "case-903" || CASE_VARIANTS.includes(caseId);
    controls.hidden = !hasCaseOptions;
    caseSelect.value = CASE_VARIANTS.includes(caseId) ? caseId : "";
    gpuSelect.value = GPU_VARIANTS.includes(gpuId) ? gpuId : "";
    const layout = BOARD_LAYOUTS[selection.motherboard?.id];
    const canHideCooler = Boolean(assets[caseId] && layout && assets[selection.cpu?.id]
      && assets[selection.cooler?.id] && selection.cpu.socket === selection.motherboard.socket);
    cpuToggle.parentElement.hidden = !canHideCooler;
    if (!canHideCooler) cpuToggle.checked = false;

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
        : "Assembled view unavailable for " + selection.case.name + ". Open Part photos to see your selections.";
      return;
    }

    message.textContent = "Loading product images…";
    const { layers, unavailable, tubes } = previewLayers(selection, assets, cpuToggle.checked);
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
    const boardFailed = Boolean(layout && !images[1]);
    const pump = assets[selection.cooler?.id];
    const showTubes = tubes && layers.every(({ part }, index) => part.cat !== "cooler" || images[index]);
    layers.forEach(({ part, asset, bounds }, index) => {
      if (boardFailed && index > 1) return;
      if (!images[index]) {
        if (!unavailable.includes(part.name)) unavailable.push(part.name);
        return;
      }
      if (showTubes && asset === pump) drawCoolerTubes(context, tubes);
      drawPreviewLayer(context, asset, images[index], bounds);
      shown.set(part.name, asset.credit);
    });

    canvas.setAttribute("aria-label", "Side view of " + [...shown.keys()].join(", "));
    canvas.hidden = false;
    message.hidden = true;
    const needsBoard = !selection.motherboard && (gpu || selection.cooler || selection.ram.length || selection.cpu);
    const notices = [];
    if (needsBoard) notices.push("Add a motherboard to show installed parts.");
    if (selection.motherboard && (boardFailed || !layout)) {
      notices.push(boardFailed
        ? "The motherboard image couldn’t load."
        : "This motherboard needs mounting positions before it can be shown installed.");
    }
    if (!boardFailed && showTubes) notices.push("Top-mounted radiator. Tube routing is approximate.");
    if (canHideCooler && shown.has(selection.cooler.name)) notices.push(selection.cpu.short + " is under the cooler.");
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
  }
  return renderPreview;
}
