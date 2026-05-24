import type {
  Project,
  KPIMetric,
  Segment,
  Customer,
  WeeklyData,
} from "./types";

export const projects: Project[] = [
  { id: "us-q4", name: "US Q4 Sales", icon: "shopping-cart", active: true },
  {
    id: "eu-fashion",
    name: "EU Fashion Retail",
    icon: "shirt",
    active: false,
  },
  {
    id: "uk-high-street",
    name: "UK High Street",
    icon: "store",
    active: false,
  },
  {
    id: "asia-tech",
    name: "Asia Tech Hub",
    icon: "cpu",
    active: false,
  },
  {
    id: "global-prime",
    name: "Global Prime",
    icon: "globe",
    active: false,
  },
  {
    id: "apparel-growth",
    name: "Apparel Growth",
    icon: "trending-up",
    active: false,
  },
  {
    id: "home-decor",
    name: "Home Decor",
    icon: "home",
    active: false,
  },
  {
    id: "beauty-segment",
    name: "Beauty Segment",
    icon: "sparkles",
    active: false,
  },
  {
    id: "electronics",
    name: "Electronics",
    icon: "monitor",
    active: false,
  },
  {
    id: "sporting-goods",
    name: "Sporting Goods",
    icon: "dumbbell",
    active: false,
  },
];

export const kpiMetrics: KPIMetric[] = [
  {
    id: "avg-recency",
    label: "AVERAGE RECENCY",
    value: "14.2",
    unit: "days",
    change: { value: "2.4%", direction: "up", label: "vs last period" },
    icon: "clock",
  },
  {
    id: "purchase-frequency",
    label: "PURCHASE FREQUENCY",
    value: "3.8",
    unit: "orders/user",
    change: { value: "0.8%", direction: "up", label: "vs last period" },
    icon: "repeat",
  },
  {
    id: "avg-ltv",
    label: "AVG. LIFETIME VALUE",
    value: "$482.50",
    unit: "",
    change: { value: "$12.40", direction: "down", label: "vs last period" },
    icon: "dollar-sign",
  },
];

export const segments: Segment[] = [
  {
    id: "champions",
    name: "Champions",
    count: 4281,
    percentage: "24% of base",
    description: "Bought recently, buy often, spend most.",
    color: "#0D9488",
    textColor: "#ffffff",
    tier: "high",
  },
  {
    id: "loyal",
    name: "Loyal",
    count: 3102,
    description: "Spend good money often.",
    color: "#14B8A6",
    textColor: "#ffffff",
    tier: "high",
  },
  {
    id: "potential-loyalist",
    name: "Potential Loyalist",
    count: 2845,
    color: "#F59E0B",
    textColor: "#ffffff",
    tier: "medium",
  },
  {
    id: "at-risk",
    name: "At Risk",
    count: 1920,
    color: "#EA4335",
    textColor: "#ffffff",
    tier: "low",
  },
  {
    id: "promising",
    name: "Promising",
    count: 1204,
    color: "#2DD4BF",
    textColor: "#0f4f4a",
    tier: "high",
  },
  {
    id: "need-attention",
    name: "Need Attention",
    count: 984,
    color: "#F87171",
    textColor: "#ffffff",
    tier: "low",
  },
  {
    id: "about-to-sleep",
    name: "About to Sleep",
    count: 1402,
    color: "#E2E8F0",
    textColor: "#334155",
    tier: "medium",
  },
  {
    id: "hibernating",
    name: "Hibernating",
    count: 3120,
    color: "#94A3B8",
    textColor: "#ffffff",
    tier: "medium",
  },
];

export const customers: Customer[] = [
  {
    id: "1",
    customerId: "#84920",
    name: "Sarah Jenkins",
    avatar: "",
    initials: "SJ",
    avatarColor: "#94A3B8",
    rScore: 5,
    fScore: 5,
    mScore: 5,
    ltv: 2450.0,
    segment: "Champions",
  },
  {
    id: "2",
    customerId: "#84911",
    name: "Marcus Rodriguez",
    avatar: "",
    initials: "MR",
    avatarColor: "#EA4335",
    rScore: 5,
    fScore: 4,
    mScore: 5,
    ltv: 1890.5,
    segment: "Champions",
  },
  {
    id: "3",
    customerId: "#84890",
    name: "Elena Torres",
    avatar: "",
    initials: "ET",
    avatarColor: "#7C3AED",
    rScore: 4,
    fScore: 5,
    mScore: 4,
    ltv: 1205.0,
    segment: "Loyal",
  },
  {
    id: "4",
    customerId: "#84875",
    name: "James Wilson",
    avatar: "",
    initials: "JW",
    avatarColor: "#0D9488",
    rScore: 5,
    fScore: 3,
    mScore: 5,
    ltv: 2100.75,
    segment: "Champions",
  },
  {
    id: "5",
    customerId: "#84862",
    name: "Priya Patel",
    avatar: "",
    initials: "PP",
    avatarColor: "#F59E0B",
    rScore: 4,
    fScore: 4,
    mScore: 3,
    ltv: 980.25,
    segment: "Loyal",
  },
  {
    id: "6",
    customerId: "#84851",
    name: "David Kim",
    avatar: "",
    initials: "DK",
    avatarColor: "#3B82F6",
    rScore: 3,
    fScore: 5,
    mScore: 4,
    ltv: 1540.0,
    segment: "Potential Loyalist",
  },
];

export const weeklyData: WeeklyData[] = [
  { week: "Week 1", avgMonetary: 420, purchaseFrequency: 340 },
  { week: "Week 2", avgMonetary: 380, purchaseFrequency: 310 },
  { week: "Week 3", avgMonetary: 450, purchaseFrequency: 420 },
  { week: "Week 4", avgMonetary: 390, purchaseFrequency: 350 },
  { week: "Week 5", avgMonetary: 410, purchaseFrequency: 300 },
  { week: "Week 6", avgMonetary: 460, purchaseFrequency: 380 },
];

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
