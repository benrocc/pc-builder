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
// Rear-top, front-top, rear-bottom, and front-bottom of the motherboard footprint.
// selected case photos. Points use the original image's normalized coordinates.
const CASE_PHOTO_PLANES = {
  "case-montech-xr": [[0.25,0.3],[0.53,0.225],[0.25,0.695],[0.53,0.77]],
  "case-phanteks-xt-pro": [[0.285,0.29],[0.58,0.19],[0.285,0.74],[0.58,0.84]],
  "case-lian-li-vector-v100r": [[0.29,0.31],[0.62,0.23],[0.29,0.73],[0.62,0.81]],
  "case-lian-li-o11-vision-compact": [[0.33,0.35],[0.61,0.25],[0.33,0.79],[0.61,0.89]],
  "case-nzxt-h5-flow-2024": [[0.3,0.255],[0.6,0.22],[0.3,0.61],[0.6,0.645]],
  "case-lian-li-o11-dynamic-mini-v2": [[0.315,0.28],[0.625,0.19],[0.315,0.77],[0.625,0.86]],
  "case-lian-li-o11d-evo-rgb": [[0.29,0.305],[0.56,0.24],[0.29,0.79],[0.56,0.855]],
  "case-corsair-3500x-rs-r-argb": [[0.34,0.29],[0.6,0.245],[0.34,0.715],[0.6,0.76]],
  "case-nzxt-h9-flow-2025": [[0.28,0.37],[0.54,0.29],[0.28,0.73],[0.54,0.81]],
  "case-lian-li-lancool-216": [[0.35,0.32],[0.505,0.265],[0.35,0.66],[0.505,0.715]],
  "case-fractal-design-north": [[0.365,0.255],[0.52,0.19],[0.365,0.735],[0.52,0.8]],
  "case-corsair-frame-4000d-rs-argb": [[0.34,0.23],[0.475,0.165],[0.34,0.675],[0.475,0.74]],
  "case-phanteks-eclipse-g370a": [[0.375,0.36],[0.54,0.31],[0.375,0.665],[0.54,0.715]],
  "case-phanteks-xt-pro-ultra": [[0.38,0.328],[0.55,0.268],[0.38,0.657],[0.55,0.717]],
  "case-lian-li-o11-dynamic-mini-v2-flow": [[0.295,0.285],[0.52,0.235],[0.295,0.805],[0.52,0.855]],
  "case-corsair-4000d-airflow": [[0.405,0.275],[0.475,0.223],[0.405,0.654],[0.475,0.706]],
  "case-lian-li-lancool-217": [[0.378,0.305],[0.537,0.252],[0.378,0.678],[0.537,0.731]],
  "case-lian-li-lancool-207": [[0.385,0.28],[0.47,0.248],[0.385,0.734],[0.47,0.766]],
  "case-fractal-design-pop-xl-air": [[0.34,0.285],[0.505,0.217],[0.34,0.735],[0.505,0.803]],
  "case-lian-li-o11-dynamic-evo-xl": [[0.297,0.257],[0.54,0.186],[0.297,0.765],[0.54,0.836]],
  "case-lian-li-lancool-216-rgb": [[0.378,0.368],[0.51,0.322],[0.378,0.699],[0.51,0.745]],
  "case-nzxt-h3-flow": [[0.36,0.38],[0.55,0.27],[0.36,0.745],[0.55,0.855]],
  "case-lian-li-vector-v100": [[0.278,0.274],[0.596,0.195],[0.278,0.779],[0.596,0.858]],
  "case-montech-air-903-base": [[0.375,0.292],[0.493,0.23],[0.375,0.708],[0.493,0.77]],
  "case-corsair-frame-4000d": [[0.34,0.23],[0.475,0.165],[0.34,0.675],[0.475,0.74]],
  "case-nzxt-h9-flow-rgb-2025": [[0.36,0.352],[0.544,0.273],[0.36,0.779],[0.544,0.858]],
  "case-corsair-3500x": [[0.293,0.22],[0.548,0.171],[0.293,0.681],[0.548,0.73]],
  "case-fractal-design-pop-air": [[0.322,0.26],[0.5,0.2],[0.322,0.73],[0.5,0.79]],
  "case-antec-c8": [[0.302,0.259],[0.542,0.212],[0.302,0.819],[0.542,0.866]],
  "case-deepcool-cg530-4f": [[0.302,0.329],[0.533,0.207],[0.302,0.8],[0.533,0.922]]
};
const CASE_INTERIOR_PHOTOS = {
  "case-corsair-4000d-airflow": {
    src: "img/cases/corsair-4000d-airflow-side.webp",
    credit: "https://www.corsair.com/ww/en/p/pc-cases/cc-9011200-ww/40",
    trim: [0, 0, 1, 1],
    plane: [[.084483, .110749], [.57931, .110749], [.084483, .69544], [.57931, .69544]],
    straightOn: true,
    partBrightness: .90
  },
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
      image.src = typeof LOCAL_RENDER_IMAGES !== "undefined" ? LOCAL_RENDER_IMAGES[src] || src : src;
    });
    previewImages.set(src, pending);
    pending.then((image) => { if (!image) previewImages.delete(src); });
  }
  return previewImages.get(src);
}

