"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { TopBar } from "@/components/layout/top-bar";
import { KPICard } from "@/components/dashboard/kpi-card";
import { RFMSegmentationMap } from "@/components/dashboard/rfm-segmentation-map";
import { CustomScoring } from "@/components/dashboard/custom-scoring";
import { CustomerExplorer } from "@/components/dashboard/customer-explorer";
import { kpiMetrics } from "@/lib/mock-data";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-data-surface">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-[260px] flex-1 min-w-0">
        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <main className="p-6 max-w-[1440px]">
          {/* Page Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h1 className="font-heading text-[28px] font-bold text-foreground tracking-tight">
                US Q4 Sales Analysis
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Real-time RFM segmentation and performance metrics.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                className="border-teal text-teal hover:bg-teal-50 font-semibold h-10 px-5"
              >
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button
                variant="outline"
                className="border-border-subtle text-foreground font-medium h-10 px-4"
              >
                Last 30 Days
                <ChevronDown className="h-4 w-4 ml-2 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* KPI Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {kpiMetrics.map((metric) => (
              <KPICard key={metric.id} metric={metric} />
            ))}
          </div>

          {/* Segmentation Map + Custom Scoring */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2">
              <RFMSegmentationMap />
            </div>
            <div className="lg:col-span-1">
              <CustomScoring />
            </div>
          </div>

          {/* Customer Explorer */}
          <CustomerExplorer />
        </main>
      </div>
    </div>
  );
}
