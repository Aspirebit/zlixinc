export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  timeframe: string;
  summary: string;
  metrics: {
    revenueLift: string;
    unitsPerMonth: string;
    buyBox: string;
    reviewGrowth: string;
  };
  strategies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "nutraceutical-growth",
    title: "Nutraceutical Brand: 0 ➜ 7‑figure run‑rate",
    category: "Health & Personal Care",
    timeframe: "9 months",
    summary:
      "Authorized reseller partnership focused on MAP enforcement, listing SEO, and FBA in-stock discipline. Achieved national coverage across US/CA/MX.",
    metrics: {
      revenueLift: "+420% YoY",
      unitsPerMonth: "12,000 ➜ 38,000",
      buyBox: "92% average",
      reviewGrowth: "+1,800 net reviews",
    },
    strategies: [
      "Rebuilt listings with A+ content and keyword research",
      "MAP policy and unauthorized seller takedowns",
      "FBA forecasting and weekly replenishment cadence",
      "Sponsored Products/Brands with rule-based bidding",
    ],
  },
  {
    slug: "eco-household-expansion",
    title: "Eco Household: Cross-border expansion",
    category: "Home & Kitchen",
    timeframe: "6 months",
    summary:
      "Launched Canada and Mexico via NARF with localized copy and pricing. Consolidated catalog and improved contribution to top variations.",
    metrics: {
      revenueLift: "+260%",
      unitsPerMonth: "8,500 ➜ 22,000",
      buyBox: "88% average",
      reviewGrowth: "+900 net reviews",
    },
    strategies: [
      "Variation families rebuilt for better browse node placement",
      "Pricing parity and FX monitoring across NA",
      "Imagery refresh aligned to search intent",
      "Light DSP retargeting to lift repeat purchase",
    ],
  },
  {
    slug: "fitness-accessories-scale",
    title: "Fitness Accessories: Catalog cleanup to scale",
    category: "Sports & Outdoors",
    timeframe: "4 months",
    summary:
      "Catalog rationalization, compliance audits, and inbound defects reduction. Stabilized buy box and grew units through seasonality.",
    metrics: {
      revenueLift: "+180%",
      unitsPerMonth: "6,000 ➜ 17,000",
      buyBox: "95% average",
      reviewGrowth: "+600 net reviews",
    },
    strategies: [
      "Hazmat/compliance remediation and GS1 alignment",
      "Parent/child optimization and title standardization",
      "Coupons and Deals schedule across peak weeks",
      "Inbound defect rate < 1% via cartonization SOPs",
    ],
  },
];
