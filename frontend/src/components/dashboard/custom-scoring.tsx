"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface ThresholdRange {
  highScore: number;
  highOp: string;
  highValue: number;
  lowScore: number;
  lowOp: string;
  lowValue: number;
}

const defaultThresholds: Record<string, ThresholdRange> = {
  recency: {
    highScore: 5,
    highOp: "<",
    highValue: 14,
    lowScore: 1,
    lowOp: ">",
    lowValue: 90,
  },
  frequency: {
    highScore: 5,
    highOp: ">",
    highValue: 8,
    lowScore: 1,
    lowOp: "<",
    lowValue: 2,
  },
  monetary: {
    highScore: 5,
    highOp: "> $",
    highValue: 1000,
    lowScore: 0,
    lowOp: "",
    lowValue: 0,
  },
};

export function CustomScoring() {
  const [thresholds, setThresholds] =
    useState<Record<string, ThresholdRange>>(defaultThresholds);
  const [isApplying, setIsApplying] = useState(false);

  const handleReset = () => {
    setThresholds(defaultThresholds);
  };

  const handleApply = () => {
    setIsApplying(true);
    setTimeout(() => setIsApplying(false), 1200);
  };

  const updateThreshold = (
    key: string,
    field: keyof ThresholdRange,
    value: number
  ) => {
    setThresholds((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  };

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-card h-full">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-foreground">
          Custom Scoring
        </h3>
        <button
          onClick={handleReset}
          className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
        >
          RESET
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
        Adjust the thresholds for Recency, Frequency, and Monetary values to
        recalibrate segment sizes instantly.
      </p>

      {/* Recency Thresholds */}
      <div className="mb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-label-caps text-muted-foreground">
            RECENCY (DAYS)
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            Scale: 1-5
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal text-white text-xs font-bold">
              {thresholds.recency.highScore}
            </span>
            <span className="text-sm text-muted-foreground font-medium">&lt;</span>
            <input
              type="number"
              value={thresholds.recency.highValue}
              onChange={(e) =>
                updateThreshold("recency", "highValue", Number(e.target.value))
              }
              className="h-8 w-16 rounded-md border border-border-subtle bg-white px-2 text-sm text-foreground text-center focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none transition-colors"
            />
            <span className="text-sm text-muted-foreground font-medium">days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-200 text-slate-700 text-xs font-bold">
              {thresholds.recency.lowScore}
            </span>
            <span className="text-sm text-muted-foreground font-medium">&gt;</span>
            <input
              type="number"
              value={thresholds.recency.lowValue}
              onChange={(e) =>
                updateThreshold("recency", "lowValue", Number(e.target.value))
              }
              className="h-8 w-16 rounded-md border border-border-subtle bg-white px-2 text-sm text-foreground text-center focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none transition-colors"
            />
            <span className="text-sm text-muted-foreground font-medium">days</span>
          </div>
        </div>
      </div>

      {/* Frequency Thresholds */}
      <div className="mb-5">
        <span className="text-label-caps text-muted-foreground block mb-3">
          FREQUENCY (ORDERS)
        </span>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal text-white text-xs font-bold">
              {thresholds.frequency.highScore}
            </span>
            <span className="text-sm text-muted-foreground font-medium">&gt;</span>
            <input
              type="number"
              value={thresholds.frequency.highValue}
              onChange={(e) =>
                updateThreshold("frequency", "highValue", Number(e.target.value))
              }
              className="h-8 w-16 rounded-md border border-border-subtle bg-white px-2 text-sm text-foreground text-center focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none transition-colors"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-slate-200 text-slate-700 text-xs font-bold">
              {thresholds.frequency.lowScore}
            </span>
            <span className="text-sm text-muted-foreground font-medium">&lt;</span>
            <input
              type="number"
              value={thresholds.frequency.lowValue}
              onChange={(e) =>
                updateThreshold("frequency", "lowValue", Number(e.target.value))
              }
              className="h-8 w-16 rounded-md border border-border-subtle bg-white px-2 text-sm text-foreground text-center focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Monetary Thresholds */}
      <div className="mb-6">
        <span className="text-label-caps text-muted-foreground block mb-3">
          MONETARY ($)
        </span>
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal text-white text-xs font-bold">
            {thresholds.monetary.highScore}
          </span>
          <span className="text-sm text-muted-foreground font-medium">&gt; $</span>
          <input
            type="number"
            value={thresholds.monetary.highValue}
            onChange={(e) =>
              updateThreshold("monetary", "highValue", Number(e.target.value))
            }
            className="h-8 w-20 rounded-md border border-border-subtle bg-white px-2 text-sm text-foreground text-center focus:border-teal focus:ring-1 focus:ring-teal/20 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Apply Button */}
      <Button
        onClick={handleApply}
        className="w-full bg-teal hover:bg-teal/90 text-white font-semibold shadow-none h-11"
        disabled={isApplying}
      >
        <RefreshCw
          className={`h-4 w-4 mr-2 ${isApplying ? "animate-spin" : ""}`}
        />
        {isApplying ? "Applying..." : "Apply New Thresholds"}
      </Button>
    </div>
  );
}
