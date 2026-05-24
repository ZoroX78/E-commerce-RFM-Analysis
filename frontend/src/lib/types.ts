export interface Project {
  id: string;
  name: string;
  icon: string;
  active: boolean;
}

export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  unit: string;
  change: {
    value: string;
    direction: "up" | "down";
    label: string;
  };
  icon: string;
}

export interface Segment {
  id: string;
  name: string;
  count: number;
  percentage?: string;
  description?: string;
  color: string;
  textColor: string;
  tier: "high" | "medium" | "low";
}

export interface Customer {
  id: string;
  customerId: string;
  name: string;
  avatar: string;
  initials: string;
  avatarColor: string;
  rScore: number;
  fScore: number;
  mScore: number;
  ltv: number;
  segment: string;
}

export interface WeeklyData {
  week: string;
  avgMonetary: number;
  purchaseFrequency: number;
}

export interface ThresholdGroup {
  label: string;
  unit: string;
  ranges: {
    score: number;
    operator: string;
    value: number;
  }[];
}
