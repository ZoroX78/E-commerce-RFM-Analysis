"use client";

import { cn } from "@/lib/utils";
import type { KPIMetric } from "@/lib/types";
import { Clock, Repeat, DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  clock: Clock,
  repeat: Repeat,
  "dollar-sign": DollarSign,
};

interface KPICardProps {
  metric: KPIMetric;
}

export function KPICard({ metric }: KPICardProps) {
  const Icon = iconMap[metric.icon] || Clock;
  const isUp = metric.change.direction === "up";

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-white p-5 shadow-card hover-lift">
      {/* Background decorative element */}
      <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-400 group-hover:bg-teal-50 group-hover:text-teal transition-colors duration-300">
        <Icon className="h-[18px] w-[18px]" />
      </div>

      {/* Label */}
      <p className="text-label-caps text-muted-foreground mb-2">
        {metric.label}
      </p>

      {/* Value */}
      <div className="flex items-baseline gap-2">
        <span className="font-heading text-3xl font-bold text-foreground tracking-tight">
          {metric.value}
        </span>
        {metric.unit && (
          <span className="text-sm text-muted-foreground font-medium">
            {metric.unit}
          </span>
        )}
      </div>

      {/* Change indicator */}
      <div className="mt-2 flex items-center gap-1.5">
        {isUp ? (
          <TrendingUp className="h-3.5 w-3.5 text-teal" />
        ) : (
          <TrendingDown className="h-3.5 w-3.5 text-segment-at-risk" />
        )}
        <span
          className={cn(
            "text-xs font-semibold",
            isUp ? "text-teal" : "text-segment-at-risk"
          )}
        >
          {isUp ? "↑" : "↓"} {metric.change.value}
        </span>
        <span className="text-xs text-muted-foreground">
          {metric.change.label}
        </span>
      </div>
    </div>
  );
}
