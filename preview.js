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
const BOARD_SIZES = { atx: [244, 305], eatx: [277, 305], matx: [244, 244], itx: [170, 170] };
// Rear-top, front-top, and rear-bottom of the motherboard footprint in
// selected case photos. Points use the original image's normalized coordinates.
const CASE_PHOTO_PLANES = {
  "case-h5": [[.255, .365], [.53, .285], [.25, .705]],
  "case-montech-xr": [[.25, .30], [.53, .225], [.25, .695]],
  "case-phanteks-xt-pro": [[.285, .29], [.58, .19], [.28, .74]],
  "case-lian-li-vector-v100r": [[.29, .31], [.62, .23], [.285, .73]],
  "case-lian-li-o11-vision-compact": [[.33, .35], [.61, .25], [.33, .79]],
  "case-nzxt-h5-flow-2024": [[.30, .255], [.60, .22], [.30, .61]],
  "case-lian-li-o11-dynamic-mini-v2": [[.315, .28], [.625, .19], [.315, .77]],
  "case-lian-li-o11d-evo-rgb": [[.29, .305], [.56, .24], [.285, .79]],
  "case-corsair-3500x-rs-r-argb": [[.34, .29], [.60, .245], [.34, .715]],
  "case-nzxt-h9-flow-2025": [[.28, .37], [.54, .29], [.275, .73]],
  "case-lian-li-lancool-216": [[.35, .32], [.505, .265], [.35, .66]]
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
      const timer = setTimeout(() => resolve(null), 8000);
      image.onload = () => { clearTimeout(timer); resolve(image); };
      image.onerror = () => { clearTimeout(timer); resolve(null); };
      image.src = src;
    });
    previewImages.set(src, pending);
    pending.then((image) => { if (!image) previewImages.delete(src); });
  }
  return previewImages.get(src);
}

async function loadCatalogImage(src, preserveThumbnailFrame = false) {
  const original = src.replace(/^(https:\/\/cdna\.pcpartpicker\.com\/static\/forever\/images\/product\/[a-f\d]{32})\.256p\.jpg$/, "$1.jpg");
  if (original === src) return loadPreviewImage(src);

  const image = await loadPreviewImage(original);
  if (image && (!preserveThumbnailFrame || (image.naturalWidth === image.naturalHeight && image.naturalWidth >= 256))) {
    return image;
  }
  return loadPreviewImage(src);
}

function catalogPreview(part, photos) {
  const photo = photos[part?.id];
  const cutout = PHOTO_CUTOUTS[part?.id];
  return photo && cutout ? { ...photo, cutout } : null;
}

function containPhoto(width, height, [x, y, maxWidth, maxHeight]) {
  const scale = Math.min(maxWidth / width, maxHeight / height);
  const fittedWidth = width * scale;
  const fittedHeight = height * scale;
  return [x + (maxWidth - fittedWidth) / 2, y + (maxHeight - fittedHeight) / 2, fittedWidth, fittedHeight];
}

function previewSource(asset, image) {
  const crop = asset.cutout?.[0];
  return crop
    ? crop.map((value, index) => value * (index % 2 === 0 ? image.naturalWidth : image.naturalHeight))
    : asset.crop || [0, 0, image.naturalWidth, image.naturalHeight];
}

function framePreviewLayer(asset, image, bounds) {
  const source = previewSource(asset, image);
  const [, , sw, sh] = source;
  const rotate = asset.vertical && sw > sh;
  const frame = asset.cutout
    ? containPhoto(rotate ? sh : sw, rotate ? sw : sh, bounds)
    : bounds;
  return { asset, image, source, frame, rotate };
}

