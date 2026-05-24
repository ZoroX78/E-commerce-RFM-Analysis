"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Plus,
  ShoppingCart,
  Shirt,
  Store,
  Cpu,
  Globe,
  TrendingUp,
  Home,
  Sparkles,
  Monitor,
  Dumbbell,
  ChevronLeft,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "shopping-cart": ShoppingCart,
  shirt: Shirt,
  store: Store,
  cpu: Cpu,
  globe: Globe,
  "trending-up": TrendingUp,
  home: Home,
  sparkles: Sparkles,
  monitor: Monitor,
  dumbbell: Dumbbell,
};

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 flex h-full flex-col border-r border-border-subtle bg-white transition-all duration-300",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-6 pb-2">
        {!collapsed && (
          <div>
            <h1 className="font-heading text-lg font-bold text-foreground">
              Analysis Center
            </h1>
            <p className="text-xs text-muted-foreground">10 Active Projects</p>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-slate-100 text-muted-foreground transition-colors"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* New Analysis Button */}
      <div className="px-4 py-3">
        <Button
          className={cn(
            "w-full bg-teal hover:bg-teal/90 text-white font-semibold shadow-none",
            collapsed && "px-0"
          )}
          size={collapsed ? "icon" : "default"}
        >
          <Plus className="h-4 w-4" />
          {!collapsed && <span className="ml-2">New Analysis</span>}
        </Button>
      </div>

      {/* Project List */}
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-0.5 py-1">
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || ShoppingCart;
            return (
              <button
                key={project.id}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                  project.active
                    ? "bg-teal-50 text-teal border border-teal/20"
                    : "text-muted-foreground hover:bg-slate-50 hover:text-foreground border border-transparent"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {!collapsed && (
                  <span className="truncate">{project.name}</span>
                )}
              </button>
            );
          })}
        </div>
      </ScrollArea>

      {/* User Profile */}
      <div
        className={cn(
          "border-t border-border-subtle p-4",
          collapsed && "flex justify-center"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-3",
            collapsed && "justify-center"
          )}
        >
          <Avatar className="h-9 w-9 shrink-0">
            <AvatarFallback className="bg-slate-200 text-slate-700 text-xs font-semibold">
              AC
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-foreground">
                Alex Chen
              </p>
              <p className="truncate text-xs text-muted-foreground">
                Lead Analyst
              </p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