async function loadCatalogImage(src, preserveThumbnailFrame = false) {
  if (!src.startsWith("https:") || (typeof LOCAL_RENDER_IMAGES !== "undefined" && LOCAL_RENDER_IMAGES[src])) return loadPreviewImage(src);
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
  if (asset.quad) {
    const sample = quadProjector(asset.quad);
    warpPhoto(context, image, (u, v) => {
      const point = sample(u, v);
      return [point[0] * image.naturalWidth, point[1] * image.naturalHeight];
    }, (u, v) => [u, v], 10);
  } else if (asset.basis) {
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
  const generic = (part) => BOARD_PREVIEW_FACES[part?.id] || catalogPreview(part, photos);
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

function estimatedCasePlane(caseLayer, cse) {
  const [left, top, width, height] = caseLayer.asset.cutout?.[0] || [0, 0, 1, 1];
  const rear = left + width * .19, front = left + width * .67;
  const upper = top + height * .18, lower = top + height * .71;
  const pitch = height * .035;
  const plane = [[rear, upper + pitch], [front, upper], [rear, lower - pitch], [front, lower]];
  const form = /MicroATX/i.test(cse.spec) ? "matx" : /Mini ITX/i.test(cse.spec) ? "itx"
    : ["eatx", "atx", "matx", "itx"].find(value => (cse.form || []).includes(value));
  plane.span = BOARD_SIZES[form] || BOARD_SIZES.atx;
  return plane;
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
    if (plane?.length === 4 && !quadProjector(plane).affine) {
      drawPerspectiveAssembly(context, caseLayer, plane, layers, tubes);
      return;
    }
    if (plane) {
      projectCasePlane(context, caseLayer, plane, ...(plane.span || [244, 305]));
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

function drawPerspectiveAssembly(context, caseLayer, plane, layers, tubes) {
  const bounds = sceneFrame(layers);
  const x0 = Math.min(0, bounds[0]), y0 = Math.min(0, bounds[1]);
  const width = Math.max(445, bounds[0] + bounds[2]) - x0;
  const height = Math.max(455, bounds[1] + bounds[3]) - y0;
  const sourceCanvas = document.createElement("canvas");
  const sourceContext = framePreviewCanvas(sourceCanvas, [x0, y0, width, height]);
  for (const layer of layers) {
    if (tubes && layer.component === "cooler-block") drawCoolerTubes(sourceContext, tubes);
    drawPreviewLayer(sourceContext, layer);
  }
  const project = quadProjector(plane);
  const [spanX, spanY] = plane.span || [244, 305];
  const [fx, fy, fw, fh] = caseLayer.frame;
  const [left, top, cropW, cropH] = caseLayer.asset.cutout?.[0] || [0, 0, 1, 1];
  const destination = (u, v) => {
    const [x, y] = project((x0 + u * width - 44) / spanX, (y0 + v * height - 55) / spanY);
    return [fx + (x - left) * fw / cropW, fy + (y - top) * fh / cropH];
  };
  const corners = layers.flatMap(layer => {
    const [x, y, w, h] = layer.frame;
    return [[x,y],[x+w,y],[x,y+h],[x+w,y+h]].map(([px,py]) => destination((px-x0)/width,(py-y0)/height));
  });
  const minX = Math.min(...corners.map(p => p[0])), maxX = Math.max(...corners.map(p => p[0]));
  const minY = Math.min(...corners.map(p => p[1])), maxY = Math.max(...corners.map(p => p[1]));
  const insetX = fx + fw * .065, insetY = fy + fh * .11;
  const availableW = fw * .87, availableH = fh * .78;
  const fit = Math.min(1, availableW / (maxX - minX), availableH / (maxY - minY));
  const shiftX = Math.max(insetX - minX * fit, Math.min(0, insetX + availableW - maxX * fit));
  const shiftY = Math.max(insetY - minY * fit, Math.min(0, insetY + availableH - maxY * fit));
  warpPhoto(context, sourceCanvas,
    (u, v) => [u * sourceCanvas.width, v * sourceCanvas.height],
    (u, v) => {
      const [x, y] = destination(u, v);
      return [x * fit + shiftX, y * fit + shiftY];
    });
}

function frameProductPhoto(part, photo, image) {
  const crop = photo.trim || PHOTO_CUTOUTS[part.id]?.[0];
  // Catalog trims were measured on the square thumbnail. A non-square
  // original already has its own frame and uses its natural dimensions.
  let asset = photo;
  const loadedSource = typeof LOCAL_RENDER_IMAGES !== "undefined" ? LOCAL_RENDER_IMAGES[photo.src] || photo.src : photo.src;
  if (crop && (image.src === new URL(loadedSource, document.baseURI).href || image.naturalWidth === image.naturalHeight)) {
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

function createBuildPreview({ assets, photos, lookupPart, seatPart, selectParts, getSelection, renderReferences }) {
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
  const saveImage = document.getElementById("preview-save-image");
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
  saveImage.addEventListener("click", async () => {
    subjectSelect.value = "";
    await renderPreview(getSelection ? getSelection() : activeSelection);
    if (canvas.hidden || saveImage.disabled) return;
    try {
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
      if (!blob) throw new Error("Image encoding failed");
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "pc-build.png";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (error) {
      coverage.textContent = "The build image could not be saved. Reload the page and try again.";
      coverage.hidden = false;
    }
  });

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
    saveImage.disabled = true;
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
      let plane = renderedCase?.plane || CASE_PHOTO_PLANES[caseId];
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
        if (estimated) plane = estimatedCasePlane(caseLayer, cse);
        drawBuildScene(canvas, caseLayer, plane, estimated, visibleLayers, showTubes ? tubes : null, assets[cooler?.id]);
        const names = [...shown.values()].map(({ part }) => part.name).join(", ");
        if (estimated) caption.textContent = "Estimated cutaway layout from product photos. Verify dimensions and clearances for this case.";
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
    saveImage.disabled = canvas.hidden;
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
    const incomplete = mainPhoto ? selectedParts.some(part => !photos[part.id]) : referenceParts.length > 0;
    saveImage.disabled = canvas.hidden || incomplete;
    saveImage.title = incomplete ? "Some selected parts do not yet have an assembled-view image." : "Save the assembled build as one PNG image";
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