function drawPreviewLayer(context, { asset, image, source, frame, rotate }) {
  const [x, y, width, height] = frame;
  context.save();
  context.translate(x, y);
  context.scale(width, height);
  if (rotate) {
    context.translate(1, 0);
    context.rotate(Math.PI / 2);
  }
  if (asset.cutout?.length > 1) {
    const [, maskWidth, maskHeight, encoded] = asset.cutout;
    const runs = atob(encoded);
    context.beginPath();
    for (let i = 0; i < runs.length; i += 4) {
      context.rect(runs.charCodeAt(i) / maskWidth, runs.charCodeAt(i + 1) / maskHeight,
        runs.charCodeAt(i + 2) / maskWidth, runs.charCodeAt(i + 3) / maskHeight);
    }
    context.clip();
  }
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
    const [sx, sy, sw, sh] = source;
    context.drawImage(image, sx, sy, sw, sh, 0, 0, 1, 1);
  }
  context.restore();
}

function framePreviewCanvas(canvas, [x, y, width, height]) {
  const density = 1600 / Math.max(width, height);
  canvas.width = Math.round(width * density);
  canvas.height = Math.round(height * density);
  const context = canvas.getContext("2d");
  const scaleX = canvas.width / width;
  const scaleY = canvas.height / height;
  context.setTransform(scaleX, 0, 0, scaleY, -x * scaleX, -y * scaleY);
  return context;
}

function sceneFrame(layers) {
  const left = Math.min(...layers.map(({ frame }) => frame[0]));
  const top = Math.min(...layers.map(({ frame }) => frame[1]));
  const right = Math.max(...layers.map(({ frame: [x, , width] }) => x + width));
  const bottom = Math.max(...layers.map(({ frame: [, y, , height] }) => y + height));
  return [left, top, right - left, bottom - top];
}

