
/* =====================================================
   SSR MARK & PRINT
   COMPLETE PRODUCT CATALOGUE
   File: src/data/products.js
===================================================== */

// =====================================================
// AUTOMATIC PRODUCT IMAGE LOADER
// =====================================================

const productImages = import.meta.glob(
  "../assets/images/Product/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  {
    eager: true,
    import: "default",
  }
);

const normalizeImageName = (value = "") =>
  value
    .split("/")
    .pop()
    .replace(/\.(png|jpg|jpeg|webp)$/i, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Image filename aliases
const imageAliases = {
  "zebra-zt411.png": "Zebra-ZT411-Industrial-Barcode-Printer.png",
  "tsc-mh241.png": "TSC-MH241-Industrial-Barcode-Printer.png",
  "godex-zx420i.png": "Godex-ZX420i-Industrial-Barcode-Printer.png",
  "industrial-printer-6inch.png": "6-Inch-Industrial-Wide-Format-Barcode-Printer.png",
  "godex-hd830i.png": "Godex-HD830i-8-Inch-Industrial-Barcode-Printer.png",

  "mobile-printer-2inch.png": "2-Inch-Mobile-Bluetooth-Barcode-Printer.png",
  "mobile-printer-3inch.png": "3-Inch-Mobile-Bluetooth-Barcode-Printer.png",
  "mobile-printer-4inch.png": "4-Inch-Mobile-Wireless-Barcode-Printer.png",

  "printer-printhead.png": "Barcode-Printer-Printhead-Model-Specific.png",
  "platen-roller.png": "Barcode-Printer-Platen-Roller-Model-Specific.png",
  "printer-accessories.png": "Barcode-Printer-Accessories-Multiple-Options.png",

  "zebra-zd421.png": "Zebra-ZD421-Desktop-Label-Printer.png",
  "tsc-te244.png": "TSC-TE244-Desktop-Label-Printer.png",
  "godex-g500.png": "Godex-G500-Desktop-Label-Printer.png",
  "tvs-lp46.png": "TVS-LP-46-Desktop-Label-Printer.png",
};

const normalizedAliases = Object.fromEntries(
  Object.entries(imageAliases).map(([key, value]) => [
    normalizeImageName(key),
    value,
  ])
);

export const getProductImage = (filename) => {
  if (!filename) return null;

  const requestedName = normalizeImageName(filename);

  const actualFilename =
    normalizedAliases[requestedName] || filename;

  const normalizedActualName =
    normalizeImageName(actualFilename);

  const imagePath = Object.keys(productImages).find(
    (path) =>
      normalizeImageName(path) === normalizedActualName
  );

  if (!imagePath) {
    console.warn("Product image not found:", filename);
    return null;
  }

  return productImages[imagePath];
};

// =====================================================
// MAIN CATEGORIES
// =====================================================

export const categories = [
  {
    name: "Barcode & Product Labels",
    icon: "🏷️",
    children: [
      "E-Commerce & Logistics Labels",
      "Retail & Supermarket Labels",
      "Meat & Deep-Freeze Labels",
      "Weighing Scale Labels",
      "Sweets & Dry Fruit Labels",
      "Healthcare & Lab Labels",
      "Industrial & Manufacturing Labels",
      "Custom Pre-Printed Labels",
      "Direct Thermal Labels",
      "Chrome Labels",
      "Polyester Labels",
      "Ribbons",
    ],
  },
  {
    name: "Thermal Paper Rolls",
    icon: "🧻",
    children: [
      "POS Billing Rolls (57mm / 79mm)",
      "Pre-Printed Receipt Rolls",
      "Kitchen Order Ticket (KOT) Rolls",
    ],
  },
  {
    name: "Hardware & Printers",
    icon: "🖨️",
    children: [
      "Desktop Label Printers",
      "Industrial Label Printers",
      "Mobile Barcode Printers",
      "Printer Accessories & Ribbons",
    ],
  },
];

// =====================================================
// PRODUCT GENERATOR
// =====================================================

const createSizeProducts = ({
  startId,
  category,
  subcategory,
  name,
  sizes,
  description,
  image,
  badge = "",
}) =>
  sizes.map((size, index) => {
    const imageFile =
      typeof image === "function" ? image(size) : image;

    return {
      id: startId + index,
      slug: `${name}-${size}`
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      name: `${name} ${size}`,
      category,
      subcategory,
      size,
      description,
      image: getProductImage(imageFile),
      badge,
      type: "product",
    };
  });

// =====================================================
// ALL PRODUCTS
// =====================================================

export const products = [

  // ===================================================
  // 1. BARCODE & PRODUCT LABELS
  // ===================================================

  // E-COMMERCE & LOGISTICS LABELS

  ...createSizeProducts({
    startId: 1,
    category: "Barcode & Product Labels",
    subcategory: "E-Commerce & Logistics Labels",
    name: "E-Commerce Shipping Label",
    sizes: [
      "100x150 mm",
      "100x100 mm",
      "75x125 mm",
      "100x50 mm",
    ],
    description:
      "Barcode shipping labels for courier companies, e-commerce businesses, warehouses and logistics operations.",
    image: (size) => ({
      "100x150 mm": "shipping-label-100x150.png",
      "100x100 mm": "shipping-label-100x100.png",
      "75x125 mm": "shipping-label-75x125.png",
      "100x50 mm": "shipping-label-100x50.png",
    })[size],
    badge: "Popular",
  }),

  // RETAIL & SUPERMARKET LABELS

  ...createSizeProducts({
    startId: 5,
    category: "Barcode & Product Labels",
    subcategory: "Retail & Supermarket Labels",
    name: "Retail Barcode Label",
    sizes: [
      "50x25 mm",
      "50x30 mm",
      "50x50 mm",
      "38x25 mm",
      "33x25 mm",
      "40x20 mm",
    ],
    description:
      "Barcode and price labels for supermarkets, retail stores, product packaging and inventory management.",
    image: (size) => ({
      "50x25 mm": "retail-label-50x25.png",
      "50x30 mm": "retail-label-50x30.png",
      "50x50 mm": "retail-label-50x50.png",
      "38x25 mm": "retail-label-38x25.png",
      "33x25 mm": "retail-label-33x25.png",
      "40x20 mm": "retail-label-40x20.png",
    })[size],
  }),

  // MEAT & DEEP-FREEZE LABELS

  ...createSizeProducts({
    startId: 11,
    category: "Barcode & Product Labels",
    subcategory: "Meat & Deep-Freeze Labels",
    name: "Meat & Deep Freeze Label",
    sizes: [
      "50x30 mm",
      "50x50 mm",
      "75x50 mm",
      "100x50 mm",
      "100x75 mm",
    ],
    description:
      "Labels for meat products, frozen food packaging and cold storage applications. Choose a material suitable for the storage conditions.",
    image: (size) => ({
      "50x30 mm": "meat-label-50x30.png",
      "50x50 mm": "meat-label-50x50.png",
      "75x50 mm": "meat-label-75x50.png",
      "100x50 mm": "meat-label-100x50.png",
      "100x75 mm": "meat-label-100x75.png",
    })[size],
  }),

  // SWEETS & DRY FRUIT LABELS

  ...createSizeProducts({
    startId: 16,
    category: "Barcode & Product Labels",
    subcategory: "Sweets & Dry Fruit Labels",
    name: "Sweets & Dry Fruit Label",
    sizes: [
      "50x25 mm",
      "50x50 mm",
      "75x50 mm",
      "100x50 mm",
      "58x37 mm",
    ],
    description:
      "Product labels for sweets shops, bakeries, dry fruits and food packaging businesses.",
    image: (size) => ({
      "50x25 mm": "sweets-label-50x25.png",
      "50x50 mm": "sweets-label-50x50.png",
      "75x50 mm": "sweets-label-75x50.png",
      "100x50 mm": "sweets-label-100x50.png",
      "58x37 mm": "sweets-label-58x37.png",
    })[size],
  }),

  // HEALTHCARE & LAB LABELS

  ...createSizeProducts({
    startId: 21,
    category: "Barcode & Product Labels",
    subcategory: "Healthcare & Lab Labels",
    name: "Healthcare & Laboratory Label",
    sizes: [
      "25x15 mm",
      "30x20 mm",
      "38x25 mm",
      "50x25 mm",
      "50x30 mm",
    ],
    description:
      "Identification labels for laboratory samples, healthcare products, medical inventory and diagnostic applications.",
    image: (size) => ({
      "25x15 mm": "lab-label-25x15.png",
      "30x20 mm": "lab-label-30x20.png",
      "38x25 mm": "lab-label-38x25.png",
      "50x25 mm": "lab-label-50x25.png",
      "50x30 mm": "lab-label-50x30.png",
    })[size],
  }),

  // INDUSTRIAL & MANUFACTURING LABELS

  ...createSizeProducts({
    startId: 26,
    category: "Barcode & Product Labels",
    subcategory: "Industrial & Manufacturing Labels",
    name: "Industrial Barcode Label",
    sizes: [
      "50x25 mm",
      "75x50 mm",
      "100x50 mm",
      "100x75 mm",
      "100x100 mm",
    ],
    description:
      "Industrial barcode labels for manufacturing, product identification, warehouses and inventory tracking.",
    image: (size) => ({
      "50x25 mm": "industrial-label-50x25.png",
      "75x50 mm": "industrial-label-75x50.png",
      "100x50 mm": "industrial-label-100x50.png",
      "100x75 mm": "industrial-label-100x75.png",
      "100x100 mm": "industrial-label-100x100.png",
    })[size],
  }),

  // CUSTOM PRE-PRINTED LABELS

  ...createSizeProducts({
    startId: 31,
    category: "Barcode & Product Labels",
    subcategory: "Custom Pre-Printed Labels",
    name: "Custom Pre-Printed Label",
    sizes: [
      "25x15 mm",
      "33x25 mm",
      "38x25 mm",
      "50x25 mm",
      "50x50 mm",
      "75x50 mm",
      "100x50 mm",
      "100x150 mm",
    ],
    description:
      "Custom printed labels with company logos, product branding, barcodes and customised designs.",
    image: (size) => ({
      "25x15 mm": "custom-preprinted-label-25x15.png",
      "33x25 mm": "custom-preprinted-label-33x25.png",
      "38x25 mm": "custom-preprinted-label-38x25.png",
      "50x25 mm": "custom-preprinted-label-50x25.png",
      "50x50 mm": "custom-preprinted-label-50x50.png",
      "75x50 mm": "custom-preprinted-label-75x50.png",
      "100x50 mm": "custom-preprinted-label-100x50.png",
      "100x150 mm": "custom-preprinted-label-100x150.png",
    })[size],
    badge: "Customizable",
  }),

  // DIRECT THERMAL LABELS

  ...createSizeProducts({
    startId: 39,
    category: "Barcode & Product Labels",
    subcategory: "Direct Thermal Labels",
    name: "Direct Thermal Label",
    sizes: [
      "38x25 mm",
      "50x25 mm",
      "50x50 mm",
      "75x50 mm",
      "75x125 mm",
      "100x100 mm",
      "100x150 mm",
    ],
    description:
      "Direct thermal self-adhesive labels for barcode printing, shipping, retail and warehouse applications.",
    image: (size) => ({
      "38x25 mm": "direct-thermal-label-38x25.png",
      "50x25 mm": "direct-thermal-label-50x25.png",
      "50x50 mm": "direct-thermal-label-50x50.png",
      "75x50 mm": "direct-thermal-label-75x50.png",
      "75x125 mm": "direct-thermal-label-75x125.png",
      "100x100 mm": "direct-thermal-label-100x100.png",
      "100x150 mm": "direct-thermal-label-100x150.png",
    })[size],
    badge: "Best Seller",
  }),

  // CHROME LABELS

  ...createSizeProducts({
    startId: 46,
    category: "Barcode & Product Labels",
    subcategory: "Chrome Labels",
    name: "Chrome Label",
    sizes: [
      "33x25 mm",
      "38x25 mm",
      "50x25 mm",
      "50x30 mm",
      "50x50 mm",
      "75x50 mm",
      "100x50 mm",
    ],
    description:
      "Chrome finish self-adhesive labels for product branding, packaging and identification.",
    image: (size) => ({
      "33x25 mm": "chrome-label-33x25.png",
      "38x25 mm": "chrome-label-38x25.png",
      "50x25 mm": "chrome-label-50x25.png",
      "50x30 mm": "chrome-label-50x30.png",
      "50x50 mm": "chrome-label-50x50.png",
      "75x50 mm": "chrome-label-75x50.png",
      "100x50 mm": "chrome-label-100x50.png",
    })[size],
  }),

  // POLYESTER LABELS

  ...createSizeProducts({
    startId: 53,
    category: "Barcode & Product Labels",
    subcategory: "Polyester Labels",
    name: "Polyester Label",
    sizes: [
      "25x15 mm",
      "30x20 mm",
      "38x25 mm",
      "50x25 mm",
      "50x50 mm",
      "75x50 mm",
      "100x50 mm",
    ],
    description:
      "Durable polyester labels for industrial identification and applications requiring resistant label materials.",
    image: (size) => ({
      "25x15 mm": "polyester-label-25x15.png",
      "30x20 mm": "polyester-label-30x20.png",
      "38x25 mm": "polyester-label-38x25.png",
      "50x25 mm": "polyester-label-50x25.png",
      "50x50 mm": "polyester-label-50x50.png",
      "75x50 mm": "polyester-label-75x50.png",
      "100x50 mm": "polyester-label-100x50.png",
    })[size],
  }),

  // ===================================================
  // 2. RIBBONS
  // ===================================================

  ...createSizeProducts({
    startId: 60,
    category: "Barcode & Product Labels",
    subcategory: "Ribbons",
    name: "Wax Thermal Transfer Ribbon",
    sizes: [
      "60mm x 300m",
      "80mm x 300m",
      "90mm x 300m",
      "110mm x 300m",
    ],
    description:
      "Wax thermal transfer ribbons for barcode and product label printing on compatible materials.",
    image: (size) => ({
      "60mm x 300m": "wax-ribbon-60x300.png",
      "80mm x 300m": "wax-ribbon-80x300.png",
      "90mm x 300m": "wax-ribbon-90x300.png",
      "110mm x 300m": "wax-ribbon-110x300.png",
    })[size],
  }),

  ...createSizeProducts({
    startId: 64,
    category: "Barcode & Product Labels",
    subcategory: "Ribbons",
    name: "Wax Resin Thermal Ribbon",
    sizes: [
      "60mm x 300m",
      "80mm x 300m",
      "90mm x 300m",
      "110mm x 300m",
    ],
    description:
      "Wax resin ribbons for durable barcode printing and product identification.",
    image: (size) => ({
      "60mm x 300m": "wax-resin-ribbon-60x300.png",
      "80mm x 300m": "wax-resin-ribbon-80x300.png",
      "90mm x 300m": "wax-resin-ribbon-90x300.png",
      "110mm x 300m": "wax-resin-ribbon-110x300.png",
    })[size],
  }),

  ...createSizeProducts({
    startId: 68,
    category: "Barcode & Product Labels",
    subcategory: "Ribbons",
    name: "Resin Thermal Transfer Ribbon",
    sizes: [
      "60mm x 300m",
      "80mm x 300m",
      "90mm x 300m",
      "110mm x 300m",
    ],
    description:
      "Resin ribbons for compatible synthetic label materials and demanding printing applications.",
    image: (size) => ({
      "60mm x 300m": "resin-ribbon-60x300.png",
      "80mm x 300m": "resin-ribbon-80x300.png",
      "90mm x 300m": "resin-ribbon-90x300.png",
      "110mm x 300m": "resin-ribbon-110x300.png",
    })[size],
  }),

  // ===================================================
  // 3. THERMAL PAPER ROLLS
  // ===================================================

  ...createSizeProducts({
    startId: 72,
    category: "Thermal Paper Rolls",
    subcategory: "POS Billing Rolls (57mm / 79mm)",
    name: "Thermal POS Paper Roll",
    sizes: [
      "79x30 mm",
      "79x40 mm",
      "79x50 mm",
      "79x60 mm",
      "80x50 mm",
      "80x80 mm",
    ],
    description:
      "Premium thermal POS billing paper rolls for retail stores, supermarkets, restaurants, hotels and billing counters. Designed for clear, smooth and consistent receipt printing.",
    image: (size) => ({
      "79x30 mm": "thermal-paper-roll-79x30.png",
      "79x40 mm": "thermal-paper-roll-79x40.png",
      "79x50 mm": "thermal-paper-roll-79x50.png",
      "79x60 mm": "thermal-paper-roll-79x60.png",
      "80x50 mm": "thermal-paper-roll-80x50.png",
      "80x80 mm": "thermal-paper-roll-80x80.png",
    })[size],
    badge: "Popular",
  }),

  ...createSizeProducts({
    startId: 78,
    category: "Thermal Paper Rolls",
    subcategory: "POS Billing Rolls (57mm / 79mm)",
    name: "Compact Thermal Paper Roll",
    sizes: [
      "57x15 mm",
      "57x20 mm",
      "57x30 mm",
      "57x40 mm",
      "57x50 mm",
    ],
    description:
      "Compact thermal paper rolls for portable billing machines, mini POS devices, handheld billing printers and mobile receipt printers.",
    image: (size) => ({
      "57x15 mm": "compact-thermal-roll-57x15.png",
      "57x20 mm": "compact-thermal-roll-57x20.png",
      "57x30 mm": "compact-thermal-roll-57x30.png",
      "57x40 mm": "compact-thermal-roll-57x40.png",
      "57x50 mm": "compact-thermal-roll-57x50.png",
    })[size],
  }),

  ...createSizeProducts({
    startId: 83,
    category: "Thermal Paper Rolls",
    subcategory: "Pre-Printed Receipt Rolls",
    name: "Pre-Printed Thermal Receipt Roll",
    sizes: [
      "57x30 mm",
      "57x40 mm",
      "79x40 mm",
      "79x50 mm",
      "80x50 mm",
    ],
    description:
      "Custom pre-printed thermal receipt rolls featuring business logos, shop names, addresses, contact details, terms and conditions, promotional messages and repeated branding.",
    image: (size) => ({
      "57x30 mm": "preprinted-roll-57x30.png",
      "57x40 mm": "preprinted-roll-57x40.png",
      "79x40 mm": "preprinted-roll-79x40.png",
      "79x50 mm": "preprinted-roll-79x50.png",
      "80x50 mm": "preprinted-roll-80x50.png",
    })[size],
    badge: "Customizable",
  }),

  ...createSizeProducts({
    startId: 88,
    category: "Thermal Paper Rolls",
    subcategory: "Kitchen Order Ticket (KOT) Rolls",
    name: "Kitchen Order Ticket Roll",
    sizes: [
      "79x30 mm",
      "79x40 mm",
      "79x50 mm",
      "80x50 mm",
      "80x80 mm",
    ],
    description:
      "Premium Kitchen Order Ticket (KOT) thermal rolls for restaurants, hotels, cafes, cloud kitchens and food outlets. Suitable for printing kitchen orders, table numbers, food items and quantities.",
    image: (size) => ({
      "79x30 mm": "kot-roll-79x30.png",
      "79x40 mm": "kot-roll-79x40.png",
      "79x50 mm": "kot-roll-79x50.png",
      "80x50 mm": "kot-roll-80x50.png",
      "80x80 mm": "kot-roll-80x80.png",
    })[size],
  }),

  // ===================================================
  // 4. HARDWARE & PRINTERS
  // ===================================================

  // DESKTOP PRINTERS

  {
    id: 93,
    slug: "2-inch-desktop-barcode-printer",
    name: "2-Inch Desktop Barcode Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "2-inch | 203 DPI options",
    description:
      "Compact desktop barcode printer for small labels, retail, product identification and business applications.",
    image: getProductImage("desktop-printer-2inch.png"),
    type: "printer",
  },
  {
    id: 94,
    slug: "zebra-zd230-desktop-label-printer",
    name: "Zebra ZD230 Desktop Label Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "4-inch | 203 DPI",
    description:
      "Desktop barcode printer for shipping, retail, product labels and inventory applications.",
    image: getProductImage("zebra-zd230.png"),
    type: "printer",
  },
  {
    id: 95,
    slug: "zebra-zd421-desktop-label-printer",
    name: "Zebra ZD421 Desktop Label Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "4-inch | 203 / 300 DPI options",
    description:
      "Desktop thermal label printer for business and warehouse barcode printing.",
    image: getProductImage("zebra-zd421.png"),
    type: "printer",
  },
  {
    id: 96,
    slug: "tsc-te244-desktop-label-printer",
    name: "TSC TE244 Desktop Label Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "4-inch | 203 DPI",
    description:
      "Desktop thermal transfer barcode printer for everyday business label printing.",
    image: getProductImage("tsc-te244.png"),
    type: "printer",
  },
  {
    id: 97,
    slug: "godex-g500-desktop-label-printer",
    name: "Godex G500 Desktop Label Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "4-inch | 203 DPI",
    description:
      "Desktop barcode printer for retail, product identification and shipping labels.",
    image: getProductImage("godex-g500.png"),
    type: "printer",
  },
  {
    id: 98,
    slug: "tvs-lp46-desktop-label-printer",
    name: "TVS LP 46 Desktop Label Printer",
    category: "Hardware & Printers",
    subcategory: "Desktop Label Printers",
    size: "4-inch | 203 DPI",
    description:
      "Desktop label printer for barcode, logistics and product label printing.",
    image: getProductImage("tvs-lp46.png"),
    type: "printer",
  },

  // INDUSTRIAL PRINTERS

  {
    id: 99,
    slug: "zebra-zt411-industrial-printer",
    name: "Zebra ZT411 Industrial Printer",
    category: "Hardware & Printers",
    subcategory: "Industrial Label Printers",
    size: "4-inch | 203 / 300 DPI options",
    description:
      "Heavy-duty industrial barcode printer for manufacturing and warehouse operations.",
    image: getProductImage("zebra-zt411.png"),
    type: "printer",
  },
  {
    id: 100,
    slug: "tsc-mh241-industrial-printer",
    name: "TSC MH241 Industrial Printer",
    category: "Hardware & Printers",
    subcategory: "Industrial Label Printers",
    size: "4-inch industrial printer",
    description:
      "Industrial thermal transfer printer for high-volume barcode and label printing.",
    image: getProductImage("tsc-mh241.png"),
    type: "printer",
  },
  {
    id: 101,
    slug: "godex-zx420i-industrial-printer",
    name: "Godex ZX420i Industrial Printer",
    category: "Hardware & Printers",
    subcategory: "Industrial Label Printers",
    size: "4-inch industrial printer",
    description:
      "Industrial barcode printer for production, manufacturing and logistics applications.",
    image: getProductImage("godex-zx420i.png"),
    type: "printer",
  },
  {
    id: 102,
    slug: "6-inch-industrial-barcode-printer",
    name: "6-Inch Industrial Barcode Printer",
    category: "Hardware & Printers",
    subcategory: "Industrial Label Printers",
    size: "6-inch wide-format printer",
    description:
      "Wide-format industrial barcode printer for larger product labels, cartons and manufacturing identification.",
    image: getProductImage("industrial-printer-6inch.png"),
    type: "printer",
  },
  {
    id: 103,
    slug: "godex-hd830i-industrial-printer",
    name: "Godex HD830i Industrial Printer",
    category: "Hardware & Printers",
    subcategory: "Industrial Label Printers",
    size: "8-inch wide-format printer",
    description:
      "Wide-format industrial label printer for large labels and industrial identification.",
    image: getProductImage("godex-hd830i.png"),
    type: "printer",
  },

  // MOBILE PRINTERS

  {
    id: 104,
    slug: "2-inch-mobile-barcode-printer",
    name: "2-Inch Mobile Barcode Printer",
    category: "Hardware & Printers",
    subcategory: "Mobile Barcode Printers",
    size: "2-inch | Bluetooth options",
    description:
      "Portable barcode printer for delivery, retail and field operations.",
    image: getProductImage("mobile-printer-2inch.png"),
    type: "printer",
  },
  {
    id: 105,
    slug: "3-inch-mobile-barcode-printer",
    name: "3-Inch Mobile Barcode Printer",
    category: "Hardware & Printers",
    subcategory: "Mobile Barcode Printers",
    size: "3-inch | Bluetooth options",
    description:
      "Compact mobile printer for portable receipt and label printing.",
    image: getProductImage("mobile-printer-3inch.png"),
    type: "printer",
  },
  {
    id: 106,
    slug: "4-inch-mobile-barcode-printer",
    name: "4-Inch Mobile Barcode Printer",
    category: "Hardware & Printers",
    subcategory: "Mobile Barcode Printers",
    size: "4-inch | Wireless options",
    description:
      "Portable barcode printer for warehouse, logistics and field applications.",
    image: getProductImage("mobile-printer-4inch.png"),
    type: "printer",
  },

  // PRINTER ACCESSORIES

  {
    id: 107,
    slug: "barcode-printer-printhead",
    name: "Barcode Printer Printhead",
    category: "Hardware & Printers",
    subcategory: "Printer Accessories & Ribbons",
    size: "Model-specific",
    description:
      "Replacement printheads for compatible thermal barcode printers.",
    image: getProductImage("printer-printhead.png"),
    type: "accessory",
  },
  {
    id: 108,
    slug: "barcode-printer-platen-roller",
    name: "Barcode Printer Platen Roller",
    category: "Hardware & Printers",
    subcategory: "Printer Accessories & Ribbons",
    size: "Model-specific",
    description:
      "Replacement platen rollers for compatible barcode label printers.",
    image: getProductImage("platen-roller.png"),
    type: "accessory",
  },
  {
    id: 109,
    slug: "barcode-printer-accessories",
    name: "Barcode Printer Accessories",
    category: "Hardware & Printers",
    subcategory: "Printer Accessories & Ribbons",
    size: "Multiple options",
    description:
      "Printer accessories and replacement parts for compatible barcode printing equipment.",
    image: getProductImage("printer-accessories.png"),
    type: "accessory",
  },

  // ===================================================
  // 5. WEIGHING SCALE LABELS
  // ===================================================

  ...createSizeProducts({
    startId: 110,
    category: "Barcode & Product Labels",
    subcategory: "Weighing Scale Labels",
    name: "Weighing Scale Label",
    sizes: ["58x37 mm"],
    description:
      "Thermal weighing scale labels for supermarkets, retail stores, vegetable shops, fruit shops, meat shops and compatible weighing scale machines.",
    image: "weighing-scale-label-58x37.png",
    badge: "Popular",
  }),
];

// =====================================================
// HELPER FUNCTIONS
// =====================================================

// GET PRODUCT BY SLUG

export const getProductBySlug = (slug) =>
  products.find((product) => product.slug === slug);

// GET PRODUCTS BY CATEGORY

export const getProductsByCategory = (categoryName) =>
  products.filter(
    (product) => product.category === categoryName
  );

// GET PRODUCTS BY SUBCATEGORY

export const getProductsBySubcategory = (subcategoryName) =>
  products.filter(
    (product) => product.subcategory === subcategoryName
  );

// SEARCH PRODUCTS

export const searchProducts = (searchTerm = "") => {
  const search = searchTerm.toLowerCase().trim();

  if (!search) return products;

  return products.filter((product) =>
    [
      product.name,
      product.category,
      product.subcategory,
      product.size,
      product.description,
    ]
      .filter(Boolean)
      .some((value) => value.toLowerCase().includes(search))
  );
};
