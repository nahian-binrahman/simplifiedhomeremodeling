export interface TrustBadgeItem {
  icon: string;
  title: string;
  subtitle: string;
}

export interface PageSectionContent {
  title: string;
  subtitle: string;
  badge?: string;
  description?: string;
  heroImage?: string;
  ctaText?: string;
  secondaryCtaText?: string;
  highlights?: string[];
}

export interface SiteContent {
  general: {
    name: string;
    subName: string;
    tagline: string;
    phone: string;
    formattedPhone: string;
    phoneSubtext: string;
    email: string;
    cslbNumber: string;
    licenseInfo: string;
    hours: string;
    address: string;
    facebookUrl: string;
    yelpUrl: string;
    googleUrl: string;
    youtubeUrl: string;
    primaryLocations: string;
  };
  home: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    heroCtaText: string;
    heroImage: string;
    trustBadges: TrustBadgeItem[];
    aboutTitle: string;
    aboutSubtitle: string;
    aboutDescription: string;
    videoSectionTitle: string;
    videoSectionSubtitle: string;
  };
  services: {
    kitchen: PageSectionContent;
    bathroom: PageSectionContent;
    cabinetry: PageSectionContent;
    countertops: PageSectionContent;
    flooring: PageSectionContent;
  };
  mediaReplacements: Record<string, string>; // Map of original image path -> new replacement URL
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  published: boolean;
  tags: string[];
}

export interface LeadRecord {
  id: string;
  project_type: string;
  timeline: string;
  full_name: string;
  phone: string;
  email: string;
  city: string;
  project_details?: string;
  created_at: string;
  status?: "New" | "Contacted" | "Consultation Scheduled" | "Completed" | "Archived";
}