function previewLayers(selection, assets, photos, hideCooler, topRadiatorLimit) {
  const layers = [];
  const generic = (part) => catalogPreview(part, photos);
  function add(part, bounds, asset = assets[part?.id] || generic(part)) {
    if (asset) layers.push({ part, asset, bounds });
  }

  const board = selection.motherboard;
  const gpu = selection.gpu;
  const cooler = hideCooler ? null : selection.cooler;
  const [boardWidth, boardHeight] = BOARD_SIZES[board?.form] || BOARD_SIZES.atx;
  const layout = BOARD_LAYOUTS[board?.id] || {
    socket: [44 + boardWidth * .51, 55 + boardHeight * .32],
    dimmX: [.74, .78, .82, .86].map((position) => 44 + boardWidth * position),
    dimmY: 65,
    gpuY: 55 + boardHeight * (board?.form === "itx" ? .91 : .60)
  };
  add(board, [44, 55, boardWidth, boardHeight]);
  const [socketX, socketY] = layout.socket;

  let slotOffset = 0;
  const stickCount = Math.min(selection.ram.reduce((total, kit) => total + kit.sticks, 0), 4);
  const dimmSlots = [[], [1], [1, 3], [1, 2, 3], [0, 1, 2, 3]][stickCount];
  for (const kit of selection.ram) {
    if (assets[kit.id]) {
      for (const slot of dimmSlots.slice(slotOffset, slotOffset + kit.sticks)) {
        add(kit, [layout.dimmX[slot], layout.dimmY, 7, 137]);
      }
    } else {
      const cutout = generic(kit);
      const slot = dimmSlots[slotOffset];
      if (cutout && slot !== undefined) {
        const width = kit.sticks === 1 ? 21 : 35;
        add(kit, [layout.dimmX[slot] - 6, layout.dimmY, width, 136], { ...cutout, vertical: true });
      }
    }
    slotOffset += kit.sticks;
  }

  if (selection.cpu && !cooler && selection.cpu.socket === board?.socket) {
    add(selection.cpu, [socketX - 18.75, socketY - 22.5, 37.5, 45]);
  }
  const pump = assets[cooler?.id];
  const radiator = pump?.radiator;
  let tubes;
  const radiatorSize = Number(cooler?.spec.match(/\b(120|140|240|280|360|420) mm\b/)?.[1]);
  if (radiator && topRadiatorLimit >= 360) {
    const radiatorWidth = radiator.lengthMm * CASE_DEPTH_SCALE;
    add(cooler, [51, 23, radiatorWidth, 70], { ...radiator, credit: pump.credit });
    tubes = { radiatorX: 51 + radiatorWidth, pumpX: socketX + 40, pumpY: socketY };
    add(cooler, [socketX - 34, socketY - 49, 78, 92]);
  } else if (radiatorSize) {
    if (radiatorSize <= topRadiatorLimit) {
      add(cooler, [44, 12, radiatorSize * CASE_DEPTH_SCALE, 99], generic(cooler));
    }
  } else if (cooler) {
    add(cooler, [socketX - 63, socketY - 60, 125, 120]);
  }
  if (gpu) {
    const width = Math.min((gpu.lengthMm || 300) * CASE_DEPTH_SCALE, 397);
    const height = assets[gpu.id] ? gpu.thicknessMm : 122;
    add(gpu, [43, layout.gpuY, width, height]);
  }
  return { layers, tubes };
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

function drawBuildScene(canvas, caseLayer, plane, layers, tubes, pump) {
  let frame;
  if (caseLayer) {
    frame = caseLayer.frame;
  } else {
    frame = sceneFrame(layers);
    if (tubes) frame[2] = Math.max(frame[2], tubes.radiatorX + 16 - frame[0]);
  }
  const context = framePreviewCanvas(canvas, frame);
  if (caseLayer) {
    drawPreviewLayer(context, caseLayer);
    if (plane) {
      const [x, y, width, height] = caseLayer.frame;
      const [left, top, cropWidth, cropHeight] = caseLayer.asset.cutout?.[0] || [0, 0, 1, 1];
      const [[ox, oy], [rx, ry], [bx, by]] = plane;
      const rawWidth = width / cropWidth;
      const rawHeight = height / cropHeight;
      context.transform((rx - ox) * rawWidth / 244, (ry - oy) * rawHeight / 244,
        (bx - ox) * rawWidth / 305, (by - oy) * rawHeight / 305,
        x + (ox - left) * rawWidth, y + (oy - top) * rawHeight);
      context.translate(-44, -55);
    }
  }
  for (const layer of layers) {
    if (tubes && layer.asset === pump) drawCoolerTubes(context, tubes);
    drawPreviewLayer(context, layer);
  }
}

function frameProductPhoto(part, photo, image) {
  const crop = PHOTO_CUTOUTS[part.id]?.[0];
  // Catalog trims were measured on the square thumbnail. A non-square
  // original already has its own frame and uses its natural dimensions.
  let asset = photo;
  if (crop && (image.src === photo.src || image.naturalWidth === image.naturalHeight)) {
    const [x, y, width, height] = crop;
    const left = Math.max(0, x - .02);
    const top = Math.max(0, y - .02);
    const right = Math.min(1, x + width + .02);
    const bottom = Math.min(1, y + height + .02);
    asset = { ...photo, cutout: [[left, top, right - left, bottom - top]] };
  }
  const [, , width, height] = previewSource(asset, image);
  return framePreviewLayer(asset, image, [0, 0, width, height]);
}

function createBuildPreview({ assets, photos, lookupPart, seatPart, selectParts, renderReferences }) {
  const canvas = document.getElementById("preview-canvas");
  const bay = canvas.parentElement;
  const stage = bay.closest(".stage");
  const caption = document.getElementById("preview-caption");
  const message = document.getElementById("preview-message");
  const coverage = document.getElementById("preview-coverage");
  const clearance = document.getElementById("preview-clearance");
  const sources = document.getElementById("preview-sources");
  const links = document.getElementById("preview-credits");
  const controls = document.getElementById("preview-options");
  const caseSelect = document.getElementById("preview-case");
  const gpuSelect = document.getElementById("preview-gpu");
  const cpuToggle = document.getElementById("preview-hide-cooler");
  const subjectSelect = document.getElementById("preview-subject");
  let revision = 0;
  let activeSelection;

  function fitPreviewHeight() {
    if (canvas.hidden || getComputedStyle(stage).overflowY !== "auto") return;
    const bayOffset = bay.getBoundingClientRect().top - stage.getBoundingClientRect().top + stage.scrollTop;
    const { paddingTop, paddingBottom } = getComputedStyle(bay);
    const available = stage.clientHeight - bayOffset - parseFloat(paddingTop) - parseFloat(paddingBottom) - 18;
    canvas.style.setProperty("--preview-height", Math.max(180, Math.floor(available)) + "px");
  }
  const layoutObserver = new ResizeObserver(fitPreviewHeight);
  for (const element of [stage, caption, controls, subjectSelect.parentElement]) layoutObserver.observe(element);

  for (const [select, ids] of [[caseSelect, CASE_VARIANTS], [gpuSelect, GPU_VARIANTS]]) {
    ids.forEach((id) => select.add(new Option(lookupPart(id).short, id)));
    select.addEventListener("change", () => seatPart(select.value));
  }

  cpuToggle.addEventListener("change", () => renderPreview(activeSelection));
  subjectSelect.addEventListener("change", () => renderPreview(activeSelection));

  async function renderPreview(selection) {
    activeSelection = selection;
    const currentRevision = ++revision;
    const cse = selection.case;
    const board = selection.motherboard;
    const gpu = selection.gpu;
    const cpu = selection.cpu;
    const cooler = selection.cooler;
    const selectedParts = selectParts(selection);
    const photoChoices = [...new Map(selectedParts.filter((part) => photos[part.id])
      .map((part) => [part.id, part])).values()];
    const focus = photoChoices.find((part) => part.id === subjectSelect.value);
    const photoSubject = focus || (selectedParts.length === 1 ? photoChoices[0] : null);
    subjectSelect.replaceChildren(new Option("Build", ""), ...photoChoices.map(
      (part) => new Option(part.name, part.id)));
    subjectSelect.value = focus?.id || "";
    subjectSelect.parentElement.hidden = selectedParts.length < 2 || !photoChoices.length;

    const caseId = cse?.id === "case-903" ? CASE_VARIANTS[0] : cse?.id;
    const caseAsset = assets[caseId];
    const casePhoto = photos[cse?.id];
    const plane = CASE_PHOTO_PLANES[caseId];
    const caseView = caseAsset || (plane && casePhoto);
    const canHideCooler = Boolean(assets[cpu?.id] && cooler && board?.socket === cpu.socket);
    caseSelect.parentElement.hidden = Boolean(photoSubject || !caseAsset);
    gpuSelect.parentElement.hidden = Boolean(photoSubject || !caseAsset);
    cpuToggle.parentElement.hidden = Boolean(photoSubject || !canHideCooler);
    controls.hidden = Boolean(photoSubject || (!caseAsset && !canHideCooler));
    caseSelect.value = caseId ?? "";
    // Keep the current catalog selection visible alongside the two side-on options.
    if (gpuSelect.options.length > GPU_VARIANTS.length + 1) gpuSelect.remove(gpuSelect.options.length - 1);
    if (gpu && !GPU_VARIANTS.includes(gpu.id)) gpuSelect.add(new Option(gpu.name, gpu.id));
    gpuSelect.value = gpu?.id || "";
    if (!canHideCooler) cpuToggle.checked = false;

    const limit = cse?.gpuClear;
    const cardLength = gpu?.lengthMm;
    clearance.hidden = Boolean(photoSubject || !limit || !cardLength || gpu?.lengthApprox);
    if (!clearance.hidden) {
      const margin = Math.round((limit - cardLength) * 10) / 10;
      clearance.textContent = cardLength + " mm GPU · " + limit + " mm case limit · "
        + (margin >= 0 ? margin + " mm length margin" : -margin + " mm over the length limit");
    }

    canvas.hidden = true;
    message.hidden = false;
    coverage.hidden = true;
    sources.hidden = true;
    renderReferences([]);

    if (!selectedParts.length) {
      caption.textContent = "See your selected parts together using real product photos.";
      message.textContent = "Select parts from the catalog or click Seat flagship.";
      return;
    }

    message.textContent = "Loading product photos…";
    const shown = new Map();
    let mainPhoto = photoSubject;
    let showTubes = false;
    let hasPhotoBackdrop = false;
    if (!mainPhoto) {
      const topRadiator = caseAsset || caseId === "case-montech-xr" ? 360
        : caseId === "case-nzxt-h5-flow-2024" ? 240
        : caseView ? 0 : 420;
      const { layers, tubes } = previewLayers(selection, assets, photos, cpuToggle.checked, topRadiator);
      const [caseImage, ...images] = await Promise.all([
        caseView ? loadCatalogImage(caseView.src, true) : null,
        ...layers.map(({ asset }) => loadPreviewImage(asset.src))
      ]);
      if (currentRevision !== revision) return;

      let caseLayer;
      if (caseImage) {
        caseLayer = caseAsset ? framePreviewLayer(caseView, caseImage, [0, 0, CASE_WIDTH, CASE_HEIGHT])
          : frameProductPhoto(cse, caseView, caseImage);
        hasPhotoBackdrop = !caseAsset;
        shown.set(cse.id, { part: cse, credit: caseView.credit });
      }
      const visibleLayers = layers.flatMap(({ part, asset, bounds }, index) => {
        if (!images[index]) return [];
        shown.set(part.id, { part, credit: asset.credit });
        return [{ ...framePreviewLayer(asset, images[index], bounds), part }];
      });
      showTubes = Boolean(tubes && visibleLayers.filter(({ part }) => part === cooler).length === 2);
      if (caseLayer || visibleLayers.length) {
        drawBuildScene(canvas, caseLayer, plane, visibleLayers, showTubes ? tubes : null, assets[cooler?.id]);
        const names = [...shown.values()].map(({ part }) => part.name).join(", ");
        caption.textContent = caseLayer
          ? "Build from product photos. Scale, angles, and mounting positions are approximate."
          : "Parts layout from product photos. Mounting positions are approximate.";
        canvas.setAttribute("aria-label", (caseLayer ? "Assembled preview of " : "Parts layout of ") + names);
      } else {
        mainPhoto = photoChoices[0];
      }
    }

    if (mainPhoto) {
      const photo = photos[mainPhoto.id];
      const image = await loadCatalogImage(photo.src);
      if (currentRevision !== revision) return;
      caption.textContent = photo.variant ? "Product photo · " + photo.variant : "Product photo";
      if (image) {
        const layer = frameProductPhoto(mainPhoto, photo, image);
        drawPreviewLayer(framePreviewCanvas(canvas, layer.frame), layer);
        shown.set(mainPhoto.id, { part: mainPhoto, credit: photo.credit });
        canvas.setAttribute("aria-label", "Product photo of " + mainPhoto.name);
      }
    }

    canvas.classList.toggle("product-photo", Boolean(mainPhoto || hasPhotoBackdrop));
    canvas.hidden = shown.size === 0;
    message.hidden = !canvas.hidden;
    fitPreviewHeight();
    if (canvas.hidden) {
      if (!mainPhoto) caption.textContent = "Selected part photos";
      message.textContent = mainPhoto
        ? "This product photo couldn’t load."
        : "Photo availability for your build is shown below.";
    }

    const cpuCovered = !mainPhoto && canHideCooler && shown.has(cooler.id);
    const notices = [];
    if (showTubes) notices.push("Tube routing is approximate.");
    if (cpuCovered) notices.push(cpu.short + " is under the cooler.");
    coverage.textContent = notices.join(" ");
    coverage.hidden = !notices.length;

    const referenceParts = selectedParts.filter((part) => !shown.has(part.id) && !(part === cpu && cpuCovered));
    if (!photoSubject || !shown.size) renderReferences(referenceParts);
    const credits = [...shown.values()];
    links.replaceChildren();
    for (const { part, credit } of credits) {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = credit;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = part.name;
      item.append(link);
      links.append(item);
    }
    sources.hidden = !links.childElementCount;
  }
  return renderPreview;
}
