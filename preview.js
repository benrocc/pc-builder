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
  "board-b650": {
    socket: [174, 157], dimmX: [227, 237, 247, 258], dimmY: 90, gpuY: 257
  },
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
  "case-montech-xr": [[.25, .30], [.53, .225], [.25, .695]],
  "case-phanteks-xt-pro": [[.285, .29], [.58, .19], [.28, .74]],
  "case-lian-li-vector-v100r": [[.29, .31], [.62, .23], [.285, .73]],
  "case-lian-li-o11-vision-compact": [[.33, .35], [.61, .25], [.33, .79]],
  "case-nzxt-h5-flow-2024": [[.30, .255], [.60, .22], [.30, .61]],
  "case-lian-li-o11-dynamic-mini-v2": [[.315, .28], [.625, .19], [.315, .77]],
  "case-lian-li-o11d-evo-rgb": [[.29, .305], [.56, .24], [.285, .79]],
  "case-corsair-3500x-rs-r-argb": [[.34, .29], [.60, .245], [.34, .715]],
  "case-nzxt-h9-flow-2025": [[.28, .37], [.54, .29], [.275, .73]],
  "case-lian-li-lancool-216": [[.35, .32], [.505, .265], [.35, .66]],
  "case-fractal-design-north": [[.365, .255], [.52, .19], [.285, .735]],
  "case-corsair-frame-4000d-rs-argb": [[.34, .23], [.475, .165], [.25, .675]],
  "case-phanteks-eclipse-g370a": [[.375, .36], [.54, .31], [.335, .665]],
  "case-phanteks-xt-pro-ultra": [[.38, .328], [.55, .268], [.305, .657]],
  "case-lian-li-o11-dynamic-mini-v2-flow": [[.295, .285], [.52, .235], [.245, .805]],
  "case-corsair-4000d-airflow": [[.405, .275], [.475, .223], [.315, .654]],
  "case-lian-li-lancool-217": [[.378, .305], [.537, .252], [.293, .678]],
  "case-lian-li-lancool-207": [[.385, .28], [.47, .248], [.30, .734]],
  "case-fractal-design-pop-xl-air": [[.34, .285], [.505, .217], [.235, .735]],
  "case-lian-li-o11-dynamic-evo-xl": [[.297, .257], [.54, .186], [.232, .765]],
  "case-lian-li-lancool-216-rgb": [[.378, .368], [.51, .322], [.321, .699]],
  "case-nzxt-h3-flow": [[.36, .38], [.55, .27], [.295, .745]],
  "case-lian-li-vector-v100": [[.278, .274], [.596, .195], [.243, .779]],
  "case-montech-air-903-base": [[.375, .292], [.493, .230], [.315, .708]],
  "case-corsair-frame-4000d": [[.34, .23], [.475, .165], [.25, .675]],
  "case-nzxt-h9-flow-rgb-2025": [[.36, .352], [.544, .273], [.286, .779]],
  "case-corsair-3500x": [[.293, .22], [.548, .171], [.244, .681]],
  "case-fractal-design-pop-air": [[.322, .26], [.5, .20], [.252, .73]],
  "case-antec-c8": [[.302, .259], [.542, .212], [.26, .819]],
  "case-deepcool-cg530-4f": [[.302, .329], [.533, .207], [.247, .8]]
};
const CASE_INTERIOR_PHOTOS = {
  "case-h5": {
    src: "https://i.pepita.hu/images/product/3772848/gehause-nzxt-midi-h5-flow-edition-mattschwarz-cc-h51fb-01_47514956_1200x630.jpg",
    credit: "https://pepita.com/de/computergehause-c2782/gehause-nzxt-midi-h5-flow-edition-mattschwarz-cc-h51fb-01-p3772848",
    trim: [.300, .137, .363, .717],
    plane: [[.329, .227], [.519, .227], [.329, .679]],
    straightOn: true,
    partBrightness: .78
  },
  "case-lian-li-vector-v100r": {
    src: "https://lian-li.com/wp-content/uploads/2025/06/V100_013.jpg",
    credit: "https://lian-li.com/product/vector-v100/",
    trim: [.102, .037, .785, .947],
    plane: [[.289, .319], [.583, .254], [.307, .727]],
    // The card's exposed edge sits closer to the glass than the board tray.
    // Rear edge, far end of the available GPU span, and 100 mm down.
    gpuMount: { spanMm: 420, plane: [[.183, .56], [.729, .54], [.183, .665]] }
  },
  "case-lian-li-vector-v100r-mini": {
    src: "https://lian-li.com/wp-content/uploads/2025/12/v100mini_002.jpg",
    credit: "https://lian-li.com/product/vector-v100-mini/",
    trim: [.085, .075, .83, .849],
    plane: [[.177, .181], [.619, .181], [.177, .731]],
    gpuMount: { spanMm: 415, plane: [[.139, .49], [.899, .49], [.139, .673]] }
  },
  "case-fractal-design-north": {
    src: "https://cdn.hstatic.net/products/200000522135/north_charcoal_black_tg_dark_7_44a79bfca06b4a4d98a393dd9f36a6a8_master.png",
    credit: "https://www.loctai.com/products/thung-may-tinh-case-fractal-design-north-charcoal-black-tg-dark",
    trim: [.139, .122, .719, .754],
    plane: [[.213, .195], [.576, .195], [.213, .675]]
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
  "board-b650": {
    src: "https://cdna.pcpartpicker.com/static/forever/images/product/ff33ebb87ed9f5fa5f9c54d6d316ae82.jpg",
    credit: "https://www.msi.com/Motherboard/B650-GAMING-PLUS-WIFI/Gallery",
    cutout: PHOTO_CUTOUTS["board-b650"]
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
  "gpu-asus-rog-astral-oc-geforce-rtx-5090": {
    src: "https://dlcdnwebimgs.asus.com/gain/08D2582A-DE6B-453B-84B0-CA983FBE1A33/w1000/h732",
    credit: "https://rog.asus.com/graphics-cards/graphics-cards/rog-astral/rog-astral-rtx5090-o32g-gaming/gallery/",
    crop: [24, 268, 685, 130]
  },
  "gpu-asus-rog-astral-oc-geforce-rtx-5080": {
    src: "https://dlcdnwebimgs.asus.com/gain/8E9CF564-E553-4F94-B213-AB9F5AB53791/w1000/h732",
    credit: "https://rog.asus.com/graphics-cards/graphics-cards/rog-astral/rog-astral-rtx5080-o16g-gaming/gallery/",
    crop: [24, 268, 685, 130]
  },
  "gpu-asus-tuf-gaming-oc-geforce-rtx-5070-ti": {
    src: "https://dlcdnwebimgs.asus.com/gain/ea4b4d00-805b-4a9f-a61f-93235dfe6632/w800",
    credit: "https://www.asus.com/us/motherboards-components/graphics-cards/tuf-gaming/tuf-rtx5070ti-o16g-gaming/",
    crop: [32, 296, 744, 114]
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
  const crop = asset.region || asset.cutout?.[0];
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

function clipPreviewPhoto(context, cutout) {
  if (!cutout) return;
  const [[left, top, width, height], mw, mh, encoded] = cutout;
  context.beginPath();
  if (encoded) {
    const runs = atob(encoded);
    for (let i = 0; i < runs.length; i += 4) {
      context.rect(left + runs.charCodeAt(i) / mw * width,
        top + runs.charCodeAt(i + 1) / mh * height,
        runs.charCodeAt(i + 2) / mw * width, runs.charCodeAt(i + 3) / mh * height);
    }
  } else context.rect(left, top, width, height);
  context.clip();
}

function drawPreviewLayer(context, { asset, image, source, frame, rotate }) {
  const [x, y, width, height] = frame;
  context.save();
  context.translate(x, y);
  context.scale(width, height);
  if (asset.solidSide) {
    const shade = context.createLinearGradient(0, 0, 0, 1);
    shade.addColorStop(0, asset.solidSide);
    shade.addColorStop(.15, asset.solidSide);
    shade.addColorStop(1, asset.solidSide === '#e1e4e6' ? '#a5acb2' : '#08090b');
    context.fillStyle = shade;
    context.fillRect(0, 0, 1, 1);
    context.strokeStyle = asset.solidSide === '#e1e4e6' ? '#dce2e6' : '#474a4e';
    context.lineWidth = .015;
    context.strokeRect(.005, .01, .99, .97);
    context.restore();
    return;
  }
  if (asset.targetBasis) {
    const [[ox, oy], [rx, ry], [bx, by]] = asset.targetBasis;
    context.transform(rx - ox, ry - oy, bx - ox, by - oy, ox, oy);
  }
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
  if (asset.round) {
    context.beginPath();
    context.ellipse(.5, .5, .5, .5, 0, 0, Math.PI * 2);
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
    clipPreviewPhoto(context, asset.sourceCutout);
    context.drawImage(image, 0, 0, 1, 1);
  } else if (asset.sourceCutout) {
    context.beginPath();
    context.rect(0, 0, 1, 1);
    context.clip();
    const [sx, sy, sw, sh] = source.map((n, i) => n / (i % 2 ? image.naturalHeight : image.naturalWidth));
    context.transform(1 / sw, 0, 0, 1 / sh, -sx / sw, -sy / sh);
    clipPreviewPhoto(context, asset.sourceCutout);
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

function previewLayers(selection, assets, photos, hideCooler, radiatorLimits, showHiddenParts = true) {
  const layers = [];
  const generic = (part) => catalogPreview(part, photos);
  function add(part, bounds, asset = assets[part?.id] || generic(part), component) {
    if (part && asset) layers.push({ part, asset, bounds, component });
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
  const memorySlots = board?.form === "itx" ? 2 : 4;
  const stickCount = Math.min(selection.ram.reduce((total, kit) => total + kit.sticks, 0), memorySlots);
  const dimmSlots = memorySlots === 2 ? [[], [0], [0, 1]][stickCount]
    : [[], [1], [1, 3], [0, 1, 3], [0, 1, 2, 3]][stickCount];
  const dimmX = memorySlots === 2
    ? [44 + boardWidth * .80, 44 + boardWidth * .91]
    : layout.dimmX;
  for (const kit of selection.ram) {
    const face = assets[kit.id] || (RAM_PREVIEW_FACES[kit.id] && {
      ...photos[kit.id], ...RAM_PREVIEW_FACES[kit.id]
    });
    if (face) {
      for (const slot of dimmSlots.slice(slotOffset, slotOffset + kit.sticks)) {
        add(kit, [dimmX[slot], layout.dimmY, 7, 133.35], face);
      }
    }
    slotOffset += kit.sticks;
  }

  if (selection.cpu && !cooler && selection.cpu.socket === board?.socket) {
    add(selection.cpu, [socketX - 18.75, socketY - 22.5, 37.5, 45]);
  }
  const profile = COOLER_PREVIEW_FACES[cooler?.id];
  let tubes;
  if (profile?.radiator) {
    const radiatorSize = profile.radiator.sizeMm;
    const limits = typeof radiatorLimits === "number" ? { top: radiatorLimits, front: 0 } : radiatorLimits || {};
    const front = limits.top < radiatorSize && limits.front >= radiatorSize;
    const length = (profile.radiatorLengthMm || radiatorSize + 35) * CASE_DEPTH_SCALE;
    const stack = profile.stackMm || 55;
    const [pw, ph] = profile.pumpMm || [74, 74];
    const base = { src: profile.src, credit: profile.credit,
      sourceCutout: profile.customPhoto ? undefined : PHOTO_CUTOUTS[cooler.id] };
    const fanAsset = { ...base, ...profile.radiator };
    // A top mount exposes the fan bank at a shallow angle. The front mount
    // turns the same real fan bank vertically, rather than moving the whole AIO.
    const bounds = front ? [345, 50, stack, length] : [43, 12, length, stack];
    const rail = { ...base, solidSide: profile.casing };
    if (front) {
      fanAsset.targetBasis = [[.63, 0], [.63, 1], [1, .02]];
      rail.targetBasis = [[0, 0], [0, 1], [.63, 0]];
    } else {
      fanAsset.targetBasis = [[.02, .65], [1, .65], [0, 1]];
      rail.targetBasis = [[.02, 0], [1, 0], [.02, .65]];
    }
    if (profile.radiator.side) {
      add(cooler, bounds, { ...base, ...profile.radiator.side, sourceCutout: undefined, vertical: front }, "radiator-fans");
    } else {
      // The metal sidewall hides most of the fan faces in the side-on view.
      const [x, y, w, h] = bounds;
      add(cooler, front ? [x, y, w * .63, h] : [x + w * .02, y, w * .98, h * .65], rail, "radiator");
      add(cooler, bounds, fanAsset, "radiator-fans");
    }
    tubes = { mount: front ? "front" : "top",
      start: front ? [345, 68] : [43 + length - 10, 52],
      end: [socketX + pw / 2 - 5, socketY + ph * .18] };
    add(cooler, [socketX - pw / 2, socketY - ph / 2, pw, ph],
      { ...base, ...profile.pump, sourceCutout: profile.pump.src ? undefined : base.sourceCutout }, "cooler-block");
  } else if (cooler) {
    const air = assets[cooler.id] || (profile && { ...profile,
      ...(profile.useCutout ? { cutout: PHOTO_CUTOUTS[cooler.id] }
        : { sourceCutout: PHOTO_CUTOUTS[cooler.id] }) });
    const lowProfile = /(?:nh-l9|axp90|alpine|wraith|i30|meorb|e97379)/i.test(cooler.id);
    const width = lowProfile ? 95 : 125;
    const height = lowProfile ? 95 : 120;
    add(cooler, [socketX - width / 2, socketY - height / 2, width, height], air, "cooler-block");
  }
  if (gpu) {
    const profile = assets[gpu.id] || PART_MOUNT_FACES[gpu.id];
    if (profile || !selection.case) {
      const width = Math.min((gpu.lengthMm || 300) * CASE_DEPTH_SCALE, 397);
      add(gpu, [43, layout.gpuY, width, profile ? gpu.thicknessMm || 48 : 122],
        profile || generic(gpu), "graphics-card");
    }
  }
  if (showHiddenParts) {
    const psuPhoto = PART_MOUNT_FACES[selection.psu?.id] || photos[selection.psu?.id];
    if (psuPhoto) add(selection.psu, [42, 380, 150, 65],
      psuPhoto, "psu-cutaway");
    let nvme = 0, sata = 0;
    for (const drive of selection.storage || []) {
      const photo = PART_MOUNT_FACES[drive.id] || photos[drive.id];
      if (!photo) continue;
      const isSata = /SATA/i.test(drive.spec);
      const bounds = isSata ? [228 + (sata % 2) * 78, 377 + Math.floor(sata++ / 2) * 29, 72, 44]
        : [126, 225 + nvme++ * 37, 80, 22];
      add(drive, bounds, { ...photo, cutout: PART_MOUNT_FACES[drive.id]?.cutout }, "drive-cutaway");
    }
  }
  return { layers, tubes };
}

function drawCoolerTubes(context, { mount, start: [sx, sy], end: [ex, ey] }) {
  context.save();
  context.lineCap = "round";
  for (const offset of [0, 11]) {
    context.beginPath();
    context.moveTo(sx - offset, sy);
    context.bezierCurveTo(mount === "front" ? sx - 65 : Math.min(412, sx + 32) - offset,
      sy + 68, ex + 65, ey + 49 - offset, ex, ey + 12 - offset);
    for (const [color, width] of [["#0d0e10", 10], ["#2a2c2f", 7], ["#3c3e41", 2]]) {
      context.strokeStyle = color;
      context.lineWidth = width;
      context.stroke();
    }
  }
  context.restore();
}

function projectCasePlane(context, caseLayer, [[ox, oy], [rx, ry], [bx, by]], spanX, spanY) {
  const [x, y, width, height] = caseLayer.frame;
  const [left, top, cropWidth, cropHeight] = caseLayer.asset.cutout?.[0] || [0, 0, 1, 1];
  const rawWidth = width / cropWidth;
  const rawHeight = height / cropHeight;
  context.transform((rx - ox) * rawWidth / spanX, (ry - oy) * rawHeight / spanX,
    (bx - ox) * rawWidth / spanY, (by - oy) * rawHeight / spanY,
    x + (ox - left) * rawWidth, y + (oy - top) * rawHeight);
}

function drawBuildScene(canvas, caseLayer, plane, estimated, layers, tubes, pump) {
  let frame;
  if (caseLayer) {
    frame = caseLayer.frame;
  } else {
    frame = sceneFrame(layers);
    if (tubes) frame[2] = Math.max(frame[2], tubes.start[0] + 30 - frame[0]);
  }
  const context = framePreviewCanvas(canvas, frame);
  const projection = context.getTransform();
  const gpuMount = caseLayer?.asset.gpuMount;
  if (caseLayer) {
    const [x, y, width, height] = caseLayer.frame;
    context.save();
    if (estimated) context.globalAlpha = .52;
    drawPreviewLayer(context, caseLayer);
    context.restore();
    if (caseLayer.asset.partBrightness) {
      context.filter = "brightness(" + caseLayer.asset.partBrightness + ")";
    }
    if (plane) {
      projectCasePlane(context, caseLayer, plane, 244, 305);
      context.translate(-44, -55);
    } else if (estimated) {
      const [partsX, partsY, partsWidth, partsHeight] = sceneFrame(layers);
      const [innerX, innerY, innerWidth] = containPhoto(partsWidth, partsHeight,
        [x + width * .16, y + height * .15, width * .68, height * .70]);
      const scale = innerWidth / partsWidth;
      context.translate(innerX, innerY);
      context.scale(scale, scale);
      context.translate(-partsX, -partsY);
    }
  }
  for (const layer of layers) {
    if (tubes && layer.component === "cooler-block") drawCoolerTubes(context, tubes);
    if (layer.component?.endsWith("-cutaway")) {
      context.save();
      const [x, y, width, height] = layer.frame;
      context.fillStyle = "rgba(18, 23, 23, .88)";
      context.fillRect(x - 3, y - 3, width + 6, height + 6);
      context.setLineDash([3, 3]);
      context.strokeStyle = "#9bafaa";
      context.lineWidth = .75;
      context.strokeRect(x - 3, y - 3, width + 6, height + 6);
      context.restore();
    }
    if (gpuMount && layer.part.cat === "gpu") {
      context.save();
      context.setTransform(projection);
      projectCasePlane(context, caseLayer, gpuMount.plane, gpuMount.spanMm, 100);
      drawPreviewLayer(context, { ...layer, frame: [0, 0, layer.part.lengthMm, layer.frame[3]] });
      context.restore();
      continue;
    }
    drawPreviewLayer(context, layer);
  }
}

function frameProductPhoto(part, photo, image) {
  const crop = photo.trim || PHOTO_CUTOUTS[part.id]?.[0];
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
  const references = document.getElementById("preview-references");
  const caseSelect = document.getElementById("preview-case");
  const gpuSelect = document.getElementById("preview-gpu");
  const cpuToggle = document.getElementById("preview-hide-cooler");
  const cutawayToggle = document.getElementById("preview-cutaway");
  const subjectSelect = document.getElementById("preview-subject");
  let revision = 0;
  let activeSelection;
  let activeParts = "";

  function fitPreviewHeight() {
    if (canvas.hidden || getComputedStyle(stage).overflowY !== "auto") return;
    const bayOffset = bay.getBoundingClientRect().top - stage.getBoundingClientRect().top + stage.scrollTop;
    const { paddingTop, paddingBottom } = getComputedStyle(bay);
    const available = stage.clientHeight - bayOffset - parseFloat(paddingTop) - parseFloat(paddingBottom)
      - references.offsetHeight - (references.hidden ? 0 : 12) - 18;
    canvas.style.setProperty("--preview-height", Math.max(180, Math.floor(available)) + "px");
  }
  const layoutObserver = new ResizeObserver(fitPreviewHeight);
  for (const element of [stage, caption, controls, subjectSelect.parentElement, references]) layoutObserver.observe(element);

  for (const [select, ids] of [[caseSelect, CASE_VARIANTS], [gpuSelect, GPU_VARIANTS]]) {
    ids.forEach((id) => select.add(new Option(lookupPart(id).short, id)));
    select.addEventListener("change", () => seatPart(select.value));
  }

  cpuToggle.addEventListener("change", () => renderPreview(activeSelection));
  cutawayToggle.addEventListener("change", () => renderPreview(activeSelection));
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
    const partIds = selectedParts.map(({ id }) => id).join(" ");
    const focusId = partIds === activeParts ? subjectSelect.value : "";
    activeParts = partIds;
    const photoChoices = [...new Map(selectedParts.filter((part) => photos[part.id])
      .map((part) => [part.id, part])).values()];
    const focus = photoChoices.find((part) => part.id === focusId);
    const photoSubject = focus || (selectedParts.length === 1 ? photoChoices[0] : null);
    subjectSelect.replaceChildren(new Option("Build", ""), ...photoChoices.map(
      (part) => new Option(part.name, part.id)));
    subjectSelect.value = focus?.id || "";
    subjectSelect.parentElement.hidden = selectedParts.length < 2 || !photoChoices.length;

    const caseId = cse?.id === "case-903" ? CASE_VARIANTS[0] : cse?.id;
    const caseAsset = assets[caseId];
    const casePhoto = photos[cse?.id];
    const interiorPhoto = CASE_INTERIOR_PHOTOS[caseId];
    const caseView = caseAsset || interiorPhoto || casePhoto;
    const canHideCooler = Boolean(assets[cpu?.id] && cooler && board?.socket === cpu.socket);
    caseSelect.parentElement.hidden = Boolean(photoSubject || !caseAsset);
    gpuSelect.parentElement.hidden = Boolean(photoSubject || !caseAsset);
    cpuToggle.parentElement.hidden = Boolean(photoSubject || !canHideCooler);
    cutawayToggle.parentElement.hidden = Boolean(photoSubject || (!selection.psu && !selection.storage?.length));
    controls.hidden = Boolean(photoSubject || (!caseAsset && !canHideCooler && cutawayToggle.parentElement.hidden));
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
      const vectorCase = caseId === "case-lian-li-vector-v100r" || caseId === "case-lian-li-vector-v100r-mini";
      const h5Flow = caseId === "case-h5" || caseId === "case-nzxt-h5-flow-2024";
      const topRadiator = cse?.radiatorTopMm ?? (caseAsset || vectorCase || caseId === "case-montech-xr" ? 360
        : h5Flow || caseId === "case-fractal-design-north" ? 240
        : 420);
      const radiatorLimits = { top: topRadiator, front: cse?.radiatorFrontMm || 0 };
      const { layers, tubes } = previewLayers(selection, assets, photos, cpuToggle.checked, radiatorLimits, cutawayToggle.checked);
      const [preferredCaseImage, ...images] = await Promise.all([
        caseView ? loadCatalogImage(caseView.src, Boolean(CASE_PHOTO_PLANES[caseId])) : null,
        ...layers.map(({ asset }) => loadPreviewImage(asset.src))
      ]);
      if (currentRevision !== revision) return;

      let caseImage = preferredCaseImage;
      let renderedCase = caseView;
      if (!caseImage && casePhoto && casePhoto !== caseView && !interiorPhoto?.straightOn) {
        caseImage = await loadCatalogImage(casePhoto.src, Boolean(CASE_PHOTO_PLANES[caseId]));
        renderedCase = casePhoto;
        if (currentRevision !== revision) return;
      }
      const sidePhoto = renderedCase === caseAsset;
      const plane = renderedCase?.plane || CASE_PHOTO_PLANES[caseId];
      let caseLayer;
      if (caseImage) {
        caseLayer = sidePhoto ? framePreviewLayer(renderedCase, caseImage, [0, 0, CASE_WIDTH, CASE_HEIGHT])
          : frameProductPhoto(cse, renderedCase, caseImage);
        hasPhotoBackdrop = !sidePhoto;
        shown.set(cse.id, { part: cse, credit: renderedCase.credit });
      }
      const visibleLayers = layers.flatMap(({ part, asset, bounds, component }, index) => {
        if (!images[index]) return [];
        shown.set(part.id, { part, credit: asset.credit });
        return [{ ...framePreviewLayer(asset, images[index], bounds), part, component }];
      });
      showTubes = Boolean(tubes && visibleLayers.some(l => l.component === "cooler-block")
        && visibleLayers.some(l => l.component === "radiator-fans"));
      if (caseLayer || visibleLayers.length) {
        const estimated = Boolean(caseLayer && !sidePhoto && !plane && visibleLayers.length);
        drawBuildScene(canvas, caseLayer, plane, estimated, visibleLayers, showTubes ? tubes : null, assets[cooler?.id]);
        const names = [...shown.values()].map(({ part }) => part.name).join(", ");
        if (estimated) caption.textContent = "Case and parts shown together with estimated mounting positions.";
        else if (!caseLayer && interiorPhoto?.straightOn) {
          caption.textContent = "Parts layout. The straight-on case photo couldn’t load.";
        } else if (caseLayer && renderedCase?.straightOn && visibleLayers.length) {
          caption.textContent = "Straight-on side view from product photos. Mounting positions are approximate.";
        } else if (caseLayer && visibleLayers.length) {
          caption.textContent = "Build from product photos. Scale, angles, and mounting positions are approximate.";
        } else if (caseLayer) caption.textContent = "Case and selected part photos.";
        else caption.textContent = "Parts layout from product photos. Mounting positions are approximate.";
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
    if (canvas.hidden) {
      if (!mainPhoto) caption.textContent = "Selected part photos";
      message.textContent = mainPhoto
        ? "This product photo couldn’t load."
        : "Photo availability for your build is shown below.";
    }

    const cpuCovered = !mainPhoto && cpu && cooler && !cpuToggle.checked && shown.has(cooler.id);
    const notices = [];
    if (showTubes) notices.push("Tube routing is approximate.");
    if (cpuCovered) notices.push(cpu.short + " is under the cooler.");
    if (!mainPhoto && cutawayToggle.checked && (selection.psu || selection.storage?.length)) {
      notices.push("Cutaway shows the PSU and drives beneath covers; their positions are approximate.");
    }
    if (!mainPhoto && cse && gpu && !shown.has(gpu.id) && photos[gpu.id]) {
      notices.push("Graphics card product photo below.");
    }
    const hiddenParts = new Set(cpuCovered ? [cpu.id] : []);
    if (!mainPhoto && !cutawayToggle.checked) {
      for (const part of [selection.psu, ...(selection.storage || [])].filter(Boolean)) hiddenParts.add(part.id);
      if (selection.psu || selection.storage?.length) notices.push("PSU and drives are behind covers. Turn on the cutaway to see them.");
    }
    const referenceParts = selectedParts.filter((part) => !shown.has(part.id) && !hiddenParts.has(part.id));
    coverage.textContent = notices.join(" ");
    coverage.hidden = !notices.length;
    if (!photoSubject || !shown.size) renderReferences(referenceParts);
    fitPreviewHeight();
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
