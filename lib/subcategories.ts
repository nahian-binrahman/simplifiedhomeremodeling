export interface KeyFeatureItem {
  title?: string;
  text: string;
  icon?: string;
}

export interface QuoteTrustItem {
  icon: string;
  label: string;
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
  standardsDescription?: string;
  hideSpecializedBadge?: boolean;
  badgeLabel?: string;
  lvpFeatures?: string[];
  heroCta?: string;
  heroTrustStatement?: string;
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
    phoneSubtext?: string;
    trustItems?: QuoteTrustItem[];
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
    tagline: "Beautiful Wood-Look Floors. Built for Everyday Living.",
    heroEyebrow: "LUXURY VINYL PLANK FLOORING IN",
    description: "Upgrade your home with beautiful, durable luxury vinyl plank flooring. Enjoy the natural look of hardwood with easy maintenance, water-resistant options, and professional installation designed for desert living.",
    standardsHeading: "PREMIUM MATERIALS. EXPERT INSTALLATION.",
    standardsDescription: "Beautiful flooring starts with quality materials and precision installation. From selecting the right luxury vinyl plank to preparing your subfloor and finishing every detail, our team delivers flooring designed for lasting beauty and everyday living.",
    hideSpecializedBadge: true,
    badgeLabel: "THE SIMPLIFIED DIFFERENCE",
    heroCta: "GET A FREE FLOORING ESTIMATE",
    heroTrustStatement: "Licensed General Contractor • 20+ Years of Experience • Financing Available",
    keyFeatures: [
      {
        title: "DURABLE, WATER-RESISTANT FLOORING",
        text: "Quality luxury vinyl plank options designed for everyday spills, active households, and easy maintenance.",
        icon: "shield",
      },
      {
        title: "PROFESSIONAL SUBFLOOR PREPARATION",
        text: "Surface evaluation, necessary leveling, and proper preparation to create a suitable foundation before flooring installation.",
        icon: "layers",
      },
      {
        title: "PRECISION INSTALLATION",
        text: "Professional plank layouts, proper expansion gaps, clean transitions, and attention to every installation detail.",
        icon: "ruler",
      },
      {
        title: "BEAUTIFUL FINISHING DETAILS",
        text: "Professional baseboard installation, seamless transitions, and detailed finishing for a clean, polished appearance.",
        icon: "sparkles",
      },
    ],
    lvpFeatures: [
      "Waterproof rigid-core SPC/WPC flooring options",
      "20-mil wear-layer options available",
      "Scratch-resistant surface options",
      "Attached acoustic underlayment options",
      "Realistic embossed wood-grain textures",
      "Low-maintenance flooring surfaces",
    ],
    videoSection: {
      label: "SEE THE SIMPLIFIED DIFFERENCE",
      title: "BEAUTIFUL FLOORS. EXPERT CRAFTSMANSHIP.",
      description: "Discover how Simplified Home Remodeling transforms homes throughout the Coachella Valley with professionally installed luxury vinyl plank flooring. From proper subfloor preparation to precise installation and finishing details, we deliver beautiful, durable floors designed for everyday living.",
      features: [
        "Premium Luxury Vinyl Plank Flooring",
        "Professional Subfloor Preparation & Leveling",
        "Precision Installation & Finishing Details",
        "20+ Years of Remodeling Experience",
      ],
      ctaText: "GET A FREE FLOORING ESTIMATE",
    },
    quoteSection: {
      title: "READY TO TRANSFORM YOUR FLOORS?",
      subtitle: "Beautiful Floors Start Here.",
      description: "Upgrade your home with beautiful, professionally installed luxury vinyl plank flooring. Request your free, no-obligation estimate today.",
      phoneSubtext: "Call or text us to discuss your flooring project.",
      trustItems: [
        { icon: "calendar", label: "Free In-Home Consultation" },
        { icon: "map-pin", label: "Proudly Serving the Coachella Valley" },
        { icon: "award", label: "20+ Years of Remodeling Experience" },
        { icon: "shield", label: "Licensed General Contractor" },
      ],
    },
    metaTitleTemplate: "Luxury Vinyl Plank Flooring Coachella Valley | Simplified Home Remodeling",
    metaDescTemplate: "Upgrade your home with professional luxury vinyl plank flooring installation in Palm Desert, La Quinta, Palm Springs, Rancho Mirage, and Indio. Request a free estimate.",
    heroImage: "/images/flooring-hero.jpg",
  },
  "laminate-flooring": {
    serviceSlug: "flooring",
    serviceTitle: "Flooring",
    subCategorySlug: "laminate-flooring",
    title: "Laminate Flooring",
    shortTitle: "Laminate Flooring",
    numberPrefix: "5.2",
    tagline: "The Beauty of Hardwood. Built for Everyday Living.",
    heroEyebrow: "WATERPROOF LAMINATE FLOORING IN",
    description: "Upgrade your home with beautiful, durable waterproof laminate flooring. Enjoy realistic wood-look finishes, excellent wear resistance, and professional installation designed for active households and desert living.",
    standardsHeading: "BEAUTIFUL LAMINATE. EXPERT INSTALLATION.",
    standardsDescription: "Beautiful laminate flooring combines the natural appearance of hardwood with modern durability. At Simplified Home Remodeling, we focus on quality materials, proper subfloor preparation, precise installation, and professional finishing details to create floors designed for everyday living.",
    hideSpecializedBadge: true,
    badgeLabel: "THE SIMPLIFIED DIFFERENCE",
    heroCta: "GET A FREE LAMINATE FLOORING ESTIMATE",
    heroTrustStatement: "Licensed General Contractor • 20+ Years of Experience • Financing Available",
    keyFeatures: [
      {
        title: "REALISTIC HARDWOOD BEAUTY",
        text: "High-definition wood textures and natural finishes deliver the timeless appearance of hardwood.",
        icon: "sparkles",
      },
      {
        title: "DURABILITY & WATER PROTECTION",
        text: "Explore laminate flooring options with enhanced water resistance and durable surfaces designed for active households.",
        icon: "shield",
      },
      {
        title: "PROFESSIONAL SUBFLOOR PREPARATION",
        text: "Careful surface evaluation and necessary leveling help create a suitable foundation for flooring installation.",
        icon: "layers",
      },
      {
        title: "PRECISION INSTALLATION & FINISHING",
        text: "Detailed plank layouts, proper expansion gaps, clean transitions, and professional baseboard finishing.",
        icon: "ruler",
      },
    ],
    lvpFeatures: [
      "High-definition embossed hardwood textures",
      "AC4/AC5 abrasion-resistance ratings available",
      "Water-resistant and waterproof product options",
      "Durable protective wear layers",
      "Advanced click-lock installation systems",
      "Various natural wood-look finishes available",
    ],
    videoSection: {
      label: "SEE THE SIMPLIFIED DIFFERENCE",
      title: "BEAUTIFUL FLOORS. EXPERT CRAFTSMANSHIP.",
      description: "Discover how Simplified Home Remodeling transforms homes throughout the Coachella Valley with beautifully installed waterproof laminate flooring. From careful subfloor preparation to precision plank installation and finishing details, we focus on craftsmanship that makes every room look its best.",
      features: [
        "Premium Waterproof Laminate Flooring",
        "Professional Subfloor Preparation & Leveling",
        "Precision Installation & Finishing Details",
        "20+ Years of Remodeling Experience",
      ],
      ctaText: "GET A FREE LAMINATE FLOORING ESTIMATE",
    },
    quoteSection: {
      title: "READY TO TRANSFORM YOUR FLOORS?",
      subtitle: "Beautiful Floors Start Here.",
      description: "Discover beautiful, durable waterproof laminate flooring professionally installed for your home. Request your free, no-obligation estimate today.",
      phoneSubtext: "Call or text us to discuss your flooring project.",
      trustItems: [
        { icon: "calendar", label: "Free In-Home Consultation" },
        { icon: "map-pin", label: "Proudly Serving the Coachella Valley" },
        { icon: "award", label: "20+ Years of Remodeling Experience" },
        { icon: "shield", label: "Licensed General Contractor" },
      ],
    },
    metaTitleTemplate: "Waterproof Laminate Flooring Coachella Valley | Simplified Home Remodeling",
    metaDescTemplate: "Beautiful waterproof laminate flooring installation in Palm Desert, La Quinta, Palm Springs, Rancho Mirage, and Indio. Professional installation. Request a free estimate.",
    heroImage: "/images/flooring-hero.jpg",
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
