import { SiteContent, BlogPost } from "./cms-types";

export const DEFAULT_SITE_CONTENT: SiteContent = {
  general: {
    name: "SIMPLIFIED",
    subName: "HOME REMODELING",
    tagline: "Transform Your Kitchen.",
    phone: "9092248925",
    formattedPhone: "(909) 224-8925",
    phoneSubtext: "Call or Text for a free consultation",
    email: "contact@simplifiedremodeling.com",
    cslbNumber: "CSLB #1126697",
    licenseInfo: "Licensed General Contractor • Financing Available",
    hours: "Monday – Saturday: 7:00 AM – 6:00 PM",
    address: "Palm Desert, CA 92260",
    facebookUrl: "https://www.facebook.com/p/Simplified-Home-Remodeling-61570509570126/",
    yelpUrl: "https://www.yelp.com/biz/simplified-home-remodeling-palm-desert-4",
    googleUrl: "https://share.google/kZaTULG7qVrVLzSW4",
    youtubeUrl: "https://www.youtube.com/@SimplifiedHomeRemodeling/videos",
    primaryLocations: "Palm Springs, Palm Desert, Rancho Mirage, La Quinta & Coachella Valley",
  },
  home: {
    heroBadge: "Coachella Valley's Premier Remodeling Team",
    heroTitle: "Transform Your Home With Coachella Valley's Trusted Remodeling Specialists",
    heroSubtitle: "From luxury kitchen makeovers and spa-inspired bathrooms to custom cabinetry and premium flooring, we bring craftsmanship, honesty, and punctuality to every project.",
    heroCtaText: "GET A FREE ESTIMATE",
    heroImage: "/images/hero-kitchen.jpg",
    trustBadges: [
      {
        icon: "ShieldCheck",
        title: "Licensed & Insured",
        subtitle: "CSLB #1126697 with full liability & worker's comp",
      },
      {
        icon: "Hammer",
        title: "In-House Craftsmanship",
        subtitle: "Master cabinetmakers & experienced installers",
      },
      {
        icon: "CalendarCheck",
        title: "On-Time Completion",
        subtitle: "Clear project milestones and transparent communication",
      },
    ],
    aboutTitle: "Coachella Valley's Home Remodeling Authority",
    aboutSubtitle: "Over a decade of bringing desert homeowner visions to life with unmatched attention to detail.",
    aboutDescription: "We specialize in turn-key remodeling across Palm Springs, Palm Desert, Rancho Mirage, and La Quinta. Our team handles everything from initial architectural layout and material sourcing to final installation and cleanup.",
    videoSectionTitle: "Watch Our Real Client Transformations",
    videoSectionSubtitle: "See before and after footage of homes renovated right here in the Coachella Valley.",
  },
  services: {
    kitchen: {
      title: "Kitchen Remodeling",
      subtitle: "Custom culinary spaces tailored for beauty, function, and entertaining.",
      badge: "Most Popular Service",
      description: "Upgrade your kitchen with custom cabinetry, quartz and granite countertops, island extensions, designer backsplashes, and high-efficiency lighting.",
      heroImage: "/images/hero-kitchen.jpg",
      ctaText: "SCHEDULE KITCHEN CONSULTATION",
      highlights: [
        "Custom solid-wood cabinetry & soft-close systems",
        "Granite, Quartz & Marble countertop fabrication",
        "Open concept layout removals & load-bearing beam work",
        "Under-cabinet LED lighting & pendant fixture installation",
      ],
    },
    bathroom: {
      title: "Bathroom Remodeling",
      subtitle: "Convert outdated bathrooms into relaxing, spa-grade retreats.",
      badge: "Luxury & Longevity",
      description: "Walk-in curbless showers, freestanding soaking tubs, floating vanities, custom tile patterns, and water-efficient luxury fixtures.",
      heroImage: "/images/bathroom-hero.jpg",
      ctaText: "SCHEDULE BATHROOM CONSULTATION",
      highlights: [
        "Curbless walk-in showers & custom glass enclosures",
        "High-end freestanding soak tubs & thermostatic valves",
        "Heated tile flooring & waterproof Schluter systems",
        "Dual floating quartz vanities & smart LED mirrors",
      ],
    },
    cabinetry: {
      title: "Custom Cabinetry",
      subtitle: "Handcrafted kitchen, vanity, and pantry cabinets built to last.",
      badge: "Precision Craftsmanship",
      description: "Choose from Shaker, Flat Panel Modern, or Traditional raised panel styles in premium hardwoods with durable factory finishes.",
      heroImage: "/images/cabinetry-hero.jpg",
      ctaText: "DISCUSS CABINET OPTIONS",
      highlights: [
        "100% solid wood face frames & dovetail drawer boxes",
        "Soft-close Blum hardware standard on all doors & drawers",
        "Custom pull-out pantries, spice racks & trash organizers",
        "Factory baked-on polyurethane finish for desert heat durability",
      ],
    },
    countertops: {
      title: "Countertop Fabrication & Installation",
      subtitle: "Durable, stain-resistant Quartz, Granite, and Quartzite surfaces.",
      badge: "Direct Slab Selection",
      description: "Precision CNC fabrication and laser-templated installation ensuring seamless joins and flawless edge profiles.",
      heroImage: "/images/countertops-hero.jpg",
      ctaText: "SELECT YOUR SLAB",
      highlights: [
        "Laser digital templating for 1/16th inch accuracy",
        "Mitred waterfall edge profiles and custom bevels",
        "Stain & heat resistant high-performance sealing",
        "Undermount sink cutouts and integrated drain boards",
      ],
    },
    flooring: {
      title: "Luxury Flooring Installation",
      subtitle: "Waterproof luxury vinyl plank (LVP), large-format porcelain tile, and hardwood.",
      badge: "Desert-Ready Durability",
      description: "Premium flooring solutions engineered to withstand desert sunlight, temperature fluctuations, and heavy foot traffic.",
      heroImage: "/images/flooring-hero.jpg",
      ctaText: "EXPLORE FLOORING STYLES",
      highlights: [
        "100% waterproof luxury vinyl plank (LVP) with scratch guard",
        "Modern large-format porcelain & rectified ceramic tile",
        "Subfloor leveling and crack-isolation membrane prep",
        "Flush transitions and matching baseboard trim upgrades",
      ],
    },
  },
  mediaReplacements: {},
};

