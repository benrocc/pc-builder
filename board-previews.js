// PCB faces rectified from the selected board photo; retail boxes are excluded.
const BOARD_PREVIEW_FACES = {
  "board-msi-pro-b850-s-wifi6e": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/bf040b7e95e6a515f5c1fabd2a011a08.256p.jpg",
    "credit": "https://pcpartpicker.com/product/GP7MnQ/msi-pro-b850-s-wifi6e-atx-am5-motherboard-pro-b850-s-wifi6e",
    "quad": [
      [
        0.527344,
        0.363281
      ],
      [
        0.875,
        0.328125
      ],
      [
        0.464844,
        0.792969
      ],
      [
        0.839844,
        0.800781
      ]
    ]
  },
  "board-gigabyte-b550-eagle-wifi6": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/9435af2197a80fcb37bc356ec9b83413.256p.jpg",
    "credit": "https://pcpartpicker.com/product/fzNscf/gigabyte-b550-eagle-wifi6-atx-am4-motherboard-b550-eagle-wifi6",
    "quad": [
      [
        0.511719,
        0.230469
      ],
      [
        0.851563,
        0.273438
      ],
      [
        0.515625,
        0.761719
      ],
      [
        0.867188,
        0.738281
      ]
    ]
  },
  "board-asus-tuf-gaming-b650-plus-wifi": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/d9e08ab3fe18574bdc4f01dcfecce0ea.256p.jpg",
    "credit": "https://pcpartpicker.com/product/Pz2WGX/asus-tuf-gaming-b650-plus-wifi-atx-am5-motherboard-tuf-gaming-b650-plus-wifi",
    "quad": [
      [
        0.140625,
        0.203125
      ],
      [
        0.464844,
        0.28125
      ],
      [
        0.140625,
        0.734375
      ],
      [
        0.488281,
        0.691406
      ]
    ]
  },
  "board-gigabyte-b550m-gaming-x-wifi6": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/cd5f3bb9add2e4123ade1d5161553326.256p.jpg",
    "credit": "https://pcpartpicker.com/product/sd9nTW/gigabyte-b550m-gaming-x-wifi6-micro-atx-am4-motherboard-b550m-gaming-x-wifi6",
    "quad": [
      [
        0.523438,
        0.234375
      ],
      [
        0.859375,
        0.304688
      ],
      [
        0.527344,
        0.769531
      ],
      [
        0.878906,
        0.71875
      ]
    ]
  },
  "board-asrock-b850i-lightning-wifi": {
    "src": "https://m.media-amazon.com/images/I/41emP7K0hIL.jpg",
    "credit": "https://pcpartpicker.com/product/9hqNnQ/asrock-b850i-lightning-wifi-mini-itx-am5-motherboard-b850i-lightning-wifi",
    "quad": [
      [
        0.082031,
        0.20024
      ],
      [
        0.476563,
        0.322017
      ],
      [
        0.085938,
        0.804444
      ],
      [
        0.496094,
        0.734188
      ]
    ]
  },
  "board-gigabyte-b850-eagle-wifi7-ice": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/388f3e3de66324acbe4ade80d674298b.256p.jpg",
    "credit": "https://pcpartpicker.com/product/rBqNnQ/gigabyte-b850-eagle-wifi7-ice-atx-am5-motherboard-b850-eagle-wifi7-ice",
    "quad": [
      [
        0.5,
        0.25
      ],
      [
        0.84375,
        0.324219
      ],
      [
        0.5,
        0.753906
      ],
      [
        0.871094,
        0.742188
      ]
    ]
  },
  "board-asus-prime-b850-plus-wifi": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/5c6d1daac79543ebc852c86ef267d527.256p.jpg",
    "credit": "https://pcpartpicker.com/product/KmgZxr/asus-prime-b850-plus-wifi-atx-am5-motherboard-prime-b850-plus-wifi",
    "quad": [
      [
        0.105469,
        0.269531
      ],
      [
        0.449219,
        0.332031
      ],
      [
        0.113281,
        0.804688
      ],
      [
        0.464844,
        0.769531
      ]
    ]
  },
  "board-asrock-b550m-pro4": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/472d12f3f649d3c11155e02f9fd70e22.256p.jpg",
    "credit": "https://pcpartpicker.com/product/NT7p99/asrock-b550m-pro4-micro-atx-am4-motherboard-b550m-pro4",
    "quad": [
      [
        0.488281,
        0.246094
      ],
      [
        0.957031,
        0.265625
      ],
      [
        0.488281,
        0.769531
      ],
      [
        0.960938,
        0.75
      ]
    ]
  },
  "board-msi-b850-gaming-plus-wifi6e": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/34e776866180181de790f98268092efd.256p.jpg",
    "credit": "https://pcpartpicker.com/product/CpQwrH/msi-b850-gaming-plus-wifi6e-atx-am5-motherboard-b850-gaming-plus-wifi6e",
    "quad": [
      [
        0.480469,
        0.324219
      ],
      [
        0.730469,
        0.320313
      ],
      [
        0.472656,
        0.632813
      ],
      [
        0.722656,
        0.632813
      ]
    ]
  },
  "board-msi-meg-x870e-godlike-max": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/564ea74c1994e6960b6305f850b5b780.256p.jpg",
    "credit": "https://pcpartpicker.com/product/kd7MnQ/msi-meg-x870e-godlike-max-eatx-am5-motherboard-meg-x870e-godlike-max",
    "quad": [
      [
        0.144531,
        0.214844
      ],
      [
        0.503906,
        0.367188
      ],
      [
        0.1875,
        0.742188
      ],
      [
        0.570313,
        0.730469
      ]
    ]
  },
  "board-asus-tuf-gaming-b860m-plus-wifi": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/2656853c7563ea7353bcb7ebbb3ef261.256p.jpg",
    "credit": "https://pcpartpicker.com/product/p3bypg/asus-tuf-gaming-b860m-plus-wifi-micro-atx-lga1851-motherboard-tuf-gaming-b860m-plus-wifi",
    "quad": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ]
  },
  "board-asus-b650e-max-gaming-wifi": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/be86ce9c2456f1c3f19fd90476084431.256p.jpg",
    "credit": "https://pcpartpicker.com/product/Pq3WGX/asus-b650e-max-gaming-wifi-atx-am5-motherboard-b650e-max-gaming-wifi",
    "quad": [
      [
        0.117188,
        0.21875
      ],
      [
        0.464844,
        0.292969
      ],
      [
        0.117188,
        0.808594
      ],
      [
        0.484375,
        0.765625
      ]
    ]
  },
  "board-gigabyte-b550m-ds3h-ac-r2": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/61e134589d40c606cd6ac71cd3603434.256p.jpg",
    "credit": "https://pcpartpicker.com/product/HwcBD3/gigabyte-b550m-ds3h-ac-r2-micro-atx-am4-motherboard-b550m-ds3h-ac-r2",
    "quad": [
      [
        0.503906,
        0.238281
      ],
      [
        0.875,
        0.292969
      ],
      [
        0.503906,
        0.808594
      ],
      [
        0.890625,
        0.78125
      ]
    ]
  },
  "board-msi-b760-gaming-plus-wifi-ddr4": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/1185025125d45ddfcc03516e4b54b199.256p.jpg",
    "credit": "https://pcpartpicker.com/product/Zhhv6h/msi-b760-gaming-plus-wifi-ddr4-atx-lga1700-motherboard-b760-gaming-plus-wifi-ddr4",
    "quad": [
      [
        0.496094,
        0.351563
      ],
      [
        0.851563,
        0.328125
      ],
      [
        0.46875,
        0.785156
      ],
      [
        0.832031,
        0.785156
      ]
    ]
  },
  "board-msi-a520m-a-pro": {
    "src": "https://m.media-amazon.com/images/I/61rBzM2fjzL.jpg",
    "credit": "https://pcpartpicker.com/product/nZTzK8/msi-a520m-a-pro-micro-atx-am4-motherboard-a520m-a-pro",
    "quad": [
      [
        0,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ]
  },
  "board-asus-prime-b550m-k-argb": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/78308ecae147c55634084fc2030f9fb8.256p.jpg",
    "credit": "https://pcpartpicker.com/product/b7GhP6/asus-prime-b550m-k-argb-micro-atx-am4-motherboard-prime-b550m-k-argb",
    "quad": [
      [
        0.105469,
        0.351563
      ],
      [
        0.453125,
        0.457031
      ],
      [
        0.105469,
        0.8125
      ],
      [
        0.484375,
        0.777344
      ]
    ]
  },
  "board-msi-b550-gaming-wifi6e": {
    "src": "https://asset-us-store.msi.com/image/cache/catalog/Pd_page/Motherboard/2026/B550GAMINGWIFI6E/B550GAMINGWIFI6E-1-400x400.png",
    "credit": "https://us-store.msi.com/B550-GAMING-WIFI6E",
    "quad": [
      [
        0.484375,
        0.261719
      ],
      [
        0.894531,
        0.226563
      ],
      [
        0.445313,
        0.730469
      ],
      [
        0.855469,
        0.769531
      ]
    ]
  },
  "board-asus-tuf-gaming-b850i-wifi-neo": {
    "src": "https://www.overclockers.ua/content/news/motherboard/52141-asus-tuf-b850i-itx-1.jpg",
    "credit": "https://www.overclockers.ua/ua/news/asus-tuf-gaming-b850i-wifi-neo-mini-itx-am5/",
    "quad": [
      [
        0.027344,
        0.034647
      ],
      [
        0.417969,
        0.107533
      ],
      [
        0.027344,
        0.78594
      ],
      [
        0.421875,
        0.724267
      ]
    ]
  },
  "board-msi-b550-gaming-wifi": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/f3e4ed820c87b4b1aa95a00a28c0119d.256p.jpg",
    "credit": "https://pcpartpicker.com/product/mB9nTW/msi-b550-gaming-wifi-atx-am4-motherboard-b550-gaming-wifi",
    "quad": [
      [
        0.5,
        0.257813
      ],
      [
        0.9375,
        0.203125
      ],
      [
        0.445313,
        0.757813
      ],
      [
        0.894531,
        0.789063
      ]
    ]
  },
  "board-msi-x870e-gaming-plus-wifi": {
    "src": "https://m.media-amazon.com/images/I/51nBS0VQL4L.jpg",
    "credit": "https://pcpartpicker.com/product/wqh2FT/msi-x870e-gaming-plus-wifi-atx-am5-motherboard-x870e-gaming-plus-wifi",
    "quad": [
      [
        0.5,
        0.273438
      ],
      [
        0.9375,
        0.242188
      ],
      [
        0.4375,
        0.757813
      ],
      [
        0.894531,
        0.792969
      ]
    ]
  },
  "board-gigabyte-b550m-ds3h-r2": {
    "src": "https://cdna.pcpartpicker.com/static/forever/images/product/e501e4c130b02dc46f34e25335339e50.256p.jpg",
    "credit": "https://pcpartpicker.com/product/ptnXsY/gigabyte-b550m-ds3h-r2-micro-atx-am4-motherboard-b550m-ds3h-r2",
    "quad": [
      [
        0.5,
        0.234375
      ],
      [
        0.921875,
        0.304688
      ],
      [
        0.523438,
        0.769531
      ],
      [
        0.9375,
        0.726563
      ]
    ]
  }
};
