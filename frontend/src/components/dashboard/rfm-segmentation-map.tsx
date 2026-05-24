"use client";

import { useState } from "react";
import { segments } from "@/lib/mock-data";
import { formatNumber } from "@/lib/mock-data";
import { Maximize2 } from "lucide-react";

export function RFMSegmentationMap() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const totalCustomers = segments.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-card">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-foreground">
          RFM Segmentation Map
        </h3>
        <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
          <Maximize2 className="h-4 w-4" />
        </button>
      </div>

      {/* Treemap Grid */}
      <div className="grid grid-cols-12 grid-rows-4 gap-1.5 mb-5" style={{ minHeight: "280px" }}>
        {/* Champions - Large tile (6 cols, 2 rows) */}
        <div
          className="col-span-6 row-span-2 rounded-xl p-4 cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: segments[0].color,
            transform: hoveredSegment === "champions" ? "scale(1.01)" : "scale(1)",
            boxShadow: hoveredSegment === "champions" ? "0 8px 25px rgba(13, 148, 136, 0.3)" : "none",
          }}
          onMouseEnter={() => setHoveredSegment("champions")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-base font-bold">{segments[0].name}</p>
          <p className="text-white/80 text-xs mt-1 leading-relaxed">
            {segments[0].description}
          </p>
          <div className="mt-4">
            <span className="text-white font-heading text-3xl font-bold">
              {formatNumber(segments[0].count)}
            </span>
            <p className="text-white/70 text-xs mt-0.5">{segments[0].percentage}</p>
          </div>
        </div>

        {/* Loyal (3 cols, 2 rows) */}
        <div
          className="col-span-3 row-span-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200"
          style={{
            backgroundColor: segments[1].color,
            transform: hoveredSegment === "loyal" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("loyal")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-sm font-bold">{segments[1].name}</p>
          <p className="text-white/80 text-[11px] mt-0.5">{segments[1].description}</p>
          <span className="text-white font-heading text-2xl font-bold mt-3 block">
            {formatNumber(segments[1].count)}
          </span>
        </div>

        {/* Potential Loyalist (3 cols, 1 row) */}
        <div
          className="col-span-3 row-span-1 rounded-xl p-3 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[2].color,
            transform: hoveredSegment === "potential-loyalist" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("potential-loyalist")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-xs font-bold">{segments[2].name}</p>
          <span className="text-white font-heading text-xl font-bold">
            {formatNumber(segments[2].count)}
          </span>
        </div>

        {/* At Risk (3 cols, 1 row) */}
        <div
          className="col-span-3 row-span-1 rounded-xl p-3 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[3].color,
            transform: hoveredSegment === "at-risk" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("at-risk")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-xs font-bold">{segments[3].name}</p>
          <span className="text-white font-heading text-xl font-bold">
            {formatNumber(segments[3].count)}
          </span>
        </div>

        {/* Promising (3 cols, 2 rows) */}
        <div
          className="col-span-3 row-span-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[4].color,
            color: segments[4].textColor,
            transform: hoveredSegment === "promising" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("promising")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="font-heading text-sm font-bold">{segments[4].name}</p>
          <span className="font-heading text-2xl font-bold">
            {formatNumber(segments[4].count)}
          </span>
        </div>

        {/* Need Attention (3 cols, 2 rows) */}
        <div
          className="col-span-3 row-span-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[5].color,
            transform: hoveredSegment === "need-attention" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("need-attention")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-sm font-bold">{segments[5].name}</p>
          <span className="text-white font-heading text-2xl font-bold">
            {formatNumber(segments[5].count)}
          </span>
        </div>

        {/* About to Sleep (3 cols, 2 rows) */}
        <div
          className="col-span-3 row-span-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[6].color,
            color: segments[6].textColor,
            transform: hoveredSegment === "about-to-sleep" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("about-to-sleep")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="font-heading text-sm font-bold">{segments[6].name}</p>
          <span className="font-heading text-2xl font-bold">
            {formatNumber(segments[6].count)}
          </span>
        </div>

        {/* Hibernating (3 cols, 2 rows) */}
        <div
          className="col-span-3 row-span-2 rounded-xl p-3.5 cursor-pointer transition-all duration-200 flex flex-col justify-between"
          style={{
            backgroundColor: segments[7].color,
            transform: hoveredSegment === "hibernating" ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setHoveredSegment("hibernating")}
          onMouseLeave={() => setHoveredSegment(null)}
        >
          <p className="text-white font-heading text-sm font-bold">{segments[7].name}</p>
          <span className="text-white font-heading text-2xl font-bold">
            {formatNumber(segments[7].count)}
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 pt-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-teal" />
          <span className="text-xs text-muted-foreground font-medium">High Value</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-gold" />
          <span className="text-xs text-muted-foreground font-medium">Medium Value</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-segment-at-risk" />
          <span className="text-xs text-muted-foreground font-medium">Low/At Risk</span>
        </div>
      </div>
    </div>
  );
}
