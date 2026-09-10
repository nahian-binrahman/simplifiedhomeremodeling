export interface BusinessConfig {
  name: string;
  subName: string;
  tagline: string;
  phone: string;
  formattedPhone: string;
  phoneSubtext: string;
  email: string;
  serviceAreas: string[];
  primaryLocations: string;
  licenseInfo: string;
  cslbNumber: string;
  hours: string;
  ctaText: string;
  secondaryCtaText: string;
  facebookUrl: string;
  yelpUrl: string;
  googleUrl: string;
  youtubeUrl: string;
}

export const BUSINESS: BusinessConfig = {
  name: "SIMPLIFIED",
  subName: "HOME REMODELING",
  tagline: "Transform Your Kitchen.",
  phone: "9092248925",
  formattedPhone: "(909) 224-8925",
  phoneSubtext: "Call or Text for a free consultation",
  email: "contact@simplifiedremodeling.com",
  serviceAreas: [
    "Palm Springs",
    "Palm Desert",
    "Rancho Mirage",
    "La Quinta",
    "Coachella Valley",
  ],
  primaryLocations: "Palm Springs, Palm Desert, Rancho Mirage, La Quinta & Coachella Valley",
  licenseInfo: "Licensed General Contractor • Financing Available",
  cslbNumber: "CSLB #1126697",
  hours: "Monday – Saturday: 7:00 AM – 6:00 PM",
  ctaText: "REQUEST A PROJECT CONSULTATION",
  secondaryCtaText: "CALL NOW",
  facebookUrl: "https://www.facebook.com/p/Simplified-Home-Remodeling-61570509570126/",
  yelpUrl: "https://www.yelp.com/biz/simplified-home-remodeling-palm-desert-4?osq=Simplified+Home+Remodeling&dd_referrer=https%3A%2F%2Fwww.yelp.com%2F",
  googleUrl: "https://share.google/kZaTULG7qVrVLzSW4",
  youtubeUrl: "https://www.youtube.com/@SimplifiedHomeRemodeling/videos",
};

