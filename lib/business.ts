export interface BusinessConfig {
  name: string;
  subName: string;
  tagline: string;
  phone: string;
  formattedPhone: string;
  email: string;
  serviceAreas: string[];
  primaryLocations: string;
  licenseInfo: string;
  cslbNumber: string;
  hours: string;
  ctaText: string;
  secondaryCtaText: string;
}

export const BUSINESS: BusinessConfig = {
  name: "SIMPLIFIED",
  subName: "HOME REMODELING",
  tagline: "Transform Your Kitchen.",
  phone: "7605551234",
  formattedPhone: "(760) 555-1234",
  email: "contact@simplifiedremodeling.com",
  serviceAreas: [
    "Palm Springs",
    "Palm Desert",
    "Rancho Mirage",
    "La Quinta",
    "Coachella Valley",
  ],
  primaryLocations: "Palm Springs, Palm Desert, Rancho Mirage, La Quinta & Coachella Valley",
  licenseInfo: "Licensed • Insured • Bonded",
  cslbNumber: "CSLB #123456",
  hours: "Monday – Saturday: 7:00 AM – 6:00 PM",
  ctaText: "REQUEST A FREE QUOTE",
  secondaryCtaText: "CALL NOW",
};
