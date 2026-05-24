"use client";

import { Bell, Settings, HelpCircle } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-30 glass border-b border-border-subtle">
      <div className="flex h-14 items-center justify-between px-6">
        {/* Left: Title */}
        <div className="flex items-center gap-8">
          <h2 className="font-heading text-base font-bold text-foreground tracking-tight">
            RFM Intelligence
          </h2>

          {/* Tab Navigation */}
          <nav className="flex items-center gap-1">
            <button className="relative px-4 py-1.5 text-sm font-semibold text-teal rounded-full bg-teal-50 border border-teal/20 transition-colors">
              Project: E-com Growth
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-slate-50 transition-colors">
              Datasets (10 total)
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-slate-50 transition-colors">
              Reports
            </button>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
            <Bell className="h-[18px] w-[18px]" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
            <Settings className="h-[18px] w-[18px]" />
          </button>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors">
            <HelpCircle className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
}
