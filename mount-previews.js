// Actual GPU, drive and power-supply photos used inside the assembly.
// Sampled GPU edges face the case window; drives and the PSU use a cutaway.
const PART_MOUNT_FACES = {
  "ssd-990": {
    "src": "img/mounts/ssd-990.webp",
    "credit": "https://pcpartpicker.com/product/hpqrxr/samsung-990-evo-plus-2-tb-m2-2280-pcie-50-x2-nvme-solid-state-drive-mz-v9s2t0bw",
    "cutout": [
      [
        0.0688,
        0.3812,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AACDAQABhAEAAooOARCJAQIRiAQBFYkBABaKBgAchQEAHYQBAB6FAQAfigQAI4kBACSDAQAlDAEWJW0B"
    ]
  },
  "ssd-sn": {
    "src": "img/mounts/ssd-sn.webp",
    "credit": "https://pcpartpicker.com/product/4rPv6h/sandisk-wd-blue-sn5100-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds200t5b0e-00cpe0",
    "cutout": [
      [
        0.1625,
        0.4063,
        0.6687,
        0.1875
      ],
      107,
      30,
      "AQADAQoAWwEBAWUBAQJpAQEDagQAB2sEAQtqAgINaQEDDmgBAg9pAQEQagMAE2sCABVqAQAWaQIAGGoBABlrAgAbagEAHGkBAR1kAQ=="
    ]
  },
  "ssd-nv3": {
    "src": "img/mounts/ssd-nv3.webp",
    "credit": "https://pcpartpicker.com/product/tmbRsY/kingston-nv3-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv3s1000g",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AwCUAQABmAEAApsBAAOgEAITngEDFJ0FAhmeAQAaoA8AKZsBACqYAQArlwE="
    ]
  },
  "psu-850": {
    "src": "img/mounts/psu-850.webp",
    "credit": "https://pcpartpicker.com/product/sqbypg/montech-century-ii-850-w-80-gold-certified-fully-modular-atx-power-supply-century-ii-850w",
    "cutout": [
      [
        0.1,
        0.1187,
        0.875,
        0.8313
      ],
      140,
      133,
      "FQAEAQ8BLAEJAlUBBANtAQAEcTwAQHIBAEF0AQNCcgEGQ3EBCURvAQ1FJwE+RTwBEEYaAT1GPgETRwwBOkdDATpIRAE6SUYBO0pGATtLSAE7TEkBO01LATxOSwE8T00BPFBOATxRUAE9Uk8BPVNOAz1WTQE+V0wDPlpLAT9bSgM/XkkBQF9IAUFgRwFCYUYBQmJFAUNjRAFEZEMBRWVCAUVmQQFGZ0ABR2g/AUdpPgFIajwBSWs5AUpsNwFKbTUBS24yAUxvMAFMcC4BTXEsAU5yKQFPcycBT3QlAVB1IwFRdiABUnceAVJ4HAFTeRoBVHoXAVR7FgFVfBMBVn0RAVd+DgFXfwwBWIAKAVmBBwFaggUBWoMDAVuEAQE="
    ]
  },
  "psu-750": {
    "src": "img/mounts/psu-750.webp",
    "credit": "https://pcpartpicker.com/product/jfHp99/corsair-rm750e-2025-750-w-fully-modular-atx-power-supply-cp-9020295-na",
    "cutout": [
      [
        0.0875,
        0.2125,
        0.825,
        0.5938
      ],
      132,
      95,
      "QAAEATwBCwE5AhEBNgMXATMEHQEvBSQBLAYrASkHMQEmCDcBIgk/AR8KRQEcC0sBGAxSARUNWAESDl8BDw9lAQsQbAEIEXIBBRJ5AQITfwEBFIEBABWCAQAWgwIAGIQGAB6DJQFDggIBRYEBAkZ/AQJHfgEESHoBB0l0AQpKbwEMS2oBD0xkARJNXwEUTloBF09UARpQTwEcUUoBH1JEASJTPwEkVDoBJ1U0ASpWLwEsVyoBL1gkATJZHwE0WhoBN1sUATpcDwE8XQoBP14EAQ=="
    ]
  },
  "gpu-asus-rog-astral-oc-geforce-rtx-5090": {
    "src": "img/mounts/gpu-asus-rog-astral-oc-geforce-rtx-5090.webp",
    "credit": "https://pcpartpicker.com/product/WGG2FT/asus-rog-astral-oc-geforce-rtx-5090-32-gb-video-card-rog-astral-rtx5090-o32g-gaming",
    "basis": [
      [
        0.15625,
        0.29375
      ],
      [
        0.8625,
        0.29375
      ],
      [
        0.15625,
        0.35
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-founders-edition-geforce-rtx-5090": {
    "src": "img/mounts/gpu-nvidia-founders-edition-geforce-rtx-5090.webp",
    "credit": "https://lanoc.org/review/video-cards/nvidia-rtx-5090-founders-edition?start=2",
    "cutout": null
  },
  "gpu-zotac-rtx-5090-solid-oc": {
    "src": "img/mounts/gpu-zotac-rtx-5090-solid-oc.webp",
    "credit": "https://www.zotacstore.com/us/geforce-rtx-5090-solid-oc",
    "basis": [
      [
        0.29375,
        0.4519383529092267
      ],
      [
        0.69375,
        0.2432072781587344
      ],
      [
        0.29375,
        0.5307723529092268
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/7P3WGX/gigabyte-gaming-oc-geforce-rtx-5080-16-gb-video-card-gv-n5080gaming-oc-16gd",
    "basis": [
      [
        0.15625,
        0.3974109336609336
      ],
      [
        0.8375,
        0.18122542997542998
      ],
      [
        0.15625,
        0.45366093366093363
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-rog-astral-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-asus-rog-astral-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/FfHp99/asus-rog-astral-oc-geforce-rtx-5080-16-gb-video-card-rog-astral-rtx5080-o16g-gaming",
    "basis": [
      [
        0.16875,
        0.33125
      ],
      [
        0.85,
        0.33125
      ],
      [
        0.16875,
        0.3875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-pny-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/7z7MnQ/pny-oc-geforce-rtx-5080-16-gb-video-card-vcg508016tfxpb1-o",
    "basis": [
      [
        0.14375,
        0.3
      ],
      [
        0.88125,
        0.3
      ],
      [
        0.14375,
        0.35625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-sff-geforce-rtx-5080": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-sff-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/8dXMnQ/gigabyte-windforce-oc-sff-geforce-rtx-5080-16-gb-video-card-gv-n5080wf3oc-16gd",
    "basis": [
      [
        0.1875,
        0.33125
      ],
      [
        0.8125,
        0.33125
      ],
      [
        0.1875,
        0.38288200000000006
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-founders-edition-geforce-rtx-5080": {
    "src": "img/mounts/gpu-nvidia-founders-edition-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/87WmP6/nvidia-founders-edition-geforce-rtx-5080-16-gb-video-card-900-1g144-2545-000",
    "basis": [
      [
        0.1625,
        0.31835907704042715
      ],
      [
        0.86875,
        0.3670575896262395
      ],
      [
        0.1625,
        0.3746090770404272
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-tuf-gaming-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-asus-tuf-gaming-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/gTHp99/asus-tuf-gaming-oc-geforce-rtx-5080-16-gb-video-card-tuf-rtx5080-o16g-gaming",
    "basis": [
      [
        0.18125,
        0.3309092679127726
      ],
      [
        0.84375,
        0.33194119937694705
      ],
      [
        0.18125,
        0.38515926791277255
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-geforce-rtx-5080": {
    "src": "img/mounts/gpu-asus-prime-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/q6XMnQ/asus-prime-geforce-rtx-5080-16-gb-video-card-prime-rtx5080-16g",
    "basis": [
      [
        0.19375,
        0.3125
      ],
      [
        0.84375,
        0.3125
      ],
      [
        0.19375,
        0.36675
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-asus-prime-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/KJVfrH/asus-prime-oc-geforce-rtx-5080-16-gb-video-card-prime-rtx5080-o16g",
    "basis": [
      [
        0.175,
        0.31956885910774113
      ],
      [
        0.83125,
        0.3185207635337683
      ],
      [
        0.175,
        0.37468685910774113
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-gaming-trio-oc-geforce-rtx-5080": {
    "src": "img/mounts/gpu-msi-gaming-trio-oc-geforce-rtx-5080.webp",
    "credit": "https://pcpartpicker.com/product/3Ftkcf/msi-gaming-trio-oc-geforce-rtx-5080-16-gb-video-card-geforce-rtx-5080-16g-gaming-trio-oc",
    "basis": [
      [
        0.2625,
        0.35625
      ],
      [
        0.75,
        0.35625
      ],
      [
        0.2625,
        0.39825
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-asus-prime-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/Cpbypg/asus-prime-geforce-rtx-5070-ti-16-gb-video-card-prime-rtx5070ti-16g",
    "basis": [
      [
        0.15625,
        0.3065897597977244
      ],
      [
        0.85,
        0.3061334544879899
      ],
      [
        0.15625,
        0.3628397597977244
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-shadow-3x-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-msi-shadow-3x-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/8VcBD3/msi-shadow-3x-oc-geforce-rtx-5070-ti-16-gb-video-card-g507t-16s3c",
    "basis": [
      [
        0.13125,
        0.29375
      ],
      [
        0.88125,
        0.29375
      ],
      [
        0.13125,
        0.35
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-aero-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-gigabyte-aero-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/ttgZxr/gigabyte-aero-oc-geforce-rtx-5070-ti-16-gb-video-card-gv-n507taero-oc-16gd",
    "basis": [
      [
        0.6875,
        0.87109375
      ],
      [
        0.9453125,
        0.4453125
      ],
      [
        0.7109375,
        0.90625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-sff-geforce-rtx-5070": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-sff-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/gXPv6h/gigabyte-windforce-oc-sff-geforce-rtx-5070-ti-16-gb-video-card-gv-n507twf3oc-16gd",
    "basis": [
      [
        0.2625,
        0.42569298245614035
      ],
      [
        0.725,
        0.2951403508771929
      ],
      [
        0.2625,
        0.48194298245614037
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-gaming-trio-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-msi-gaming-trio-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/CgCCmG/msi-gaming-trio-oc-geforce-rtx-5070-ti-16-gb-video-card-geforce-rtx-5070-ti-16g-gaming-trio-oc",
    "basis": [
      [
        0.1375,
        0.2875
      ],
      [
        0.88125,
        0.2875
      ],
      [
        0.1375,
        0.34375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-asus-prime-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/c6XMnQ/asus-prime-oc-geforce-rtx-5070-ti-16-gb-video-card-prime-rtx5070ti-o16g",
    "basis": [
      [
        0.15625,
        0.3065897597977244
      ],
      [
        0.85,
        0.3061334544879899
      ],
      [
        0.15625,
        0.3628397597977244
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/hP3WGX/gigabyte-gaming-oc-geforce-rtx-5070-ti-16-gb-video-card-gv-n507tgaming-oc-16gd",
    "basis": [
      [
        0.2375,
        0.4125820793433652
      ],
      [
        0.7625,
        0.24521203830369362
      ],
      [
        0.2375,
        0.46883207934336524
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-tuf-gaming-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-asus-tuf-gaming-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/ybjv6h/asus-tuf-gaming-oc-geforce-rtx-5070-ti-16-gb-video-card-tuf-rtx5070ti-o16g-gaming",
    "basis": [
      [
        0.1625,
        0.30625
      ],
      [
        0.86875,
        0.30625
      ],
      [
        0.1625,
        0.3625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-pny-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/XRvscf/pny-oc-geforce-rtx-5070-ti-16-gb-video-card-vcg5070t16tfxpb1-o",
    "basis": [
      [
        0.275,
        0.3625
      ],
      [
        0.7625,
        0.3625
      ],
      [
        0.275,
        0.39925
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-ventus-3x-oc-geforce-rtx-5070-ti": {
    "src": "img/mounts/gpu-msi-ventus-3x-oc-geforce-rtx-5070-ti.webp",
    "credit": "https://pcpartpicker.com/product/zcqNnQ/msi-ventus-3x-oc-geforce-rtx-5070-ti-16-gb-video-card-geforce-rtx-5070-ti-16g-ventus-3x-oc",
    "basis": [
      [
        0.234375,
        0.57421875
      ],
      [
        0.83984375,
        0.453125
      ],
      [
        0.2421875,
        0.6015625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-sff-geforce-rtx-5070-2": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-sff-geforce-rtx-5070-2.webp",
    "credit": "https://pcpartpicker.com/product/PxG2FT/gigabyte-windforce-oc-sff-geforce-rtx-5070-12-gb-video-card-gv-n5070wf3oc-12gd",
    "basis": [
      [
        0.26875,
        0.375
      ],
      [
        0.74375,
        0.375
      ],
      [
        0.26875,
        0.41174999999999995
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-geforce-rtx-5070": {
    "src": "img/mounts/gpu-asus-prime-oc-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/DCy8TW/asus-prime-oc-geforce-rtx-5070-12-gb-video-card-prime-rtx5070-o12g",
    "basis": [
      [
        0.26171875,
        0.5625
      ],
      [
        0.8984375,
        0.53515625
      ],
      [
        0.26953125,
        0.58984375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-founders-edition-geforce-rtx-5070": {
    "src": "img/mounts/gpu-nvidia-founders-edition-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/m4qNnQ/nvidia-founders-edition-geforce-rtx-5070-12-gb-video-card-900-1g146-2570-000",
    "basis": [
      [
        0.16796875,
        0.44921875
      ],
      [
        0.86328125,
        0.84765625
      ],
      [
        0.1640625,
        0.48046875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-oc-geforce-rtx-5070": {
    "src": "img/mounts/gpu-pny-oc-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/P89nTW/pny-oc-geforce-rtx-5070-12-gb-video-card-vcg507012tfxpb1-o",
    "basis": [
      [
        0.28125,
        0.734375
      ],
      [
        0.83984375,
        0.515625
      ],
      [
        0.296875,
        0.76953125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-geforce-rtx-5070": {
    "src": "img/mounts/gpu-asus-prime-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/wtJBD3/asus-prime-geforce-rtx-5070-12-gb-video-card-prime-rtx5070-12g",
    "basis": [
      [
        0.2625,
        0.38125
      ],
      [
        0.7625,
        0.38125
      ],
      [
        0.2625,
        0.422382
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-eagle-oc-sff-geforce-rtx-5070": {
    "src": "img/mounts/gpu-gigabyte-eagle-oc-sff-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/ypG2FT/gigabyte-eagle-oc-sff-geforce-rtx-5070-12-gb-video-card-gv-n5070eagleoc-ice-12gd",
    "basis": [
      [
        0.275,
        0.37093640350877194
      ],
      [
        0.7375,
        0.3778969298245614
      ],
      [
        0.275,
        0.4094364035087719
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-gaming-trio-oc-geforce-rtx-5070": {
    "src": "img/mounts/gpu-msi-gaming-trio-oc-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/NGG2FT/msi-gaming-trio-oc-geforce-rtx-5070-12-gb-video-card-geforce-rtx-5070-12g-gaming-trio-oc",
    "basis": [
      [
        0.1875,
        0.3150695481702763
      ],
      [
        0.825,
        0.31320715085884987
      ],
      [
        0.1875,
        0.3684375481702763
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-geforce-rtx-5070": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/J7WmP6/gigabyte-gaming-oc-geforce-rtx-5070-12-gb-video-card-gv-n5070gaming-oc-12gd",
    "basis": [
      [
        0.275,
        0.3768391148325359
      ],
      [
        0.74375,
        0.37414772727272727
      ],
      [
        0.275,
        0.4144571148325359
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-tuf-gaming-oc-geforce-rtx-5070": {
    "src": "img/mounts/gpu-asus-tuf-gaming-oc-geforce-rtx-5070.webp",
    "credit": "https://pcpartpicker.com/product/Mf8Pxr/asus-tuf-gaming-oc-geforce-rtx-5070-12-gb-video-card-tuf-rtx5070-o12g-gaming",
    "basis": [
      [
        0.2265625,
        0.578125
      ],
      [
        0.86328125,
        0.546875
      ],
      [
        0.23828125,
        0.61328125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-dual-oc-geforce-rtx-5060-ti": {
    "src": "img/mounts/gpu-asus-dual-oc-geforce-rtx-5060-ti.webp",
    "credit": "https://pcpartpicker.com/product/ss8Pxr/asus-dual-oc-geforce-rtx-5060-ti-16-gb-video-card-dual-rtx5060ti-o16g",
    "basis": [
      [
        0.3203125,
        0.56640625
      ],
      [
        0.8984375,
        0.546875
      ],
      [
        0.328125,
        0.6015625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-dual-fan-oc-geforce-rtx-5060-ti": {
    "src": "img/mounts/gpu-pny-dual-fan-oc-geforce-rtx-5060-ti.webp",
    "credit": "https://pcpartpicker.com/product/mkHp99/pny-dual-fan-oc-geforce-rtx-5060-ti-8-gb-video-card-vcg5060t8dfxpb1-o",
    "basis": [
      [
        0.175,
        0.3521384994807892
      ],
      [
        0.8375,
        0.16117925752855658
      ],
      [
        0.175,
        0.40838849948078926
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-geforce-rtx-5060-ti": {
    "src": "img/mounts/gpu-asus-prime-geforce-rtx-5060-ti.webp",
    "credit": "https://pcpartpicker.com/product/M64Pxr/asus-prime-geforce-rtx-5060-ti-16-gb-video-card-prime-rtx5060ti-16g",
    "basis": [
      [
        0.2625,
        0.3709650707618187
      ],
      [
        0.7625,
        0.2571213489912677
      ],
      [
        0.2625,
        0.4272150707618187
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-ventus-2x-plus-oc-geforce-rtx-5060-ti": {
    "src": "img/mounts/gpu-msi-ventus-2x-plus-oc-geforce-rtx-5060-ti.webp",
    "credit": "https://pcpartpicker.com/product/3jWmP6/msi-ventus-2x-plus-oc-geforce-rtx-5060-ti-8-gb-video-card-rtx-5060-ti-8g-ventus-2x-oc-plus",
    "basis": [
      [
        0.13125,
        0.2125
      ],
      [
        0.88125,
        0.2125
      ],
      [
        0.13125,
        0.26875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-geforce-rtx-5060": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-geforce-rtx-5060.webp",
    "credit": "https://pcpartpicker.com/product/F38Pxr/gigabyte-windforce-oc-geforce-rtx-5060-8-gb-pcie-x8-video-card-gv-n5060wf2oc-8gd",
    "basis": [
      [
        0.63671875,
        0.7890625
      ],
      [
        0.80859375,
        0.5234375
      ],
      [
        0.66015625,
        0.82421875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-dual-oc-geforce-rtx-5060": {
    "src": "img/mounts/gpu-asus-dual-oc-geforce-rtx-5060.webp",
    "credit": "https://pcpartpicker.com/product/xNy8TW/asus-dual-oc-geforce-rtx-5060-8-gb-video-card-dual-rtx5060-o8g",
    "basis": [
      [
        0.25625,
        0.31306134723336004
      ],
      [
        0.7875,
        0.31266539695268647
      ],
      [
        0.25625,
        0.36731134723336006
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-oc-geforce-rtx-5060": {
    "src": "img/mounts/gpu-pny-oc-geforce-rtx-5060.webp",
    "credit": "https://pcpartpicker.com/product/8NgZxr/pny-oc-geforce-rtx-5060-8-gb-video-card-vcg50608dfxpb1-o",
    "basis": [
      [
        0.24375,
        0.28125
      ],
      [
        0.76875,
        0.28125
      ],
      [
        0.24375,
        0.3375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-geforce-rtx-5060": {
    "src": "img/mounts/gpu-asus-prime-geforce-rtx-5060.webp",
    "credit": "https://pcpartpicker.com/product/k7CCmG/asus-prime-geforce-rtx-5060-8-gb-video-card-prime-rtx5060-8g",
    "basis": [
      [
        0.23046875,
        0.5625
      ],
      [
        0.91015625,
        0.5546875
      ],
      [
        0.23046875,
        0.58984375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-geforce-rtx-5050": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-geforce-rtx-5050.webp",
    "credit": "https://pcpartpicker.com/product/Ytkqqs/gigabyte-windforce-oc-geforce-rtx-5050-8-gb-video-card-gv-n5050wf2oc-8gd",
    "basis": [
      [
        0.3625,
        0.38125
      ],
      [
        0.65625,
        0.38125
      ],
      [
        0.3625,
        0.41536799999999996
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-geforce-rtx-4070-sup": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-geforce-rtx-4070-sup.webp",
    "credit": "https://pcpartpicker.com/product/HCkH99/gigabyte-windforce-oc-geforce-rtx-4070-super-12-gb-video-card-gv-n407swf3oc-12gd",
    "basis": [
      [
        0.58984375,
        0.83984375
      ],
      [
        0.92578125,
        0.52734375
      ],
      [
        0.60546875,
        0.875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-geforce-rtx-4070": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-geforce-rtx-4070.webp",
    "credit": "https://pcpartpicker.com/product/FnLdnQ/gigabyte-windforce-oc-geforce-rtx-4070-12-gb-video-card-gv-n4070wf3oc-12gd",
    "basis": [
      [
        0.59375,
        0.859375
      ],
      [
        0.9296875,
        0.5625
      ],
      [
        0.61328125,
        0.890625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-founders-edition-geforce-rtx-4060-t": {
    "src": "img/mounts/gpu-nvidia-founders-edition-geforce-rtx-4060-t.webp",
    "credit": "https://pcpartpicker.com/product/63wmP6/nvidia-founders-edition-geforce-rtx-4060-ti-8-gb-video-card-900-1g141-2560-000",
    "basis": [
      [
        0.14375,
        0.3273332246849196
      ],
      [
        0.86875,
        0.36817959582790094
      ],
      [
        0.14375,
        0.3835832246849196
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-geforce-rtx-4060": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-geforce-rtx-4060.webp",
    "credit": "https://pcpartpicker.com/product/r9cgXL/gigabyte-windforce-oc-geforce-rtx-4060-8-gb-video-card-gv-n4060wf2oc-8gd",
    "basis": [
      [
        0.68359375,
        0.83984375
      ],
      [
        0.92578125,
        0.5625
      ],
      [
        0.70703125,
        0.875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/h7RnTW/gigabyte-gaming-oc-radeon-rx-9070-xt-16-gb-video-card-gv-r9070xtgaming-oc-16gd",
    "basis": [
      [
        0.275,
        0.35
      ],
      [
        0.74375,
        0.35
      ],
      [
        0.275,
        0.392882
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-asus-prime-oc-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/WcHp99/asus-prime-oc-radeon-rx-9070-xt-16-gb-video-card-prime-rx9070xt-o16g",
    "basis": [
      [
        0.2734375,
        0.5859375
      ],
      [
        0.90625,
        0.51171875
      ],
      [
        0.28125,
        0.625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-powercolor-reaper-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-powercolor-reaper-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/8ZJBD3/powercolor-reaper-radeon-rx-9070-xt-16-gb-video-card-rx9070xt-16g-a",
    "basis": [
      [
        0.3359375,
        0.53515625
      ],
      [
        0.8203125,
        0.53125
      ],
      [
        0.3359375,
        0.55859375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-sapphire-pulse-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-sapphire-pulse-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/Bvjv6h/sapphire-pulse-radeon-rx-9070-xt-16-gb-video-card-11348-03-20g",
    "basis": [
      [
        0.1328125,
        0.74609375
      ],
      [
        0.55078125,
        0.58984375
      ],
      [
        0.1484375,
        0.78515625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-xfx-swift-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-xfx-swift-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/T7RnTW/xfx-swift-radeon-rx-9070-xt-16-gb-video-card-rx-97tswf3b9",
    "basis": [
      [
        0.14375,
        0.28125
      ],
      [
        0.88125,
        0.28125
      ],
      [
        0.14375,
        0.3375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-asrock-challenger-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/Q8sMnQ/asrock-challenger-radeon-rx-9070-xt-16-gb-video-card-rx9070xt-cl-16g",
    "basis": [
      [
        0.21875,
        0.31214053803339514
      ],
      [
        0.825,
        0.32076762523191094
      ],
      [
        0.21875,
        0.35850853803339516
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-ice-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-ice-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/j8gZxr/gigabyte-gaming-oc-ice-radeon-rx-9070-xt-16-gb-video-card-gv-r907xgamingocice-16gd",
    "basis": [
      [
        0.275,
        0.38476258793039614
      ],
      [
        0.725,
        0.4029086449463161
      ],
      [
        0.275,
        0.4258945879303962
      ]
    ],
    "sampledEdge": true
  },
  "gpu-sapphire-nitro-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-sapphire-nitro-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/ZQPv6h/sapphire-nitro-radeon-rx-9070-xt-16-gb-video-card-11348-01-20g",
    "basis": [
      [
        0.16875,
        0.3
      ],
      [
        0.875,
        0.3
      ],
      [
        0.16875,
        0.355118
      ]
    ],
    "sampledEdge": true
  },
  "gpu-powercolor-hellhound-oc-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-powercolor-hellhound-oc-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/rGPv6h/powercolor-hellhound-oc-radeon-rx-9070-xt-16-gb-video-card-rx9070xt-16g-loc",
    "basis": [
      [
        0.24375,
        0.35625
      ],
      [
        0.775,
        0.35625
      ],
      [
        0.24375,
        0.39825
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-steel-legend-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-asrock-steel-legend-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/RVWmP6/asrock-steel-legend-radeon-rx-9070-xt-16-gb-video-card-rx9070xt-sl-16g",
    "basis": [
      [
        0.18125,
        0.2933230958230958
      ],
      [
        0.8625,
        0.2961087223587224
      ],
      [
        0.18125,
        0.3475730958230958
      ]
    ],
    "sampledEdge": true
  },
  "gpu-xfx-mercury-oc-rgb-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-xfx-mercury-oc-rgb-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/tCdMnQ/xfx-mercury-oc-rgb-radeon-rx-9070-xt-16-gb-video-card-rx-97trgbbb9",
    "basis": [
      [
        0.1375,
        0.2937775482093664
      ],
      [
        0.88125,
        0.29538911845730026
      ],
      [
        0.1375,
        0.3500275482093664
      ]
    ],
    "sampledEdge": true
  },
  "gpu-sapphire-pure-radeon-rx-9070-xt": {
    "src": "img/mounts/gpu-sapphire-pure-radeon-rx-9070-xt.webp",
    "credit": "https://pcpartpicker.com/product/TmDnTW/sapphire-pure-radeon-rx-9070-xt-16-gb-video-card-11348-02-20g",
    "basis": [
      [
        0.13671875,
        0.75
      ],
      [
        0.53125,
        0.58984375
      ],
      [
        0.15234375,
        0.796875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-radeon-rx-9070": {
    "src": "img/mounts/gpu-asrock-challenger-radeon-rx-9070.webp",
    "credit": "https://pcpartpicker.com/product/KXkqqs/asrock-challenger-radeon-rx-9070-16-gb-video-card-rx9070-cl-16g",
    "basis": [
      [
        0.18125,
        0.311977886977887
      ],
      [
        0.8625,
        0.3207493857493858
      ],
      [
        0.18125,
        0.36822788697788694
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-radeon-rx-9070-gre": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-radeon-rx-9070-gre.webp",
    "credit": "https://www.targetcomponents.co.uk/graphics-displays-and-software/graphics-and-sound/graphics-cards/grgig-r9070greg",
    "basis": [
      [
        0.578125,
        0.828125
      ],
      [
        0.8984375,
        0.578125
      ],
      [
        0.60546875,
        0.8671875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-evo-oc-radeon-rx-9070-gre": {
    "src": "img/mounts/gpu-asus-prime-evo-oc-radeon-rx-9070-gre.webp",
    "credit": "https://pricehistory.app/p/asus-prime-radeon-rx-9070-gre-evo-M2ZmiISj",
    "basis": [
      [
        0.2109375,
        0.53125
      ],
      [
        0.90625,
        0.5390625
      ],
      [
        0.2109375,
        0.578125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-sapphire-pulse-oc-radeon-rx-9070-gre": {
    "src": "img/mounts/gpu-sapphire-pulse-oc-radeon-rx-9070-gre.webp",
    "credit": "https://www.hardwareschotte.de/tests/AMD-Radeon-RX-9070-GRE-Grafikkarten",
    "basis": [
      [
        0.15234375,
        0.7421875
      ],
      [
        0.57421875,
        0.6015625
      ],
      [
        0.16796875,
        0.78125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-radeon-rx-9070": {
    "src": "img/mounts/gpu-asus-prime-oc-radeon-rx-9070.webp",
    "credit": "https://pcpartpicker.com/product/2xHp99/asus-prime-oc-radeon-rx-9070-16-gb-video-card-prime-rx9070-o16g",
    "basis": [
      [
        0.275,
        0.375
      ],
      [
        0.7625,
        0.375
      ],
      [
        0.275,
        0.414382
      ]
    ],
    "sampledEdge": true
  },
  "gpu-sapphire-pulse-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-sapphire-pulse-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/w2WmP6/sapphire-pulse-radeon-rx-9060-xt-16-gb-video-card-11350-03-20g",
    "basis": [
      [
        0.24375,
        0.33467082616179
      ],
      [
        0.75625,
        0.33581110154905336
      ],
      [
        0.24375,
        0.38280282616179007
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/TcG2FT/gigabyte-gaming-oc-radeon-rx-9060-xt-16-gb-video-card-gv-r9060xtgaming-oc-16gd",
    "basis": [
      [
        0.5625,
        0.67578125
      ],
      [
        0.828125,
        0.47265625
      ],
      [
        0.59375,
        0.71875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-oc-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-asrock-challenger-oc-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/BxRnTW/asrock-challenger-oc-radeon-rx-9060-xt-16-gb-video-card-rx9060xt-cl-16go",
    "basis": [
      [
        0.3828125,
        0.49609375
      ],
      [
        0.93359375,
        0.40625
      ],
      [
        0.38671875,
        0.53515625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-powercolor-reaper-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-powercolor-reaper-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/fzh2FT/powercolor-reaper-radeon-rx-9060-xt-16-gb-video-card-rx9060xt-16g-a",
    "basis": [
      [
        0.46484375,
        0.55859375
      ],
      [
        0.76171875,
        0.546875
      ],
      [
        0.46484375,
        0.5859375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-xfx-swift-oc-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-xfx-swift-oc-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/cD7MnQ/xfx-swift-oc-radeon-rx-9060-xt-16-gb-video-card-rx-96ts316b7",
    "basis": [
      [
        0.56640625,
        0.9140625
      ],
      [
        0.5625,
        0.1171875
      ],
      [
        0.59765625,
        0.9140625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-dual-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-asus-dual-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/fdcBD3/asus-dual-radeon-rx-9060-xt-16-gb-video-card-dual-rx9060xt-16g-white",
    "basis": [
      [
        0.28125,
        0.3530676424050633
      ],
      [
        0.76875,
        0.3587994462025316
      ],
      [
        0.28125,
        0.40931764240506324
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-prime-oc-radeon-rx-9060-xt": {
    "src": "img/mounts/gpu-asus-prime-oc-radeon-rx-9060-xt.webp",
    "credit": "https://pcpartpicker.com/product/Xwy8TW/asus-prime-oc-radeon-rx-9060-xt-16-gb-video-card-prime-rx9060xt-o16g",
    "basis": [
      [
        0.27734375,
        0.57421875
      ],
      [
        0.88671875,
        0.55078125
      ],
      [
        0.2890625,
        0.61328125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-oc-radeon-rx-7600": {
    "src": "img/mounts/gpu-asrock-challenger-oc-radeon-rx-7600.webp",
    "credit": "https://pcpartpicker.com/product/BYdG3C/asrock-challenger-oc-radeon-rx-7600-xt-8-gb-video-card-rx7600-cl-8go",
    "basis": [
      [
        0.175,
        0.29375
      ],
      [
        0.85625,
        0.29375
      ],
      [
        0.175,
        0.35
      ]
    ],
    "sampledEdge": true
  },
  "gpu-xfx-speedster-swft-210-core-radeon-rx-7600": {
    "src": "img/mounts/gpu-xfx-speedster-swft-210-core-radeon-rx-7600.webp",
    "credit": "https://pcpartpicker.com/product/6jn9TW/xfx-speedster-swft-210-core-radeon-rx-7600-xt-8-gb-video-card-rx-76pswftfy",
    "basis": [
      [
        0.16875,
        0.044444444444444446
      ],
      [
        0.85,
        0.044444444444444446
      ],
      [
        0.16875,
        0.14444444444444443
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-oc-arc-b580": {
    "src": "img/mounts/gpu-asrock-challenger-oc-arc-b580.webp",
    "credit": "https://pcpartpicker.com/product/bYcBD3/asrock-challenger-oc-arc-b580-12-gb-video-card-b580-cl-12go",
    "basis": [
      [
        0.1875,
        0.25625
      ],
      [
        0.8625,
        0.25625
      ],
      [
        0.1875,
        0.3125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-geforce-rtx-3060-ventus-2x-12g-oc-gefo": {
    "src": "img/mounts/gpu-msi-geforce-rtx-3060-ventus-2x-12g-oc-gefo.webp",
    "credit": "https://pcpartpicker.com/product/n9rRsY/msi-geforce-rtx-3060-12-gb-ventus-2x-oc-video-card-rtx-3060-ventus-2x-12g",
    "basis": [
      [
        0.43359375,
        0.578125
      ],
      [
        0.6953125,
        0.5625
      ],
      [
        0.43359375,
        0.60546875
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-oc-arc-b570": {
    "src": "img/mounts/gpu-asrock-challenger-oc-arc-b570.webp",
    "credit": "https://pcpartpicker.com/product/2D4Pxr/asrock-challenger-oc-arc-b570-10-gb-video-card-b570-cl-10go",
    "basis": [
      [
        0.1875,
        0.25625
      ],
      [
        0.8625,
        0.25625
      ],
      [
        0.1875,
        0.3125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-900-5g144-2200-000-rtx-pro-6000-bla": {
    "src": "img/mounts/gpu-nvidia-900-5g144-2200-000-rtx-pro-6000-bla.webp",
    "credit": "https://pcpartpicker.com/product/sQHp99/nvidia-900-5g144-2200-000-rtx-pro-6000-blackwell-96-gb-video-card-900-5g144-2200-000",
    "basis": [
      [
        0.2125,
        0.2670913406543125
      ],
      [
        0.7875,
        0.4311613475177305
      ],
      [
        0.2125,
        0.3233413406543125
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-intel-arc-a380-challenger-itx-arc-a": {
    "src": "img/mounts/gpu-asrock-intel-arc-a380-challenger-itx-arc-a.webp",
    "credit": "https://pcpartpicker.com/product/6zqPxr/asrock-intel-arc-a380-challenger-itx-arc-a380-6-gb-video-card-a380-cli-6go",
    "basis": [
      [
        0.1875,
        0.1375
      ],
      [
        0.8875,
        0.1375
      ],
      [
        0.1875,
        0.19375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-ventus-2x-oc-geforce-rtx-3050-6gb": {
    "src": "img/mounts/gpu-msi-ventus-2x-oc-geforce-rtx-3050-6gb.webp",
    "credit": "https://pcpartpicker.com/product/TGMMnQ/msi-ventus-2x-oc-geforce-rtx-3050-6gb-6-gb-video-card-rtx-3050-ventus-2x-6g-oc",
    "basis": [
      [
        0.44921875,
        0.6328125
      ],
      [
        0.796875,
        0.62109375
      ],
      [
        0.44921875,
        0.65625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-nvidia-founders-edition-geforce-rtx-3060-t": {
    "src": "img/mounts/gpu-nvidia-founders-edition-geforce-rtx-3060-t.webp",
    "credit": "https://pcpartpicker.com/product/wvgQzy/nvidia-geforce-rtx-3060-ti-8-gb-founders-edition-video-card-900-1g142-2520-000",
    "basis": [
      [
        0.175,
        0.26875
      ],
      [
        0.875,
        0.26875
      ],
      [
        0.175,
        0.325
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asus-dual-geforce-rtx-3060-v2-oc-edition-g": {
    "src": "img/mounts/gpu-asus-dual-geforce-rtx-3060-v2-oc-edition-g.webp",
    "credit": "https://pcpartpicker.com/product/KXYmP6/asus-geforce-rtx-3060-12-gb-dual-oc-v2-video-card-dual-rtx3060-o12g-v2",
    "basis": [
      [
        0.1625,
        0.23663375066125902
      ],
      [
        0.81875,
        0.24402662669723152
      ],
      [
        0.1625,
        0.29288375066125905
      ]
    ],
    "sampledEdge": true
  },
  "gpu-pny-vcq2000d-pb-quadro-2000d": {
    "src": "img/mounts/gpu-pny-vcq2000d-pb-quadro-2000d.webp",
    "credit": "https://pcpartpicker.com/product/fNMFf7/pny-video-card-vcq2000dpb",
    "basis": [
      [
        0.15625,
        0.424886469492315
      ],
      [
        0.85625,
        0.09303388448998584
      ],
      [
        0.15625,
        0.48113646949231503
      ]
    ],
    "sampledEdge": true
  },
  "gpu-intel-limited-edition-arc-b580": {
    "src": "img/mounts/gpu-intel-limited-edition-arc-b580.webp",
    "credit": "https://pcpartpicker.com/product/Kt62FT/intel-limited-edition-arc-b580-12-gb-video-card-31p06hb0ba",
    "basis": [
      [
        0.175,
        0.33125
      ],
      [
        0.8125,
        0.33125
      ],
      [
        0.175,
        0.384618
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-ventus-xs-oc-geforce-gtx-1660-super": {
    "src": "img/mounts/gpu-msi-ventus-xs-oc-geforce-gtx-1660-super.webp",
    "credit": "https://pcpartpicker.com/product/Z3wkcf/msi-geforce-gtx-1660-super-6-gb-ventus-xs-oc-video-card-gtx-1660-super-ventus-xs-oc",
    "basis": [
      [
        0.4296875,
        0.5859375
      ],
      [
        0.93359375,
        0.5390625
      ],
      [
        0.4296875,
        0.625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-asrock-challenger-d-arc-a750": {
    "src": "img/mounts/gpu-asrock-challenger-d-arc-a750.webp",
    "credit": "https://pcpartpicker.com/product/yyJgXL/asrock-challenger-d-arc-a750-8-gb-video-card-a750-cld-8go",
    "basis": [
      [
        0.33203125,
        0.54296875
      ],
      [
        0.92578125,
        0.40234375
      ],
      [
        0.34375,
        0.5859375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-v2-geforce-rtx-3050-": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-v2-geforce-rtx-3050-.webp",
    "credit": "https://pcpartpicker.com/product/LdYfrH/gigabyte-windforce-oc-v2-geforce-rtx-3050-6gb-6-gb-video-card-gv-n3050wf2ocv2-6gd",
    "basis": [
      [
        0.26875,
        0.31091408591408587
      ],
      [
        0.74375,
        0.30434565434565436
      ],
      [
        0.26875,
        0.3651640859140859
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-windforce-oc-rev-2-0-geforce-rtx-": {
    "src": "img/mounts/gpu-gigabyte-windforce-oc-rev-2-0-geforce-rtx-.webp",
    "credit": "https://pcpartpicker.com/product/rvNYcf/gigabyte-windforce-oc-rev-20-geforce-rtx-3060-12gb-12-gb-video-card-gv-n3060wf2oc-12gd-rev20",
    "basis": [
      [
        0.6015625,
        0.7734375
      ],
      [
        0.7734375,
        0.609375
      ],
      [
        0.6328125,
        0.80859375
      ]
    ],
    "sampledEdge": true
  },
  "gpu-gigabyte-gaming-oc-geforce-rtx-3070": {
    "src": "img/mounts/gpu-gigabyte-gaming-oc-geforce-rtx-3070.webp",
    "credit": "https://pcpartpicker.com/product/2C7p99/gigabyte-geforce-rtx-3070-8-gb-gaming-oc-video-card-gv-n3070gaming-oc8gd",
    "basis": [
      [
        0.58203125,
        0.7734375
      ],
      [
        0.91796875,
        0.59375
      ],
      [
        0.6171875,
        0.81640625
      ]
    ],
    "sampledEdge": true
  },
  "gpu-msi-geforce-rtx-3080-ventus-3x-10g-oc-gefo": {
    "src": "img/mounts/gpu-msi-geforce-rtx-3080-ventus-3x-10g-oc-gefo.webp",
    "credit": "https://pcpartpicker.com/product/ZTkgXL/msi-geforce-rtx-3080-10-gb-ventus-3x-oc-video-card-rtx-3080-ventus-3x-10g-oc",
    "basis": [
      [
        0.19375,
        0.324292071197411
      ],
      [
        0.825,
        0.32252165429278506
      ],
      [
        0.19375,
        0.375042071197411
      ]
    ],
    "sampledEdge": true
  },
  "ssd-mushkin-source-hc-16-tb": {
    "src": "img/mounts/ssd-mushkin-source-hc-16-tb.webp",
    "credit": "https://pcpartpicker.com/product/zxVmP6/mushkin-source-hc-16-tb-25-solid-state-drive-mknssdhc16tb",
    "cutout": [
      [
        0.3,
        0.1215,
        0.375,
        0.8131
      ],
      60,
      87,
      "BAA2AQMBOAICAzlHAEo7AwBNPAEETjYBBk8xAQVQMQEFUTIEBlUxAQZWFAEgVhcB"
    ]
  },
  "ssd-samsung-9100-pro-8-tb": {
    "src": "img/mounts/ssd-samsung-9100-pro-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/J6DnTW/samsung-9100-pro-8-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-mz-vap8t0bam",
    "cutout": [
      [
        0.0437,
        0.375,
        0.9125,
        0.25
      ],
      146,
      40,
      "AACLAQABjAEAApIPAhGQAQMSjwEEE44BAxSPAQIVkAEBFpEBABeSBgAdkQEAHowCACCOAQAhkgUAJosC"
    ]
  },
  "ssd-samsung-9100-pro-w-heatsink-8-tb": {
    "src": "img/mounts/ssd-samsung-9100-pro-w-heatsink-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/HdHp99/samsung-9100-pro-wheatsink-8-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-mz-vap8t0cam",
    "cutout": [
      [
        0.0437,
        0.3625,
        0.9125,
        0.2813
      ],
      146,
      45,
      "AAABASIAAgEwAAEBMwBZAQABjAEAAosBAAOMAQAEkQEABZIKAQ+RAwISkAEDE48BBBSOBAMYjwEAGZIBARqRAwAdkgIAH5EBACCNAQAhjAEAIo4BACOSBAAnkQEAKIwEACyLAQ=="
    ]
  },
  "ssd-samsung-870-evo-8-tb": {
    "src": "img/mounts/ssd-samsung-870-evo-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/F6tkcf/samsung-870-evo-8-tb-25-solid-state-drive-mz-77e8t0bam",
    "cutout": [
      [
        0.0625,
        0.0467,
        0.875,
        0.9065
      ],
      140,
      97,
      "AwCGAQIBiQEBAooBAQOLKAArjAIBLYsBAC6MMAFeigIDYIcB"
    ]
  },
  "ssd-kingston-fury-renegade-g5-8-tb": {
    "src": "img/mounts/ssd-kingston-fury-renegade-g5-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/3sgZxr/kingston-fury-renegade-g5-8-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-sfyr2d8t1",
    "cutout": [
      [
        0.0688,
        0.3812,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AQCCAQABgwEAAokBAAOKAwAGiQoBEIgBAhGIAgIThwIBFYgBABaKBQAbiQEAHIYBhxwCAQAdhAEAHoYBAB+KBAAjiQEAJIMC"
    ]
  },
  "ssd-sabrent-rocket-4-plus-8-tb": {
    "src": "img/mounts/ssd-sabrent-rocket-4-plus-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/CTTp99/sabrent-rocket-4-plus-8-tb-m2-2280-nvme-solid-state-drive-sb-rkt4p-8tb",
    "cutout": [
      [
        0.1563,
        0.3312,
        0.7,
        0.2938
      ],
      112,
      47,
      "AQADAQEBCgEBAhIBAQMaAQEEIQEBBSgBAQYwAQEHOAEBCD8BAQlHAQEKTwEBC1YBAQxdAQENZQEBDmoCARBuAQERbwECEm4BAxNtAQQUbAMDF20BARhvAgAacBEYK1gBMyw9AU4tHgFpLgEB"
    ]
  },
  "ssd-western-digital-wd-black-sn850x-8-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn850x-8-tb.webp",
    "credit": "https://pcpartpicker.com/product/mzJp99/western-digital-wd_black-sn850x-8-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds800t2x0e",
    "cutout": [
      [
        0.0187,
        0.3625,
        0.9625,
        0.2687
      ],
      154,
      43,
      "AQCQAQABkgKUAgEBAAOZAgAFmgIAB5kMAxOWBQEYmQEAGZoDAByZAwAflgGXHwEBACCTAgAilAEAI5kFACiSAw=="
    ]
  },
  "ssd-intel-d3-s4510-7-68-tb": {
    "src": "img/mounts/ssd-intel-d3-s4510-7-68-tb.webp",
    "credit": "https://pcpartpicker.com/product/dWjNnQ/intel-d3-s4510-768-tb-25-solid-state-drive-ssdsc2kb076t801",
    "cutout": [
      [
        0.1625,
        0.0889,
        0.675,
        0.8222
      ],
      108,
      74,
      "VQABAQEBaQEBAmoBAANrEAATbCoBPWsCAD9sAgBBawQBRWoDAkhoAQNJZgE="
    ]
  },
  "ssd-silicon-power-ud90-4-tb": {
    "src": "img/mounts/ssd-silicon-power-ud90-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/2BvD4D/silicon-power-ud90-4-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-sp04kgbp44ud9005",
    "cutout": [
      [
        0.0688,
        0.4,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AQCBAQABgwEAAoYBAAOJAQAEigsBD4kBAhCIAQMRhwEEEoYDAxWHAQEWiQEAF4oEABuJAQAchAOFHAEBAB+JAQAgigMAI4kBACSDAoUkAQE="
    ]
  },
  "ssd-western-digital-wd-blue-sn5000-4-tb": {
    "src": "img/mounts/ssd-western-digital-wd-blue-sn5000-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/XX88TW/western-digital-wd-blue-sn5000-4-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds400t4b0e",
    "cutout": [
      [
        0.125,
        0.3937,
        0.7688,
        0.2125
      ],
      123,
      34,
      "AAB0AgACdwF4AgEBAAN6CwEOeQECD3gBAxB3AgISeQEBE3oBABR7AwAXegEAGHkBABl1AgAbdwEAHHoDAB95AgAheAE="
    ]
  },
  "ssd-crucial-t705-4-tb": {
    "src": "img/mounts/ssd-crucial-t705-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/67FmP6/crucial-t705-4-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-ct4000t705ssd3",
    "cutout": [
      [
        0,
        0.3625,
        0.9938,
        0.2687
      ],
      159,
      43,
      "AQCWAQABlwEAAp4PARGdAQISnAEDE5sDAhacAQMXmwECGJwBABmeBgAfnwEAIJgDACOeBgAplwEBKpYB"
    ]
  },
  "ssd-samsung-990-evo-plus-4-tb": {
    "src": "img/mounts/ssd-samsung-990-evo-plus-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/HgRwrH/samsung-990-evo-plus-4-tb-m2-2280-pcie-50-x2-nvme-solid-state-drive-mz-v9s4t0bw",
    "cutout": [
      [
        0.0688,
        0.3812,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AACDAQABhAEAAooOARCJAQIRiAQBFYkBABaKBgAchQEAHYQBAB6FAQAfigUAJIQBACUMARYlbQE="
    ]
  },
  "ssd-western-digital-wd-black-sn850x-4-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn850x-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/yBC48d/western-digital-wd_black-sn850x-4-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds400t2x0e",
    "cutout": [
      [
        0.0187,
        0.3625,
        0.9625,
        0.2687
      ],
      154,
      43,
      "BQCMAQABkgEAApMBAAOZDQEQmAEAEZkBARKYAQITlwEDFJYDAheXAQEYmAEAGZkHACCTAwAjmQEAJJoCACaZAwApkgEOKoMB"
    ]
  },
  "ssd-samsung-990-pro-4-tb": {
    "src": "img/mounts/ssd-samsung-990-pro-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/RKYmP6/samsung-990-pro-4-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-mz-v9p4t0bw",
    "cutout": [
      [
        0.0688,
        0.3812,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AACDAQABhAEAAooOARCJAQIRiAQBFYkBABaKBgAchQEAHYQBAB6GAQAfigQAI4kBACSEAQElggE="
    ]
  },
  "ssd-western-digital-wd-black-sn8100-4-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn8100-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/H84Pxr/western-digital-wd_black-sn8100-4-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-wds400t1x0m",
    "cutout": [
      [
        0.0313,
        0.3688,
        0.9437,
        0.2562
      ],
      151,
      41,
      "AACPAQABkAEAApcPARGWAQMSlAUBF5YBABiXBgAelQEAH5ABACCRAQAhlgEAIpcEACaWAQAnlQEAKJMB"
    ]
  },
  "ssd-samsung-9100-pro-4-tb": {
    "src": "img/mounts/ssd-samsung-9100-pro-4-tb.webp",
    "credit": "https://pcpartpicker.com/product/PRKnTW/samsung-9100-pro-4-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-mz-vap4t0bam",
    "cutout": [
      [
        0.0688,
        0.3178,
        0.8625,
        0.3645
      ],
      138,
      39,
      "CgABAQwADAErAA0BOQBJAQABgwEAAocBAAOKDQEQiQECEYgBAxKHAgIUiAIBFokBABeKBQAchwGIHAEBAB2EAgAfhwEAIIoEACSGAQAlgwENJggBdyYIAQ=="
    ]
  },
  "ssd-kingston-kc3000-2-048-tb": {
    "src": "img/mounts/ssd-kingston-kc3000-2-048-tb.webp",
    "credit": "https://pcpartpicker.com/product/sJPQzy/kingston-kc3000-2048-tb-m2-2280-nvme-solid-state-drive-skc3000d2048g",
    "cutout": [
      [
        0.0688,
        0.31,
        0.8625,
        0.38
      ],
      138,
      38,
      "AQAcATwAAgE/AAMBAAGDAQAChgEAA4oKAA2JAgEPiAECEIcBAxGGAQQShQMDFYYBARaIAgAYiQMAG4oBAByGAQAdhAIAH4kCASGIAwAkgwEBJYIB"
    ]
  },
  "ssd-samsung-980-pro-2-tb": {
    "src": "img/mounts/ssd-samsung-980-pro-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/f3cRsY/samsung-980-pro-2-tb-m2-2280-nvme-solid-state-drive-mz-v8p2t0bam",
    "cutout": [
      [
        0.0437,
        0.375,
        0.9125,
        0.25
      ],
      146,
      40,
      "AQAMAQ4AAgETAHcBAAGLAQACkQEAA5IOAhGQAQMSjwEEE44BAxSPAgIWkAEAF5IGAB2RAQAejAIAII4BACGSBAAlkQEAJosBACeKAQ=="
    ]
  },
  "ssd-silicon-power-p34a60-2-tb": {
    "src": "img/mounts/ssd-silicon-power-p34a60-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/VxfFf7/silicon-power-p34a60-2-tb-m2-2280-pcie-30-x4-nvme-solid-state-drive-sp002tbp34a60m28",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACYAgACoBECE54BAxSdBAIYngEAGaAIACGaAQAimQEAI5oBnSMCAQAkoAYAKpgC"
    ]
  },
  "ssd-silicon-power-ud90-2-tb": {
    "src": "img/mounts/ssd-silicon-power-ud90-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/f4cG3C/silicon-power-ud90-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-sp02kgbp44ud9005",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACYAgACnAEAA6AQAhOeAQMUnQQCGJ4BABmgCAAhmQMAJKAGACqYAg=="
    ]
  },
  "ssd-crucial-e100-2-tb": {
    "src": "img/mounts/ssd-crucial-e100-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/vcvscf/crucial-e100-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-ct2000e100ssd8",
    "cutout": [
      [
        0.05,
        0.375,
        0.9063,
        0.25
      ],
      145,
      40,
      "AACFAYYAAgEAAYkBAAKQDQEPjwICEY4BAxKNBAIWjgEBF48CABmQBQAejQEAH44BACCQAgAikQIAJJACACaJAQAniAE="
    ]
  },
  "ssd-crucial-p310-w-acronis-data-recovery-2-tb": {
    "src": "img/mounts/ssd-crucial-p310-w-acronis-data-recovery-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/wV9nTW/crucial-p310-w-acronis-data-recovery-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-ct2000p310ssd801",
    "cutout": [
      [
        0.0187,
        0.3688,
        0.9625,
        0.2625
      ],
      154,
      42,
      "AACSAQABkwEAApoPARGZAQISmAEDE5cBBBSWAQMVlwICF5gBABiaBwAflgGXHwIBACCTAQAhlAEAIpoGACiTAQApkgE="
    ]
  },
  "ssd-sandisk-wd-blue-sn5100-2-tb": {
    "src": "img/mounts/ssd-sandisk-wd-blue-sn5100-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/4rPv6h/sandisk-wd-blue-sn5100-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds200t5b0e-00cpe0",
    "cutout": [
      [
        0.1625,
        0.4063,
        0.6687,
        0.1875
      ],
      107,
      30,
      "AQADAQoAWwEBAWUBAQJpAQEDagQAB2sEAQtqAgINaQEDDmgBAg9pAQEQagMAE2sCABVqAQAWaQIAGGoBABlrAgAbagEAHGkBAR1kAQ=="
    ]
  },
  "ssd-kingston-nv3-2-tb": {
    "src": "img/mounts/ssd-kingston-nv3-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/gdBzK8/kingston-nv3-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv3s2000g",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AwCUAQABmAEAApsBAAOgEAITngEDFJ0FAhmeAQAaoA8AKZsBACqYAQArlwE="
    ]
  },
  "ssd-western-digital-wd-blue-sn5000-2-tb": {
    "src": "img/mounts/ssd-western-digital-wd-blue-sn5000-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/vLGhP6/western-digital-wd-blue-sn5000-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds200t4b0e",
    "cutout": [
      [
        0.125,
        0.3937,
        0.7688,
        0.2125
      ],
      123,
      34,
      "AAB0AQABdQEAAncBeAIBAQADegsBDnkBAg94AQMQdwICEnkBARN5AQAUewMAF3oBABh5AQAZdQIAG3cBABx6AwAfeQIAIXgB"
    ]
  },
  "ssd-samsung-970-evo-plus-2-tb": {
    "src": "img/mounts/ssd-samsung-970-evo-plus-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/Fv8j4D/samsung-970-evo-plus-2-tb-m2-2280-nvme-solid-state-drive-mz-v7s2t0bam",
    "cutout": [
      [
        0.0625,
        0.3812,
        0.875,
        0.2437
      ],
      140,
      39,
      "AACFAQABhgEAAowOARCLAQIRigEDEokDAhWKAQEWiwEAF4wGAB2GAgAfiQGKHwEBACCMBQAlhQEBJgoBGCZeAYImAgE="
    ]
  },
  "ssd-crucial-p310-2-tb": {
    "src": "img/mounts/ssd-crucial-p310-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/hh4Zxr/crucial-p310-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-ct2000p310ssd8",
    "cutout": [
      [
        0.0125,
        0.3625,
        0.975,
        0.2687
      ],
      156,
      43,
      "AACUAQABlQEAApwQAhKaAQMTmQQCF5oBARibAQAZnAcAIJYBACGVAQAinAcAKZQBASqTAQ=="
    ]
  },
  "ssd-lexar-nm790-2-tb": {
    "src": "img/mounts/ssd-lexar-nm790-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/TspQzy/lexar-nm790-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-lnm790x002t-rnnng",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACXAgACmwGcAgEBAAOgEAMTnQEEFJwDAxedAQIYngEAGaAGAB+fAQAgmgEAIZgCACObAZwjAgEAJKAFACmaAQAqlwEBKwQBBiuRAQ=="
    ]
  },
  "ssd-western-digital-wd-black-sn7100-2-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn7100-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/wfMMnQ/western-digital-wd_black-sn7100-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds200t4x0e-00cja0",
    "cutout": [
      [
        0.0313,
        0.3688,
        0.9375,
        0.2625
      ],
      150,
      42,
      "AACPAQABkAEAApYPARGVAQISlAEDE5MDAhaUAQEXlQEAGJYGAB6TAQAfkAIAIZMBlCEBAQAilgUAJ5ABACiPAQQphgE="
    ]
  },
  "ssd-crucial-p510-2-tb": {
    "src": "img/mounts/ssd-crucial-p510-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/z98Pxr/crucial-p510-2-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-ct2000p510ssd8",
    "cutout": [
      [
        0.1437,
        0.4,
        0.7188,
        0.2
      ],
      115,
      32,
      "AgABAQoAAQFqAAIBAAFtAQACcgMABXMCAAdyBgENcQECDnACAhBxAgEScgEAE3IFABhxAQAZcgUAHm0BAB8BAQcfZQE="
    ]
  },
  "ssd-crucial-p3-plus-2-tb": {
    "src": "img/mounts/ssd-crucial-p3-plus-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/yGZ9TW/crucial-p3-plus-2-tb-m2-2280-nvme-solid-state-drive-ct2000p3pssd8",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.2687
      ],
      160,
      43,
      "AQALAQ0AigEAAZgBAAKcAQADoA8AEgEBAhKeAQMTnQIEFZwBAxadAgIYngEAGaAHACCeAQAhnQIAI54BnyMBAQAkoAUAKZgBACqXAQ=="
    ]
  },
  "ssd-samsung-990-evo-plus-2-tb": {
    "src": "img/mounts/ssd-samsung-990-evo-plus-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/hpqrxr/samsung-990-evo-plus-2-tb-m2-2280-pcie-50-x2-nvme-solid-state-drive-mz-v9s2t0bw",
    "cutout": [
      [
        0.0688,
        0.3812,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AACDAQABhAEAAooOARCJAQIRiAQBFYkBABaKBgAchQEAHYQBAB6FAQAfigQAI4kBACSDAQAlDAEWJW0B"
    ]
  },
  "ssd-acer-predator-gm7000-2-tb": {
    "src": "img/mounts/ssd-acer-predator-gm7000-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/Mjstt6/acer-predator-gm7000-2-tb-m2-2280-nvme-solid-state-drive-bl9bwwr106",
    "cutout": [
      [
        0,
        0.2375,
        1,
        0.5188
      ],
      160,
      83,
      "hgAFAY4AAwGBARABfQIVAXgDGgF0BB8BcAUhAWsGJwFnBy0BYwgyAV4JNwFaCjwBVgtAAVIMRAFNDUoBSQ5OAUUPUwFAEFgBPBFdATcSYgEzE2cBLxRrASsVbwEmFnUBIhd5AR0YfwEZGYMBFRqIARAbjQEMHJIBCB2WAQMemwEBH54BACCgAQEhngEBIpwBAiOZAgIlmAEDJpUBAyeSAQMojwEEKYsBBCqIAQUrhAEFLIEBBS1+AQYuegEGL3cBBjB0AQcxcAEHMm0BCDNpAQg0ZgELNWABDTZbAQ03WAEOOFQBDjlRAQ46TgENO0wBDDxKAQw9SAEMPkUBDD9CAQxAPwENQTsBDUI4AQ1DNQEORDEBDkUuAQ9GKgEPRycBD0gkARBJIAEQSh0BEEsaARFMFgERTRMBEU4QARJPDAESUAkBE1EFARNSAwE="
    ]
  },
  "ssd-samsung-990-pro-2-tb": {
    "src": "img/mounts/ssd-samsung-990-pro-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/34ytt6/samsung-990-pro-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-mz-v9p2t0bw",
    "cutout": [
      [
        0.1,
        0.3875,
        0.8,
        0.2188
      ],
      128,
      35,
      "AAB5AQABegEAAn8CAASACQENfwICD34BAxB9AgISfQEBE34DABZ/BAAaewEAG3oBABx9AQAdgAEAHn8DACF7AQAiegE="
    ]
  },
  "ssd-western-digital-black-sn770-2-tb": {
    "src": "img/mounts/ssd-western-digital-black-sn770-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/4KRYcf/western-digital-2-tb-m2-2280-nvme-solid-state-drive-wds200t3x0e",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AQCXAQABmAKaAgEBAAOgEAITngEDFJ0CBBacAQMXnQECGJ4BABmgBwAgnwEAIZ4BACKdAQAjngEAJKAFACmdAQAqmAI="
    ]
  },
  "ssd-crucial-t705-2-tb": {
    "src": "img/mounts/ssd-crucial-t705-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/WVP8TW/crucial-t705-2-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-ct2000t705ssd3",
    "cutout": [
      [
        0,
        0.3625,
        0.9938,
        0.2687
      ],
      159,
      43,
      "AQCWAQABlwEAAp4PARGdAQISnAEDE5sDAhacAQMXmwECGJwBABmeBgAfnwEAIJgDACOeBgAplwEBKpYB"
    ]
  },
  "ssd-samsung-9100-pro-2-tb": {
    "src": "img/mounts/ssd-samsung-9100-pro-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/dKXMnQ/samsung-9100-pro-2-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-mz-vap2t0bam",
    "cutout": [
      [
        0.0688,
        0.375,
        0.8625,
        0.2437
      ],
      138,
      39,
      "dwAHAQABgwEAAoUBhwICAQADig4BEYkBAhKIBAEWiQEAF4oGAB2FAQAehAEAH4cBACCKBAAkhwEAJYMC"
    ]
  },
  "ssd-western-digital-wd-black-sn850x-2-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn850x-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/crKKHx/western-digital-wd_black-sn850x-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds200t2x0e",
    "cutout": [
      [
        0.0187,
        0.3625,
        0.9625,
        0.2687
      ],
      154,
      43,
      "BQCMAQABkgEAApMBAAOZDQEQmAEAEZkBARKYAQITlwEDFJYDAheXAQEYmAEAGZkHACCTAwAjmQEAJJoCACaZAwApkgEOKoMB"
    ]
  },
  "ssd-western-digital-wd-black-sn8100-2-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn8100-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/hmFCmG/western-digital-wd_black-sn8100-2-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-wds200t1x0m",
    "cutout": [
      [
        0.0313,
        0.3688,
        0.9437,
        0.2562
      ],
      151,
      41,
      "AACPAQABkAEAApcPARGWAQMSlAUBF5YBABiXBgAelQEAH5ABACCRAQAhlgEAIpcEACaWAQAnlQEAKJMB"
    ]
  },
  "ssd-samsung-870-evo-2-tb": {
    "src": "img/mounts/ssd-samsung-870-evo-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/3CmmP6/samsung-870-evo-2-tb-25-solid-state-drive-mz-77e2t0bam",
    "cutout": [
      [
        0.0625,
        0.2,
        0.875,
        0.6062
      ],
      140,
      97,
      "AgCIAQIBiQEBAosmACiMAQEpiwEAKowzAV2LAQFeigECX4gBBGCFAQ=="
    ]
  },
  "ssd-samsung-990-pro-w-heatsink-2-tb": {
    "src": "img/mounts/ssd-samsung-990-pro-w-heatsink-2-tb.webp",
    "credit": "https://pcpartpicker.com/product/7RQcCJ/samsung-990-pro-wheatsink-2-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-mz-v9p2t0cw",
    "cutout": [
      [
        0.0688,
        0.3688,
        0.8625,
        0.2625
      ],
      138,
      42,
      "AQAJAQsAAQENAHYBAAGDAgADhAEABIoOARKJAQITiAEDFIcCAhaIAQEXiQEAGIoHAB+EAQAghQEAIYoFACaEAQAngwIBKYIB"
    ]
  },
  "ssd-pny-cs900-1-tb": {
    "src": "img/mounts/ssd-pny-cs900-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/x83mP6/pny-cs900-1-tb-25-solid-state-drive-ssd7cs900-1tb-rb",
    "cutout": [
      [
        0.125,
        0.2375,
        0.75,
        0.5188
      ],
      120,
      83,
      "EwABARUAAwEZAAEBGwAOASoABgExAD0BbwAGAQEBdgEAAnhQAVJ2AQ=="
    ]
  },
  "ssd-teamgroup-t-force-vulcan-z-1-tb": {
    "src": "img/mounts/ssd-teamgroup-t-force-vulcan-z-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/BvGbt6/teamgroup-t-force-vulcan-z-1-tb-25-solid-state-drive-t253tz001t0c101",
    "cutout": [
      [
        0,
        0.15,
        1,
        0.7
      ],
      160,
      112,
      "BAABASoAAQEuAAIBMQABAZsAAQECAZwBAQKeAQADnwEABKBpAW2eAQJunAEDb5oB"
    ]
  },
  "ssd-silicon-power-a55-1-tb": {
    "src": "img/mounts/ssd-silicon-power-a55-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/nXF48d/silicon-power-a55-1-tb-25-solid-state-drive-sp001tbss3a55s25",
    "cutout": [
      [
        0.075,
        0.2125,
        0.85,
        0.5813
      ],
      136,
      93,
      "AwCBAQEBhQEAAocBAAOIFQAYhxUBLYYSAT+FGQJYhAICWoMBA1uBAQZcfQE="
    ]
  },
  "ssd-silicon-power-p34a60-1-tb": {
    "src": "img/mounts/ssd-silicon-power-p34a60-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/drwypg/silicon-power-p34a60-1-tb-m2-2280-pcie-30-x4-nvme-solid-state-drive-su001tbp34a60m28ca",
    "cutout": [
      [
        0.1,
        0.3937,
        0.8125,
        0.225
      ],
      130,
      36,
      "AAB7AQABfwEAAoILAQ2BAwIQgAEDEX8CAhOAAQEUgQIAFoIEABp/AQAbfAEAHH0BAB2CBAAhfwGAIQEBACJ8AQAjPAE9IwMBQSMDAUUjNgE="
    ]
  },
  "ssd-patriot-p300-1-tb": {
    "src": "img/mounts/ssd-patriot-p300-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/bdsnTW/patriot-p300-1-tb-m2-2280-nvme-solid-state-drive-p300p1tbm28",
    "cutout": [
      [
        0.0625,
        0.375,
        0.875,
        0.2375
      ],
      140,
      38,
      "AQCEAQABhQEBAosCAASMAgEGiwEAB4wCAQmLAgALjAMBDosCAhCKAQMRiQQCFYoBARaLAgAYjAIBGosCARyKAQEdhQEBHoYBAR+LBQEkhQEBJYQB"
    ]
  },
  "ssd-patriot-p320-1-tb": {
    "src": "img/mounts/ssd-patriot-p320-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/sKcBD3/patriot-p320-1-tb-m2-2280-pcie-30-x4-nvme-solid-state-drive-p320p1tbm28",
    "cutout": [
      [
        0.0625,
        0.375,
        0.875,
        0.2375
      ],
      140,
      38,
      "AQB5AXsACgEAAYUBAQKLAQADjAMBBosBAAeMAgEJiwIAC4wBAQyLBAIQigEDEYkBBBKIAgMUiQICFooBAReLAQAYjAEBGYsDARyGAQEdhQIBH4sFASSEAg=="
    ]
  },
  "ssd-teamgroup-mp33-1-tb": {
    "src": "img/mounts/ssd-teamgroup-mp33-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/64MTwP/team-mp33-1-tb-m2-2280-nvme-solid-state-drive-tm8fp6001t0c101",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACYAQABmQEAApwBAAOgEAITngEDFJ0BBBWcAgMXnQECGJ4BABmgEAApnAEAKpgC"
    ]
  },
  "ssd-silicon-power-ud90-1-tb": {
    "src": "img/mounts/ssd-silicon-power-ud90-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/4kpzK8/silicon-power-ud90-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-sp01kgbp44ud9005",
    "cutout": [
      [
        0.0688,
        0.4,
        0.8625,
        0.2375
      ],
      138,
      38,
      "AQCBAQABgwEAAoYBhwICAQADigwBD4kBAhCIAQMRhwQCFYgBARaJAgAYigQAHIYBAB2EAgAfhgGHHwIBACCKAwAjiQEAJIMC"
    ]
  },
  "ssd-patriot-p400-lite-1-tb": {
    "src": "img/mounts/ssd-patriot-p400-lite-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/Xy3NnQ/patriot-p400-lite-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-p400lp1kgm28h",
    "cutout": [
      [
        0.1125,
        0.3812,
        0.7688,
        0.2125
      ],
      123,
      34,
      "AAB0AQABdQEAAnsMAQ56AQIPeQEDEHgCAhJ5AQETegEAFHsFABl2AgAbegEAHHsEACB1Ag=="
    ]
  },
  "ssd-kingston-nv2-1-tb": {
    "src": "img/mounts/ssd-kingston-nv2-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/FnYmP6/kingston-nv2-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv2s1000g",
    "cutout": [
      [
        0.0437,
        0.3688,
        0.9,
        0.25
      ],
      144,
      40,
      "AQCHAQEBiAEBAosBjQICAQEDjwgAC5ABAQyPAwIPjgIDEY0BBBKMAwMVjQECFo4DARmPBQEejgIBII8FASWLAQEmiAECJx8BKycKATYnAQE4JykBYyckAQ=="
    ]
  },
  "ssd-kingston-nv3-1-tb": {
    "src": "img/mounts/ssd-kingston-nv3-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/tmbRsY/kingston-nv3-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv3s1000g",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AwCUAQABmAEAApsBAAOgEAITngEDFJ0FAhmeAQAaoA8AKZsBACqYAQArlwE="
    ]
  },
  "ssd-teamgroup-mp44l-1-tb": {
    "src": "img/mounts/ssd-teamgroup-mp44l-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/2x4Ycf/teamgroup-mp44l-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-tm8fpk001t0c101",
    "cutout": [
      [
        0.0375,
        0.375,
        0.9313,
        0.2562
      ],
      149,
      41,
      "AACNAgACkQGSAgEBAAOUDAEPkwMCEpIBAxORAgIVkgEBFpMDABmUBQAekwQAIpQBACOVAgAllAEAJpEBkiYBAQAnjQEBKHEBdigDAXooAQF8KAIBgCgIAYsoAQE="
    ]
  },
  "ssd-samsung-990-1-tb": {
    "src": "img/mounts/ssd-samsung-990-1-tb.webp",
    "credit": "https://www.123consommables.com/115673-samsung-ssd-990-1-to-m2-nvme-pcie-40-noir.html",
    "cutout": [
      [
        0.0063,
        0.3625,
        0.9812,
        0.2687
      ],
      157,
      43,
      "AQAMARoAbAGSAAMBAAGWAQACmgEAA50NARCcAgISmwEDE5oBBBSZBAMYmgEBGZwCABudBQAgmAEAIZcCACOdBgAplgI="
    ]
  },
  "ssd-msi-spatium-m480-pro-1-tb": {
    "src": "img/mounts/ssd-msi-spatium-m480-pro-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/xVDQzy/msi-spatium-m480-pro-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-s78-440l1g0-p83",
    "cutout": [
      [
        0.0437,
        0.0187,
        0.9125,
        0.9563
      ],
      146,
      153,
      "WwAGAVsBDAFbAhIBWwMYAVsEHgFbBSUBWwYrAVsHMQFbCDcFWA06AVUOPQFSD0ABTxBDAUwRRgFJEklsBHwIAQN9KwEDfo8EAoKQAwOFjwEEho4CBIhVAVyINgEDiVYBXok0AQOKVQFhijEBAYtXBGSLLgFnjCsBao0oAW2OJQEAj1gDb48iAXKQHQF1kRkBAJJXAXiSFQEAk1YBe5MQAQCUVwF+lAwBDZVKAYCVCAEhljYBg5YEATaXIQFImAoB"
    ]
  },
  "ssd-western-digital-wd-black-sn7100-1-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn7100-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/MYP8TW/western-digital-wd_black-sn7100-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds100t4x0e-00cja0",
    "cutout": [
      [
        0.0313,
        0.3688,
        0.9437,
        0.2562
      ],
      151,
      41,
      "AACPAQABkAEAApYBAAOXDgIRlQEDEpQEAhaVAQEXlgEAGJcGAB6RAZIeBAEAH5ABACCRAQAhlgEAIpcEACaWAQAnkAEAKI8B"
    ]
  },
  "ssd-lexar-nm790-1-tb": {
    "src": "img/mounts/ssd-lexar-nm790-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/B8QKHx/lexar-nm790-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-lnm790x001t-rnnng",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACYAgACoBACEp4BAxOdBQIYngEAGaAHACCbAQAhmAEAIpkBACObAQAkoAUAKZsBACqYAQArlwE="
    ]
  },
  "ssd-sandisk-wd-blue-sn5100-1-tb": {
    "src": "img/mounts/ssd-sandisk-wd-blue-sn5100-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/YM2j4D/sandisk-wd-blue-sn5100-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds100t5b0e-00cpe0",
    "cutout": [
      [
        0.1625,
        0.4063,
        0.6687,
        0.1875
      ],
      107,
      30,
      "AQBYAV4ABwEBAWUBAQJpAQEDagUACGsBAQlqAQAKawEBC2oIABNrAgAVagEAFmkCABhqAQAZawIAG2oBABxpAQEdZAE="
    ]
  },
  "ssd-lexar-nm620-1-tb": {
    "src": "img/mounts/ssd-lexar-nm620-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/VHM48d/lexar-nm620-1-tb-m2-2280-pcie-30-x4-nvme-solid-state-drive-lnm620x001t-rnnng",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AQCXAQABmQEAAqARAhOeAQQUnAEFFZsBBBacAwAZAQECGZ4BABqgBQAfnwEAIJkBACGYAQAimQEAI6AGACmYAgErcgF0KwEB"
    ]
  },
  "ssd-crucial-p510-1-tb": {
    "src": "img/mounts/ssd-crucial-p510-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/jhjv6h/crucial-p510-1-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-ct1000p510ssd8",
    "cutout": [
      [
        0.1437,
        0.4,
        0.7188,
        0.2
      ],
      115,
      32,
      "AgABAQoAAQFqAAIBAAFtAQACcgMABXMCAAdyBgENcQECDnACAhBxAgEScgEAE3IFABhxAQAZcgUAHm0BAB8BAQcfZQE="
    ]
  },
  "ssd-crucial-p310-1-tb": {
    "src": "img/mounts/ssd-crucial-p310-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/X46NnQ/crucial-p310-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-ct1000p310ssd8",
    "cutout": [
      [
        0.0125,
        0.3625,
        0.975,
        0.2687
      ],
      156,
      43,
      "AACUAQABlQEAApwQAhKaAQMTmQQCF5oBARibAQAZnAcAIJYBACGVAQAinAcAKZQBASqTAQ=="
    ]
  },
  "ssd-samsung-990-evo-plus-1-tb": {
    "src": "img/mounts/ssd-samsung-990-evo-plus-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/XQFmP6/samsung-990-evo-plus-1-tb-m2-2280-pcie-50-x2-nvme-solid-state-drive-mz-v9s1t0bw",
    "cutout": [
      [
        0.0688,
        0.375,
        0.8625,
        0.2437
      ],
      138,
      39,
      "AQAKARcAXgGBAAIBAAGDAQAChgGIAgEBAAOKDQEQiQECEYgFARaJAQAXigYAHYUBAB6EAQAfhwEAIIoEACSJAQAlgwEBJgoBFyZeAYEmAgE="
    ]
  },
  "ssd-western-digital-wd-black-sn850x-1-tb": {
    "src": "img/mounts/ssd-western-digital-wd-black-sn850x-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/DyhFf7/western-digital-wd_black-sn850x-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds100t2x0e",
    "cutout": [
      [
        0.0187,
        0.3625,
        0.9625,
        0.2687
      ],
      154,
      43,
      "BQCMAQABkgEAApMBAAOZDQEQmAEAEZkBARKYAQITlwEDFJYDAheXAQEYmAEAGZkHACCTAwAjmQEAJJoCACaZAwApkgEOKoMB"
    ]
  },
  "ssd-samsung-9100-pro-1-tb": {
    "src": "img/mounts/ssd-samsung-9100-pro-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/yjHp99/samsung-9100-pro-1-tb-m2-2280-pcie-50-x4-nvme-solid-state-drive-mz-vap1t0bam",
    "cutout": [
      [
        0.0688,
        0.375,
        0.8625,
        0.2437
      ],
      138,
      39,
      "dwAHAQABgwEAAoUBhwICAQADig4BEYkBAhKIBAEWiQEAF4oGAB2FAQAehAEAH4cBACCKBAAkhwEAJYMC"
    ]
  },
  "ssd-samsung-990-pro-1-tb": {
    "src": "img/mounts/ssd-samsung-990-pro-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/FsqPxr/samsung-990-pro-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-mz-v9p1t0bw",
    "cutout": [
      [
        0.0688,
        0.1869,
        0.8625,
        0.6262
      ],
      138,
      67,
      "AQAIAQABEwEAAh4BAAMpAQAENAEABT8BAAZKAQAHVAEACF8BAAlpAQAKdAEAC34BAAyGAgAOhwEAD4oNARyJAQMdhwEEHoYCBSCFAwQjhgIDJYcBASaJAQAnigUALIgBAC2HAgAvigYANYYCADeEAQA4eQEAOW4BADpjAQA7WAEAPE0BAD1CAQA+NwEAPywBAEAhAQBBFwEBQgoB"
    ]
  },
  "ssd-western-digital-blue-sn580-1-tb": {
    "src": "img/mounts/ssd-western-digital-blue-sn580-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/rqhv6h/western-digital-blue-sn580-1-tb-m2-2280-pcie-40-x4-nvme-solid-state-drive-wds100t3b0e",
    "cutout": [
      [
        0.125,
        0.3937,
        0.7688,
        0.2125
      ],
      123,
      34,
      "AAB0AQABdQEAAncBeAIBAQADegsBDnkBAg94AQMQdwICEnkBARN6AQAUewMAF3oBABh5AQAZdQIAG3cBABx6AwAfeQIAIXgB"
    ]
  },
  "ssd-samsung-870-evo-1-tb": {
    "src": "img/mounts/ssd-samsung-870-evo-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/7nsnTW/samsung-870-evo-1-tb-25-solid-state-drive-mz-77e1t0bam",
    "cutout": [
      [
        0.0625,
        0.0467,
        0.875,
        0.9065
      ],
      140,
      97,
      "AwCHAQIBiQEBAooBAQOLHwAijDwBXooCAmCIAQ=="
    ]
  },
  "ssd-samsung-970-evo-plus-1-tb": {
    "src": "img/mounts/ssd-samsung-970-evo-plus-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/Zxw7YJ/samsung-970-evo-plus-1-tb-m2-2280-nvme-solid-state-drive-mz-v7s1t0bam",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AACYAgACoBECE54BAxSdAgQWnAEDF50BAhieAQAZoBAAKZ8BACqYAQArhwGTKwUB"
    ]
  },
  "ssd-samsung-980-pro-1-tb": {
    "src": "img/mounts/ssd-samsung-980-pro-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/DDWBD3/samsung-980-pro-1-tb-m2-2280-nvme-solid-state-drive-mz-v8p1t0bam",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "DAABARsAbAGUAAMBAAGYAQACmQEAA6AQAhOeAQMUnQIEFpwCAxidAQIZngEAGqAHACGZAgAjmgEAJJ8BACWgBAApngEAKpgBASuXAQ=="
    ]
  },
  "ssd-crucial-p3-plus-1-tb": {
    "src": "img/mounts/ssd-crucial-p3-plus-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/chzhP6/crucial-p3-plus-1-tb-m2-2280-nvme-solid-state-drive-ct1000p3pssd8",
    "cutout": [
      [
        0.0063,
        0.3688,
        0.9875,
        0.2625
      ],
      158,
      42,
      "AQCTAQEBlAEBApwJAAudAQEMnAYDEpoBBBOZBAMXmgEBGJwIASCbAgEinAMBJZ0CASecAQEolQEBKZQB"
    ]
  },
  "ssd-western-digital-black-sn770-1-tb": {
    "src": "img/mounts/ssd-western-digital-black-sn770-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/YVytt6/western-digital-1-tb-m2-2280-nvme-solid-state-drive-wds100t3x0e",
    "cutout": [
      [
        0.0688,
        0.3563,
        0.825,
        0.3125
      ],
      132,
      50,
      "YAAbAT0BPwEYAmwBAQODAQAEhAEBBYMOAhOCBgEZgwgBIYIBASKDAwElgAEBJn8CASiAAQEpggEEKoABEityASEsYwEwLVQBPy5FAU4vNQFdMCUBbDEWAQ=="
    ]
  },
  "ssd-silicon-power-p34a6x-1-tb": {
    "src": "img/mounts/ssd-silicon-power-p34a6x-1-tb.webp",
    "credit": "https://www.bol.com/nl/nl/p/silicon-power-a60-ssd-1tb-nvme-m-2-pcie-gen3x4-2280-solid-state-drive/9300000180152490/",
    "cutout": null
  },
  "ssd-adata-xpg-spectrix-s20g-1-tb": {
    "src": "img/mounts/ssd-adata-xpg-spectrix-s20g-1-tb.webp",
    "credit": "https://pcpartpicker.com/product/J6ytt6/adata-xpg-spectrix-s20g-1-tb-m2-2280-nvme-solid-state-drive-aspectrixs20g-1t-c",
    "cutout": [
      [
        0.0437,
        0.3563,
        0.875,
        0.3063
      ],
      140,
      49,
      "NQAEAQgBeQEFAoABBAOCAgMFhAECBoYBAgeHAQIIiQEBCYoDAAyLAQENigMAEIsCARKKDwAhiwEAIooBASOKAgEliwICJ4oBAiiJAQIphQECKoQBAyuEAQMsgwEELYEBBS5/AQcvbgF5LwIBfC8FAQ0wDAEbMB4BSTAKAVswAgE="
    ]
  },
  "ssd-patriot-p210-512-gb": {
    "src": "img/mounts/ssd-patriot-p210-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/FrZzK8/patriot-p210-512-gb-25-solid-state-drive-p210s512g25",
    "cutout": [
      [
        0.025,
        0.1625,
        0.95,
        0.675
      ],
      152,
      108,
      "AgCTAQEBlQEAApcFAAeYYQBolwIBapUBAmuSAQ=="
    ]
  },
  "ssd-silicon-power-a55-512-gb": {
    "src": "img/mounts/ssd-silicon-power-a55-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/LdgzK8/silicon-power-a55-512-gb-25-solid-state-drive-sp512gbss3a55s25",
    "cutout": [
      [
        0,
        0.1625,
        1,
        0.675
      ],
      160,
      108,
      "BACZAQMBmwECAp0BAQOeAQEEnwEABaBiAWefAQFongECaZ0BA2qbAQRrmAE="
    ]
  },
  "ssd-patriot-p300-512-gb": {
    "src": "img/mounts/ssd-patriot-p300-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/2T848d/patriot-p300-512-gb-m2-2280-nvme-solid-state-drive-p300p512gm28",
    "cutout": [
      [
        0.0625,
        0.375,
        0.875,
        0.2375
      ],
      140,
      38,
      "AQCEAQABhQEBAosCAASMAgEGiwEAB4wCAQmLAgALjAMBDosCAhCKAQMRiQQCFYoBARaLAgAYjAIBGosCARyKAQEdhQEBHoYBAR+LBQEkhQEBJYQB"
    ]
  },
  "ssd-silicon-power-p34a60-512-gb": {
    "src": "img/mounts/ssd-silicon-power-p34a60-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/94gQzy/silicon-power-p34a60-512-gb-m2-2280-pcie-30-x4-nvme-solid-state-drive-sp512gbp34a60m28",
    "cutout": [
      [
        0.05,
        0.375,
        0.9063,
        0.25
      ],
      145,
      40,
      "AACJAgACkAMABZELARCQAQIRjwEDEo4CAxSNAgIWjwEBF5ABABiRAgAakAQAHooBAB+LAQAgkAEAIZEEACWQAQAmiQEGJwIBCScNARcnAQEZJwEBGycTATAnEQFDJwIBRicGAU0nBQFTJwEBVScqAYEnAQGEJwEBhycBAQ=="
    ]
  },
  "ssd-teamgroup-t-force-g50-512-gb": {
    "src": "img/mounts/ssd-teamgroup-t-force-g50-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/vF3NnQ/teamgroup-t-force-g50-512-gb-m2-2280-pcie-40-x4-nvme-solid-state-drive-tm8ffe512g0c129",
    "cutout": [
      [
        0.1563,
        0.4063,
        0.6875,
        0.1875
      ],
      110,
      30,
      "AABoAQABagEAAm4JAQttAQAMbgMBD20BAhBsAQERbQIAE24DABZtAQAXbAEAGG0BABluAwAcbQEAHWgB"
    ]
  },
  "ssd-lexar-nm620-512-gb": {
    "src": "img/mounts/ssd-lexar-nm620-512-gb.webp",
    "credit": "https://pcpartpicker.com/product/mBnypg/lexar-nm620-512-gb-m2-2280-pcie-30-x4-nvme-solid-state-drive-lnm620x512g-rnnng",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AQCXAQABmQEAAqARAhOeAQQUnAEFFZsBBBacAwAZAQECGZ4BABqgBQAfnwEAIJkBACGYAQAimQEAI6AGACmYAgErcgF0KwEB"
    ]
  },
  "ssd-samsung-970-evo-plus-500-gb": {
    "src": "img/mounts/ssd-samsung-970-evo-plus-500-gb.webp",
    "credit": "https://pcpartpicker.com/product/TwWfrH/samsung-970-evo-plus-500-gb-m2-2280-nvme-solid-state-drive-mz-v7s500bam",
    "cutout": [
      [
        0.0437,
        0.375,
        0.9125,
        0.25
      ],
      146,
      40,
      "AACLAQABkQEAApIOARCRAQIRkAEDEo8EAhaQAQAXkgYAHZEBAB6MAgAgkgUAJZEBACaLAQEnDAEYJ2MBhycDAQ=="
    ]
  },
  "ssd-samsung-980-500-gb": {
    "src": "img/mounts/ssd-samsung-980-500-gb.webp",
    "credit": "https://pcpartpicker.com/product/m6rRsY/samsung-980-500-gb-m2-2280-nvme-solid-state-drive-mz-v8v500bam",
    "cutout": [
      [
        0.0437,
        0.375,
        0.9125,
        0.25
      ],
      146,
      40,
      "AQCJAQABiwEAApEBAAOSDgIRkAEDEo8BBBOOAgMVjwECFpABABeSBgAdkQEAHo8BAB+OAQAgjwEAIZIEACWRAQAmiwEAJ4oB"
    ]
  },
  "ssd-adata-legend-860-500-gb": {
    "src": "img/mounts/ssd-adata-legend-860-500-gb.webp",
    "credit": "https://pcpartpicker.com/product/DLV2FT/adata-legend-860-500-gb-m2-2280-pcie-40-x4-nvme-solid-state-drive-sleg-860-500gcs",
    "cutout": [
      [
        0.0437,
        0.3063,
        0.925,
        0.4
      ],
      148,
      64,
      "ewAEAXgBDAFrAhoBZgMgAVwEKgFTBTQBSQY+AT8HSQE2CFMBMwlWAScKYwEhC2kBFwx0AQ0NfgEEDogBAQ+MAQAQjQEAEY4BARKNAQETjgEBFI8BAhWOAgIXjwECGJABAxmQAgMbkQIEHY4BBB6MAgQgiQEFIYQBBSKAAQcjegEJJHQBCiVvAQsmagELJ2YBCihjAQkpYAEIKl0BBytaAQgsVAEILVABCC5MAQkvRwEJMEMBCTE/AQkyOwEKMzYBCjQyAQo1LgELNikBCzckAQs4IQELOR0BDDoXAQw7FAEMPBABDT0KAQ0+BgENPwIB"
    ]
  },
  "ssd-kingston-nv3-500-gb": {
    "src": "img/mounts/ssd-kingston-nv3-500-gb.webp",
    "credit": "https://pcpartpicker.com/product/px7scf/kingston-nv3-500-gb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv3s500g",
    "cutout": [
      [
        0,
        0.3625,
        1,
        0.275
      ],
      160,
      44,
      "AwCUAQABmAEAApsBAAOgEAITngEDFJ0FAhmeAQAaoA8AKZsBACqYAQArlwE="
    ]
  },
  "ssd-samsung-870-evo-500-gb": {
    "src": "img/mounts/ssd-samsung-870-evo-500-gb.webp",
    "credit": "https://pcpartpicker.com/product/mRpmP6/samsung-870-evo-500-gb-25-solid-state-drive-mz-77e500bam",
    "cutout": [
      [
        0.0625,
        0.2,
        0.875,
        0.6062
      ],
      140,
      97,
      "AgCIAQIBiQEBAosmACiMAQEpiwEAKowzAV2LAQFeigECX4gBBGCFAQ=="
    ]
  },
  "ssd-patriot-p210-256-gb": {
    "src": "img/mounts/ssd-patriot-p210-256-gb.webp",
    "credit": "https://pcpartpicker.com/product/kjmFf7/patriot-p210-256-gb-25-solid-state-drive-p210s256g25",
    "cutout": [
      [
        0.0187,
        0.1563,
        0.9688,
        0.6937
      ],
      155,
      111,
      "AwCVAQEBmAEBApkBAAOaAQAEm2cAa5oBAWyZAQJtlgEDbjEB"
    ]
  },
  "ssd-patriot-p300-256-gb": {
    "src": "img/mounts/ssd-patriot-p300-256-gb.webp",
    "credit": "https://pcpartpicker.com/product/rWxbt6/patriot-p300-256-gb-m2-2280-nvme-solid-state-drive-p300p256gm28",
    "cutout": [
      [
        0.05,
        0.375,
        0.9,
        0.25
      ],
      144,
      40,
      "AAAJAQ0AAQEPABEBhQADAQABiQEAAo0BjgIBAQADkAwBD48CAhGOAQMSjQQCFo4BARePAQAYkAYAHooCACCQBQAligEAJokBOicBAT4nAgFBJ0YB"
    ]
  },
  "ssd-kingston-a400-240-gb": {
    "src": "img/mounts/ssd-kingston-a400-240-gb.webp",
    "credit": "https://pcpartpicker.com/product/btDzK8/kingston-a400-240gb-25-solid-state-drive-sa400s37240g",
    "cutout": [
      [
        0,
        0.1625,
        1,
        0.6312
      ],
      160,
      101,
      "bwAFAWwBCAFpAgwBZgMQAWIEFQFfBRkBXAYdAVkHIAFWCCQBUgkpAU8KLQFMCzEBSQw1AUYNOQFDDjwBPw9BATwQRQE5EUkBNhJNATMTUQEvFFYBLBVZASkWXQEmF2EBIxhlAR8ZagEcGm4BGRtyARYcdgESHXoBDx5+AQwfggEJIIYBBiGKAQIijwEBI5EBACSSAQAlkwEAJpQBASeUAQEolQECKZUBAiqWAQMrlgIELZYBBC6XAQQvmAEFMJgBBTGZAQYymQEHM5gBCDSYAgk2lwEJN5YBCjiVAQo5kwELOpABDDuMAQw8iAENPYUBDT6CAQ4/fgEOQHwBD0F4AQ9CdQEQQ3EBEURuARFFawERRmgBEkdkARNIYQETSV4BFEpaARRLVwEVTFMBFU1SARZOTgEXT0kBGFBFARhRQwEYUkABGFM9ARlUOQEZVTYBGVY0ARtXLwEbWCwBHFkoARxaJQEdWyEBHlweAR5dGwEfXhYBH18UASBgEAEgYQ4BIWIKASFjBwEiZAMB"
    ]
  },
  "ssd-patriot-burst-elite-120-gb": {
    "src": "img/mounts/ssd-patriot-burst-elite-120-gb.webp",
    "credit": "https://pcpartpicker.com/product/tWcG3C/patriot-burst-elite-120-gb-25-solid-state-drive-pbe120gs25ssdr",
    "cutout": [
      [
        0,
        0.1437,
        1,
        0.7125
      ],
      160,
      114,
      "AwCZAQIBnAEBAp0BAAOfAgAFoGkAbp8BAW+dAQJwmwEDcX0B"
    ]
  },
  "psu-super-flower-leadex-titanium": {
    "src": "img/mounts/psu-super-flower-leadex-titanium.webp",
    "credit": "https://pcpartpicker.com/product/YNBFf7/super-flower-leadex-titanium-2800-w-80-titanium-certified-fully-modular-atx-power-supply-sf-2800f14hp",
    "cutout": [
      [
        0.0625,
        0.125,
        0.875,
        0.75
      ],
      140,
      120,
      "UAABAU4BBQFMAgkBSgMNAUkEEAFHBRQBRQYYAUQHGwFCCB8BQAkjAT4KJwE8CysBOwwuATkNMgE3DjYBNQ86ATQQPQEyEUEBMBJFAS4TSQEsFE0BKxVQASkWVAEnF1gBJRhcASMZYAEiGmMBIBtnAR4cawEcHW8BGh5yARkfcwEXIHUBFSF3ARMieQESI3kBECR7AQ4lfQEMJn8BCieBAQkoggEHKYQBBSqGAQMriAEBLIoBAC2LAgEvigMBMokIAjqIBQI/hwUCRIUBA0WDAQNGgQEDR4ABA0h+AQNJfQEDSnwBA0t6AQNMeQEETXYBBE51AQRPdAEEUHIBBFFxAQVSbgEGU2wBCFRoAQlVZgELVmMBDVdfAQ5YXQEQWVkBEVpXARNbUwEUXFEBFl1OARdeSwEZX0gBGmBFARxhQgEdYj8BH2M8ASBkOgEiZTYBI2Y0ASVnMAEmaC4BKGkqASlqKAErayUBLWwhAS5tHwEwbhsBMW8ZATJwFgE0cRMBNXIRATdzDQE4dAsBOnUHATt2BQE9dwEB"
    ]
  },
  "psu-seasonic-prime-px-2200-atx-3-2024": {
    "src": "img/mounts/psu-seasonic-prime-px-2200-atx-3-2024.webp",
    "credit": "https://pcpartpicker.com/product/kqxxFT/seasonic-prime-px-2200-atx-3-2024-2200-w-80-platinum-certified-fully-modular-atx-power-supply-atx3-prime-px-2200",
    "cutout": [
      [
        0.0375,
        0.15,
        0.925,
        0.6937
      ],
      148,
      111,
      "TwABAU0BCQFLAg0BTAMQAUoEFgFIBRwBRgYiAUMHKQFACC8BPAk3ATkKPQE3C0MBNAxKATINTwEwDlUBLg9bASsQYgEpEWcBJxJtASQTcAEiFHIBIBV0AR4WdgEbF3kBGRh6ARcZfAEVGn4BExuAARAcgwEOHYUBDB6HAQofiQEIIIsBBSGOAQMikAEBI5IBACSTBAAokggBMJEJATmQBgE/jwECQI0BAkGLAQJCigECQ4gBAkSHAQJFhQECRoQBAkeDAQJIgQECSYABAkp+AQJLfQECTHsBAk16AQJOeAECT3cBAlB1AQNRcwEDUnEBBVNuAQhUagELVWUBDVZiARBXXQESWFoBFFlWARdaUgEZW04BHFxKAR5dRgEhXkIBI18+ASZgOgEoYTYBKmIzAS1jLgEwZCoBMmUmATRmIwE3Zx4BOWgbATtpFwE+ahMBQGsPAUJsDAFEbQgBRm4FAQ=="
    ]
  },
  "psu-silverstone-hela-2050r-platinum": {
    "src": "img/mounts/psu-silverstone-hela-2050r-platinum.webp",
    "credit": "https://pcpartpicker.com/product/wzTZxr/silverstone-hela-2050r-platinum-2050-w-fully-modular-atx-power-supply-sst-ha2050r-pm",
    "cutout": [
      [
        0.025,
        0.1375,
        0.95,
        0.725
      ],
      152,
      116,
      "OgADATgBCQE2Ag8BNAMVATIEGwEwBSEBLgYnASwHLQEqCDMBKQk4AScKPgElC0QBIwxKASENUAEfDlYBHQ9cARsQYgEZEWgBFxJuARUTdAETFHoBEhV/ARAWhQEOF4oBDBiMAQoZjgEIGpABBhuSAQQclAECHZYBAB6YEQEvlwUBNJYPAkOUAgJFlQICR5QDAkqTAQJLkgECTJEBAk2QAQJOjgECT40BAlCMAQNRigEGUoYBCFOCAQtUfgEOVXoBEFZ3ARNXcwEWWG4BGVlqARtaZwEeW2MBIVxfASNdWwEmXlcBKV9TASxgTwEuYUsBMWJHATRjQwE2ZEABOWU8ATxmNwE/ZzMBQWgwAURpLAFHaigBSmsjAUxsIAFPbRwBUm4YAVVvFAFYcA8BWnEMAV1yCAFgcwQB"
    ]
  },
  "psu-seasonic-prime-tx-1600-atx-3-1": {
    "src": "img/mounts/psu-seasonic-prime-tx-1600-atx-3-1.webp",
    "credit": "https://pcpartpicker.com/product/64NYcf/seasonic-prime-tx-1600-atx-31-1600-w-80-titanium-certified-fully-modular-atx-power-supply-atx3-prime-tx-1600",
    "cutout": [
      [
        0.0313,
        0.15,
        0.9375,
        0.7
      ],
      150,
      112,
      "TgAGAUwBCwFKAhEBSAMWAUYEHAFEBSIBQgYnAT8HLgE9CDMBOwk5ATgKQAE2C0UBNAxLATINUQEvDlgBLQ9eASsQZAEoEWsBJhJwASQTcgEiFHQBIBV2AR0WeQEbF3sBGRh9ARcZfwEVGoEBEhuEARAchQEOHYcBDB6JAQkfjAEHII4BBSGQAQMikgEBI5QBACSVBwArlAMBLpMMATqSAQE7kwEBPJICAj6RAQI/kAECQI8BAkGNAQJCjAECQ4oBAkSJAQJFhwECRoYBAkeFAQJIgwECSYIBAkqAAQJLfwECTH0BA017AQNOeQEDT3gBA1B2AQNRdQEDUnMBBFNxAQhUawEKVWgBDFZkAQ9XYAERWFwBFFlYARZaVAEZW1ABG1xMAR1dSQEgXkQBIl9BASVgPAEnYTkBKmI0ASxjMQEvZC0BMWUpATNmJQE2ZyEBOGgeATtpGQE9ahYBP2sSAUJsDgFDbQsBRm4HAUhvAwE="
    ]
  },
  "psu-msi-meg-ai1600t-pcie5": {
    "src": "img/mounts/psu-msi-meg-ai1600t-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/9D2j4D/msi-meg-ai1600t-pcie5-1600-w-80-titanium-certified-fully-modular-atx-power-supply-meg-ai1600t-pcie5",
    "cutout": [
      [
        0.025,
        0.3063,
        0.9563,
        0.3875
      ],
      153,
      62,
      "OAAYAQ0BiwEAApgrAC2ZCQA2mAEBN5cBCDiQARY5fwEkOmABMTtDAT88JAFNPQUB"
    ]
  },
  "psu-seasonic-prime-tx-1600-noctua-edition": {
    "src": "img/mounts/psu-seasonic-prime-tx-1600-noctua-edition.webp",
    "credit": "https://pcpartpicker.com/product/9hDQzy/seasonic-prime-tx-1600-noctua-edition-1600-w-80-titanium-certified-fully-modular-atx-power-supply-prime-tx-1600-noctua-edition",
    "cutout": [
      [
        0.2,
        0.0748,
        0.5938,
        0.8318
      ],
      95,
      89,
      "LgABASsBBgEpAgkBJgMNASQEEAEhBRQBHwYXARwHHAEaCB8BFwkjARUKJgESCyoBEAwuAQ0NMgELDjUBCA85AQYQPAEDEUEBARJEAQATRgEAFEcBARVHAQEWSQEBF0oBARhLAQEZTAEBGk0BARtPAQEcUAEBHVEBAR5SAQEfUwEBIFUBASFWAQEiVwECI1cBAiRYAQIlWgECJlsBAidcAQIoXQUDLVwEAzFbAQQyWgcFOVkBBjpYAQc7VwEIPFYBCT1UAgo/UwELQFIBDEFRAQ1CTwEOQ04BD0RNAhFGSgESR0kBE0hIARRJRwEVSkYBFktEARdMQgEYTUABGk48ARtPOgEcUDcBHVE0AR9SMAEhUykBI1QjASZVHgEoVhkBLFcQAS1YAgE="
    ]
  },
  "psu-asus-rog-thor-1600t-gaming": {
    "src": "img/mounts/psu-asus-rog-thor-1600t-gaming.webp",
    "credit": "https://pcpartpicker.com/product/7m6p99/asus-rog-thor-1600t-gaming-1600-w-80-titanium-certified-fully-modular-atx-power-supply-90ye00k0-b0na00",
    "cutout": [
      [
        0.1812,
        0.3,
        0.6438,
        0.4625
      ],
      103,
      74,
      "JAAEASMBBgEiAg0BIwMNAR0EHwEaBSMBGQYpARYHLgEVCDQBEgk5AREKPwEOC0gBDQxKAQoNUwEKDlQBBw9dAQYQXwFmEAEBAxFkAQISZQEBE2YBABRnAQEVZgUBGmUJAiNkAQEkZQMCJ2QGAi1jBAIxYQECMmABBDNdAQc0WQEKNVQBDDZRAQ83TQESOEkBFDlFARc6QQEaOz0BHTw5AR89NQEiPjEBJT8tAShAKQEqQSUBLUIhATBDHQEzRBkBNkUUATlGEAE7Rw0BPkgJAUFJBQE="
    ]
  },
  "psu-asus-rog-thor-t3-gaming": {
    "src": "img/mounts/psu-asus-rog-thor-t3-gaming.webp",
    "credit": "https://pcpartpicker.com/product/r29nTW/asus-rog-thor-t3-gaming-1600-w-80-titanium-certified-fully-modular-atx-power-supply-rog-thor-1600t3-gaming",
    "cutout": [
      [
        0.0938,
        0.2188,
        0.8125,
        0.575
      ],
      130,
      92,
      "KwAFASoBCwEoAhIBJgMZASUEHwEjBSUBIgYsASAHMgEeCDkBHQk/ARsKRgEaC0wBGAxTARYNWgEVDl8BEw9mARIQbAEQEXIBDhJ0AQ0TdQELFHcBChV4AQgWegEHF3sBBRh9AQMZfwECGoABABuCAgEdgQMBIIADAiN/CwMufgkDN30BAzh8AQQ5egEEOnkBBDt4AgQ9dwEEPnYBBT90AQVAcwEGQXEBCUJtAQ1DaAEQRGQBFEVfARdGWwEaR1cBHUhTASFJTgEkSkoBJ0tGAStMQQEuTT0BMU45ATVPNAE4UDABO1EsAT9SJwFCUyMBRVQfAUlVGgFMVhYBT1cSAVNYDQFWWQkBWVoGAVxbAgE="
    ]
  },
  "psu-corsair-hx1500i-2025": {
    "src": "img/mounts/psu-corsair-hx1500i-2025.webp",
    "credit": "https://pcpartpicker.com/product/q98Pxr/corsair-hx1500i-2025-1500-w-80-platinum-certified-fully-modular-atx-power-supply-cp-9020309-na",
    "cutout": [
      [
        0,
        0,
        1,
        1
      ],
      160,
      130,
      "WgACAVkBBAFXAgkBVQMNAVMEEQFRBRYBTwYaAU0HHgFLCCMBSQknAUcKLAFGCy8BRAwzAUINOAFADjwBPg9AATwQRQE6EUkBOBJNATYTUgE0FFYBMhVbATAWXwEuF2MBLBhoASsZawEpGm8BJxt0ASUceAEjHXsBIR59AR8fgAEdIIIBGyGFARkihwEXI4kBFSSLARMljQERJo8BECeQAQ4okgEMKZQBCiqWAQgrmAEGLJoBBC2cAQIunQEBL54BADCfBwA3ngQBO50GAUGcAgJDmwYCSZkBAkqYAQJLlwECTJUBAk2UAQJOkgEDT48BA1COAQJRjQECUowBA1OJAQNUiAEDVYYBA1aFAQNXgwEDWIIBA1mAAQRafgEEW3wBBVx6AQZddwEIXnQBCV9xAQtgbgENYWoBD2JnARFjYwESZGEBFGVdARZmWgEYZ1YBGWhUARtpUAEdak0BH2tJASFsRgEibUMBJG5AASZvPAEocDkBKnE1AStyMwEtcy8BL3QsATF1KAEzdiUBNHciATZ4HwE4eRsBOnoXATt7FQE9fBEBP30OAUF+CgFDfwcBRIAEAUaBAQE="
    ]
  },
  "psu-lian-li-sx1200p": {
    "src": "img/mounts/psu-lian-li-sx1200p.webp",
    "credit": "https://pcpartpicker.com/product/7T9nTW/lian-li-sx1200p-1200-w-80-platinum-certified-fully-modular-atx-power-supply-sx1200pb",
    "cutout": [
      [
        0.2313,
        0.2813,
        0.525,
        0.4063
      ],
      84,
      65,
      "KwACAScBCQEjAhABHwMXARsEHgEXBSQBEwYrAQ8HMgELCDkBBwlAAQQKRQEBC0sBAAxPAQENUQEBDlMDARFSGQIqUQEDK1ABBSxOAQctSwEILkgBCi9DAQwwPwENMTwBDzI4ARAzNQESNDEBFDUsARU2KQEXNyUBGDgiARo5HgEcOhoBHTsWAR88EgEgPQ8BIj4LASQ/BwElQAQB"
    ]
  },
  "psu-asus-rog-strix-1200p-gaming": {
    "src": "img/mounts/psu-asus-rog-strix-1200p-gaming.webp",
    "credit": "https://pcpartpicker.com/product/qrDnTW/asus-rog-strix-1200p-gaming-1200-w-80-platinum-certified-fully-modular-atx-power-supply-rog-strix-1200p-gaming",
    "cutout": [
      [
        0.1313,
        0.2125,
        0.7312,
        0.5813
      ],
      117,
      93,
      "KwAFASkBDAEoAhIBJgMYASUEHgEjBSUBIQYrASAHMQEeCDgBHQk+ARsKRAEZC0sBGAxRARYNVwEVDl0BEw9iAREQZAEQEWUBDhJnAQwTaQELFGoBCRVsAQcWbgEGF28BBBhwAQIZcgEBGnMBABt0AgEdcwUBInIIAipxAgIscAcCM28EAzdtAQM4bAEDOWsCAztqAQM8aQEDPWgCAz9nAQNAZgEEQWQBBEJjAQNDZAEERGIBB0VeAQpGWgENR1cBEEhTARNJTwEWSksBGktHAR1MQwEgTT8BI047ASZPNwEpUDQBLFEwAS9SLAEyUygBNVQlAThVIQE8VhwBP1cYAUJYFAFFWREBSFoNAUtbCQFOXAUB"
    ]
  },
  "psu-corsair-hx1200i-2025": {
    "src": "img/mounts/psu-corsair-hx1200i-2025.webp",
    "credit": "https://pcpartpicker.com/product/ghjv6h/corsair-hx1200i-2025-1200-w-80-platinum-certified-fully-modular-atx-power-supply-cp-9020307-na",
    "cutout": [
      [
        0,
        0,
        1,
        1
      ],
      160,
      130,
      "WgACAVkBBAFXAgkBVQMNAVMEEQFRBRYBTwYaAU0HHgFLCCMBSQknAUgKKwFGCy8BRAwzAUINOAFADjwBPg9AATwQRQE6EUkBOBJNATYTUgE0FFYBMhVbATAWXwEuF2MBLBhoASsZawEpGm8BJxt0ASUceAEjHXsBIR59AR8fgAEdIIIBGyGFARkihwEXI4kBFSSLARMljQERJo8BECeQAQ4okgEMKZQBCiqWAQgrmAEGLJoBBC2cAQIunQEBL54BADCfBwA3ngQBO50GAUGcAgJDmwYCSZkBAkqYAQJLlwECTJUBAk2UAQJOkgEDT5ABA1COAQJRjQECUowBA1OJAQNUiAEDVYYBA1aFAQNXgwEDWIIBA1mAAQRafgEEW3wBBVx6AQZddwEIXnQBCV9xAQtgbgENYWoBD2JnARFjYwESZGEBFGVdARZmWgEYZ1YBGWhUARtpUAEdak0BH2tJASFsRgEibUMBJG5AASZvPAEocDkBKnE1AStyMwEtcy8BL3QsATF1KAEzdiUBNHciATZ4HwE4eRsBOnoXATt7FQE9fBEBP30OAUF+CgFDfwcBRIAEAUaBAQE="
    ]
  },
  "psu-be-quiet-dark-power-14": {
    "src": "img/mounts/psu-be-quiet-dark-power-14.webp",
    "credit": "https://pcpartpicker.com/product/fcPv6h/be-quiet-dark-power-14-1200-w-80-titanium-certified-fully-modular-atx-power-supply-bp021us",
    "cutout": [
      [
        0.2125,
        0.2125,
        0.5625,
        0.5813
      ],
      90,
      93,
      "PAAHATcBEAEyAhgBLAMiAScEKwEiBTMBHAY9ARcHQwESCEgBDAlOAQYKVAEBC1kBAAxaQwRPVgEIUFIBDVFNARFSSQEWU0MBGlQ/AR9VNwEjVjABKFcnASxYIQExWRgBNVoRATpbCQE+XAIB"
    ]
  },
  "psu-msi-mpg-a1000gs-pcie5-ii": {
    "src": "img/mounts/psu-msi-mpg-a1000gs-pcie5-ii.webp",
    "credit": "https://br.msi.com/Power-Supply/MPG-A1000GS-PCIE5-II/Gallery",
    "cutout": [
      [
        0.1062,
        0.0703,
        0.7875,
        0.6797
      ]
    ]
  },
  "psu-msi-mag-a1000gl-pcie5": {
    "src": "img/mounts/psu-msi-mag-a1000gl-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/gR9wrH/msi-mag-a1000gl-pcie5-1000-w-80-gold-certified-fully-modular-atx-power-supply-mag-a1000gl-pcie5",
    "cutout": [
      [
        0.1187,
        0.2437,
        0.7625,
        0.5125
      ],
      122,
      82,
      "OwAEATYBDQEyAhcBLgMgASkEKgElBTQBIAY+ARsHSQEXCFIBEgleAQ0KaQEJC3EBBAx2AQANehEBHnkIASZ4EAI2dwQCOnYBAjtzAQM8cAEFPWsBCD5mAQs/YQEOQFsBEUFWARNCUQEWQ0wBGURGARxFQQEfRjwBIUc3ASRIMgEnSSwBKUooASxLIwEvTB0BMk0YATVOEgE3Tw4BOlAJAT1RAwE="
    ]
  },
  "psu-be-quiet-pure-power-13-m": {
    "src": "img/mounts/psu-be-quiet-pure-power-13-m.webp",
    "credit": "https://pcpartpicker.com/product/PJpD4D/be-quiet-pure-power-13-m-1000-w-80-gold-certified-fully-modular-atx-power-supply-bp028us",
    "cutout": [
      [
        0.0437,
        0,
        0.9125,
        0.9938
      ],
      146,
      159,
      "ZAACAWIBBgFdAg8BWAMYAVIEIQFNBSoBSAYzAUMHOwE9CEUBOAlNATMKVgEtC2ABKAxnASMNbgEdDnUBGA96ARMQfwENEYUBCBKKAQMTjwEAFJJIAVyRHQB5khACiZABB4qLAQuLhwEQjIIBFI1+ARmOeQEej3MBIpBvASeRaAErkmIBMJNZATSUUgE5lUoBPZZDAUKXOwFGmDQBS5ksAU+aJQFUmxwBWJwVAV2dDQFhngYB"
    ]
  },
  "psu-corsair-rm1000e-2025": {
    "src": "img/mounts/psu-corsair-rm1000e-2025.webp",
    "credit": "https://pcpartpicker.com/product/B8YfrH/corsair-rm1000e-2025-1000-w-fully-modular-atx-power-supply-cp-9020297-na",
    "cutout": [
      [
        0.0813,
        0.2125,
        0.8313,
        0.6
      ],
      133,
      96,
      "QAAFAT0BCwE6AhEBNwMXATMEHgEwBSUBLQYrASoHMQEmCDgBIwk/ASAKRQEdC0sBGQxSARYNWQETDl8BEA9lAQwQbAEJEXIBBhJ5AQMTfwECFIEBARWCAQEWgwEAF4UBARiEAQAZhQEBGoQHASGDAgEjhAkBLIMXAkOCAgJFgQEDRn8BA0d+AQVIegEISXUBC0pvAQ1LagEQTGUBE01fARVOWgEYT1UBG1BPAR1RSgEgUkUBI1M/ASVUOgEoVTUBK1YvAS1XKgEwWCUBMlkgATVaGgE4WxUBO1wPAT1dCgFAXgUBQl8BAQ=="
    ]
  },
  "psu-lian-li-edge-gold": {
    "src": "img/mounts/psu-lian-li-edge-gold.webp",
    "credit": "https://pcpartpicker.com/product/pyXMnQ/lian-li-edge-gold-1000-w-80-gold-certified-fully-modular-atx-power-supply-eg1000g-white",
    "cutout": [
      [
        0.05,
        0.0938,
        0.9,
        0.8063
      ],
      144,
      129,
      "bQACAWcBCQFxAQIBXwIWAVgDHwFSBCcBSwUwAUQGAgFHBjYBPAdEATUITQEvCVUBKApeASALaAEaDHABEg16AQoOhAEDD40BABCQAQARjwIAE44BABSNAQEVjAoBH40KASmMBAItiwECLooBAi+JCAI3igMCOokBAjuIBgNBiAwDTYcNA1qGCgNkhQYEai0BM2pVAQRrKwE0a1MBBGwpATVsTgEEbRoBI20JATRtSwEEbhcBJG4HAzRuSAEFbxEBNG9EAQZwCwE0cEEBBnEHASVxBwE0cT0BB3IDASZyBQE0cjoBJ3MEATRzNgEodAMBNHQzASl1AgE0dS8BKnYBAjN2LQE0dygBNXgjATR5IQEzeh4BM3sbATR8FwE1fRIBNn4NATd/CQE4gAQB"
    ]
  },
  "psu-be-quiet-power-zone-2": {
    "src": "img/mounts/psu-be-quiet-power-zone-2.webp",
    "credit": "https://pcpartpicker.com/product/vgJBD3/be-quiet-power-zone-2-1000-w-80-platinum-certified-fully-modular-atx-power-supply-bp008us",
    "cutout": [
      [
        0,
        0.1,
        1,
        0.8
      ],
      160,
      128,
      "AQBPAQABfRgBGXwEAR17EQIuewECL4sBAjCeHQJNnQkCVpwBA1ebAwRamgEKW5QBFVyJASBdfgErXnMBN19nAUJgXAFMYVIOTW9RBE1zUAFNdE8CUnZJAVl3QQFgeDoBZ3kyAW56KgF1eyMBfHwbAYN9EwGKfgwBkX8EAQ=="
    ]
  },
  "psu-corsair-rm1000x-2024": {
    "src": "img/mounts/psu-corsair-rm1000x-2024.webp",
    "credit": "https://pcpartpicker.com/product/XZsV3C/corsair-rm1000x-2024-1000-w-fully-modular-atx-power-supply-cp-9020271-na",
    "cutout": [
      [
        0.175,
        0.2375,
        0.6438,
        0.5125
      ],
      103,
      82,
      "NgAEATQBCAExAg0BLgMSASwEFwEpBRwBJwYgASQHJQEiCCkBHwkvARwKNAEaCzgBFww9ARUNQgESDkcBEA9LAQ0QUAEKEVUBCBJaAQUTXwEDFGMBABVnDwEkZgMBJ2UPAjZkAQI3YgEDOF8BBDlcAQY6WAEIO1QBCTxRAQs9TQENPkkBDz9FARBAQgESQT4BFEI6ARVDNwEXRDMBGUUvARpGLAEcRygBHkgkAR9JIQEhSh0BI0sZASVMFQEmTRIBKE4OASpPCgErUAcBLVEDAQ=="
    ]
  },
  "psu-corsair-rm1000x-shift": {
    "src": "img/mounts/psu-corsair-rm1000x-shift.webp",
    "credit": "https://pcpartpicker.com/product/NrxxFT/corsair-rm1000x-shift-1000-w-80-gold-certified-fully-modular-side-interface-atx-power-supply-cp-9020253-na",
    "cutout": [
      [
        0.0187,
        0.1187,
        0.9625,
        0.7562
      ],
      154,
      121,
      "UgACAVABBgFOAgsBSwMRAUkEFgFHBRsBRAYhAUIHJgFACCsBPQkxATsKNgE5CzsBNgxBATQNRgEyDkwBLw9SAS0QVwEqEV0BKBJiASYTZwEjFG0BIRVzAR8WeAEcF3wBGhh+ARgZgQEVGoUBExuHARAcigEOHYwBDB6OAQkfkQEHIJMBBCGWAQMilwEBI5kCACWaEwE4mQwBRJgBAEWXAQBGlgEBR5MBAUiSAQFJkAEBSo8BAUuNAQFMjAEBTYoBAU6JAQFPhwECUIUBAlGDAQNSgQEEU34BBlR7AQhVdwEKVnQBC1dxAQ1YbgEPWWoBEVpnARNbYwEVXGABFl1dARheWgEaX1YBHGBTAR5hTwEfYk0BIWNJASNkRgElZUIBJ2Y/AShnPAEqaDkBLGk1AS5qMgEway4BMWwsATNtKAE1biUBN28hATlwHgE6cRsBPHIYAT5zFAFAdBEBQnUOAUN2CwFFdwcBR3gEAQ=="
    ]
  },
  "psu-asus-tuf-gaming-1000g": {
    "src": "img/mounts/psu-asus-tuf-gaming-1000g.webp",
    "credit": "https://pcpartpicker.com/product/wR2WGX/asus-tuf-gaming-1000g-1000-w-80-gold-certified-fully-modular-atx-power-supply-90ye00s1-b0na00",
    "cutout": [
      [
        0.0688,
        0.1437,
        0.8625,
        0.7125
      ],
      138,
      114,
      "OAADATYBCQE1Ag0BMwMTATEEGQEvBR4BLgYjASwHKAEqCC4BKQkzAScKOAElCz4BJAxCASINSAEgDk4BHg9UAR0QWAEbEV4BGRJkARcTaQEWFG4BFBVzARIWeAERF3kBDxh7AQ0ZfQELGn8BChuAAQgcggEGHYQBBR6FAQMfhwEBIIkDACOKBQAoiQsBM4gFATiHBwI/hgICQYUEAkWEAgJHgwECSIEBA0l/AQNKfgEDS30BA0x8AQNNewEDTnoBBE94AQVQdgEFUXUBB1JyAQlTbwEMVGsBDlVoARFWZAETV2EBFlhcARhZWQEbWlUBHVtSASBcTgEiXUsBJV5HASdfRAEqYEABLGE9AS9iOQExYzYBNGQyATZlLwE5ZisBO2cnAT5oIwFAaSABQ2ocAUVrGQFIbBUBSm0SAU1uDgFQbwoBUnAHAVRxBAE="
    ]
  },
  "psu-corsair-sf1000-2024": {
    "src": "img/mounts/psu-corsair-sf1000-2024.webp",
    "credit": "https://pcpartpicker.com/product/Y4zXsY/corsair-sf1000-2024-1000-w-80-platinum-certified-fully-modular-sfx-power-supply-cp-9020257",
    "cutout": [
      [
        0.0625,
        0.1875,
        0.8688,
        0.6188
      ],
      139,
      99,
      "PQADATkBCgE2AhABMwMWATAEHAEtBSIBKgYoASYHLwEjCDYBIAk8AR0KQgEaC0gBFgxPARMNVQEQDlwBDQ9iAQoQaAEHEW4BAxJ1AQATewEAFH4BABWCAQAWhQEAF4gBABiLEwErihkBRIkBAUWKAwNIiAEGSYUBCEqDAQtLgAEOTHwBEE15ARNOcwEWT20BGVBoARtRYwEeUl0BIVNYASRUUgEmVU0BKVZIASxXQgEuWD0BMVk3ATRaMgE3WywBOVwnATxdIgE/XhwBQV8XAURgEgFHYQwBSmIGAQ=="
    ]
  },
  "psu-be-quiet-dark-power-13": {
    "src": "img/mounts/psu-be-quiet-dark-power-13.webp",
    "credit": "https://pcpartpicker.com/product/Yqqrxr/be-quiet-dark-power-13-1000-w-80-titanium-certified-fully-modular-atx-power-supply-bn661",
    "cutout": [
      [
        0.0125,
        0,
        0.9688,
        1
      ],
      155,
      160,
      "aQAFAWUBDAFgAhUBWwMeAVUEKAFQBTABSgY6AUUHQwE/CE0BOglWATQKYAEvC2kBKQxyASQNdwEeDn0BGQ+CARMQiAEOEY0BCBKTAQMTmAEAFJtaAG6aAQBvmwEAcJoZBImWAQmKkQEOi4wBEoyIAReNgwEcjn4BII96ASWQdQEqkXABLpJpATOTYQE4lFgBPJVRAUGWSQFGl0ABS5g4AU+ZMQFUmigBWZsgAV2cGAFinRABZ54IAWqfAgE="
    ]
  },
  "psu-asus-rog-strix": {
    "src": "img/mounts/psu-asus-rog-strix.webp",
    "credit": "https://pcpartpicker.com/product/kHBFf7/asus-rog-strix-1000-w-80-platinum-certified-fully-modular-atx-power-supply-90ye00w1-b0na00",
    "cutout": [
      [
        0.0187,
        0.1625,
        0.9625,
        0.775
      ],
      154,
      124,
      "OAAEATcBCgE2Ag8BNAMWATIEHQExBSQBLwYqAS4HLwEsCDYBKgk9ASkKQgEnC0kBJgxPASQNVgEiDlwBIQ9iAR8QaQEeEW4BHBJ1ARoTfAEZFIEBFxWDARUWhQEUF4YBEhiIAREZiQEPGosBDRuMAQwcjQEKHY8BCB6RAQcfkgEFIJQBAyGWAQEimAEAI5kBACSYCgAulwEBL5YIATeVBQI8lAYCQpMFAkeSAgJJkQEDSo8CA0yOAQNNjQEDTowBA0+LAgNRigEDUokBA1OIAgNVhwEEVoUBBFeEAQRYgwIEWoIBBlt/AQlcewEMXXgBEF5zARNfbwEWYGsBGWFnARxiZAEfY2ABImRcASZlVwEpZlQBLGdQAS9oTAEyaUgBNWpFAThrQQE7bD0BP204AUJuNAFFbzEBSHAtAUtxKQFOciUBUXMhAVR0HgFXdRoBWnYWAV53EQFheA4BZHkKAWd6BgFqewIB"
    ]
  },
  "psu-asus-rog-strix-1000p-gaming": {
    "src": "img/mounts/psu-asus-rog-strix-1000p-gaming.webp",
    "credit": "https://pcpartpicker.com/product/zn9nTW/asus-rog-strix-1000p-gaming-1000-w-80-platinum-certified-fully-modular-atx-power-supply-rog-strix-1000p-gaming-white",
    "cutout": [
      [
        0.1313,
        0.2188,
        0.7312,
        0.5687
      ],
      117,
      91,
      "KgAEASgBCgEzAQIBJwIVASUDGgFAAwQBJAQiAUgEAwEiBS0BUQUEASEGOgEfB0UBHQhPARwJVwEaClsBGQtcARcMXgEVDWABFA5hARMPYgEREGQBEBFlAQ4SZwEME2kBChRrAQgVbQEHFm4BBRdwAQQYcQECGXMBABp1BgEgdAoCKnMGAjByAQIxcwECMnIBAjNxAQM0cAEDNW8BAzZuAgM4bQEDOWwCAztrAQM8agIDPmkBBD9nAgRBZgEEQmUCBERkAQRFYwEGRmABCUddAQ5IVwESSVIBFkpOARpLSQEeTEQBIk0/ASZOOwEqTzYBLlAxATJRLQE2UigBOlMjAT5UHwFCVRoBRlYVAUpXEAFOWAwBUlkHAVZaAgE="
    ]
  },
  "psu-be-quiet-straight-power-11-1000w": {
    "src": "img/mounts/psu-be-quiet-straight-power-11-1000w.webp",
    "credit": "https://pcpartpicker.com/product/VrrmP6/be-quiet-straight-power-11-1000w-80-gold-certified-fully-modular-atx-power-supply-bn285",
    "cutout": [
      [
        0.0063,
        0.1313,
        0.9812,
        0.7375
      ],
      157,
      118,
      "ZAACAWABCAFaAhABVAMYAU4EIAFIBSgBQgYwATsHOQE0CEIBLQlLASYKVAEhC1sBGgxjARQNawEODnMBCA97AQIQgwEAEYcBABKJAQETigEBFIwBARWOAQEWkAEBF5IBARiUAQEZlgEBGpgBARuaAQEcnAcCI5sLAi6aBQMzmQ0EQJgCBEKXBQVHlgEGSJUBB0mUAghLkwEJTJIBCk2RAQtOkAIMUI4BDVGNAQ5SjAEPU4sCEFWKARFWhQESV4EBE1h9ARNZeQEUWnUBFVtwARZcbAEXXWcBF15kARhfXwEZYFsBGmFWARtiUgEbY08BHGRKAR1lRQEeZkEBH2c9AR9oOQEgaTUBIWowASJrLAEjbCcBI20kASRuHwElbxsBJnAWASdxEgEncg4BKHMKASl0BgEqdQEB"
    ]
  },
  "psu-corsair-rm1000x": {
    "src": "img/mounts/psu-corsair-rm1000x.webp",
    "credit": "https://pcpartpicker.com/product/Vq38TW/corsair-rm1000x-1000-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020094-na",
    "cutout": [
      [
        0,
        0.1375,
        1,
        0.725
      ],
      160,
      116,
      "ZQADAWABCgFbAhABVwMWAVIEHQFNBSQBSAYrAUMHMQE/CDcBOgk+ATUKRQEwC0sBLAxRAScNWAEiDl8BHQ9lARkQawEUEXIBDxJ5AQoTgAEGFIUBARWMAQAWjwEAF5EBABiSAQAZlAEAGpYBABuYAQAcmQEAHZsBAB6dAQAfngIAIZ8BACKgDAAunwUAM54GATmdBwFAnAQCRJsDAkeaAQNImQEDSZoBBEqYAQVLlwEGTJYBB02VAQlOkwEKT5IBC1CRAQxRkAENUo4BDlOMAQ9UiQEQVYUBEVaAARJXfAETWHgBFFl0ARVabwEWW2sBF1xnARhdYwEaXl0BG19ZARxgVQEdYVEBHmJMAR9jSAEgZEQBIWVAASJmOwEjZzcBJGgzASVpLwEmaisBJ2smAShsIgEpbR4BKm4ZASxvFAEtcBABLnEMAS9yBwEwcwMB"
    ]
  },
  "psu-asrock-pro-850g": {
    "src": "img/mounts/psu-asrock-pro-850g.webp",
    "credit": "https://pcpartpicker.com/product/vPdMnQ/asrock-pro-850g-850-w-80-gold-certified-atx-power-supply-pro-850g",
    "cutout": [
      [
        0.125,
        0.2375,
        0.7438,
        0.525
      ],
      119,
      84,
      "YQAFAWoAAgE1ATEBagEDASoCPQFpAgQBKANFAScERwElBUkBJAZKASMHSwEhCE0BIAlOAR8KUAEdC1IBHAxTARoNVQEZDlYBGA9XARYQWgEVEVsBExJdARITXgERFF8BDxVhAQ4WYwEMF2UBCxhmAQkZaAEIGmkBBxtqAQUcbQEEHW4BAh5wAQEfcQMAInMEASZyBAIqcAICLG8BAy1tAQMubAEDL2sCBDFpAQQyaAEEM2cBBTRmAQU1ZQEFNmQBBTdsAQY4cQEGOXACBztvBAg/bgMJQmwDCkVrAQpGUwFfRhYBCkdSAWFHEwEKSFEBZEgQAQtJTwJmSQ0BaEoLAQtLTgFqSwgBDExMAW5MBAEUTUMBHU45ASdPLwEwUCUBOlEaAUNSEAFNUwYB"
    ]
  },
  "psu-asrock-steel-legend-sl-850g": {
    "src": "img/mounts/psu-asrock-steel-legend-sl-850g.webp",
    "credit": "https://pcpartpicker.com/product/nCpQzy/asrock-steel-legend-sl-850g-850-w-80-gold-certified-fully-modular-atx-power-supply-sl-850g",
    "cutout": [
      [
        0.05,
        0.2437,
        0.9,
        0.5125
      ],
      144,
      82,
      "AACPAQABkAYAB48BAAiQAQEJjgEACo8BAAuQRQFQjgECUYEBhFEJAQ=="
    ]
  },
  "psu-asrock-steel-legend-sl-850gw": {
    "src": "img/mounts/psu-asrock-steel-legend-sl-850gw.webp",
    "credit": "https://pcpartpicker.com/product/fGBzK8/asrock-steel-legend-sl-850gw-850-w-80-gold-certified-fully-modular-atx-power-supply-sl-850gw",
    "cutout": [
      [
        0.1313,
        0.1625,
        0.7375,
        0.7063
      ],
      118,
      113,
      "DAABARIAAQEYAAEBKwAiAU4AAwFTAAMBWAABAVoACgFsAAEBLQEeAU8BAQFUAQEBLgIcAS0DHAEsBB4BJQUBASgFAQEqBSMBUAUBAVMFAQEkBioBTwYGAVwGAQEhBzMBWwcBARYIAQEbCAEBIAg1ARcJAQEcCQEBHwk5ARgKAQEbCj4BWwoBAW0KAQEXC0YBFgxHAQYNAQIODQEBEQ0BARMNAQEVDUkBYA0BAWUNAQFqDQEBbQ0BAQ8OUwFkDgMBaQ4HAQYPAgEQD2ACBhABAgoRAQEPEWEBBhICAQkSAwEOEmIBBhNqAwYWaQEHF2cBCBhmAQcZaAEIGmYBBxtmAQgcZgEHHWcBBx5oAQgfZgEHIGgBCCFmAgcjaAEIJGcBByVoAggnZgEHKGcBByloAQYqaQEHK2gBCCxmAQctaAIGL2gBBjBpAQYxaAIGM2kBBzRnAQY1aQEGNmgBBzdnAQY4aQEHOWcBBjppAgc8aQEGPWkBBj5oAQY/aQIHQWkBBkJpAQdDaQEGRGoCBkZpAQZHag4GVWsBBlZqCQZfawIGYWoBBmJrAgZkagEGZWsBB2ZpAQdnaAIIaWYBCWpkARNrBwFcawUBYmsBAXJuAgEJbwEBMW9FAQBwdgE="
    ]
  },
  "psu-montech-century-ii": {
    "src": "img/mounts/psu-montech-century-ii.webp",
    "credit": "https://pcpartpicker.com/product/sqbypg/montech-century-ii-850-w-80-gold-certified-fully-modular-atx-power-supply-century-ii-850w",
    "cutout": [
      [
        0.1,
        0.1187,
        0.875,
        0.8313
      ],
      140,
      133,
      "FQAEAQ8BLAEJAlUBBANtAQAEcTwAQHIBAEF0AQNCcgEGQ3EBCURvAQ1FJwE+RTwBEEYaAT1GPgETRwwBOkdDATpIRAE6SUYBO0pGATtLSAE7TEkBO01LATxOSwE8T00BPFBOATxRUAE9Uk8BPVNOAz1WTQE+V0wDPlpLAT9bSgM/XkkBQF9IAUFgRwFCYUYBQmJFAUNjRAFEZEMBRWVCAUVmQQFGZ0ABR2g/AUdpPgFIajwBSWs5AUpsNwFKbTUBS24yAUxvMAFMcC4BTXEsAU5yKQFPcycBT3QlAVB1IwFRdiABUnceAVJ4HAFTeRoBVHoXAVR7FgFVfBMBVn0RAVd+DgFXfwwBWIAKAVmBBwFaggUBWoMDAVuEAQE="
    ]
  },
  "psu-thermaltake-toughpower-gt": {
    "src": "img/mounts/psu-thermaltake-toughpower-gt.webp",
    "credit": "https://pcpartpicker.com/product/862j4D/thermaltake-toughpower-gt-850-w-80-gold-certified-fully-modular-atx-power-supply-ps-tpt-0850fnfagu-w",
    "cutout": [
      [
        0.1625,
        0.2188,
        0.6687,
        0.5875
      ],
      107,
      94,
      "NwADATUBBwEyAgwBMAMRAS0EFgEqBRsBKAYgASUHJQEiCCoBIAkuAR0KNAEbCzgBGAw9ARUNQwESDkgBEA9MAQ0QUgELEVYBCBJcAQYTYAECFGYBABVqAQAWawECF2UBBBhiAQUZXwEGGlwBCBtYAQocVQELHVIBDR5OAQ4fTAEQIEgBESFFARMiQQEUIz8BFiQ7ARclOAEZJjUBGycxAR0oLQEeKSsBHyooASErIwEjLCABJS0CASotFwErLhQBLC8SAS0wDwEEMQECMDECATMxBgE0MgIBBDMCATQzAQFUMwEBBDQDATQ0AgFHNAEBUTQFAV00AQEFNQQBMzUDATg1AgJBNQIBRTUEAU81CAFZNQEBXDUDAQc2AwEyNgUBPDYCAUA2DAFNNgoBWDYCAVw2AgEJNwIBMjcIATs3GgEDOAIBCjgDATI4IgEEOQIBCzkDATI5IwEFOgIBDToCATM6IwQGOwMBDjsCAQc8AwEQPAIBCD0DARE9AgEJPgQBEj4CATM+JAEKPwQBFD8CATM/IwEMQAMBFUACATNAIgQNQQQBFkECAQ5CBAEYQgIBD0MEARlDAgERRAQBM0QgAxJFBAEdRQEBE0YEAR1GAgEURwQBHkcCATNHHwEWSAMBH0gDATNIHQFSSAEBF0kEASFJAgEzSRwBGEoEASNKAQEzSh0BGksEASRLAgEzSxsBG0wEASVMAgEzTBoBHE0EASZNAwEyTRkBHU4EASdOAwEyThgBH08EAShPAwEyTxYBIFAEASpQAwEyUBUBIVEEAStRAwEyURMBIlIFASxSAwEyUhIBJFMEAS5TAQEyUxABJVQEATJUDwEnVQQBMlUNAShWBAEyVgwBKVcEATJXCwEqWAQBMlgJASxZBAExWQkBLVoLAS5bCAEwXAUBMV0CAQ=="
    ]
  },
  "psu-nzxt-c850-core": {
    "src": "img/mounts/psu-nzxt-c850-core.webp",
    "credit": "https://pcpartpicker.com/product/cDTFf7/nzxt-c850-core-850-w-80-gold-certified-fully-modular-atx-power-supply-pa-8g3bb-us",
    "cutout": [
      [
        0.1187,
        0.0437,
        0.7625,
        0.9063
      ],
      122,
      145,
      "UAACAU0BBwFKAg0BRwMSAUQEGAFBBR0BPgYiATsHJwE4CCwBNQkyATIKNwEvCzwBLQxAASoNRQEnDksBJA9QASEQVQEeEVoBGxJeARgTYQEVFGUBEhVoAQ8WawEMF24BChhwAQcZcwEEGnYBARt4AQAceQoBJngEASp3EAI6dgICPHUSA05zFARicgIEZHEHBGtwAQRsbgEEbWwBBG5qAQRvaAEEcGYBBHFkAQRyYgEEc2ABBHReAQR1XAEEdloBBXdXAQZ4VAEIeVABCXpMAQp7SQELfEYBDX1CAQ5+PwEPfzwBEYA4ARKBNQETgjIBFYMuARaEKwEYhScBGYYkARqHIQEciB0BHYkaAR6KFwEgixIBIYwPASKNDAEkjggBJY8FASeQAQE="
    ]
  },
  "psu-msi-mag-a850gl-pcie5": {
    "src": "img/mounts/psu-msi-mag-a850gl-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/zF4Zxr/msi-mag-a850gl-pcie5-850-w-80-gold-certified-fully-modular-atx-power-supply-mag-a850gl-pcie5",
    "cutout": [
      [
        0,
        0.0563,
        1,
        0.8875
      ],
      160,
      142,
      "RQADAUQBBwFCAgwBQQMQAUAEFAE+BRkBPQYdATsHIgE6CCYBOAkrATcKLwE2CzMBNAw4ATMNPAExDkEBMA9FAS4QSgEtEU4BLBJSASoTVgEpFFoBJxVfASYWYwElF2cBIxhsASIZcAEgGnUBHxt5AR4cfQEcHYIBGx6FARkfhwEYIIgBFyGJARUiiwEUI4wBEiSOAREljwEQJpABDieSAQ0okwELKZUBCiqWAQkrlwEHLJkBBi2aAQQunAEDL50BAjCeAQAxoBABQZ4IAkmdBgJPnAICUZ0EAlWcAQJWmwECV5oBA1iYAQNZlwEDWpYBA1uVAQNclAEDXZIBA16RAQNfkAEDYI8BA2GOAQNijQEDY4wBA2SKAQRliAEDZogBBGeGAQRohQEEaYQBBWqBAQdrfgEKbHoBDG13AQ5udAERb3ABE3BtARZxaAEYcmUBG3NhAR10XgEgdVoBInZXASV3UwEneE8BKnlLASx6SAEve0QBMXxBATR9PQE2fjoBOH82ATuAMgE9gS8BQIIrAUKDKAFFhCQBR4UhAUqGHAFMhxkBT4gVAVGJEgFUig4BVosLAVmMBgFbjQMB"
    ]
  },
  "psu-corsair-rm850e-2025": {
    "src": "img/mounts/psu-corsair-rm850e-2025.webp",
    "credit": "https://pcpartpicker.com/product/zBbypg/corsair-rm850e-2025-850-w-fully-modular-atx-power-supply-cp-9020296-na",
    "cutout": [
      [
        0.0813,
        0.2125,
        0.8313,
        0.6
      ],
      133,
      96,
      "QAAFAT0BCwE6AhEBNwMXATMEHgEwBSUBLQYrASoHMQEnCDcBIwk+ASAKRQEdC0sBGQxSARYNWQETDl8BEA9lAQwQbAEJEXIBBhJ5AQMTfwECFIEBARWCAQEWgwEAF4UBARiECQEhgwIBI4QKAS2DFgJDggICRYEBA0Z/AQNHfgEFSHoBCEl0AQtKbwENS2oBEExkARNNXwEVTloBGE9UARtQTwEdUUoBIFJEASNTPwElVDoBKFU0ASpWMAEtVyoBMFgkATNZHwE1WhoBOFsVATpcEAE9XQoBQF4FAUJfAQE="
    ]
  },
  "psu-corsair-sf850-2024": {
    "src": "img/mounts/psu-corsair-sf850-2024.webp",
    "credit": "https://pcpartpicker.com/product/ZsTZxr/corsair-sf850-2024-850-w-80-platinum-certified-fully-modular-sfx-power-supply-cp-9020256",
    "cutout": [
      [
        0.0625,
        0.1875,
        0.8625,
        0.625
      ],
      138,
      100,
      "PQABATkBCAE2Ag4BMwMVATAEGwEtBSEBKQYoASYHLgEjCDUBIAk7AR0KQQEZC0gBFgxOARMNVAEQDloBDQ9gAQoQZwEGEW4BAxJ0AQETeQEAFH0BABWAAQAWhAEAF4cBABiKMAJIiAEFSYUBCEqCAQtLfwEOTHwBEE15ARNOcwEWT20BGFBpARtRYwEeUl0BIVNYASNUUwEmVU0BKVZHASxXQgEuWD0BMVk3ATRaMgE2Wy0BOVwnATxdIgE/XhwBQV8XAURgEQFGYQ0BSWIHAUxjAQE="
    ]
  },
  "psu-msi-mpg-a850g-pcie5": {
    "src": "img/mounts/psu-msi-mpg-a850g-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/nhC48d/msi-mpg-a850g-pcie5-850-w-80-gold-certified-fully-modular-atx-power-supply-mpg-a850g-pcie5",
    "cutout": [
      [
        0.0437,
        0.2062,
        0.9063,
        0.6188
      ],
      145,
      99,
      "SwAGAUQBEQE9AhwBNgMoAS8EMwEoBT8BIQZKARoHVgETCGEBDAltAQQKeQEAC4IBAAyGAQANigEADo8BAA+RAwESkAgBGo8IAiKOCAIqjQgDMowJAzuLBgRBigEGQogBB0OHAQlEhQELRYMBDUaBAQ5HfwEQSHoBEkl1ARNKcQEVS2wBF0xnARhNZAEaTl8BHE9aAR5QVQEfUVEBIVJMASNTRwEkVEMBJlU+AShWOQEpVzUBK1gwAS1ZKwEvWiYBMFsiATJcHQE0XRgBNV4UATdfDwE5YAoBO2EGATxiAgE="
    ]
  },
  "psu-corsair-rm850x-2024": {
    "src": "img/mounts/psu-corsair-rm850x-2024.webp",
    "credit": "https://pcpartpicker.com/product/vY4Zxr/corsair-rm850x-2024-850-w-fully-modular-atx-power-supply-cp-9020270-na",
    "cutout": [
      [
        0.175,
        0.2375,
        0.6438,
        0.5125
      ],
      103,
      82,
      "NgAEATQBCAExAg0BLgMSASwEFwEpBRwBJwYgASQHJQEiCCkBHwkvARwKNAEaCzgBFww9ARUNQQESDkcBEA9LAQ0QUAEKEVUBCBJaAQUTXwEDFGMBABVnDwEkZgMBJ2UPAjZkAQI3YgEDOF8BBDlcAQY6WAEIO1QBCTxRAQs9TQENPkkBDz9FARBAQgESQT4BFEI6ARVDNwEXRDMBGUUvARpGLAEcRygBHkgkAR9JIQEhSh0BI0sZASRMFgEmTRIBKE4OASpPCgErUAcBLVEDAQ=="
    ]
  },
  "psu-cooler-master-v850-sfx-gold": {
    "src": "img/mounts/psu-cooler-master-v850-sfx-gold.webp",
    "credit": "https://pcpartpicker.com/product/Q36qqs/cooler-master-v850-sfx-gold-850-w-80-gold-certified-fully-modular-sfx-power-supply-mpy-8501-sfhagv-us",
    "cutout": [
      [
        0.0187,
        0.1875,
        0.975,
        0.5625
      ],
      156,
      90,
      "DwAIAQ0BEgELAhwBCQMnAQgEMAEGBToBBAZFAQMHTgEBCFkBAAlbEAAZWg1wJAIBbSUKAQAmWwZrJhQBaCcdAWUoJgFjKS4BYCo3AV4rPQEALJwCAC6bFgBEVQFWREUBAEVPAVdFQwEARkwBWEZCAwFHRgEBSEIBAUk8AVlJQQcBSiwBLkoHATdKAQEBSwIBDUsEAVxQPgFfUToBYlIrAY9SCgFnUyUBkFMDAZZTAgFqVCABj1QDAW9VBgF4VREBjlUCAXJWAgF5Vg8CjVYBAXtYAQF+WAkBgFkDAYVZAgE="
    ]
  },
  "psu-asus-tuf-gaming-850g": {
    "src": "img/mounts/psu-asus-tuf-gaming-850g.webp",
    "credit": "https://pcpartpicker.com/product/MLzhP6/asus-tuf-gaming-850g-850-w-80-gold-certified-fully-modular-atx-power-supply-90ye00s2-b0na00",
    "cutout": [
      [
        0.0563,
        0.1313,
        0.8875,
        0.7312
      ],
      142,
      117,
      "OgABATkBBgE3AgwBNQMRATQEFgEyBRwBMAYhAS4HJwEtCCwBKwkxASkKNwEnCz0BJgxBASQNRwEiDk0BIQ9RAR8QVwEdEVwBGxJiARoTZwEYFG0BFhVyARQWeAETF3sBERh9AQ8ZfwENGoEBDBuCAQochAEIHYYBBx6HAQUfiQEDIIsBASGNBAAljgIAJ40LATKMBQE3iwcCPooEAkKJBAJGiAICSIcBAkmGAQNKhAEDS4MBA0yCAQNNgQEDToABA09/AQRQfQEEUXwBBVJ5AQVTeAEHVHUBClVxAQxWbgEPV2oBEVhnARRZYwEWWmABGVtcARtcWQEeXVUBIF5SASNfTQElYEoBKGFGASpiQwEtYz8BL2Q8ATJlOAE0ZjUBN2cxATloLgE8aSoBP2omAUFrIwFEbB8BRm0bAUluFwFLbxQBTnAQAVBxDQFTcgkBVXMGAVh0AgE="
    ]
  },
  "psu-seasonic-focus-gx-v4-atx-3-2024": {
    "src": "img/mounts/psu-seasonic-focus-gx-v4-atx-3-2024.webp",
    "credit": "https://pcpartpicker.com/product/TQ88TW/seasonic-focus-gx-atx-30-v4-2024-850-w-80-gold-certified-fully-modular-atx-power-supply-focus-gx-850-v4",
    "cutout": [
      [
        0.1375,
        0.1313,
        0.7125,
        0.7438
      ],
      114,
      119,
      "IgAKARsBGgEVAioBDgM7AQgESgEBBVoBAAZlAQAHcAEBCHFQAFhyFwBvbgEAcGQBA3FWAQtyRAERczQBGHQjAR91EQEldgEB"
    ]
  },
  "psu-corsair-rm850x-2021": {
    "src": "img/mounts/psu-corsair-rm850x-2021.webp",
    "credit": "https://pcpartpicker.com/product/26rRsY/corsair-rm850x-2021-850-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020200-na",
    "cutout": [
      [
        0,
        0.0938,
        1,
        0.8187
      ],
      160,
      131,
      "UAAEAU4BCQFLAg8BSQMTAUcEFwFFBRwBQwYhAUAHJwE+CCsBPAkwAToKNQE4CzoBNQw/ATMNRAExDkgBLw9MAS0QUQEqEVYBKBJbASYTYAEkFGQBIhVpAR8WbgEdF3MBGxh4ARkZfAEXGoEBFBuGARIciwEQHY4BDh6QAQsflAEJIJYBByGZAQUimwECI54BASSfAgAmoCUAS58BAEyeAQBNnQEATpsBAE+aAQBQmQEBUZYBAVKVAQJTkgECVJEBA1WOAQRWjAEGV4gBCFiFAQpZgQELWn8BDVt8AQ9ceAEQXXYBEl5yARRfbwEWYGsBF2FpARliZQEbY2IBHGRgAR5lXAEgZlkBIWdWASNoUwElaVABJ2pMAShrSgEqbEYBLG1DAS1uQAEvbz0BMXA5ATNxNgE0cjQBNnMwATh0LQE5dSoBO3YnAT13IwE+eCEBQHkeAUJ6GgFDexgBRXwUAUd9EQFJfg0BSn8LAUyABwFOgQQBT4ICAQ=="
    ]
  },
  "psu-gigabyte-p850gm": {
    "src": "img/mounts/psu-gigabyte-p850gm.webp",
    "credit": "https://pcpartpicker.com/product/9PrYcf/gigabyte-850-w-80-gold-certified-fully-modular-atx-power-supply-gp-p850gm",
    "cutout": [
      [
        0.025,
        0.1313,
        0.9563,
        0.75
      ],
      153,
      120,
      "RQAGAUIBDQFAAhMBPgMZATsEIAE5BSYBNgYsATQHMgExCDkBLwk/ASwKRgEqC0sBKAxRASUNWAEjDl4BIA9lAR4QawEbEXIBGRJ3ARcTfQEUFIQBEhWHAQ8WiQENF4sBChiOAQgZkAEGGpIBAxuVAQEclwEAHZgMACmXBgEvlgwBO5UGAkGUDAJNkwECTpEBAk+QAQJQjgECUY0BAlKLAQJTigECVIgBAlWHAQJWhQEDV4MBBVh/AQhZewEKWncBDVtzARBcbgESXWoBFV5mARdfYgEaYF4BHGFaAR9iVgEhY1IBJGROASZlSgEpZkYBK2dCAS5oPgEwaToBM2o2ATVrMgE4bC4BO20pAT1uJQFAbyEBQnAdAUVxGQFHchUBSnMRAUx0DQFPdQkBUXYFAVR3AQE="
    ]
  },
  "psu-asrock-pro-750g": {
    "src": "img/mounts/psu-asrock-pro-750g.webp",
    "credit": "https://pcpartpicker.com/product/JhLp99/asrock-pro-750g-750-w-80-gold-certified-atx-power-supply-pro-750g",
    "cutout": [
      [
        0.125,
        0.2375,
        0.7438,
        0.525
      ],
      119,
      84,
      "YQAFAWoAAgE1ATEBagEDASoCPQFpAgQBKANFAScERwElBUkBJAZKASMHSwEhCE0BIAlOAR8KUAEdC1IBHAxTARoNVQEZDlYBGA9XARYQWgEVEVsBExJdARITXgERFF8BDxVhAQ4WYwEMF2UBCxhmAQkZaAEIGmkBBxtqAQUcbQEEHW4BAh5wAQEfcQMAInMEASZyBAIqcAICLG8BAy1tAQMubAEDL2sCBDFpAQQyaAEEM2cBBTRmAQU1ZQEFNmQBBTdsAQY4cQEGOXACBztvBAg/bgMJQmwDCkVrAQpGUwFfRhYBCkdSAWFHEwEKSFEBZEgQAQtJTwJmSQ0BaEoLAQtLTgFqSwgBDExMAW5MBAEUTUMBHU45ASdPLwEwUCUBOlEaAUNSEAFNUwYB"
    ]
  },
  "psu-rosewill-vmg": {
    "src": "img/mounts/psu-rosewill-vmg.webp",
    "credit": "https://pcpartpicker.com/product/GhBFf7/rosewill-vmg-750-w-80-gold-certified-fully-modular-atx-power-supply-vmg750",
    "cutout": [
      [
        0.0563,
        0.1375,
        0.8875,
        0.725
      ],
      142,
      116,
      "SAAFAUUBCwFCAg8BQAMVAT0EGQE6BSABNwYkAVwGAQE1ByoBMggxAS8JNQEsCjwBKQtAAScMRgEkDUoBIQ5RAR4PVQEcEFwBGRFgARYSZwETE2sBERRyAQ4VdgELFn0BCReCAQYYiAEDGYsBABqOCAEijQEBI4wJAiyLAgIuiggDNokEAzqIBgRAhwYERoYCBUiFAwVLhAEFTIMBBk2AAQdOfQEJT3oBClB3AQxRcwENUnEBD1NtARBUagESVWcBFFZjARVXYAEXWFwBGFlaARpaVgEbW1MBHVxQAR5dTQEgXkkBIl9FASNgQwElYT8BJmI8AShjOQEpZDYBK2UyAS1mLwEuZywBMGgoATFpJQEzaiIBNGsfATZsGwE3bRkBOW4VATtvEQE8cA4BPnELAT9yCAFBcwQB"
    ]
  },
  "psu-msi-mag-a750gls-pcie5": {
    "src": "img/mounts/psu-msi-mag-a750gls-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/CWCCmG/msi-mag-a750gls-pcie5-750-w-80-gold-certified-fully-modular-atx-power-supply-mag-a750gls-pcie5",
    "cutout": [
      [
        0.125,
        0.2625,
        0.75,
        0.4813
      ],
      120,
      77,
      "OQAHATQBEQEwAhkBKwMiASYELAEhBTYBHAY/ARcHSQESCFMBDQlcAQgKZgEBCwEBAwtvAQAMdwEADXgHABR3AgEWdiQDOnMBBjtuAQk8aAEMPWEBDz5bARI/VQEVQE8BGEFIARxCQQEfQzsBIkQ0ASVFLgEoRigBK0ciAS5IGwExSRUBNEoPATdLCAE6TAIB"
    ]
  },
  "psu-msi-mag-a750gl-pcie5": {
    "src": "img/mounts/psu-msi-mag-a750gl-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/dbCZxr/msi-mag-a750gl-pcie5-750-w-80-gold-certified-fully-modular-atx-power-supply-mag-a750gl-pcie5",
    "cutout": [
      [
        0,
        0.0563,
        1,
        0.8875
      ],
      160,
      142,
      "RQADAUQBBwFCAgwBQQMQAUAEFAE+BRkBPQYdATsHIgE6CCYBOAkrATcKLwE2CzMBNAw4ATMNPAExDkEBMA9FAS4QSgEtEU4BLBJSASoTVgEpFFoBJxVfASYWYwElF2cBIxhsASIZcAEgGnUBHxt5AR4cfQEcHYIBGx6FARkfhwEYIIgBFyGJARUiiwEUI4wBEiSOAREljwEQJpABDieSAQ0okwELKZUBCiqWAQkrlwEHLJkBBi2aAQQunAEDL50BAjCeAQAxoBABQZ4IAkmdBgJPnAICUZ0EAlWcAQJWmwECV5oBA1iYAQNZlwEDWpYBA1uVAQNclAEDXZIBA16RAQNfkAEDYI8BA2GOAQNijQEDY4wBA2SKAQRliAEDZogBBGeGAQRohQEEaYQBBWqBAQdrfgEKbHoBDG13AQ5udAERb3ABE3BtARZxaAEYcmUBG3NhAR10XgEgdVoBInZXASV3UwEneE8BKnlLASx6SAEve0QBMXxBATR9PQE2fjoBOH82ATuAMgE9gS8BQIIrAUKDKAFFhCQBR4UhAUqGHAFMhxkBT4gVAVGJEgFUig4BVosLAVmMBgFbjQMB"
    ]
  },
  "psu-asrock-steel-legend-sl-750g": {
    "src": "img/mounts/psu-asrock-steel-legend-sl-750g.webp",
    "credit": "https://pcpartpicker.com/product/NDCZxr/asrock-steel-legend-sl-750g-750-w-80-gold-certified-fully-modular-atx-power-supply-sl-750g",
    "cutout": [
      [
        0.05,
        0.2437,
        0.9,
        0.5125
      ],
      144,
      82,
      "AACPAQABkAYAB48BAAiQAQEJjgEACo8BAAuQRQFQjgECUYEBhFEJAQ=="
    ]
  },
  "psu-msi-mag-a750bn-pcie5": {
    "src": "img/mounts/psu-msi-mag-a750bn-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/bpvD4D/msi-mag-a750bn-pcie5-750-w-80-bronze-certified-atx-power-supply-mag-a750bn-pcie5",
    "cutout": [
      [
        0,
        0.15,
        0.9812,
        0.7
      ],
      157,
      112,
      "RQADAUIBCQE/Ag8BOwMWATgEHAE1BSIBMgYnAS8HLQEsCDMBKAk6ASUKQAEiC0YBHwxMARsNUgEYDlgBFQ9dARIQZAEOEWoBCxJwAQgTdgEFFHwBARWDAQAWiAEAF4oBABiNAQAZkAEAGpEIlSAFAZMhCAEAIp0EACacBAAqmwUAL5oDADKZAgA0mAEANZABADaPAQE3jg0BRI0CAkaMBAFKjQECS4wBA0yLAQVNiAEHTocBCU+EAQtQggENUX4BD1J6ARFTdgETVHIBFVVtARdWaQEZV2UBG1hhAR1ZXQEfWlgBIVtUASNcUAElXUwBJ15IASlfQwErYD8BLWE7AS9iNwExYzMBM2QvATVlKgE3ZiYBOWciATpoHwE9aRoBPmoWAUBrEgFCbA4BRG0KAUZuBgFIbwIB"
    ]
  },
  "psu-thermaltake-toughpower-gf1-2024": {
    "src": "img/mounts/psu-thermaltake-toughpower-gf1-2024.webp",
    "credit": "https://pcpartpicker.com/product/x4hv6h/thermaltake-toughpower-gf1-2024-750-w-80-gold-certified-fully-modular-atx-power-supply-ps-tpd-0750fnfagu-p",
    "cutout": [
      [
        0.1875,
        0.2375,
        0.625,
        0.5313
      ],
      100,
      85,
      "MQAFAS4BCwEsAg8BKgMUAScEGgElBR8BIgYkASAHKQEdCC8BGwk0ARgKOQEWCz4BEwxEARANSQEODk4BCw9UAQkQWQEGEV4BBBJgAQETYwEAFGQCABZjAgEYYgYBHmEGAiRgAwInXwgDL10EAzNcAQM0WwEDNVkBBDZXAQY3VAEHOFEBCTlOAQo6SwELO0kBDTxGAQ49QwEQPkABET89ARNAOgEUQTgBFkI0ARdDMgEZRC4BGkUsARtGKgEdRyYBHkgkASBJIAEhSh4BI0sbASRMGAEmTRUBJ04SASlPDwEqUA0BK1EKAS1SBwEuUwQBMFQBAQ=="
    ]
  },
  "psu-corsair-rm750e-2025": {
    "src": "img/mounts/psu-corsair-rm750e-2025.webp",
    "credit": "https://pcpartpicker.com/product/jfHp99/corsair-rm750e-2025-750-w-fully-modular-atx-power-supply-cp-9020295-na",
    "cutout": [
      [
        0.0875,
        0.2125,
        0.825,
        0.5938
      ],
      132,
      95,
      "QAAEATwBCwE5AhEBNgMXATMEHQEvBSQBLAYrASkHMQEmCDcBIgk/AR8KRQEcC0sBGAxSARUNWAESDl8BDw9lAQsQbAEIEXIBBRJ5AQITfwEBFIEBABWCAQAWgwIAGIQGAB6DJQFDggIBRYEBAkZ/AQJHfgEESHoBB0l0AQpKbwEMS2oBD0xkARJNXwEUTloBF09UARpQTwEcUUoBH1JEASJTPwEkVDoBJ1U0ASpWLwEsVyoBL1gkATJZHwE0WhoBN1sUATpcDwE8XQoBP14EAQ=="
    ]
  },
  "psu-corsair-rm750e-2023": {
    "src": "img/mounts/psu-corsair-rm750e-2023.webp",
    "credit": "https://pcpartpicker.com/product/YRJp99/corsair-rm750e-2023-750-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020262-na",
    "cutout": [
      [
        0.1938,
        0.2437,
        0.6125,
        0.5062
      ],
      98,
      81,
      "LwACASwBCAEqAg0BKAMRASUEFwEjBRwBIQYhAR8HJgEcCCwBGgkxARgKNgEVCzwBEwxBARENRgEODkwBDA9RAQoQVQEHEVkBBRJcAQMTXgEBFGEBARVgBgEbYQwAJ2IEACthAQEsYQYBMmABATNeAQE0XQEBNVsBAjZZAQQ3VgEFOFMBBzlPAQk6TAELO0gBDTxFAQ49QgEQPj8BEj87ARRAOAEWQTQBF0IyARlDLwEbRCsBHUUoAR9GJAEgRyIBIkgeASRJGwEmShcBJ0sVASlMEQErTQ4BLU4KAS9PBwEwUAQB"
    ]
  },
  "psu-asus-prime-ap-750g": {
    "src": "img/mounts/psu-asus-prime-ap-750g.webp",
    "credit": "https://pcpartpicker.com/product/zm7scf/asus-prime-ap-750g-750-w-80-gold-certified-fully-modular-atx-power-supply-ap-750g",
    "cutout": [
      [
        0.0125,
        0.1187,
        0.9812,
        0.7813
      ],
      157,
      125,
      "RAAGAUIBCwFAAg8BPgMUATwECwFIBA0BOgUFAUAFBgFJBQ8BPAYBAUEGBQFIBhMBSQcUAUkIGAFICRgBPgojATwLJgFnCwIBNAw4ATMNOwEvDkIBLg9GASsQTAEqEVABJxJWASYTWgEcFAEBIRRiARoVBAEfFWcBGhZuARkXcwEUGAIBGBh3AREZgAEPGoYBDRuLAQscjwGbHAEBCB2VAQYelwEEH5gBAyCZAQEhmwEAIpwNAS+bAQAwnAoAOpsJAUOaCQFMmQQCUJgBAVGZAgBTmQEBVJYBAVWUAQFWkgEBV5EBAViPAQNZjAEFWogBCFuEAQpcgAEMXXwBD154ARFfdAEUYHABFmFsARhiaAEbY2QBHWRgAR9lXQEiZlgBJGdUASZoUQEpaUwBK2pJAS5rRAEwbEABMm09ATVuOAE3bzUBOXAxATxxLQE+cikBQHMlAUN0IQFFdR0BR3YaAUp3FQFMeBIBTnkOAVF6CQFTewYBVXwDAQ=="
    ]
  },
  "psu-gigabyte-ud750gm-pg5-v2": {
    "src": "img/mounts/psu-gigabyte-ud750gm-pg5-v2.webp",
    "credit": "https://pcpartpicker.com/product/f2Nscf/gigabyte-ud750gm-pg5-v2-750-w-80-gold-certified-fully-modular-atx-power-supply-gp-ud750gm-pg5-v2",
    "cutout": [
      [
        0.1,
        0.2125,
        0.8,
        0.5813
      ],
      128,
      93,
      "QAABATwBCQE5Ag8BNQMXATIEHgEvBSQBKwYsASgHMgElCDkBIQlAAR4KRwEbC04BFwxVARQNXAERDmMBDQ9qAQoQcQEHEXkBAxJ9AQATgAYAGX8JASJ+FwE5fQYCP3wCAUF9AgFDegECRHcBA0V0AQVGbwEIR2oBCkhmAQ1JYAEQSlsBEktXARVMUQEXTU0BGk5HAR1PQgEfUD4BIlE4ASVSMwEnUy8BKlQpASxVJQEvViABMlcaATRYFgE3WREBOloLATxbBwE/XAEB"
    ]
  },
  "psu-cooler-master-mwe-gold-750-v3": {
    "src": "img/mounts/psu-cooler-master-mwe-gold-750-v3.webp",
    "credit": "https://pcpartpicker.com/product/2W26Mp/cooler-master-mwe-gold-750-v3-750-w-80-gold-certified-fully-modular-atx-power-supply-mpx-7503-afag-2buv",
    "cutout": [
      [
        0.1625,
        0.2562,
        0.675,
        0.4875
      ],
      108,
      78,
      "PgADATYBDgEtAhkBJAMlARsEMQESBT0BCgZIAQEHVAEACFgBAAlbAQAKXQEAC2ABAAxjAQANZgEADmkBAA9rAQAQbBkBKWsJAzJpAQQzaAEFNGcBBjVmAQc2ZQEIN2QBCThjAQs5YQEMOmABDTtfAQ48XgEPPVwBED5VARE/TwETQEkBFEFDARVCPgEWQzgBF0QzARhFLQEZRigBG0chARxIHAEdSRYBHkoRAR9LCwEgTAcBIk0BAQ=="
    ]
  },
  "psu-thermaltake-toughpower-sfx": {
    "src": "img/mounts/psu-thermaltake-toughpower-sfx.webp",
    "credit": "https://pcpartpicker.com/product/Gr92FT/thermaltake-toughpower-sfx-750-w-80-gold-certified-fully-modular-sfx-power-supply-ps-stp-0750fnfagu-1",
    "cutout": [
      [
        0.175,
        0.2188,
        0.65,
        0.575
      ],
      104,
      92,
      "PwADATwBBwE6AgsBNwMPATQEFAExBRgBLgYdASsHIQEoCCUBJQkqASIKLgEfCzMBHQw2ARoNOwEXDj8BFA9EAREQSAEOEU0BCxJRAQgTVQEFFFoBAhVeAQAWYgEAF2MBARhkAQEZZQEBGmcOAihmBgIuZQYDNGQDBDdjAQU4YgEGOWABBjphAQc7YAEIPF4BCT1dAQk+WgEKP1cBC0BUAQxBUQEMQk4BDUNLAQ5ESAEPRUUBEEZBARBHPwERSDwBEkk5ARNKNgETSzMBFEwwARVNLQEWTioBFk8nARdQJAEYUSEBGVIeARlTHAEaVBgBG1UVARxWEgEdVw8BHVgNAR5ZCQEfWgYBIFsDAQ=="
    ]
  },
  "psu-corsair-rm750x-2024": {
    "src": "img/mounts/psu-corsair-rm750x-2024.webp",
    "credit": "https://pcpartpicker.com/product/JPMMnQ/corsair-rm750x-2024-750-w-fully-modular-atx-power-supply-cp-9020285-na",
    "cutout": [
      [
        0.175,
        0.2375,
        0.6438,
        0.5125
      ],
      103,
      82,
      "MAAFAS4BCQEsAg0BKQMSASYEFwEkBRwBIQYhAR4HJgEcCCoBGQkvARcKNAEUCzkBEQw+AQ8NQgEMDkcBCg9MAQcQUQEEEVYBAhJaAQETXQEAFGEBABVjAQAWZQEAF2cEARtmDgEpZQQCLWQBAS5lAwIxZAQDNWMBBTZhAQc3XwEIOF4BCjlbAQw6WAENO1UBDzxRARE9TQETPkkBFD9GARZAQgEYQT4BGUI7ARtDNwEdRDMBHkUwASBGLAEiRygBJEgkASVJIQEnSh0BKUsZASpMFgEsTRIBLk4OAS9PCwExUAcBM1EDAQ=="
    ]
  },
  "psu-lian-li-sp-v2": {
    "src": "img/mounts/psu-lian-li-sp-v2.webp",
    "credit": "https://pcpartpicker.com/product/Nmh2FT/lian-li-sp-v2-750-w-80-gold-certified-fully-modular-sfx-power-supply-sp750gw",
    "cutout": [
      [
        0.1812,
        0.2687,
        0.625,
        0.4938
      ],
      100,
      79,
      "JgACASQBCAEjAg0BIQMTAR8EGQEdBR8BHAYkARoHKQEYCDABFgk2ARQKOwESC0EBEQxGAQ8NTAENDlIBCw9ZAQkQWwEHEV0BBhJeAQQTYAECFGIBABVjBAEZYgMCHGEHAyNgBQQoXwUELV4BBS5dAwYxWwEGMloBBTNaAQQ0WgEFNVgBBTZXAQg3UwEKOFABDTlMAQ86SQESO0UBFDxCARc9AwEcPTgBHz40ASA/MgEhQDABIEEwASNCAgEnQigBKEMmAShEJQEqRSIBLUYeAS9HGwEySBcBNEkTATZKEAE5SwwBPEwIAT5NBQFBTgEB"
    ]
  },
  "psu-corsair-rm750x-2021": {
    "src": "img/mounts/psu-corsair-rm750x-2021.webp",
    "credit": "https://pcpartpicker.com/product/6NcG3C/corsair-rm750x-2021-750-w-80-gold-certified-fully-modular-atx-power-supply-cp-9020199-na",
    "cutout": [
      [
        0,
        0.0938,
        1,
        0.8187
      ],
      160,
      131,
      "UAAEAU4BCQFLAg4BSQMTAUcEFwFFBRwBQwYgAUAHJgE+CCsBPAkwAToKNQE4CzoBNQw/ATMNQwExDkgBLw9MAS0QUQEqEVYBKBJbASYTXwEkFGQBIhVpAR8WbgEdF3MBGxh3ARkZfAEXGoEBFBuGARIciwEQHY4BDh6QAQsflAEJIJYBByGZAQUimwECI54BASSfAgAmoCUAS58BAEyeAQBNnQEATpsBAE+aAQBQmQEBUZYBAVKUAQJTkgECVJABA1WOAQRWjAEGV4gBCFiFAQpZgQELWn8BDVt7AQ9ceAEQXXYBEl5yARRfbwEWYGsBF2FpARliZQEbY2IBHGRfAR5lXAEgZlkBIWdWASNoUwElaU8BJ2pMAShrSQEqbEYBLG1DAS1uQAEvbz0BMXA5ATJxNwE0cjMBNnMwATh0LQE5dSoBO3YnAT13IwE+eCEBQHkeAUJ6GgFDexgBRXwUAUd9EQFJfg0BSn8LAUyABwFOgQQBT4ICAQ=="
    ]
  },
  "psu-asus-rog-loki": {
    "src": "img/mounts/psu-asus-rog-loki.webp",
    "credit": "https://pcpartpicker.com/product/QPM48d/asus-rog-loki-750-w-80-platinum-certified-fully-modular-sfx-power-supply-90ye00n4-b0na00",
    "cutout": [
      [
        0,
        0.1437,
        1,
        0.7312
      ],
      160,
      117,
      "PwABAUEAAQFDAAgBQAEXATwCHQE1AyoBNAQtAWMEBAEzBTUBLwY7AWwGBAEuB0QBLQhHAXUIBAEqCVEBKApVAYAKAwEnC14BJgxhAYoMAwEiDWwBIA5xAZUOAgEgD3gBHBB/ARsRhQEaEoYBGBOIARQUjAETFY0BEhaOAQ4XkgENGJMBDBmUAQoalgEGG5oBBRybAgEenwEAH6ACACGfCAEpngECKp0GAjCcDwI/mwECQJoBAkGZAQJCmAEDQ5YBA0SVAQNFlAEDRpMBA0eSAQJIkgECSZEBAkqQAQJLjwECTI4BA02MAQVOiQEIT4UBClCBAQ1RfQEPUnoBElN2ARRUcwEXVW8BGlZrARxXaAEfWGQBIVlhASRaXQEmW1oBKVxWAStdUwEuXk8BMF9MATNgSAE1YUUBOGJBATtjPQE9ZDkBQGU1AUJmMgFFZy4BR2grAUppJwFMaiQBT2sgAVFsHQFUbRkBVm4WAVlvEgFbcA8BXnELAWByCAFjcwQBZXQBAQ=="
    ]
  },
  "psu-corsair-sf750-2024": {
    "src": "img/mounts/psu-corsair-sf750-2024.webp",
    "credit": "https://pcpartpicker.com/product/TsTZxr/corsair-sf750-2024-750-w-80-platinum-certified-fully-modular-sfx-power-supply-cp-9020284",
    "cutout": [
      [
        0.0625,
        0.1875,
        0.8625,
        0.625
      ],
      138,
      100,
      "PQABATkBCAE2Ag4BMwMVATAEGwEtBSEBKgYnAScHLQEjCDQBIAk6AR0KQQEaC0cBFgxOARMNVAEQDloBDQ9gAQoQZwEHEW0BAxJ0AQETeQEAFH0BABWAAQAWgwEAF4cBABiKMAJIiAEFSYUBCEqCAQtLfwEOTHwBEE15ARNOcwEWT20BGFBpARtRYwEeUl0BIVNYASNUUwEmVU0BKVZHASxXQgEuWD0BMVk3ATRaMgE2Wy0BOVwnATxdIgE/XhwBQV8XAURgEQFGYQ0BSWIHAUxjAQE="
    ]
  },
  "psu-gigabyte-p750gm": {
    "src": "img/mounts/psu-gigabyte-p750gm.webp",
    "credit": "https://pcpartpicker.com/product/RhH8TW/gigabyte-750-w-80-gold-certified-fully-modular-atx-power-supply-gp-p750gm",
    "cutout": [
      [
        0.025,
        0.2313,
        0.95,
        0.5437
      ],
      152,
      87,
      "AACYVpZWAQE="
    ]
  },
  "psu-asrock-pro-650g": {
    "src": "img/mounts/psu-asrock-pro-650g.webp",
    "credit": "https://pcpartpicker.com/product/PPdMnQ/asrock-pro-650g-650-w-80-gold-certified-atx-power-supply-pro-650g",
    "cutout": [
      [
        0.125,
        0.2375,
        0.7438,
        0.525
      ],
      119,
      84,
      "YQAFAWoAAgE1ATEBagEDASoCPQFpAgQBKANFAScERwElBUkBJAZKASMHSwEhCE0BIAlOAR8KUAEdC1IBHAxTARoNVQEZDlYBGA9XARYQWgEVEVsBExJdARITXgERFF8BDxVhAQ4WYwEMF2UBCxhmAQkZaAEIGmkBBxtqAQUcbQEEHW4BAh5wAQEfcQMAInMEASZyBAIqcAICLG8BAy1tAQMubAEDL2sCBDFpAQQyaAEEM2cBBTRmAQU1ZQEFNmQBBTdsAQY4cQEGOXACBztvBAg/bgMJQmwDCkVrAQpGUwFfRhYBCkdSAWFHEwEKSFEBZEgQAQtJTwJmSQ0BaEoLAQtLTgFqSwgBDExMAW5MBAEUTUMBHU45ASdPLwEwUCUBOlEaAUNSEAFNUwYB"
    ]
  },
  "psu-rosewill-vsb": {
    "src": "img/mounts/psu-rosewill-vsb.webp",
    "credit": "https://pcpartpicker.com/product/TZrp99/rosewill-vsb-650-w-80-bronze-certified-semi-modular-atx-power-supply-vsb650",
    "cutout": [
      [
        0.1125,
        0.1563,
        0.775,
        0.6875
      ],
      124,
      110,
      "QAAEAT0BCgE7Ag0BOQMSATcEFQE0BRsBMgYgATAHIwEuCCgBKwksASkKMgEnCzUBJQw6ASINPgEgDkQBHg9HARwQTAEZEVABFxJWARUTWQETFF4BEBVjAQ4WZQEMF2wBChhwAQcZdQEFGncBAxt5AQAcfAQAIHsBASF6BQImeQQCKngBAyt3BQQwdgMEM3UCBTV0BAY5cwMGPHICBz5xAwhBcAEIQm8BCENuAQhEbAEJRWoBCkZoAQxHZAENSGIBDklfAQ9KXQEQS1oBEkxXARNNVQEUTlIBFU9QARZQTQEXUUsBGVJHARpTRQEbVEMBHFVAAR1WPgEfVzoBIFg5ASFZOQEiWjkBI1s5ASRcOAEmXTcBJ142AShfNQEpYDUBKmEzASxiLwEtYy0BLmQsAS9lKQEwZhQBRWYSATJnEAFGZw0BVGcBATNoDgFGaAwBNGkMAUdpCgE1agkBSGoHATZrBwFJawUBOGwDAUpsBAFMbQEB"
    ]
  },
  "psu-rosewill-vnw650": {
    "src": "img/mounts/psu-rosewill-vnw650.webp",
    "credit": "https://www.walmart.com/ip/19235222558",
    "cutout": [
      [
        0.0688,
        0.025,
        0.8812,
        0.9167
      ],
      141,
      110,
      "SQADAUYBCQFFAgwBQQMSAUAEFgE8BRwBOAYiATcHJgEzCCwBLwkCATIJMAEuCjYBKQs9AScMQgEkDUcBIQ5MAR8PUQEbEAIBHhBUARoRWgEVEgMBGRJeARQTZQEQFGwBDRVxAQoWdgEKF3gBChh7AQsZfAELGn4BCxuBAQscggcMI4EBDCSABwwrfwIJLYIBBy6EAQUvhgEEMIcBAzGIAQEyiQEAM4oBAjSIAQM1hwECNogCAziHAQM5hgEEOoUBBDsIAQ47ewMFPAYBBT0FAQY+AwEPPnoBBz8BAQ8/eQQQQ3gBEkR2ARNFdAEURnMBFUdyARdIcAEYSW8BGUptARtLaQEcTGcBHU1kAR5OYQEgT10BIVBbASJRWAEkUlQBJVNRASZUTwEnVUwBKVZIASpXRQErWEMBLFlAAS5aPAEvWzkBMFw3ATJdMwEzXjABNF8uATVgKwE3YScBOGIkATljIgE7ZB4BPGUbAT1mGAE+ZxYBQGgSAUFpDwFCagwBRGsJAUVsBgFGbQMB"
    ]
  },
  "psu-msi-mag-a650bn": {
    "src": "img/mounts/psu-msi-mag-a650bn.webp",
    "credit": "https://pcpartpicker.com/product/8LNxFT/msi-mag-a-bn-650-w-80-bronze-certified-atx-power-supply-mag-a650bn",
    "cutout": [
      [
        0.1313,
        0.25,
        0.7625,
        0.5437
      ],
      122,
      87,
      "NgACATIBCQEvAg8BLAMVASgEHAElBSEBIgYnAR8HLQEcCDMBGAk6ARUKQAESC0UBDwxLAQsNUgEIDlgBBA9eAQIQZAEAEWkBABJrAQATbgEAFHAGdBkDAQAaeQEAG3oCAB15BAAheAUAJncCACh2AQApcAFxKQMBACpvAgEsbgoBNm0FAjtsAQQ8agEGPWgBCD5lAQo/YgEMQF4BDkFZARBCVQESQ1EBFERNARZFSQEYRkQBGkdAARxIPAEeSTgBIEo0ASJLMAEkTCsBJk0nAShOIwEqTx8BLFAbAS5RFgEvUhMBMVMPATNUCwE1VQcBN1YCAQ=="
    ]
  },
  "psu-sama-gt": {
    "src": "img/mounts/psu-sama-gt.webp",
    "credit": "https://pcpartpicker.com/product/bqbypg/sama-gt-650-w-80-gold-certified-fully-modular-atx-power-supply-gt650-bkgffxx1-us",
    "cutout": [
      [
        0.1563,
        0.1313,
        0.6875,
        0.7375
      ],
      110,
      118,
      "NgAQASoBMQEeAlABEgNcAQYEaAEBBW0BAAZuWwFhbQUAZm4FAWttAgNtawEJbmUBEG9eARZwWAEdcVEBJHJEASpzMgExdB4BN3UMAQ=="
    ]
  },
  "psu-corsair-cx650m-2025": {
    "src": "img/mounts/psu-corsair-cx650m-2025.webp",
    "credit": "https://pcpartpicker.com/product/3GwD4D/corsair-cx650m-2025-650-w-semi-modular-atx-power-supply-cp-9020310-na",
    "cutout": [
      [
        0.0625,
        0.1875,
        0.825,
        0.6375
      ],
      132,
      102,
      "RgABAUQBBQFCAgkBQQMMAT8EEQE9BRUBOwYZATkHHQE3CCEBNQkmATQKKQEyCy0BMAwxAS4NNQEsDjoBKg8+ASgQQgEnEUUBJRJJASMTTgEhFFIBHxVWAR0WWgEbF14BGhhhARgZZgEWGmoBFBtuARIccQEQHXQCDx91AQ4gdgYPJnUIDi52AQ8vdQIPMXQBDjJ1AQwzdwEKNHkBCTV6AQc2fAEGN30BAziAAQE5ggEAOoMFAT+CAgBBDQEQQXMCAUIKAQFDBwEQQ3IBAUQEARFEbwERRW4BEkZrARNHaQEVSGUBF0liARhKXwEaS1wBHExYAR5NVQEgTlEBIU9OASNQSwElUUcBJ1JEASlTQAErVD0BLVU5AS5WNwEwVzMBMlgwATRZLAE2WikBOFslATlcIgE7XR8BPV4bAT9fGAFBYBQBQ2ERAUViDQFGYwsBSGQHAUplBAE="
    ]
  },
  "psu-corsair-cx-2023": {
    "src": "img/mounts/psu-corsair-cx-2023.webp",
    "credit": "https://pcpartpicker.com/product/nNTZxr/corsair-cx-2023-650-w-80-bronze-certified-atx-power-supply-cp-9020278-na",
    "cutout": [
      [
        0.0313,
        0.1938,
        0.9,
        0.6375
      ],
      144,
      102,
      "UgAEAU0BCwFHAhQBQgMcATwEJQE3BS0BMQY2ASsHPgEmCEYBIAlPARoKWAEWC18BFQxjARUNZQEWDmcBFg9qARYQbQEWEXABFhJzARYTdgEWFHkBFhV6ChUfewMTIn0BESN/AQ4kggELJYUBCCaIAQUniwEBKI8JATETARYxegQBMhEBATMPAQE0DAEBNQoBFzV5BwE2CAEANwYBGDx3ARk9dwEbPnQBHD9zAR1AcgEeQXEBH0JxASBDbwEhRG4BI0VsASRGawElR2oBJkhpASdJaAEoSmYBKktiAStMXwEsTVsBLU5YAS5PVAEvUFEBMVFMATJSSQEzU0UBNFRCATVVPgE2VjsBN1c3ATlYMwE6WS8BO1osATxbKAE9XCUBPl0hAUBeHQFBXxkBQmAWAUNhEgFEYg8BRWMLAUZkCAFHZQQB"
    ]
  },
  "psu-thermaltake-smart-bm3": {
    "src": "img/mounts/psu-thermaltake-smart-bm3.webp",
    "credit": "https://pcpartpicker.com/product/XmNYcf/thermaltake-smart-bm3-650-w-80-bronze-certified-semi-modular-atx-power-supply-ps-spd-0650mnfabu-3",
    "cutout": [
      [
        0.1437,
        0.2,
        0.7125,
        0.6625
      ],
      114,
      106,
      "OQAEATYBCgE0Ag4BMQMUAS8EGQEtBR0BKgYjASgHKAElCC0BIgkzASAKOAEeCz0BGwxDARkNRwEWDk0BEw9TAREQVwEOEV0BDBJiAQkTZwEHFGsBBBVuAQIWcAEAF3IBARhxAQEZcAYCH28EASNwAQIkbgsDL2wJAzhrAQQ5agEEOmkBBDtoAQQ8ZgEEPWUBBT5jAQc/XwEIQF0BCkFZAQtCVwENQ1QBDkRRARBFTgERRksBEkdJARRIRgEVSUMBF0pAARhLPgEaTDoBG004AR1ONAEeTzIBH1AyASFRMAEiUjABJFMvASVULwEnVS0BKFYeAUlWDAEpVxwBSVcNAStYGAFKWA0CLFkWAS5aEwFLWg0BL1sQAUxbDQExXA0BTFwOATJdCgFNXQ4BNF4HAU5eDgE1XwUBTl8PATZgAgFPYA8BUGEPAVFiDwFRYxEBUmQRAVNlEQFUZhIBVWcRAVZoDwFXaQwB"
    ]
  },
  "psu-msi-mag-a650gl": {
    "src": "img/mounts/psu-msi-mag-a650gl.webp",
    "credit": "https://pcpartpicker.com/product/xfV2FT/msi-mag-a650gl-650-w-80-gold-certified-fully-modular-atx-power-supply-mag-a650gl",
    "cutout": [
      [
        0.0125,
        0.225,
        0.975,
        0.6687
      ],
      156,
      107,
      "VgABAU8BDQFIAhgBQQMkAToELwEzBTsBLAZHASQHUwEdCF8BFglrAQ8KdgEHC4MBAQyOAQANkwEADpgBAA+bAQAQnAcBF5sEARuaDgIpmQUCLpgLAzmXBwNAlgkESZUBBkqTAQdLkgEJTJABC02NAQ1OiQEOT4UBEFCAARJRewEUUnYBFVNyARdUbQEZVWgBG1ZjARxXXwEeWFoBIFlVASJaTwEjW0sBJVxGASddQQEpXjwBKl84ASxgMwEuYS4BMGIpATJjJAEzZCABNWUbATdmFgE5ZxEBOmgNATxpCAE+agMB"
    ]
  },
  "psu-msi-mag-a650gls-pcie5": {
    "src": "img/mounts/psu-msi-mag-a650gls-pcie5.webp",
    "credit": "https://pcpartpicker.com/product/DsgZxr/msi-mag-a650gls-pcie5-650-w-80-gold-certified-fully-modular-atx-power-supply-mag-a650gls-pcie5",
    "cutout": [
      [
        0.0688,
        0.225,
        0.8625,
        0.5563
      ],
      138,
      89,
      "QQAIATwBEgE3AhwBMgMlAS0ELwEoBTgBJAZBAR8HSgEaCFQBFAlgARAKaAELC3IBBgx7AQANhgEADooiADCJDAE8iAcCQ4cBBESDAQdFfQELRnUBDkdvARFIaQEUSWMBF0pcARtLVQEeTE8BIU1JASROQgEnTzwBKlA2AS5RLwExUikBNFMiATdUHAE6VRYBPVYQAUFXCAFEWAIB"
    ]
  },
  "psu-corsair-rm650e-2025": {
    "src": "img/mounts/psu-corsair-rm650e-2025.webp",
    "credit": "https://pcpartpicker.com/product/6TBFf7/corsair-rm650e-2025-650-w-fully-modular-atx-power-supply-cp-9020302-na",
    "cutout": [
      [
        0,
        0,
        1,
        1
      ],
      160,
      116,
      "TgAEAUwBCAFJAg4BRQMVAUIEGwE/BSEBPAYoATgHLwE1CDUBMgk7AS8KQgErC0kBKAxPASUNVgEiDlwBHg9jARsQaQEYEXABFRJ2ARETfQEOFIMBCxWKAQgWkAEEF5gBAhibAQEZnQIAG58BABygKwBHnwMASqAHAVGfAgJTnQECVJwBA1WaAQNWmQEEV5cBB1iRAQpZiwEMWocBD1uBARJcfAEUXXcBF15xARpfbAEcYGcBH2FhASJiXAEkY1cBJ2RRASplTAEsZkcBL2dBATJoPAE0aTcBN2oxATprLAE8bCcBP20hAUJuHAFEbxcBR3ARAUpxDAFMcgcBT3MCAQ=="
    ]
  },
  "psu-gigabyte-p650ss": {
    "src": "img/mounts/psu-gigabyte-p650ss.webp",
    "credit": "https://pcpartpicker.com/product/cf3NnQ/gigabyte-p650ss-650-w-80-silver-certified-atx-power-supply-gp-p650ss",
    "cutout": [
      [
        0.0688,
        0.1625,
        0.8375,
        0.675
      ],
      134,
      108,
      "PwADAT0BCQE6AhABOAMWATUEHQEzBSMBMAYpAS4HLwEsCDUBKQk8AScKQgEkC0kBIgxPAR8NVgEdDlwBGg9jARgQaAEVEXABExJzARATdgEOFHgBCxV6AQkWfAEGF38BBBiBAQEZhAEAGoUCARyEBQEhgwQCJYIJAi6BAQMvgAkEOH8CBDp+CAVCfAEFQ3oBBUR5AQVFeAEFRncBBUd1AQVIdAEFSXMBBUpxAQZLbwEHTG0BCU1qAQtOaAENT2kBEFBoARJRaAEUUmkBFlNqARhUagEaVWoBHVZpAR9XZwEhWGUBI1ljASVaYAEoW1wBKlxaASxdVwEuXi8BYF4iATBfKwFiXyABMmAoAWRgHgE1YSQBZ2EaATdiIQFpYhcBOWMdAWxjFAE7ZBoBb2QRAT1lFwFyZQ0BP2YTAXRmCgFCZw8Bd2cHAURoDAF6aAMBRmkJAUhqBQFKawIB"
    ]
  },
  "psu-gigabyte-gp-p650g-pg5": {
    "src": "img/mounts/psu-gigabyte-gp-p650g-pg5.webp",
    "credit": "https://pcpartpicker.com/product/fWqNnQ/gigabyte-gp-p650g-pg5-650-w-80-gold-certified-atx-power-supply-gp-p650g-pg5",
    "cutout": [
      [
        0.05,
        0.225,
        0.8688,
        0.5563
      ],
      139,
      89,
      "OwAIATgBDgE1AhUBMgMcAS4EIwErBSoBKAYwASUHNwEhCD4BHglFARsKSwEYC1IBFAxZARENYAEODmYBCw9tAQcQdAEEEXcBARJ6AQATew0BIHoSATJ5CwI9eAMCQHYBAkF0AQJCcQEFQ2wBB0RpAQpFaQENRmkBD0dqARJIagEVSWoBF0pqARpLagEdTGoBH005AVpNMAEiTjQBXE4vASRPLwFfTykBJ1AqAWJQIwEqUSQBZlEcASxSIAFpUhcBL1MaAWxTEQEyVBUBb1QMATRVEAFzVQQBN1YLATpXBQE8WAEB"
    ]
  },
  "psu-thermaltake-toughpower-gx2": {
    "src": "img/mounts/psu-thermaltake-toughpower-gx2.webp",
    "credit": "https://pcpartpicker.com/product/pG6qqs/thermaltake-toughpower-gx2-600-w-80-gold-certified-atx-power-supply-ps-tpd-0600nnfagu-2",
    "cutout": [
      [
        0.1125,
        0.1313,
        0.775,
        0.7312
      ],
      124,
      117,
      "PQAMATEBHQElAi4BGQM/AQwETgEBBVkBAAZaIAEmWRIBOFwBATleAQE6YAEBO2MBATxlAQE9ZwECPmkBAz9qAQNAbAEEQW4BBUJvAQVDcgEGRHMBB0V1AghHLAE3R0UCCUgmAQlJIgE3SUQCCkocAQtLFgE4S0MMC0wSAQxNDAENTgcBDk8BAThXQgM5WkECOVxAATpdPgE7XjwBPV84AT5gNgE/YTQBQGIxAUJjLgFDZCsBRGUpAUVmJwFGZyYBSGgmAUlpJgFLaiUBTGslAU1sJAFObRQBY20NAU9uEgFkbgsBUW8OAWVvCQFScAwBZ3AGAVNxCQFocQQBVXIGAWpyAQFWcwMBV3QBAQ=="
    ]
  },
  "psu-asrock-challenger-cl-550b": {
    "src": "img/mounts/psu-asrock-challenger-cl-550b.webp",
    "credit": "https://pcpartpicker.com/product/rLCZxr/asrock-challenger-cl-550b-550-w-80-bronze-certified-atx-power-supply-cl-550b",
    "cutout": [
      [
        0.15,
        0.3312,
        0.7,
        0.3375
      ],
      112,
      54,
      "JgADAVoAAwEPAQQBHwESAVgBBgELAgoBFwIkAVcCBwEKAzkBTwMPAQoEQQFMBBMBAQUCAQQFXAEABmIBAAdkAQAIZgEACWgBAApqAQALawEADGwBAA1tAQAObwIAEHACABJjAWkSBgEAE2IBaxMDAQAUUgFbFAQBbBQBAQAVUQIAF08BABhOBAEcTQcBI0wBASRKAQElSAEBJkYBAidDAQUoPgEIKToBCio2AQ0rMQEQLCwBEi0oARUuJAEYLx8BGzAaAR0xFgEgMhIBIzMNASU0CQEoNQQB"
    ]
  },
  "psu-rosewill-vnw550": {
    "src": "img/mounts/psu-rosewill-vnw550.webp",
    "credit": "https://www.bestbuy.com/product/rosewill-vnw-550w-80-white-active-pfc-low-noise-psu-5-year-warranty/J39K6Y5K65",
    "cutout": [
      [
        0.1187,
        0,
        0.7625,
        1
      ]
    ]
  },
  "psu-msi-mag-a550bn": {
    "src": "img/mounts/psu-msi-mag-a550bn.webp",
    "credit": "https://pcpartpicker.com/product/mnVmP6/msi-mag-a550bn-550-w-80-bronze-certified-atx-power-supply-mag-a550bn",
    "cutout": [
      [
        0.0437,
        0.1375,
        0.8938,
        0.8313
      ],
      143,
      133,
      "UAADAUoBCgFEAhcBPgMjATgELwEyBTsBLAZHASYHVAEfCF8BGQlmARMKbAENC3IBBwx4AQINfRcCJH4VATl/AQI6fgEBO38sAWeACAFviAEBcIwBAXGOBQF2jQEBd44CAXmNAQF6jgEBe40CAX2OAQF+jQEBf44BAICPAQGBjgIhg20Bd4QTAQ=="
    ]
  },
  "psu-thermaltake-smart": {
    "src": "img/mounts/psu-thermaltake-smart.webp",
    "credit": "https://pcpartpicker.com/product/Wbhj4D/thermaltake-smart-500-w-80-certified-atx-power-supply-ps-spd-0500npcwus-w",
    "cutout": [
      [
        0.1494,
        0.1062,
        0.7078,
        0.8063
      ],
      109,
      129,
      "QQAFATsBDgE1AhgBLwMkASgEMAEiBToBHAZEARUHTwEOCFoBCAlkAQEKbAEAC20VACBsHQA9ayUAYmoBAGNoAQBkZgEAZWQBAGZiAQBnYAEBaF0BAmlaAQRqVgEEa1QBBmxQAQhtTAEJbkkBC29FAQ1wQQEPcT0BEHI6ARJzNgEUdDIBFnUuARd2KgEZdyYBG3giAR15HgEeehsBIHsXASJ8EwEjfRABJX4MASd/BwEogAQB"
    ]
  },
  "psu-gigabyte-p450b": {
    "src": "img/mounts/psu-gigabyte-p450b.webp",
    "credit": "https://pcpartpicker.com/product/LZMTwP/gigabyte-p-b-450-w-80-bronze-certified-atx-power-supply-gp-p450b",
    "cutout": [
      [
        0.0063,
        0.1563,
        0.9938,
        0.6937
      ],
      159,
      111,
      "QQAGAT4BDQE8AhMBOgMYATcEHwE1BSUBMwYqATAHMQEuCDcBLAk8ASkKQwEnC0kBJQxOASINVQEgDlsBHg9gARsQZwEZEW0BFxJyARQTeQESFHwBDxV/AQ0WgQELF4MBCBiGAQYZiAEEGooBARuNAQAcjgMBH40GASWMDAExjwEBMpIBAjOUAQI0mAECNZsBAjadBwI9igmQPQ8Bkz4MAZY/CQGaQAUBnUECAQNGiQIDSIgBA0mHAQNKhQEDS4QBA0yCAQNNgQEDTn8BA09+AQNQfAEDUXsBBlJ2AQhTcgELVG4BDVVqARBWZgESV2IBFVheARdZWgEaWlUBHFtSAR9cTQEiXUkBJF5FASdfQQEpYD0BLGE5AS5iNQExYzABM2QtATZlKAE5ZiQBO2cgAT5oHAFAaRgBQ2oTAUVrEAFIbAsBSm0IAU1uAwE="
    ]
  }
};