export const DEFAULT_BLOGS: BlogPost[] = [
  {
    id: "kitchen-remodel-roi-coachella-valley",
    slug: "kitchen-remodel-roi-coachella-valley",
    title: "How Much Value Does a Kitchen Remodel Add to a Coachella Valley Home?",
    excerpt: "Discover the real ROI of kitchen renovations in Palm Springs, Palm Desert, and Rancho Mirage, plus which upgrades buyers prioritize.",
    author: "Simplified Remodeling Team",
    date: "2026-03-01",
    readTime: "5 min read",
    published: true,
    coverImage: "/images/hero-kitchen.jpg",
    tags: ["Kitchen", "Home Value", "Palm Springs", "ROI"],
    content: `A remodeled kitchen is one of the highest-return home investments in the Coachella Valley. With luxury second homes and vacation rentals in high demand across Palm Springs and Palm Desert, buyers pay top dollar for modern open-concept kitchens with clean quartz slabs, custom shaker cabinets, and state-of-the-art island seating.

### Key Upgrades That Maximize Return:
1. **Durable Quartz Slabs**: Resists heat, lemon juice, and wine stains much better than porous marble.
2. **Soft-Close Custom Cabinetry**: Gives an immediate feeling of luxury and solid quality.
3. **Smart Task Lighting**: Under-cabinet LEDs highlight backsplashes and provide warm desert ambiance.

When you're ready to plan your remodel, our team offers free on-site design consultations and realistic 3D renderings to bring your vision into focus.`,
  },
  {
    id: "walk-in-shower-trends-2026",
    slug: "walk-in-shower-trends-2026",
    title: "Curbless Showers & Spa Bathrooms: Top Desert Remodeling Trends",
    excerpt: "Why desert homeowners are replacing garden tubs with seamless curbless walk-in showers and floating quartz vanities.",
    author: "Simplified Remodeling Team",
    date: "2026-02-15",
    readTime: "4 min read",
    published: true,
    coverImage: "/images/bathroom-hero.jpg",
    tags: ["Bathroom", "Interior Design", "Trends"],
    content: `In desert architecture, modern homeowners prioritize clean lines, accessibility, and spa-like relaxation. The single most requested bathroom feature in 2026 is the zero-threshold curbless shower.

### Why Homeowners Love Curbless Showers:
- **Visual Continuity**: Large format porcelain floor tiles continue seamlessly right into the shower pan, making bathrooms feel twice as large.
- **Easy Maintenance**: No grout-filled tracks or heavy framed glass doors to trap hard water minerals.
- **Universal Design**: Safe, accessible, and comfortable for all ages and lifestyles.

Reach out to our design consultants to learn how we can convert your existing tub/shower combo into a custom desert sanctuary.`,
  },
];
