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
    slug: "peeperly-mobile-accessories-india",
    title: "Peeperly (Mobile Accessories, India): 0 ➜ 7‑figure run‑rate",
    category: "Electronics & Mobile Accessories",
    timeframe: "8 months",
    summary:
      "Amazon India launch with authoritative catalog build, A+ Content, and SEO-driven ranking program. Stabilized buy box and scaled with retail-aware ads.",
    metrics: {
      revenueLift: "+520% YoY",
      unitsPerMonth: "10,000 ➜ 35,000",
      buyBox: "93% average",
      reviewGrowth: "+1,200 net reviews",
    },
    strategies: [
      "Localized keyword research (IN) and contribution strategy",
      "A+ Content, video, and image stacks built for CTR/CVR",
      "Retail-aware PPC (SP, SB, SD) with dayparting",
      "FBA forecasting with regional placement and in-stock SLAs",
      "Affiliate-driven rank pushes across 500+ partners",
    ],
  },
  {
    slug: "lamaze-cosmetics-shopify-dtc",
    title: "Lamaze Cosmetics Pvt Ltd: 7‑figure DTC with Meta & Google Ads",
    category: "Beauty & Personal Care",
    timeframe: "6 months",
    summary:
      "Shopify rebuild and analytics stack with full‑funnel paid media (Meta + Google). Drove profitable scale that reinforced Amazon demand and conversion.",
    metrics: {
      revenueLift: "+310%",
      unitsPerMonth: "—",
      buyBox: "N/A",
      reviewGrowth: "Blended ROAS 2.4x",
    },
    strategies: [
      "High‑intent search (PMAX + exact) and creative testing on Meta",
      "Theme refactor for speed + CRO best practices",
      "Affiliates/creators pipeline (>500) for awareness and UGC",
      "Feed hygiene and landing page alignment to ad angles",
    ],
  },
  {
    slug: "car-accessories-scale",
    title: "Car Accessories: Retail readiness to scale",
    category: "Automotive",
    timeframe: "5 months",
    summary:
      "Catalog cleanup, compliance remediation, and contribution consolidation across top variations. Ads scaled once retail inputs stabilized.",
    metrics: {
      revenueLift: "+240%",
      unitsPerMonth: "7,000 ➜ 20,000",
      buyBox: "94% average",
      reviewGrowth: "+800 net reviews",
    },
    strategies: [
      "Hazmat/compliance remediation and GS1 alignment",
      "Parent/child optimization and title standardization",
      "Coupons + Deals schedule across peak weeks",
      "Inbound defect rate < 1% via cartonization SOPs",
    ],
  },
  {
    slug: "fitness-scale",
    title: "Fitness: Seasonality capture and inventory discipline",
    category: "Sports & Outdoors",
    timeframe: "4 months",
    summary:
      "Stabilized buy box and captured seasonality via disciplined FBA replenishment and retail-aware PPC.",
    metrics: {
      revenueLift: "+190%",
      unitsPerMonth: "6,500 ➜ 17,500",
      buyBox: "96% average",
      reviewGrowth: "+650 net reviews",
    },
    strategies: [
      "Forecasting and just‑in‑time replenishment",
      "Sponsored Products/Brands with rule‑based bidding",
      "Browse node placement improvements and variation rebuilds",
      "Image refresh aligned to search intent",
    ],
  },
  {
    slug: "fashion-apparel-expansion",
    title: "Fashion/Apparel: Variation strategy and ads lift",
    category: "Fashion & Apparel",
    timeframe: "6 months",
    summary:
      "Contribution consolidation into hero variations with premium creative; scaled ads once conversion stabilized.",
    metrics: {
      revenueLift: "+270%",
      unitsPerMonth: "5,500 ➜ 16,500",
      buyBox: "91% average",
      reviewGrowth: "+700 net reviews",
    },
    strategies: [
      "Image stacks and A+ built for style/fit conversion",
      "Keyword clustering and title standardization",
      "Retail-aware PPC (SP/SB) tied to hero variants",
      "Pricing parity and promo calendar around peak weeks",
    ],
  },
];
