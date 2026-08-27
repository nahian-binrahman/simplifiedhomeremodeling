export interface LocationData {
  slug: string;
  name: string;
  county: string;
  zipCodes: string;
  neighborhoods: string[];
  tagline: string;
  heroEyebrow: string;
  heroHeading: string;
  heroSubtitle: string;
  description: string;
  localHighlights: string[];
  popularStyles: string[];
  hoaPermitNotes: string;
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
}

export const LOCATIONS: Record<string, LocationData> = {
  "palm-desert": {
    slug: "palm-desert",
    name: "Palm Desert",
    county: "Riverside County",
    zipCodes: "92260, 92211, 92261",
    neighborhoods: ["South Palm Desert", "Bighorn Golf Club", "Ironwood Country Club", "El Paseo Corridor", "Sun City Palm Desert", "Indian Ridge"],
    tagline: "Premier Kitchen Renovations in Palm Desert, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "PALM DESERT",
    heroSubtitle: "Luxury Desert Living Meets Custom Kitchen Craftsmanship.",
    description: "Upgrade your Palm Desert kitchen with custom European-style cabinets, heat-resistant quartz surfaces, open concept islands, and seamless indoor-outdoor entertaining layouts tailored for country clubs and private estates.",
    localHighlights: [
      "Extensive experience working within Palm Desert gated communities & HOAs.",
      "Custom temperature & sun-resistant finishes built for low desert heat.",
      "Full turnkey remodeling: layout reconfiguration, plumbing, electrical, and finish carpentry."
    ],
    popularStyles: ["Mid-Century Warmth", "Contemporary Desert Minimalist", "Transitional Luxury"],
    hoaPermitNotes: "We manage all City of Palm Desert building permits, architectural review submissions, and HOA compliance for seamless project approval.",
    metaTitle: "Kitchen Remodeling in Palm Desert, CA | Simplified Home Remodeling",
    metaDescription: "Top-rated kitchen remodeling in Palm Desert, CA. Custom cabinets, quartz countertops, island expansions & luxury finishes. Call for a free estimate!",
    faq: [
      {
        question: "Do you handle HOA approvals in Palm Desert country clubs?",
        answer: "Yes, we handle the entire architectural submission package, contractor insurance verification, and work hour compliance for Bighorn, Ironwood, Sun City, and all local HOAs."
      },
      {
        question: "How long does a full kitchen remodel typically take in Palm Desert?",
        answer: "A standard kitchen remodel takes between 3 to 6 weeks depending on custom cabinetry lead times and layout adjustments."
      }
    ]
  },
  "rancho-mirage": {
    slug: "rancho-mirage",
    name: "Rancho Mirage",
    county: "Riverside County",
    zipCodes: "92270",
    neighborhoods: ["Thunderbird Heights", "Tamarisk Country Club", "The Springs", "Mission Hills CC", "The River Corridor", "Clancy Lane"],
    tagline: "High-End Kitchen Remodels in Rancho Mirage, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "RANCHO MIRAGE",
    heroSubtitle: "Refined Elegance and High-Performance Chef's Kitchens.",
    description: "Crafting architectural kitchen transformations across Rancho Mirage. From expansive waterfall islands to custom wine display cabinetry and sub-zero appliance integrations.",
    localHighlights: [
      "Expertise with estate properties, estate zoning, and luxury HOA specifications.",
      "High-end custom millwork, soft-close hardware, and porcelain slab backsplashes.",
      "Dedicated project manager ensuring minimal disruption to your household."
    ],
    popularStyles: ["Modern Desert Villa", "Transitional Classic", "Spanish Revival Modernized"],
    hoaPermitNotes: "Compliant with City of Rancho Mirage residential building codes and prestigious community design review committees.",
    metaTitle: "Kitchen Remodeling Rancho Mirage, CA | Luxury Renovations",
    metaDescription: "Bespoke kitchen design and remodeling in Rancho Mirage, CA. Tailored cabinetry, quartz countertops & chef-grade layouts. Book a free consultation.",
    faq: [
      {
        question: "Can you reconfigure plumbing and gas lines for custom island cooktops?",
        answer: "Yes, our licensed plumbing and mechanical teams handle complete slab rerouting, gas line extensions, and high-CFM vent hood installations."
      },
      {
        question: "Do you provide 3D design renderings before construction?",
        answer: "Every Rancho Mirage project begins with full 3D visual renderings and material samples so you can visualize every cabinet, handle, and countertop."
      }
    ]
  },
  "la-quinta": {
    slug: "la-quinta",
    name: "La Quinta",
    county: "Riverside County",
    zipCodes: "92253",
    neighborhoods: ["PGA West", "The Madison Club", "Tradition Golf Club", "The Quarry", "La Quinta Cove", "Santa Rosa Cove"],
    tagline: "Resort-Grade Kitchen Remodeling in La Quinta, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "LA QUINTA",
    heroSubtitle: "Timeless Desert Architecture & Modern Culinary Spaces.",
    description: "Elevating La Quinta homes with spacious entertaining kitchens, durable quartz and quartzite slabs, custom pantry storage, and designer lighting fixtures.",
    localHighlights: [
      "Specialized in PGA West, Madison Club, and La Quinta Cove home layouts.",
      "Low-maintenance surfaces engineered to withstand desert dust and heavy entertaining.",
      "Strict cleanup protocols and dust containment systems during demolition."
    ],
    popularStyles: ["Contemporary Spanish", "Desert Organic Modern", "Rustic Modern Farmhouse"],
    hoaPermitNotes: "Experienced with City of La Quinta building division requirements and all golf club gated community regulations.",
    metaTitle: "Kitchen Remodeling in La Quinta, CA | Custom Kitchen Renovations",
    metaDescription: "Expert kitchen remodeling contractor serving La Quinta, CA and PGA West. Custom cabinets, stone countertops, and full renovations. Get a quote today.",
    faq: [
      {
        question: "What countertops perform best in La Quinta homes?",
        answer: "Quartz and sealed quartzite are our most popular choices in La Quinta for their stain resistance, heat tolerance, and zero need for annual chemical sealing."
      }
    ]
  },
  "indian-wells": {
    slug: "indian-wells",
    name: "Indian Wells",
    county: "Riverside County",
    zipCodes: "92210",
    neighborhoods: ["The Vintage Club", "Toscana Country Club", "Desert Horizons", "Indian Wells Country Club", "Mountain Cove", "The Reserve"],
    tagline: "Ultra-Luxury Kitchen Remodeling in Indian Wells, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "INDIAN WELLS",
    heroSubtitle: "Uncompromising Quality for Prestigious Desert Residences.",
    description: "Delivering bespoke kitchen transformations in Indian Wells with custom solid-wood cabinetry, integrated smart appliances, luxury brass fixtures, and grand entertaining islands.",
    localHighlights: [
      "White-glove project management tailored for private club residents.",
      "Premium material sourcing: bookmatched quartzite, rift-sawn oak, and custom metal trim.",
      "Comprehensive warranty coverage on all workmanship and installations."
    ],
    popularStyles: ["Ultra-Modern Minimalist", "Mediterranean Contemporary", "Classic Desert Estate"],
    hoaPermitNotes: "Complete compliance with Indian Wells architectural guidelines and quiet-hour construction mandates.",
    metaTitle: "Kitchen Remodeling Indian Wells, CA | Luxury Custom Kitchens",
    metaDescription: "Premier kitchen remodeling in Indian Wells, CA. Bespoke cabinetry, quartzite countertops & full estate renovations. Request your private consultation.",
    faq: [
      {
        question: "Do you accommodate seasonal homeowners (snowbirds)?",
        answer: "Yes, we frequently manage renovations during off-season months with weekly video updates, digital milestones, and strict deadline commitments before your return."
      }
    ]
  },
  "palm-springs": {
    slug: "palm-springs",
    name: "Palm Springs",
    county: "Riverside County",
    zipCodes: "92262, 92264",
    neighborhoods: ["Old Las Palmas", "The Movie Colony", "Deepwell Estates", "Vista Las Palmas", "Twin Palms", "Racquet Club Estates"],
    tagline: "Mid-Century Modern & Contemporary Kitchen Remodeling in Palm Springs",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "PALM SPRINGS",
    heroSubtitle: "Honoring Iconic Architecture with 21st Century Functionality.",
    description: "Preserve the iconic aesthetic of Palm Springs architecture while upgrading to modern energy efficiency, flat-panel walnut cabinetry, terrazzo-style surfaces, and open-plan flow.",
    localHighlights: [
      "Deep experience with Alexander, Wexler, and Meisel mid-century modern home renovations.",
      "Smart storage solutions maximizing open-concept desert post-and-beam spaces.",
      "Permitting expertise for historic districts and Palm Springs architectural standards."
    ],
    popularStyles: ["Mid-Century Modern (MCM)", "Desert Modernism", "Boho Palm Springs Chic"],
    hoaPermitNotes: "City of Palm Springs building department permit processing with careful attention to historic preservation overlays.",
    metaTitle: "Kitchen Remodeling Palm Springs, CA | Mid-Century & Modern Kitchens",
    metaDescription: "Expert Palm Springs kitchen remodeling contractor. Mid-century modern updates, custom cabinetry, quartz counters & open layouts. Get your quote.",
    faq: [
      {
        question: "Can you maintain mid-century authentic aesthetics with modern amenities?",
        answer: "Absolutely. We specialize in flat-panel walnut or teak cabinets, retro tile patterns, concealed appliances, and clean architectural lines."
      }
    ]
  },
  "cathedral-city": {
    slug: "cathedral-city",
    name: "Cathedral City",
    county: "Riverside County",
    zipCodes: "92234",
    neighborhoods: ["Cathedral City Cove", "Panorama", "Montage at Santa Rosa", "Rio Vista", "Desert Princess CC", "Cimmaron Golf Resort"],
    tagline: "Affordable & High-Value Kitchen Remodeling in Cathedral City",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "CATHEDRAL CITY",
    heroSubtitle: "Smart Kitchen Upgrades That Boost Property Value and Daily Comfort.",
    description: "Transform your Cathedral City kitchen with cost-effective cabinet upgrades, durable quartz countertops, modern LED under-cabinet illumination, and functional pantry configurations.",
    localHighlights: [
      "High ROI kitchen renovations designed to maximize appraisal values.",
      "Fast turnaround times with pre-fabricated and semi-custom cabinet options.",
      "Transparent upfront pricing with zero hidden fees."
    ],
    popularStyles: ["Modern Transitional", "Bright White & Shaker", "Industrial Contemporary"],
    hoaPermitNotes: "Fast-tracked City of Cathedral City residential permit pulling and inspection scheduling.",
    metaTitle: "Kitchen Remodeling Cathedral City, CA | Quality & Affordable Renovations",
    metaDescription: "Professional kitchen remodeling in Cathedral City, CA. Quality cabinets, countertops, flooring, and full remodels at transparent pricing. Call today.",
    faq: [
      {
        question: "Are quartz countertops affordable for standard family kitchens?",
        answer: "Yes, quartz offers an unbeatable balance of durability, zero-maintenance, and cost-efficiency compared to natural marble."
      }
    ]
  },
  "indio": {
    slug: "indio",
    name: "Indio",
    county: "Riverside County",
    zipCodes: "92201, 92203",
    neighborhoods: ["Shadow Hills", "Terra Lago", "Montage", "Indian Palms CC", "Desert Collection", "Sun City Shadow Hills"],
    tagline: "Modern Kitchen Renovations in Indio, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "INDIO",
    heroSubtitle: "Spacious, Family-Friendly and Entertainer Kitchens.",
    description: "From Sun City Shadow Hills to new developments near Terra Lago, we design and build functional, stylish kitchens equipped for large family gatherings and desert living.",
    localHighlights: [
      "Tailored solutions for newer master-planned communities and classic ranch styles.",
      "High-durability cabinet finishes resistant to UV fading and heavy everyday use.",
      "Full sink, faucet, and plumbing fixture package installations."
    ],
    popularStyles: ["Modern Farmhouse", "Transitional White & Navy", "Warm Contemporary"],
    hoaPermitNotes: "We coordinate directly with Indio development HOAs and the City of Indio building safety department.",
    metaTitle: "Kitchen Remodeling Indio, CA | Licensed Contractor & Design",
    metaDescription: "Top kitchen remodelers in Indio, CA. Specializing in custom cabinets, kitchen islands, quartz counters & full renovations. Free estimates!",
    faq: [
      {
        question: "Can we knock down a dividing wall to create an open concept in our Indio home?",
        answer: "Yes, our structural engineers evaluate load-bearing walls and install engineered header beams to create open-concept living spaces."
      }
    ]
  },
  "bermuda-dunes": {
    slug: "bermuda-dunes",
    name: "Bermuda Dunes",
    county: "Riverside County",
    zipCodes: "92203",
    neighborhoods: ["Bermuda Dunes Country Club", "Desert Breeze", "Saddleback", "Brae Burn", "Country Club Estates"],
    tagline: "Custom Kitchen Renovations in Bermuda Dunes, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "BERMUDA DUNES",
    heroSubtitle: "Golf Course Community Kitchens Built to Last.",
    description: "Custom cabinetry, upgraded breakfast bars, beverage centers, and luxurious stone surfaces created for Bermuda Dunes country club homes and private estates.",
    localHighlights: [
      "Custom wine bars, coffee nooks, and oversized entertainer islands.",
      "Comprehensive finish selections from warm wood grains to sleek matte finishes.",
      "Reliable local crews with decades of Coachella Valley experience."
    ],
    popularStyles: ["Country Club Classic", "Modern Coastal Desert", "Warm Transitional"],
    hoaPermitNotes: "Riverside County unincorporated & HOA compliant construction management.",
    metaTitle: "Kitchen Remodeling Bermuda Dunes, CA | Custom Home Renovations",
    metaDescription: "Reliable kitchen remodeling in Bermuda Dunes, CA. Custom cabinets, quartz countertops, island remodels & premium finishes. Schedule a consultation.",
    faq: [
      {
        question: "Do you install custom pantry and pull-out organizers?",
        answer: "Yes, we build soft-close rollout trays, spice pullouts, trash organizers, and custom walk-in pantry shelving systems."
      }
    ]
  },
  "coachella": {
    slug: "coachella",
    name: "Coachella",
    county: "Riverside County",
    zipCodes: "92236",
    neighborhoods: ["Rancho Las Flores", "La Colonia", "Pueblo Viejo", "Prado", "Bella Canto"],
    tagline: "Expert Kitchen Remodeling in Coachella, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "COACHELLA",
    heroSubtitle: "Durable Materials, Modern Functionality, and Great Value.",
    description: "Transform your cooking space in Coachella with heavy-duty solid wood cabinetry, stain-proof countertops, energy-saving LED lighting, and practical storage solutions.",
    localHighlights: [
      "Durable, family-first kitchen designs with easy-to-clean quartz surfaces.",
      "Fast project timelines and competitive transparent estimates.",
      "Bilingual customer support and personalized design consultations."
    ],
    popularStyles: ["Contemporary Clean", "Warm Traditional Wood", "Modern Shaker"],
    hoaPermitNotes: "City of Coachella building division permit management and code compliance.",
    metaTitle: "Kitchen Remodeling Coachella, CA | Affordable & High Quality",
    metaDescription: "Affordable and premium kitchen remodeling in Coachella, CA. Custom cabinets, granite & quartz counters, backsplash tile & plumbing. Free quote.",
    faq: [
      {
        question: "Do you offer financing or phased remodeling options?",
        answer: "We offer flexible payment milestones tied to project completion phases to ensure complete peace of mind."
      }
    ]
  },
  "desert-hot-springs": {
    slug: "desert-hot-springs",
    name: "Desert Hot Springs",
    county: "Riverside County",
    zipCodes: "92240, 92241",
    neighborhoods: ["Mission Lakes Country Club", "Highland Falls", "Hacienda Heights", "Skyborne", "Desert View"],
    tagline: "Scenic Hillside & Spa City Kitchen Remodeling in DHS",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "DESERT HOT SPRINGS",
    heroSubtitle: "Modern Kitchen Renovations with Mountain Views.",
    description: "Modernize your Desert Hot Springs kitchen with panoramic picture window framing, expansive islands, heat-resistant quartz surfaces, and energy-efficient LED task lighting.",
    localHighlights: [
      "Expertise in Mission Lakes CC and hillside custom homes.",
      "UV-stable and thermal-resistant cabinetry finishes tailored for the upper valley climate.",
      "Complete demolition, dry rot repair, and structural adjustments."
    ],
    popularStyles: ["Desert Boho Modern", "Clean White Shaker", "Industrial Modern"],
    hoaPermitNotes: "Permit filing and inspection coordination handled through the City of Desert Hot Springs.",
    metaTitle: "Kitchen Remodeling Desert Hot Springs, CA | Quality Contractors",
    metaDescription: "Top-rated kitchen remodeling in Desert Hot Springs, CA. Custom cabinetry, modern countertops, and complete kitchen makeovers. Book a consultation.",
    faq: [
      {
        question: "Can you expand our kitchen window to capture mountain views?",
        answer: "Yes, our team can enlarge window openings, install picture windows, and configure your kitchen layout to frame the San Jacinto views."
      }
    ]
  },
  "thousand-palms": {
    slug: "thousand-palms",
    name: "Thousand Palms",
    county: "Riverside County",
    zipCodes: "92276",
    neighborhoods: ["Tri-Palm Estates", "I-10 Corridor Communities", "Ramon Road District"],
    tagline: "Reliable Kitchen Remodeling in Thousand Palms, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "THOUSAND PALMS",
    heroSubtitle: "Functional Kitchen Renovations Built for Desert Living.",
    description: "Centrally located kitchen remodeling services for Thousand Palms homeowners. We install custom cabinetry, new durable flooring, solid quartz counters, and modern fixtures.",
    localHighlights: [
      "Fast response times and central Coachella Valley dispatch.",
      "Custom layout modifications for manufactured, modular, and site-built homes.",
      "Comprehensive plumbing, electrical, and appliance installations."
    ],
    popularStyles: ["Transitional Shaker", "Contemporary Desert", "Classic Bright"],
    hoaPermitNotes: "Permit processing through Riverside County building and safety departments.",
    metaTitle: "Kitchen Remodeling Thousand Palms, CA | Local Remodelers",
    metaDescription: "Custom kitchen remodeling services in Thousand Palms, CA. Cabinet replacement, countertop installation & full kitchen renovations. Call today.",
    faq: [
      {
        question: "Do you remodel kitchens in manufactured and 55+ communities?",
        answer: "Yes, we have extensive experience updating kitchens in Tri-Palm Estates and 55+ communities with specialized plumbing and structural solutions."
      }
    ]
  },
  "thermal": {
    slug: "thermal",
    name: "Thermal",
    county: "Riverside County",
    zipCodes: "92274",
    neighborhoods: ["Thermal Club Corridor", "Avenue 62 Estates", "Oasis", "Vista Santa Rosa border"],
    tagline: "Equestrian & Estate Kitchen Remodeling in Thermal, CA",
    heroEyebrow: "KITCHEN REMODELING IN",
    heroHeading: "THERMAL",
    heroSubtitle: "Large-Scale Estate and Ranch Kitchen Remodeling.",
    description: "Serving Thermal's equestrian properties, private estates, and luxury residences with expansive commercial-grade cooking ranges, custom walk-in pantries, and durable natural stone.",
    localHighlights: [
      "Custom designs for large-scale ranch homes, Thermal Club villas, and estates.",
      "Heavy-duty materials built for serious cooking and entertaining.",
      "Full architectural coordination and custom craftsmanship."
    ],
    popularStyles: ["Luxury Modern Ranch", "Spanish Hacienda Modern", "High-End Contemporary"],
    hoaPermitNotes: "Riverside County permit coordination and rural property code adherence.",
    metaTitle: "Kitchen Remodeling Thermal, CA | Custom Estate Renovations",
    metaDescription: "Expert kitchen remodeling in Thermal, CA. Custom cabinetry, luxury stone countertops, and full estate renovations. Request a free estimate.",
    faq: [
      {
        question: "Can you install commercial-grade 48\" or 60\" ranges and ventilation?",
        answer: "Yes, we engineer makeup air systems, high-CFM ventilation hoods, and dedicated electrical/gas infrastructure for pro-style appliances."
      }
    ]
  }
};

export const ALL_LOCATIONS_LIST = Object.values(LOCATIONS);
