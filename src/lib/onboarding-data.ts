export interface OnboardingData {
  businessName: string;
  industry: string;
  city: string;
  websiteUrl: string;
  needs: string[];
  teamSize: string;
  revenueRange: string;
  fullName: string;
  email: string;
  password: string;
}

export const INDUSTRIES = [
  "Restaurant / Food Service",
  "Real Estate",
  "Healthcare / Medical",
  "Legal Services",
  "Home Services (HVAC, Plumbing, etc.)",
  "Retail / E-Commerce",
  "Fitness / Wellness",
  "Beauty / Salon / Spa",
  "Automotive",
  "Financial Services",
  "Marketing / Agency",
  "Construction",
  "Education",
  "Other",
];

export const NEED_OPTIONS = [
  "Lead Generation",
  "Customer Support",
  "Social Media",
  "Email Follow-up",
  "Phone Calls",
  "Reputation Management",
  "Business Analytics",
];

export const TEAM_SIZES = [
  "Just me",
  "2-5 employees",
  "6-20 employees",
  "21-50 employees",
  "51-200 employees",
  "200+ employees",
];

export const REVENUE_RANGES = [
  "Under $50K/year",
  "$50K - $100K/year",
  "$100K - $500K/year",
  "$500K - $1M/year",
  "$1M - $5M/year",
  "$5M+/year",
  "Prefer not to say",
];
