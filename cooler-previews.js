// Actual cooler photos, with separate CPU-block and radiator sampling regions.
// Local images keep assembly previews available when a retailer blocks hotlinking.
const COOLER_PREVIEW_FACES = {
  "cooler-pa": {
    "src": "img/coolers/cooler-pa.webp",
    "credit": "https://www.thermalright.com/product/peerless-assassin-120-se/",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-arctic-liquid-freezer-iii-pro-360": {
    "src": "img/coolers/cooler-arctic-liquid-freezer-iii-pro-360.webp",
    "credit": "https://www.arctic.de/en/Liquid-Freezer-III-Pro-360/ACFRE00180/",
    "casing": "#222426",
    "pump": {
      "src": "img/coolers/arctic-lf3-pro-pump.webp",
      "region": [
        0.28515625,
        0.203125,
        0.46484375,
        0.47265625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.035156,
          0.363281
        ],
        [
          0.683594,
          0.394531
        ],
        [
          0.035156,
          0.628906
        ]
      ],
      "sizeMm": 360,
      "side": {
        "src": "img/coolers/arctic-lf3-pro-side.webp",
        "region": [
          0.126953125,
          0.28125,
          0.748046875,
          0.126953125
        ]
      }
    },
    "pumpMm": [
      91,
      91
    ],
    "stackMm": 65,
    "radiatorLengthMm": 398
  },
  "cooler-thermalright-aqua-elite-v3": {
    "src": "img/coolers/cooler-thermalright-aqua-elite-v3.webp",
    "credit": "https://www.thermalright.com/product/aqua-elite-360-v3/",
    "casing": "#222426",
    "pump": {
      "region": [
        0.007813,
        0.472656,
        0.238281,
        0.203125
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.042969,
          0.289063
        ],
        [
          0.957031,
          0.289063
        ],
        [
          0.042969,
          0.488281
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-cooler-master-hyper-212-black-edition": {
    "src": "img/coolers/cooler-cooler-master-hyper-212-black-edition.webp",
    "credit": "https://pcpartpicker.com/product/HyTPxr/cooler-master-hyper-212-black-edition-42-cfm-cpu-cooler-rr-212s-20pk-r1",
    "casing": "#222426",
    "basis": [
      [
        0.554688,
        0.164063
      ],
      [
        0.851563,
        0.246094
      ],
      [
        0.1875,
        0.25
      ]
    ]
  },
  "cooler-arctic-liquid-freezer-iii-pro-a-rgb-360": {
    "src": "img/coolers/cooler-arctic-liquid-freezer-iii-pro-a-rgb-360.webp",
    "credit": "https://pcpartpicker.com/product/Xh9nTW/arctic-liquid-freezer-iii-pro-a-rgb-360-77-cfm-liquid-cpu-cooler-acfre00184a",
    "casing": "#222426",
    "pump": {
      "region": [
        0.683594,
        0.40625,
        0.1875,
        0.199219
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.015625,
          0.367188
        ],
        [
          0.734375,
          0.367188
        ],
        [
          0.015625,
          0.636719
        ]
      ],
      "sizeMm": 360
    },
    "pumpMm": [
      91,
      108.5
    ],
    "stackMm": 65,
    "radiatorLengthMm": 398
  },
  "cooler-thermalright-assassin-x-120-refined-se": {
    "src": "img/coolers/cooler-thermalright-assassin-x-120-refined-se.webp",
    "credit": "https://pcpartpicker.com/product/q6H7YJ/thermalright-assassin-x-120-refined-se-6617-cfm-cpu-cooler-ax120-se-d3",
    "casing": "#222426",
    "basis": [
      [
        0.4375,
        0.03125
      ],
      [
        0.925781,
        0.214844
      ],
      [
        0.085938,
        0.261719
      ]
    ]
  },
  "cooler-thermalright-phantom-spirit-120-se-argb": {
    "src": "img/coolers/cooler-thermalright-phantom-spirit-120-se-argb.webp",
    "credit": "https://pcpartpicker.com/product/MzMMnQ/thermalright-phantom-spirit-120-se-argb-6617-cfm-cpu-cooler-ps120se-argb",
    "casing": "#222426",
    "basis": [
      [
        0.441406,
        0.027344
      ],
      [
        0.945313,
        0.238281
      ],
      [
        0.078125,
        0.355469
      ]
    ]
  },
  "cooler-noctua-nh-d15-chromax-black": {
    "src": "img/coolers/cooler-noctua-nh-d15-chromax-black.webp",
    "credit": "https://pcpartpicker.com/product/84MTwP/noctua-nh-d15-chromaxblack-8252-cfm-cpu-cooler-nh-d15-chromaxblack",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-corsair-nautilus-360-rs-argb": {
    "src": "img/coolers/cooler-corsair-nautilus-360-rs-argb.webp",
    "credit": "https://pcpartpicker.com/product/DhsV3C/corsair-nautilus-360-rs-argb-7437-cfm-liquid-cpu-cooler-cw-9060093-ww",
    "casing": "#222426",
    "pump": {
      "region": [
        0.300781,
        0.472656,
        0.199219,
        0.203125
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.117188,
          0.347656
        ],
        [
          0.820313,
          0.347656
        ],
        [
          0.117188,
          0.625
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-thermalright-phantom-spirit-120-se": {
    "src": "img/coolers/cooler-thermalright-phantom-spirit-120-se.webp",
    "credit": "https://pcpartpicker.com/product/GpbRsY/thermalright-phantom-spirit-120-se-6617-cfm-cpu-cooler-ps120se",
    "casing": "#222426",
    "basis": [
      [
        0.4375,
        0.027344
      ],
      [
        0.941406,
        0.246094
      ],
      [
        0.078125,
        0.347656
      ]
    ]
  },
  "cooler-corsair-nautilus-360-rs-lcd": {
    "src": "img/coolers/cooler-corsair-nautilus-360-rs-lcd.webp",
    "credit": "https://pcpartpicker.com/product/wZrp99/corsair-nautilus-360-rs-lcd-728-cfm-liquid-cpu-cooler-cw-9061033-ww",
    "casing": "#222426",
    "pump": {
      "region": [
        0.265625,
        0.503906,
        0.21875,
        0.21875
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.058594,
          0.3125
        ],
        [
          0.855469,
          0.335938
        ],
        [
          0.058594,
          0.628906
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-asus-rog-ryuo-iv-slc-360-argb": {
    "src": "img/coolers/cooler-asus-rog-ryuo-iv-slc-360-argb.webp",
    "credit": "https://pcpartpicker.com/product/HJTFf7/asus-rog-ryuo-iv-slc-360-argb-7144-cfm-liquid-cpu-cooler-90rc0151-b0eay0",
    "casing": "#222426",
    "pump": {
      "region": [
        0.296875,
        0.621094,
        0.34375,
        0.300781
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.058594,
          0.113281
        ],
        [
          0.9375,
          0.113281
        ],
        [
          0.058594,
          0.421875
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-thermalright-peerless-assassin-120-se-whit": {
    "src": "img/coolers/cooler-thermalright-peerless-assassin-120-se-whit.webp",
    "credit": "https://pcpartpicker.com/product/xMLFf7/thermalright-peerless-assassin-120-se-white-argb-6617-cfm-cpu-cooler-pa120-se-white-argb",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-noctua-nh-d15": {
    "src": "img/coolers/cooler-noctua-nh-d15.webp",
    "credit": "https://pcpartpicker.com/product/4vzv6h/noctua-nh-d15-825-cfm-cpu-cooler-nh-d15",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-lian-li-hydroshift-ii-oled-curved-360tl": {
    "src": "img/coolers/cooler-lian-li-hydroshift-ii-oled-curved-360tl.webp",
    "credit": "https://lian-li.com/product/hs2-oled-curved/",
    "customPhoto": true,
    "casing": "#222426",
    "pump": {
      "region": [
        0.267578,
        0.541016,
        0.304688,
        0.246094
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.048828,
          0.380859
        ],
        [
          0.828125,
          0.179688
        ],
        [
          0.203125,
          0.546875
        ]
      ],
      "sizeMm": 360
    },
    "pumpMm": [
      126.5,
      87.1
    ]
  },
  "cooler-asus-rog-strix-lc-360-rgb-white-edition": {
    "src": "img/coolers/cooler-asus-rog-strix-lc-360-rgb-white-edition.webp",
    "credit": "https://pcpartpicker.com/product/7RXYcf/asus-rog-strix-lc-360-rgb-white-edition-8095-cfm-liquid-cpu-cooler-rog-strix-lc-360-rgb-white",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.722656,
        0.460343,
        0.183594,
        0.26273
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.085938,
          0.267013
        ],
        [
          0.859375,
          0.048898
        ],
        [
          0.15625,
          0.604101
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-be-quiet-dark-rock-pro-5": {
    "src": "img/coolers/cooler-be-quiet-dark-rock-pro-5.webp",
    "credit": "https://pcpartpicker.com/product/LyyH99/be-quiet-dark-rock-pro-5-cpu-cooler-bk036",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-amd-wraith-prism": {
    "src": "img/coolers/cooler-amd-wraith-prism.webp",
    "credit": "https://pcpartpicker.com/product/3WfxFT/amd-wraith-prism-2800-cfm-cpu-cooler-199-999888",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-nzxt-kraken-elite-360-rgb-2024": {
    "src": "img/coolers/cooler-nzxt-kraken-elite-360-rgb-2024.webp",
    "credit": "https://pcpartpicker.com/product/HfNYcf/nzxt-kraken-elite-360-rgb-2024-7512-cfm-liquid-cpu-cooler-rl-kr36e-b2",
    "casing": "#222426",
    "pump": {
      "region": [
        0.597656,
        0.441406,
        0.144531,
        0.15625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.238281,
          0.421875
        ],
        [
          0.625,
          0.4375
        ],
        [
          0.238281,
          0.582031
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-cooler-master-hyper-212-spectrum-v3": {
    "src": "img/coolers/cooler-cooler-master-hyper-212-spectrum-v3.webp",
    "credit": "https://pcpartpicker.com/product/jgbRsY/cooler-master-hyper-212-spectrum-v3-7193-cfm-cpu-cooler-rr-s4na-17pa-r1",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-phantom-spirit-evo": {
    "src": "img/coolers/cooler-thermalright-phantom-spirit-evo.webp",
    "credit": "https://pcpartpicker.com/product/BRMMnQ/thermalright-phantom-spirit-evo-69-cfm-cpu-cooler-phantom-spirit-120-evo",
    "casing": "#222426",
    "basis": [
      [
        0.445313,
        0.027344
      ],
      [
        0.933594,
        0.21875
      ],
      [
        0.070313,
        0.320313
      ]
    ]
  },
  "cooler-arctic-freezer-36": {
    "src": "img/coolers/cooler-arctic-freezer-36.webp",
    "credit": "https://pcpartpicker.com/product/N6bRsY/arctic-freezer-36-cpu-cooler-acfre00123a",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-peerless-assassin-120-se-argb": {
    "src": "img/coolers/cooler-thermalright-peerless-assassin-120-se-argb.webp",
    "credit": "https://pcpartpicker.com/product/zyNxFT/thermalright-peerless-assassin-120-se-argb-6617-cfm-cpu-cooler-pa-120-se-argb",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-arctic-liquid-freezer-iii-pro": {
    "src": "img/coolers/cooler-arctic-liquid-freezer-iii-pro.webp",
    "credit": "https://www.arctic.de/en/Liquid-Freezer-III-Pro-360/ACFRE00180/",
    "casing": "#222426",
    "pump": {
      "src": "img/coolers/arctic-lf3-pro-pump.webp",
      "region": [
        0.28515625,
        0.203125,
        0.46484375,
        0.47265625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.066406,
          0.355469
        ],
        [
          0.664063,
          0.386719
        ],
        [
          0.066406,
          0.632813
        ]
      ],
      "sizeMm": 240
    },
    "pumpMm": [
      91,
      91
    ],
    "stackMm": 65,
    "radiatorLengthMm": 277
  },
  "cooler-nzxt-kraken-elite-360-2024": {
    "src": "img/coolers/cooler-nzxt-kraken-elite-360-2024.webp",
    "credit": "https://pcpartpicker.com/product/Ff3NnQ/nzxt-kraken-elite-360-2024-7347-cfm-liquid-cpu-cooler-rl-kn36e-b2",
    "casing": "#222426",
    "pump": {
      "region": [
        0.671875,
        0.4375,
        0.167969,
        0.167969
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.09375,
          0.390625
        ],
        [
          0.714844,
          0.414063
        ],
        [
          0.09375,
          0.609375
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-corsair-nautilus-240-rs-argb": {
    "src": "img/coolers/cooler-corsair-nautilus-240-rs-argb.webp",
    "credit": "https://pcpartpicker.com/product/MmV2FT/corsair-nautilus-240-rs-argb-7437-cfm-liquid-cpu-cooler-cw-9060092-ww",
    "casing": "#222426",
    "pump": {
      "region": [
        0.09375,
        0.488281,
        0.273438,
        0.265625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.152344,
          0.308594
        ],
        [
          0.742188,
          0.308594
        ],
        [
          0.152344,
          0.640625
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-corsair-icue-link-titan-360-rx-lcd": {
    "src": "img/coolers/cooler-corsair-icue-link-titan-360-rx-lcd.webp",
    "credit": "https://pcpartpicker.com/product/TtXV3C/corsair-icue-link-titan-360-rx-lcd-735-cfm-liquid-cpu-cooler-cw-9061023-ww",
    "casing": "#222426",
    "pump": {
      "region": [
        0.308594,
        0.480469,
        0.195313,
        0.195313
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.132813,
          0.355469
        ],
        [
          0.800781,
          0.378906
        ],
        [
          0.132813,
          0.605469
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-be-quiet-pure-rock-3": {
    "src": "img/coolers/cooler-be-quiet-pure-rock-3.webp",
    "credit": "https://pcpartpicker.com/product/tmDnTW/be-quiet-pure-rock-3-596-cfm-cpu-cooler-bk039",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-frozen-infinity-360-argb": {
    "src": "img/coolers/cooler-thermalright-frozen-infinity-360-argb.webp",
    "credit": "https://pcpartpicker.com/product/QnxxFT/thermalright-frozen-infinity-360-argb-689-cfm-liquid-cpu-cooler-frozen-infinity-360-black",
    "casing": "#222426",
    "pump": {
      "region": [
        0.726563,
        0.34375,
        0.175781,
        0.214844
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.03125,
          0.464844
        ],
        [
          0.816406,
          0.179688
        ],
        [
          0.152344,
          0.78125
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-noctua-nl-lc1-36": {
    "src": "img/coolers/cooler-noctua-nl-lc1-36.webp",
    "credit": "https://www.notebooksbilliger.de/noctua%2Bnl%2Blc1%2B36%2Baio%2Bwasserkhlung%2B924141",
    "casing": "#222426",
    "pump": {
      "src": "img/coolers/cooler-noctua-nl-lc1-24.webp",
      "region": [
        0.548828125,
        0.3828125,
        0.28515625,
        0.251953125
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.023438,
          0.410156
        ],
        [
          0.707031,
          0.410156
        ],
        [
          0.023438,
          0.671875
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-corsair-icue-link-titan-360-rx-rgb": {
    "src": "img/coolers/cooler-corsair-icue-link-titan-360-rx-rgb.webp",
    "credit": "https://pcpartpicker.com/product/fT6NnQ/corsair-icue-link-titan-360-rx-rgb-735-cfm-liquid-cpu-cooler-cw-9061018-ww",
    "casing": "#222426",
    "pump": {
      "region": [
        0.273438,
        0.480469,
        0.226563,
        0.207031
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.035156,
          0.320313
        ],
        [
          0.835938,
          0.320313
        ],
        [
          0.035156,
          0.640625
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-thermalright-axp90-x36": {
    "src": "img/coolers/cooler-thermalright-axp90-x36.webp",
    "credit": "https://pcpartpicker.com/product/8b92FT/thermalright-axp90-x36-4258-cfm-cpu-cooler-axp90-x36",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-assassin-x-se": {
    "src": "img/coolers/cooler-thermalright-assassin-x-se.webp",
    "credit": "https://pcpartpicker.com/product/8wZXsY/thermalright-assassin-x-se-3277-cfm-cpu-cooler-ax90se-v2",
    "casing": "#222426",
    "basis": [
      [
        0.433594,
        0.035156
      ],
      [
        0.929688,
        0.242188
      ],
      [
        0.070313,
        0.257813
      ]
    ]
  },
  "cooler-alphacool-eisbaer-pro-aurora": {
    "src": "img/coolers/cooler-alphacool-eisbaer-pro-aurora.webp",
    "credit": "https://pcpartpicker.com/product/DG3NnQ/alphacool-eisbaer-pro-aurora-907-cfm-liquid-cpu-cooler-11774",
    "casing": "#222426",
    "pump": {
      "region": [
        0.066406,
        0.53125,
        0.136719,
        0.15625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.046875,
          0.355469
        ],
        [
          0.882813,
          0.355469
        ],
        [
          0.046875,
          0.683594
        ]
      ],
      "sizeMm": 420
    }
  },
  "cooler-thermalright-assassin-x-120-r-digital-argb": {
    "src": "img/coolers/cooler-thermalright-assassin-x-120-r-digital-argb.webp",
    "credit": "https://pcpartpicker.com/product/tWbypg/thermalright-assassin-x-120-r-digital-argb-7084-cfm-cpu-cooler-assassin-x-120-r-digital-argb-black",
    "casing": "#222426",
    "basis": [
      [
        0.507813,
        0.03125
      ],
      [
        0.902344,
        0.226563
      ],
      [
        0.128906,
        0.21875
      ]
    ]
  },
  "cooler-noctua-nh-d15-g2-chromax-black": {
    "src": "img/coolers/cooler-noctua-nh-d15-g2-chromax-black.webp",
    "credit": "https://pcpartpicker.com/product/W8wD4D/noctua-nh-d15-g2-chromaxblack-9158-cfm-cpu-cooler-nh-d15-g2-chromaxblack",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-noctua-nh-l9a-am5": {
    "src": "img/coolers/cooler-noctua-nh-l9a-am5.webp",
    "credit": "https://pcpartpicker.com/product/qwrqqs/noctua-nh-l9a-am5-3384-cfm-cpu-cooler-nh-l9a-am5",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-be-quiet-silent-loop-3": {
    "src": "img/coolers/cooler-be-quiet-silent-loop-3.webp",
    "credit": "https://pcpartpicker.com/product/N3ZWGX/be-quiet-silent-loop-3-767-cfm-liquid-cpu-cooler-bw025",
    "casing": "#222426",
    "pump": {
      "region": [
        0.644531,
        0.496094,
        0.136719,
        0.164063
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.046875,
          0.433594
        ],
        [
          0.648438,
          0.433594
        ],
        [
          0.046875,
          0.671875
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-arctic-alpine-23-co": {
    "src": "img/coolers/cooler-arctic-alpine-23-co.webp",
    "credit": "https://pcpartpicker.com/product/wFt9TW/arctic-alpine-23-co-cpu-cooler-acalp00036a",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-assassin-x-refined-se-argb": {
    "src": "img/coolers/cooler-thermalright-assassin-x-refined-se-argb.webp",
    "credit": "https://pcpartpicker.com/product/jvjv6h/thermalright-assassin-x-refined-se-argb-cpu-cooler-ax120r-se-argb-d6-cad",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-be-quiet-pure-rock-pro-3": {
    "src": "img/coolers/cooler-be-quiet-pure-rock-pro-3.webp",
    "credit": "https://pcpartpicker.com/product/3cHp99/be-quiet-pure-rock-pro-3-596-cfm-cpu-cooler-bk042",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-asus-rog-ryujin-iii-360-argb-extreme": {
    "src": "img/coolers/cooler-asus-rog-ryujin-iii-360-argb-extreme.webp",
    "credit": "https://pcpartpicker.com/product/VxLdnQ/asus-rog-ryujin-iii-360-argb-extreme-8973-cfm-liquid-cpu-cooler-90rc0131-m0eay0",
    "casing": "#222426",
    "pump": {
      "region": [
        0.609375,
        0.445313,
        0.199219,
        0.164063
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.046875,
          0.394531
        ],
        [
          0.652344,
          0.394531
        ],
        [
          0.046875,
          0.617188
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-asus-rog-strix-lc-ii": {
    "src": "img/coolers/cooler-asus-rog-strix-lc-ii.webp",
    "credit": "https://pcpartpicker.com/product/XmvdnQ/asus-rog-strix-lc-ii-8095-cfm-liquid-cpu-cooler-rog-strix-lc-ii-360",
    "casing": "#222426",
    "pump": {
      "region": [
        0.007813,
        0.527344,
        0.34375,
        0.292969
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.183594,
          0.222656
        ],
        [
          0.9375,
          0.441406
        ],
        [
          0.117188,
          0.542969
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-msi-mag-coreliquid-a13": {
    "src": "img/coolers/cooler-msi-mag-coreliquid-a13.webp",
    "credit": "https://pcpartpicker.com/product/tWn9TW/msi-mag-coreliquid-a13-626-cfm-liquid-cpu-cooler-mag-coreliquid-a13-360",
    "casing": "#222426",
    "pump": {
      "region": [
        0.722656,
        0.476563,
        0.152344,
        0.167969
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.140625,
          0.394531
        ],
        [
          0.769531,
          0.394531
        ],
        [
          0.140625,
          0.597656
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-id-cooling-se-214-xt-v2-black": {
    "src": "img/coolers/cooler-id-cooling-se-214-xt-v2-black.webp",
    "credit": "https://pcpartpicker.com/product/pkBFf7/id-cooling-se-214-xt-v2-black-58-cfm-cpu-cooler-se-214-xt-v2-black",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-cooler-master-masterliquid-360l-core-argb": {
    "src": "img/coolers/cooler-cooler-master-masterliquid-360l-core-argb.webp",
    "credit": "https://pcpartpicker.com/product/jBrqqs/cooler-master-masterliquid-360l-core-argb-liquid-cpu-cooler-mlw-d36m-a18pz-r1",
    "casing": "#222426",
    "pump": {
      "region": [
        0.523438,
        0.59375,
        0.214844,
        0.191406
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.054688,
          0.351563
        ],
        [
          0.628906,
          0.257813
        ],
        [
          0.054688,
          0.628906
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-tryx-panorama-se-argb": {
    "src": "img/coolers/cooler-tryx-panorama-se-argb.webp",
    "credit": "https://pcpartpicker.com/product/ggtkcf/tryx-panorama-se-argb-6609-cfm-liquid-cpu-cooler-l-p360l-am3m-g0k",
    "casing": "#222426",
    "pump": {
      "region": [
        0.53125,
        0.460938,
        0.308594,
        0.242188
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.167969,
          0.371094
        ],
        [
          0.722656,
          0.371094
        ],
        [
          0.167969,
          0.578125
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-noctua-nl-lc1-42": {
    "src": "img/coolers/cooler-noctua-nl-lc1-42.webp",
    "credit": "https://ithardware.pl/testyirecenzje/noctua_nl_lc1_42_test_pierwsze_aio_noctua_nokaut-51714.html",
    "casing": "#222426",
    "pump": {
      "src": "img/coolers/cooler-noctua-nl-lc1-24.webp",
      "region": [
        0.548828125,
        0.3828125,
        0.28515625,
        0.251953125
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.085938,
          0.215278
        ],
        [
          0.933594,
          0.215278
        ],
        [
          0.085938,
          0.618056
        ]
      ],
      "sizeMm": 420
    }
  },
  "cooler-nzxt-kraken-240": {
    "src": "img/coolers/cooler-nzxt-kraken-240.webp",
    "credit": "https://pcpartpicker.com/product/LDqrxr/nzxt-kraken-240-7802-cfm-liquid-cpu-cooler-rl-kn240-b1",
    "casing": "#222426",
    "pump": {
      "region": [
        0.664063,
        0.503906,
        0.171875,
        0.171875
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.082031,
          0.332031
        ],
        [
          0.667969,
          0.359375
        ],
        [
          0.082031,
          0.65625
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-id-cooling-frozn-a620-pro-se": {
    "src": "img/coolers/cooler-id-cooling-frozn-a620-pro-se.webp",
    "credit": "https://pcpartpicker.com/product/MFvD4D/id-cooling-frozn-a620-pro-se-58-cfm-cpu-cooler-frozn-a620-pro-se",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-frozen-notte-argb": {
    "src": "img/coolers/cooler-thermalright-frozen-notte-argb.webp",
    "credit": "https://pcpartpicker.com/product/RD7scf/thermalright-frozen-notte-argb-7237-cfm-liquid-cpu-cooler-frozen-notte-360-black-argb-d1",
    "casing": "#222426",
    "pump": {
      "region": [
        0.753906,
        0.46875,
        0.167969,
        0.167969
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.070313,
          0.367188
        ],
        [
          0.828125,
          0.367188
        ],
        [
          0.070313,
          0.621094
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-cooler-master-i30": {
    "src": "img/coolers/cooler-cooler-master-i30.webp",
    "credit": "https://pcpartpicker.com/product/JKFKHx/cooler-master-i30-31-cfm-cpu-cooler-rh-i30-26fk-r1",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-lian-li-hydroshift-ii-lcd-s-360-cl": {
    "src": "img/coolers/cooler-lian-li-hydroshift-ii-lcd-s-360-cl.webp",
    "credit": "https://pcpartpicker.com/product/dsgZxr/lian-li-hydroshift-ii-lcd-s-360-cl-727-cfm-liquid-cpu-cooler-ghs2lcds36cw",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.546875,
        0.714844,
        0.191406,
        0.183594
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.304688,
          0.128906
        ],
        [
          0.304688,
          0.90625
        ],
        [
          0.101563,
          0.128906
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-msi-meg-coreliquid-s360": {
    "src": "img/coolers/cooler-msi-meg-coreliquid-s360.webp",
    "credit": "https://pcpartpicker.com/product/LGH7YJ/msi-meg-coreliquid-s360-562-cfm-liquid-cpu-cooler-meg-coreliquid-s360",
    "casing": "#222426",
    "pump": {
      "region": [
        0.703125,
        0.523438,
        0.210938,
        0.183594
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.039063,
          0.453125
        ],
        [
          0.789063,
          0.433594
        ],
        [
          0.039063,
          0.710938
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-noctua-nh-l9a-am5-chromax-black": {
    "src": "img/coolers/cooler-noctua-nh-l9a-am5-chromax-black.webp",
    "credit": "https://pcpartpicker.com/product/KNn9TW/noctua-nh-l9a-am5-chromaxblack-3384-cfm-cpu-cooler-nh-l9a-am5-chromaxblack",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-noctua-nh-u12a-chromax-black": {
    "src": "img/coolers/cooler-noctua-nh-u12a-chromax-black.webp",
    "credit": "https://pcpartpicker.com/product/HCgFf7/noctua-nh-u12a-chromaxblack-6009-cfm-cpu-cooler-nh-u12a-chromaxblack",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-noctua-nh-l9x65-chromax-black": {
    "src": "img/coolers/cooler-noctua-nh-l9x65-chromax-black.webp",
    "credit": "https://pcpartpicker.com/product/QvvD4D/noctua-nh-l9x65-chromaxblack-3384-cfm-cpu-cooler-nh-l9x65-chromaxblack",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-assassin-spirit-120-evo-dark": {
    "src": "img/coolers/cooler-thermalright-assassin-spirit-120-evo-dark.webp",
    "credit": "https://pcpartpicker.com/product/khJp99/thermalright-assassin-spirit-120-evo-dark-704-cfm-cpu-cooler-as120-evo-dark-d6-de",
    "casing": "#222426",
    "basis": [
      [
        0.417969,
        0.042969
      ],
      [
        0.921875,
        0.222656
      ],
      [
        0.042969,
        0.25
      ]
    ]
  },
  "cooler-lian-li-hydroshift-lcd-360s": {
    "src": "img/coolers/cooler-lian-li-hydroshift-lcd-360s.webp",
    "credit": "https://pcpartpicker.com/product/jL3NnQ/lian-li-hydroshift-lcd-360s-7314-cfm-liquid-cpu-cooler-hslcd36sb",
    "casing": "#222426",
    "pump": {
      "region": [
        0.542969,
        0.652344,
        0.132813,
        0.140625
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.363281,
          0.21875
        ],
        [
          0.285156,
          0.769531
        ],
        [
          0.546875,
          0.21875
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-nzxt-kraken-plus-360": {
    "src": "img/coolers/cooler-nzxt-kraken-plus-360.webp",
    "credit": "https://pcpartpicker.com/product/h6qNnQ/nzxt-kraken-plus-360-7347-cfm-liquid-cpu-cooler-rl-kn360-b2",
    "casing": "#222426",
    "pump": {
      "region": [
        0.664063,
        0.503906,
        0.15625,
        0.15625
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.039063,
          0.40625
        ],
        [
          0.726563,
          0.429688
        ],
        [
          0.039063,
          0.679688
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-nzxt-kraken-elite-420-rgb-2025": {
    "src": "img/coolers/cooler-nzxt-kraken-elite-420-rgb-2025.webp",
    "credit": "https://pcpartpicker.com/product/gdrp99/nzxt-kraken-elite-420-rgb-2025-9861-cfm-liquid-cpu-cooler-rl-kr42e-w2",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.660156,
        0.445313,
        0.175781,
        0.175781
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.09375,
          0.40625
        ],
        [
          0.6875,
          0.417969
        ],
        [
          0.09375,
          0.65625
        ]
      ],
      "sizeMm": 420
    }
  },
  "cooler-nzxt-kraken-plus-240-rgb": {
    "src": "img/coolers/cooler-nzxt-kraken-plus-240-rgb.webp",
    "credit": "https://pcpartpicker.com/product/JCFCmG/nzxt-kraken-plus-240-rgb-7505-cfm-liquid-cpu-cooler-rl-kr240-b2",
    "casing": "#222426",
    "pump": {
      "region": [
        0.601563,
        0.492188,
        0.179688,
        0.1875
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.128906,
          0.394531
        ],
        [
          0.636719,
          0.394531
        ],
        [
          0.128906,
          0.699219
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-arctic-freezer-36-a-rgb": {
    "src": "img/coolers/cooler-arctic-freezer-36-a-rgb.webp",
    "credit": "https://pcpartpicker.com/product/L9dG3C/arctic-freezer-36-a-rgb-cpu-cooler-acfre00124a",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-nzxt-kraken-elite-360-rgb": {
    "src": "img/coolers/cooler-nzxt-kraken-elite-360-rgb.webp",
    "credit": "https://pcpartpicker.com/product/pbKscf/nzxt-kraken-elite-360-rgb-7802-cfm-liquid-cpu-cooler-rl-kr36e-w1",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.699219,
        0.492188,
        0.148438,
        0.160156
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.085938,
          0.390625
        ],
        [
          0.742188,
          0.390625
        ],
        [
          0.085938,
          0.621094
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-cooler-master-masterliquid-240l-core-argb": {
    "src": "img/coolers/cooler-cooler-master-masterliquid-240l-core-argb.webp",
    "credit": "https://pcpartpicker.com/product/FRV2FT/cooler-master-masterliquid-240l-core-argb-liquid-cpu-cooler-mlw-d24m-a18pz-r1",
    "casing": "#222426",
    "pump": {
      "region": [
        0.527344,
        0.570313,
        0.203125,
        0.183594
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.035156,
          0.339844
        ],
        [
          0.632813,
          0.238281
        ],
        [
          0.035156,
          0.679688
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-noctua-nh-u12a": {
    "src": "img/coolers/cooler-noctua-nh-u12a.webp",
    "credit": "https://pcpartpicker.com/product/ZLtQzy/noctua-nh-u12a-6009-cfm-cpu-cooler-nh-u12a",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermalright-assassin-x-refined-se-rgb": {
    "src": "img/coolers/cooler-thermalright-assassin-x-refined-se-rgb.webp",
    "credit": "https://pcpartpicker.com/product/Js2WGX/thermalright-assassin-x-refined-se-argb-6617-cfm-cpu-cooler-ax120-refined-se-argb",
    "casing": "#222426",
    "basis": [
      [
        0.433594,
        0.019531
      ],
      [
        0.949219,
        0.242188
      ],
      [
        0.070313,
        0.269531
      ]
    ]
  },
  "cooler-lian-li-galahad-ii-lite-rgb": {
    "src": "img/coolers/cooler-lian-li-galahad-ii-lite-rgb.webp",
    "credit": "https://pcpartpicker.com/product/PKXMnQ/lian-li-galahad-ii-lite-rgb-79-cfm-liquid-cpu-cooler-ga2l36rb",
    "casing": "#222426",
    "pump": {
      "region": [
        0.664063,
        0.558594,
        0.253906,
        0.242188
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.046875,
          0.183594
        ],
        [
          0.941406,
          0.3125
        ],
        [
          0.046875,
          0.492188
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-noctua-nh-d15-g2": {
    "src": "img/coolers/cooler-noctua-nh-d15-g2.webp",
    "credit": "https://pcpartpicker.com/product/8c88TW/noctua-nh-d15-g2-9158-cfm-cpu-cooler-nh-d15-g2",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-intel-e97379-001": {
    "src": "img/coolers/cooler-intel-e97379-001.webp",
    "credit": "https://pcpartpicker.com/product/xm22FT/intel-e97379-001-cpu-cooler-e97379-001",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-nzxt-kraken-plus-240": {
    "src": "img/coolers/cooler-nzxt-kraken-plus-240.webp",
    "credit": "https://pcpartpicker.com/product/PyqNnQ/nzxt-kraken-plus-240-7347-cfm-liquid-cpu-cooler-rl-kn240-b2",
    "casing": "#222426",
    "pump": {
      "region": [
        0.570313,
        0.519531,
        0.183594,
        0.175781
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.085938,
          0.40625
        ],
        [
          0.648438,
          0.425781
        ],
        [
          0.085938,
          0.703125
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-cooler-master-elite": {
    "src": "img/coolers/cooler-cooler-master-elite.webp",
    "credit": "https://pcpartpicker.com/product/3ddMnQ/cooler-master-elite-842-cfm-liquid-cpu-cooler-elw-d24m-a21da-r1",
    "casing": "#222426",
    "pump": {
      "region": [
        0.535156,
        0.496094,
        0.191406,
        0.191406
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.207031,
          0.332031
        ],
        [
          0.667969,
          0.351563
        ],
        [
          0.207031,
          0.652344
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-deepcool-ak400": {
    "src": "img/coolers/cooler-deepcool-ak400.webp",
    "credit": "https://pcpartpicker.com/product/QPkWGX/deepcool-ak400-6647-cfm-cpu-cooler-r-ak400-bknnmn-g-1",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-thermaltake-meorb-ii": {
    "src": "img/coolers/cooler-thermaltake-meorb-ii.webp",
    "credit": "https://www.newegg.com/thermaltake-cl-p004-al08bl-a/p/N82E16835106252",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-corsair-nautilus-360-rs": {
    "src": "img/coolers/cooler-corsair-nautilus-360-rs.webp",
    "credit": "https://www.corsair.com/ww/en/p/cpu-coolers/cw-9060089-ww/nautilus-360-rs-liquid-cpu-cooler-cw-9060089-ww",
    "customPhoto": true,
    "casing": "#222426",
    "pump": {
      "region": [
        0.273438,
        0.470703,
        0.226563,
        0.222656
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.029297,
          0.306641
        ],
        [
          0.853516,
          0.333984
        ],
        [
          0.029297,
          0.611328
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-thermalright-axp90-x47": {
    "src": "img/coolers/cooler-thermalright-axp90-x47.webp",
    "credit": "https://pcpartpicker.com/product/RYFbt6/thermalright-axp90-x47-4258-cfm-cpu-cooler-axp90-x47-full",
    "casing": "#222426",
    "useCutout": true
  },
  "cooler-gamdias-aura-gl360-digital": {
    "src": "img/coolers/cooler-gamdias-aura-gl360-digital.webp",
    "credit": "https://pcpartpicker.com/product/2CKnTW/gamdias-aura-gl360-digital-7371-cfm-liquid-cpu-cooler-aura-gl360-digital-wh",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.730469,
        0.433594,
        0.195313,
        0.171875
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.097656,
          0.371094
        ],
        [
          0.785156,
          0.371094
        ],
        [
          0.097656,
          0.589844
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-thermalright-peerless-assassin-120-se-v3": {
    "src": "img/coolers/cooler-thermalright-peerless-assassin-120-se-v3.webp",
    "credit": "https://pcpartpicker.com/product/vZfV3C/thermalright-peerless-assassin-120-se-v3-7084-cfm-cpu-cooler-pa120se-v3",
    "casing": "#222426",
    "basis": [
      [
        0.433594,
        0.027344
      ],
      [
        0.941406,
        0.242188
      ],
      [
        0.078125,
        0.328125
      ]
    ]
  },
  "cooler-thermalright-aqua-elite-argb-v4": {
    "src": "img/coolers/cooler-thermalright-aqua-elite-argb-v4.webp",
    "credit": "https://pcpartpicker.com/product/6RVfrH/thermalright-aqua-elite-argb-v4-6617-cfm-liquid-cpu-cooler-aqua-elite-360-argb-v4",
    "casing": "#222426",
    "pump": {
      "region": [
        0.730469,
        0.480469,
        0.1875,
        0.167969
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.050781,
          0.378906
        ],
        [
          0.785156,
          0.378906
        ],
        [
          0.050781,
          0.582031
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-noctua-nl-lc1-24": {
    "src": "img/coolers/cooler-noctua-nl-lc1-24.webp",
    "credit": "https://www.noctua.at/en/products/nl-lc1-24",
    "customPhoto": true,
    "casing": "#222426",
    "pump": {
      "region": [
        0.548828,
        0.382813,
        0.285156,
        0.251953
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.087891,
          0.337891
        ],
        [
          0.597656,
          0.349609
        ],
        [
          0.087891,
          0.662109
        ]
      ],
      "sizeMm": 240
    }
  },
  "cooler-ek-ek-nucleus-aio-cr360-lux-d-rgb": {
    "src": "img/coolers/cooler-ek-ek-nucleus-aio-cr360-lux-d-rgb.webp",
    "credit": "https://pcpartpicker.com/product/tQ3gXL/ek-ek-nucleus-aio-cr360-lux-d-rgb-72-cfm-liquid-cpu-cooler-ek-nucleus-aio-cr360-lux-d-rgb",
    "casing": "#222426",
    "pump": {
      "region": [
        0.652344,
        0.558594,
        0.210938,
        0.183594
      ],
      "round": true
    },
    "radiator": {
      "basis": [
        [
          0.105469,
          0.480469
        ],
        [
          0.808594,
          0.253906
        ],
        [
          0.183594,
          0.671875
        ]
      ],
      "sizeMm": 360
    }
  },
  "cooler-lian-li-galahad-ii-lcd": {
    "src": "img/coolers/cooler-lian-li-galahad-ii-lcd.webp",
    "credit": "https://pcpartpicker.com/product/ft4Zxr/lian-li-galahad-ii-lcd-897-cfm-liquid-cpu-cooler-ga2alcd28w",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.25,
        0.472656,
        0.144531,
        0.140625
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.402344,
          0.378906
        ],
        [
          0.8125,
          0.378906
        ],
        [
          0.402344,
          0.617188
        ]
      ],
      "sizeMm": 280
    }
  },
  "cooler-asus-rog-ryujin-iii-argb-extreme": {
    "src": "img/coolers/cooler-asus-rog-ryujin-iii-argb-extreme.webp",
    "credit": "https://pcpartpicker.com/product/88MXsY/asus-rog-ryujin-iii-argb-extreme-8973-cfm-liquid-cpu-cooler-90rc0132-m0aay0",
    "casing": "#e1e4e6",
    "pump": {
      "region": [
        0.054688,
        0.496094,
        0.332031,
        0.347656
      ],
      "round": false
    },
    "radiator": {
      "basis": [
        [
          0.050781,
          0.136719
        ],
        [
          0.925781,
          0.382813
        ],
        [
          0.050781,
          0.472656
        ]
      ],
      "sizeMm": 360
    }
  }
};
