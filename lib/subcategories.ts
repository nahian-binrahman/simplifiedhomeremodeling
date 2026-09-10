export interface KeyFeatureItem {
  title?: string;
  text: string;
}

export interface SubCategoryData {
  serviceSlug: string;
  serviceTitle: string;
  subCategorySlug: string;
  title: string;
  shortTitle: string;
  numberPrefix: string;
  tagline: string;
  heroEyebrow: string;
  description: string;
  keyFeatures: (string | KeyFeatureItem)[];
  standardsHeading?: string;
  hideSpecializedBadge?: boolean;
  videoSection?: {
    label?: string;
    title: string;
    description: string;
    features: string[];
    ctaText?: string;
  };
  quoteSection?: {
    title: string;
    subtitle: string;
    description: string;
  };
  metaTitleTemplate: string;
  metaDescTemplate: string;
  heroImage: string;
}

export const SUBCATEGORIES: Record<string, SubCategoryData> = {
  // -------------------------------------------------------------
  // #3 Countertops
  // -------------------------------------------------------------
  "slab-countertops": {
    serviceSlug: "countertops",
    serviceTitle: "Countertops",
    subCategorySlug: "slab-countertops",
    title: "Slab Countertops",
    shortTitle: "Slab Countertops",
    numberPrefix: "3.1",
    tagline: "Premium Slab Countertops, Fabricated for Your Home",
    heroEyebrow: "3.1 SLAB COUNTERTOPS IN",
    description: "Transform your kitchen or bathroom with professionally fabricated quartz, quartzite, granite, and porcelain slab countertops—precision cut and installed for a beautiful, lasting finish.",
    standardsHeading: "PREMIUM SLAB COUNTERTOPS & FABRICATION",
    hideSpecializedBadge: true,
    keyFeatures: [
      {
        title: "PREMIUM SLAB MATERIALS",
        text: "Quartz, quartzite, granite, marble, and porcelain options selected to complement your home and design.",
      },
      {
        title: "PRECISION FABRICATION & INSTALLATION",
        text: "Professional templating, fabrication, sink and cooktop cutouts, edge details, and expert installation.",
      },
      {
        title: "WATERFALL EDGES & FULL-HEIGHT BACKSPLASHES",
        text: "Custom mitered waterfall edges and full-height slab backsplashes for a seamless, elevated look.",
      },
    ],
    videoSection: {
      label: "SEE THE TRANSFORMATION",
      title: "Custom Slab Countertops, Built to Fit.",
      description: "See how professionally fabricated quartz, granite, quartzite, and porcelain slab countertops can transform your kitchen or bathroom with custom sizing, precise seams, and premium finishes.",
      features: [
        "Custom Slab Fabrication & Installation",
        "Premium Quartz, Granite, Quartzite & Porcelain",
        "Precision Cutouts, Edges & Seam Placement",
      ],
      ctaText: "START YOUR COUNTERTOP PROJECT",
    },
    quoteSection: {
      title: "READY FOR NEW SLAB COUNTERTOPS?",
      subtitle: "Premium Surfaces. Precision Fabrication.",
      description: "Transform your kitchen or bathroom with professionally fabricated and installed quartz, quartzite, granite, and porcelain slab countertops.",
    },
    metaTitleTemplate: "Slab Countertops in {location}, CA | Custom Stone Fabrication",
    metaDescTemplate: "Custom slab countertop fabrication and installation in {location}, CA. Jumbo quartz, quartzite & granite slabs. Free estimate!",
    heroImage: "/images/countertops-hero.jpg"
  },
  "pre-fabricated-countertops": {
    serviceSlug: "countertops",
    serviceTitle: "Countertops",
    subCategorySlug: "pre-fabricated-countertops",
    title: "Pre-Fabricated Countertops",
    shortTitle: "Pre-Fab Countertops",
    numberPrefix: "3.2",
    tagline: "Fast, Affordable Prefabricated Countertop Upgrades",
    heroEyebrow: "3.2 PRE-FABRICATED COUNTERTOPS IN",
    description: "Upgrade your kitchen or bathroom with prefabricated quartz and granite countertops designed for faster installation and excellent value. Ideal for kitchens, bathroom vanities, rental properties, investment properties, and budget-conscious remodels.",
    standardsHeading: "FAST INSTALLATION & PROFESSIONAL CRAFTSMANSHIP",
    hideSpecializedBadge: false,
    keyFeatures: [
      {
        title: "Pre-Fabricated Finished Edges",
        text: "Available with standard factory-finished edge profiles for a clean, finished appearance.",
      },
      {
        title: "Faster Turnaround",
        text: "Pre-fabricated countertops reduce fabrication time, allowing for quicker installation than traditional full-slab countertops.",
      },
      {
        title: "Quartz & Granite Options",
        text: "Durable, easy-to-maintain surfaces available in a variety of colors and patterns at an excellent value.",
      },
    ],
    videoSection: {
      label: "SEE THE TRANSFORMATION",
      title: "Pre-Fabricated Countertops Made Simple.",
      description: "See how professionally installed pre-fabricated quartz and granite countertops can give your kitchen or bathroom a fresh, finished look with faster turnaround and excellent value.",
      features: [
        "Pre-Fabricated Quartz & Granite Options",
        "Professional Fabrication & Installation",
        "Fast Turnaround & Affordable Upgrade",
      ],
      ctaText: "START YOUR COUNTERTOP PROJECT",
    },
    quoteSection: {
      title: "READY FOR PRE-FABRICATED COUNTERTOPS?",
      subtitle: "Fast, Affordable Countertop Upgrades for Desert Living.",
      description: "Get your free consultation and estimate for professionally installed pre-fabricated quartz and granite countertops.",
    },
    metaTitleTemplate: "Pre-Fabricated Countertops in {location}, CA | Affordable Quartz & Granite",
    metaDescTemplate: "Affordable pre-fabricated countertop installations in {location}, CA. Fast turnaround, durable quartz and granite finishes. Get a quote.",
    heroImage: "/images/countertops-hero.jpg"
  },

  // -------------------------------------------------------------
  // #4 Cabinetry
  // -------------------------------------------------------------
  "cabinetry-refinishing": {
    serviceSlug: "cabinetry",
    serviceTitle: "Cabinetry",
    subCategorySlug: "cabinetry-refinishing",
    title: "Cabinet Refinishing",
    shortTitle: "Refinishing",
    numberPrefix: "4.1",
    tagline: "Give Your Existing Cabinets a Beautiful New Finish.",
    heroEyebrow: "CABINET REFINISHING IN",
    description: "Restore and modernize your existing solid wood cabinetry with ultra-durable, commercial-grade spray lacquer and designer color finishes without the mess of full demolition.",
    keyFeatures: [
      "Dust-Free On-Site Spray Containment Systems",
      "Custom Stains & Lacquer Painting",
      "Hardware Upgrades, New Dove-Tailed Plywood Drawers & Soft Close Hinges"
    ],
    videoSection: {
      label: "SEE THE TRANSFORMATION",
      title: "Give Your Existing Cabinets a Fresh New Look.",
      description: "Transform your kitchen without replacing your cabinetry. Our professional cabinet refinishing process delivers a smooth, durable finish designed to refresh your existing cabinets and update the look of your home.",
      features: [
        "Professional Cabinet Refinishing",
        "Smooth, Durable Finishes",
        "Detailed Preparation & Craftsmanship",
      ],
      ctaText: "GET YOUR FREE CABINET REFINISHING ESTIMATE",
    },
    quoteSection: {
      title: "READY TO REFINISH YOUR CABINETS?",
      subtitle: "Give Your Existing Cabinets a Beautiful New Finish.",
      description: "Refresh your kitchen with professional cabinet refinishing—without the cost of replacing your existing cabinetry.",
    },
    metaTitleTemplate: "Cabinet Refinishing in {location}, CA | Factory Spray Painting",
    metaDescTemplate: "Professional cabinet refinishing and painting in {location}, CA. Factory smooth finishes, durable coating & hardware upgrades. Book today.",
    heroImage: "/images/kitchen-hero.jpg"
  },
  "cabinetry-refacing": {
    serviceSlug: "cabinetry",
    serviceTitle: "Cabinetry",
    subCategorySlug: "cabinetry-refacing",
    title: "Cabinet Refacing",
    shortTitle: "Refacing",
    numberPrefix: "4.2",
    tagline: "New Custom Doors & Drawer Fronts Over Existing Boxes",
    heroEyebrow: "CABINET REFACING IN",
    description: "Transform your existing cabinetry with brand-new doors and drawer fronts, professionally finished surfaces, and upgraded soft-close hardware—all while keeping your existing cabinet boxes.",
    standardsHeading: "CABINET REFACING STANDARDS & CRAFTSMANSHIP",
    hideSpecializedBadge: true,
    keyFeatures: [
      {
        title: "NEW CABINET DOORS & DRAWER FRONTS",
        text: "Choose from Shaker and other door styles for a completely updated look.",
      },
      {
        title: "PROFESSIONALLY REFACED CABINET FRAMES",
        text: "Existing cabinet frames are carefully prepared and finished to complement your new doors.",
      },
      {
        title: "SOFT-CLOSE HARDWARE UPGRADES",
        text: "Upgrade to concealed soft-close hinges with options for new soft-close drawer systems.",
      },
    ],
    metaTitleTemplate: "Cabinet Refacing in {location}, CA | New Doors & Veneers",
    metaDescTemplate: "Cabinet refacing services in {location}, CA. Transform your kitchen with new custom doors and drawer fronts in days. Free consultations.",
    heroImage: "/images/kitchen-hero.jpg"
  },
  "simplified-select-cabinetry": {
    serviceSlug: "cabinetry",
    serviceTitle: "Cabinetry",
    subCategorySlug: "simplified-select-cabinetry",
    title: "Simplified Select Cabinetry",
    shortTitle: "Simplified Select",
    numberPrefix: "4.3",
    tagline: "Premium Semi-Custom Cabinetry with Balanced Lead Times",
    heroEyebrow: "SEMI-CUSTOM CABINETS IN",
    description: "Engineered for high performance and durability. All-plywood box construction, solid maple dovetail drawers, soft-close hardware, and popular designer door styles.",
    keyFeatures: [
      "1/2\" & 3/4\" Solid Plywood Construction (No Particle Board)",
      "Solid Hardwood Dovetail Drawers with Full Extension Soft-Close",
      "Pre-Engineered Designer Door Styles & Finishes"
    ],
    metaTitleTemplate: "Simplified Select Cabinetry in {location}, CA | Quality Kitchen Cabinets",
    metaDescTemplate: "Simplified Select semi-custom cabinetry in {location}, CA. Plywood box construction, dovetail drawers, soft-close hardware. Free quote.",
    heroImage: "/images/kitchen-hero.jpg"
  },
  "simplified-signature-cabinetry": {
    serviceSlug: "cabinetry",
    serviceTitle: "Cabinetry",
    subCategorySlug: "simplified-signature-cabinetry",
    title: "Simplified Signature Cabinetry",
    shortTitle: "Simplified Signature",
    numberPrefix: "4.4",
    tagline: "Bespoke Architectural Millwork & Custom Built-Ins",
    heroEyebrow: "BESPOKE CABINETRY IN",
    description: "Handcrafted, fully custom cabinetry built to exact architectural specifications. Rift white oak, walnut, inset door construction, integrated LEDs, and concealed appliance paneling.",
    keyFeatures: [
      "100% Fully Custom Millwork (Inset, Full Overlay, or European Frameless)",
      "Exotic Hardwoods: Rift White Oak, Black Walnut, Mahogany",
      "Custom Pantry Built-Ins, Appliance Garages & Integrated LED Channels"
    ],
    metaTitleTemplate: "Simplified Signature Custom Cabinets in {location}, CA | Luxury Millwork",
    metaDescTemplate: "Custom luxury cabinetry in {location}, CA. Rift white oak, bespoke built-ins, inset construction & custom millwork. Request a private estimate.",
    heroImage: "/images/kitchen-hero.jpg"
  },

  // -------------------------------------------------------------
  // #5 Flooring
  // -------------------------------------------------------------
  "luxury-vinyl-plank": {
    serviceSlug: "flooring",
    serviceTitle: "Flooring",
    subCategorySlug: "luxury-vinyl-plank",
    title: "Luxury Vinyl Plank (LVP)",
    shortTitle: "LVP Flooring",
    numberPrefix: "5.1",
    tagline: "100% Waterproof, Scratch-Resistant Desert Luxury Flooring",
    heroEyebrow: "LVP FLOORING IN",
    description: "The ultimate flooring solution for Coachella Valley living. 100% waterproof, resistant to desert sand abrasion, pet-friendly, with authentic embossed wood grain textures.",
    keyFeatures: [
      "100% Waterproof Rigid Core (SPC/WPC)",
      "20mil+ Commercial Grade Scratch-Resistant Wear Layer",
      "Acoustic Sound-Dampening Attached Underlayment"
    ],
    metaTitleTemplate: "Luxury Vinyl Plank (LVP) Flooring in {location}, CA | Waterproof Floors",
    metaDescTemplate: "Top-grade Luxury Vinyl Plank (LVP) flooring in {location}, CA. Waterproof, scratch-resistant, wide plank wood look. Free in-home estimates.",
    heroImage: "/images/kitchen-hero.jpg"
  },
  "laminate-flooring": {
    serviceSlug: "flooring",
    serviceTitle: "Flooring",
    subCategorySlug: "laminate-flooring",
    title: "Laminate Flooring",
    shortTitle: "Laminate Flooring",
    numberPrefix: "5.2",
    tagline: "Realistic Hardwood Visuals & Superior Dent Resistance",
    heroEyebrow: "LAMINATE FLOORING IN",
    description: "Modern water-resistant laminate featuring realistic high-definition wood grain visuals, durable AC4/AC5 wear ratings, and seamless click-lock installation.",
    keyFeatures: [
      "High-Definition Embossed Hardwood Visuals",
      "Superior Impact & Dent Resistance (AC4/AC5 Rated)",
      "Enhanced Water-Resistant Core Technology"
    ],
    metaTitleTemplate: "Laminate Flooring Installation in {location}, CA | Durable Wood Look",
    metaDescTemplate: "Expert laminate flooring installation in {location}, CA. High-density wood visual floors built for active homes. Book a consultation.",
    heroImage: "/images/kitchen-hero.jpg"
  },
  "porcelain-tile": {
    serviceSlug: "flooring",
    serviceTitle: "Flooring",
    subCategorySlug: "porcelain-tile",
    title: "Porcelain Tile",
    shortTitle: "Porcelain Tile",
    numberPrefix: "5.3",
    tagline: "Large-Format Cool Desert Flooring & Indoor-Outdoor Continuity",
    heroEyebrow: "PORCELAIN TILE IN",
    description: "Cool, ultra-durable large format porcelain tile (24x48, 30x60). Naturally stays cool in desert heat, impervious to water, and seamlessly connects interior living to outdoor patios.",
    keyFeatures: [
      "Large-Format Rectified Porcelain (Minimal Grout Lines)",
      "Extreme Thermal & UV Resistance (Stays Cool in Summer)",
      "Indoor-Outdoor Seamless Flooring Transitions"
    ],
    metaTitleTemplate: "Porcelain Tile Flooring in {location}, CA | Large Format Tile",
    metaDescTemplate: "Large format porcelain tile flooring in {location}, CA. Cool desert surfaces, rectified edges & seamless indoor-outdoor layouts. Free quote.",
    heroImage: "/images/bathroom-hero.jpg"
  },
  "natural-stone-tile": {
    serviceSlug: "flooring",
    serviceTitle: "Flooring",
    subCategorySlug: "natural-stone-tile",
    title: "Natural Stone Tile",
    shortTitle: "Natural Stone Tile",
    numberPrefix: "5.4",
    tagline: "Travertine, Limestone, Marble & Slate Artisanal Flooring",
    heroEyebrow: "NATURAL STONE IN",
    description: "Timeless travertine, French limestone, tumbled marble, and flagstone tile expertly laid and sealed for authentic desert estate luxury.",
    keyFeatures: [
      "Honed & Filled Travertine, French Limestone & Natural Slate",
      "Precision French Versailles Pattern Laying",
      "Commercial Grade Penetrating Sealant Application"
    ],
    metaTitleTemplate: "Natural Stone Tile Flooring in {location}, CA | Travertine & Marble",
    metaDescTemplate: "Natural stone tile installation in {location}, CA. Travertine, limestone, marble & slate flooring by master tile setters. Get an estimate.",
    heroImage: "/images/bathroom-hero.jpg"
  }
};

export const SUBCATEGORIES_BY_SERVICE: Record<string, SubCategoryData[]> = {
  countertops: [
    SUBCATEGORIES["slab-countertops"],
    SUBCATEGORIES["pre-fabricated-countertops"]
  ],
  cabinetry: [
    SUBCATEGORIES["cabinetry-refinishing"],
    SUBCATEGORIES["cabinetry-refacing"],
    SUBCATEGORIES["simplified-select-cabinetry"],
    SUBCATEGORIES["simplified-signature-cabinetry"]
  ],
  flooring: [
    SUBCATEGORIES["luxury-vinyl-plank"],
    SUBCATEGORIES["laminate-flooring"],
    SUBCATEGORIES["porcelain-tile"],
    SUBCATEGORIES["natural-stone-tile"]
  ]
};
