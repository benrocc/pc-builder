// USD listings checked on this date. Only orderable offers have a price.
const PRICE_CHECK_DATE = "Nov 17, 2026";
const PART_OFFERS = {
  "cpu-3ZmNnQ": {
    cents: 68999,
    store: "B&H",
    checked: "Nov 18, 2026",
    url: "https://www.bhphotovideo.com/c/product/1814098-REG/intel_bx8071514900ks_core_i9_14900ks_3_2_ghz.html"
  },
  "ram-corsair-vengeance-rgb-32-gb-ddr5-6000": {
    cents: 57999,
    store: "Newegg",
    checked: "Nov 18, 2026",
    url: "https://www.newegg.com/corsair-vengeance-rgb-32gb-ddr5-6000-cas-latency-cl36-desktop-memory-black/p/N82E16820236991"
  },
  "case-h5": {
    status: "No longer sold new",
    store: "B&H",
    url: "https://www.bhphotovideo.com/c/product/1720577-REG/nzxt_cc_h51fb_01_h5_flow_compact_mid_tower.html"
  },
  "board-b650": {
    cents: 10999,
    store: "Newegg",
    checked: "Nov 18, 2026",
    url: "https://www.newegg.com/msi-b650-gaming-plus-wifi-atx-motherboard-amd-b650-am5/p/N82E16813144628"
  },
  "board-gigabyte-z790-eagle-ax": {
    cents: 16999,
    store: "Newegg",
    checked: "Nov 18, 2026",
    url: "https://www.newegg.com/gigabyte-z790-eagle-ax-atx-motherboard-intel-z790-lga-1700/p/N82E16813145495"
  },
  "cpu-fPyH99": {
    cents: 41900,
    store: "B&H",
    checked: "Nov 18, 2026",
    note: "Additional $20 cart coupon",
    url: "https://www.bhphotovideo.com/c/product/1859346-REG/amd_100_100001084wof_ryzen_7_9800x3d_am5.html"
  },
  "ram-64g": {
    status: "End of life",
    store: "G.Skill",
    checked: "Nov 18, 2026",
    url: "https://www.gskill.com/product/165/377/1653551713/F5-5600J2834F32GX2-RS5K-F5-5600J2834F32GA2-RS5K-EOL"
  },
  "cooler-thermalright-aqua-elite-v3": {
    cents: 6999,
    store: "Micro Center",
    checked: "Nov 18, 2026",
    note: "Check local pickup",
    url: "https://www.microcenter.com/product/700295/thermalright-aqua-elite-360-v3-360mm-all-in-one-liquid-cpu-cooling-kit-black"
  },
  "cooler-thermalright-phantom-spirit-120-se": {
    cents: 5499,
    store: "Micro Center",
    checked: "Nov 18, 2026",
    note: "Check local pickup",
    url: "https://www.microcenter.com/product/704464/thermalright-phantom-spirit-120-se-cpu-air-cooler"
  },
  "cooler-thermalright-phantom-spirit-120-se-argb": {
    cents: 5999,
    store: "Micro Center",
    checked: "Nov 18, 2026",
    note: "Check local pickup",
    url: "https://www.microcenter.com/product/704463/thermalright-phantom-spirit-120-se-argb-cpu-air-cooler"
  },
  "cooler-thermalright-assassin-x-120-refined-se": {
    cents: 2499,
    store: "Micro Center",
    checked: "Nov 18, 2026",
    note: "Check local pickup",
    url: "https://www.microcenter.com/product/704462/thermalright-assassin-x120-refined-se-cpu-air-cooler"
  },
  "cooler-thermalright-phantom-spirit-evo": {
    cents: 6999,
    store: "Micro Center",
    checked: "Nov 18, 2026",
    note: "Check local pickup",
    url: "https://www.microcenter.com/product/704470/thermalright-phantom-spirit-120-evo-cpu-cooler-black"
  },
  "case-903-black": {
    status: "Backordered",
    store: "Newegg",
    url: "https://www.newegg.com/montech-e-atx-mid-tower-chassis-air-903-max-cases-black/p/2AM-00CN-00059"
  },
  "case-903-white": {
    cents: 8999,
    store: "Newegg",
    url: "https://www.newegg.com/montech-e-atx-mid-tower-chassis-cases-white/p/2AM-00CN-00060"
  },
  "board-b850": {
    cents: 20999,
    store: "B&H",
    url: "https://www.bhphotovideo.com/c/product/1880299-REG/msi_b850tmahawkwifimax_mag_b850_tomahawk_max.html"
  },
  "cpu-Pk62FT": {
    cents: 61999,
    store: "B&H",
    note: "Cart coupon",
    url: "https://www.bhphotovideo.com/c/product/1878570-REG/amd_ryzen_9_9950x3d_4_4.html"
  },
  "cooler-pa": {
    cents: 4999,
    store: "Micro Center",
    url: "https://www.microcenter.com/product/704460/thermalright-peerless-assassin-120-se-cpu-air-cooler"
  },
  "ram-32": {
    cents: 49999,
    store: "Newegg",
    url: "https://www.newegg.com/patriot-memory-viper-venom-32gb-ddr5-6000-cas-latency-cl30-desktop-memory-matte-black/p/N82E16820225334"
  },
  "gpu-nvidia-founders-edition-geforce-rtx-5090": {
    status: "Sold out",
    store: "Best Buy",
    url: "https://www.bestbuy.com/product/nvidia-geforce-rtx-5090-32gb-founders-edition/6614151"
  },
  "gpu-zotac-rtx-5090-solid-oc": {
    cents: 789999,
    store: "Best Buy Marketplace",
    note: "Michael Electronics 2",
    url: "https://www.bestbuy.com/product/zotac-geforce-rtx-5090-solid-oc-32gb-gddr7-pci-express-5-0-graphics-card-black/JJGHT5H2ZS"
  },
  "ssd-990": {
    cents: 34999,
    store: "B&H",
    url: "https://www.bhphotovideo.com/c/product/1855150-REG/samsung_mz_v9s2t0b_am_2tb_990_evo_plus.html"
  },
  "psu-corsair-rm1000x-2024": {
    cents: 18999,
    store: "B&H",
    url: "https://www.bhphotovideo.com/c/product/1859546-REG/corsair_cp_9020271_na_rm1000x_1000w_cybenetics_gold.html"
  }
};
// These catalog rows identify the same exact products.
PART_OFFERS["ram-patriot-viper-venom-32-gb-ddr5-6000"] = PART_OFFERS["ram-32"];
PART_OFFERS["ssd-samsung-990-evo-plus-2-tb"] = PART_OFFERS["ssd-990"];
