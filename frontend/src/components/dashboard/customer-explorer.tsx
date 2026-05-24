"use client";

import { useState, useEffect } from "react";
import { customers, weeklyData, formatCurrency } from "@/lib/mock-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Search, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

function ScoreBadge({ score }: { score: number }) {
  const getColor = (s: number) => {
    if (s >= 5) return "bg-teal text-white";
    if (s >= 4) return "bg-teal-light text-white";
    if (s >= 3) return "bg-accent-gold text-white";
    if (s >= 2) return "bg-orange-400 text-white";
    return "bg-slate-300 text-slate-700";
  };

  return (
    <span
      className={cn(
        "inline-flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold",
        getColor(score)
      )}
    >
      {score}
    </span>
  );
}

export function CustomerExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [mounted, setMounted] = useState(false);
  const pageSize = 3;

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.customerId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalCustomers = 4281;
  const totalPages = Math.ceil(totalCustomers / pageSize);

  return (
    <div className="rounded-2xl border border-border-subtle bg-white p-6 shadow-card">
      {/* Header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg font-bold text-foreground">
            Customer Explorer
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5">
            Viewing:{" "}
            <Badge
              variant="secondary"
              className="bg-teal-50 text-teal border-teal/20 font-semibold hover:bg-teal-100"
            >
              Champions
            </Badge>{" "}
            segment
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search customer ID or name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 h-10 bg-slate-50 border-border-subtle focus:border-teal focus:ring-teal/20"
          />
        </div>
      </div>

      {/* Chart */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-6">
          <p className="text-label-caps text-muted-foreground">
            PURCHASE FREQUENCY VS. MONETARY VALUE
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-6 rounded-full bg-teal" />
              <span className="text-xs text-muted-foreground">AVG. MONETARY ($)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-6 rounded-full bg-slate-700" />
              <span className="text-xs text-muted-foreground">PURCHASE FREQUENCY</span>
            </div>
          </div>
        </div>
        <div className="h-[200px] w-full">
          {mounted && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={weeklyData}
              margin={{ top: 5, right: 5, left: -10, bottom: 5 }}
              barGap={2}
              barCategoryGap="20%"
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#E2E8F0"
                vertical={false}
              />
              <XAxis
                dataKey="week"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#94A3B8" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#94A3B8" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "12px",
                  boxShadow: "0px 4px 20px rgba(15, 23, 42, 0.1)",
                  fontSize: "13px",
                }}
                cursor={{ fill: "rgba(13, 148, 136, 0.05)" }}
              />
              <Bar
                dataKey="avgMonetary"
                fill="#0D9488"
                radius={[4, 4, 0, 0]}
                name="Avg. Monetary ($)"
              />
              <Bar
                dataKey="purchaseFrequency"
                fill="#334155"
                radius={[4, 4, 0, 0]}
                name="Purchase Frequency"
              />
            </BarChart>
          </ResponsiveContainer>
          )}
        </div>
      </div>

      {/* Data Table */}
      <div className="rounded-xl border border-border-subtle overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-data-surface hover:bg-data-surface border-b border-border-subtle">
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 pl-4">
                CUSTOMER
              </TableHead>
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 text-center">
                R SCORE
              </TableHead>
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 text-center">
                F SCORE
              </TableHead>
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 text-center">
                M SCORE
              </TableHead>
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 text-right">
                LTV
              </TableHead>
              <TableHead className="text-label-caps text-muted-foreground font-bold py-3 text-center">
                ACTION
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedCustomers.map((customer) => (
              <TableRow
                key={customer.id}
                className="hover:bg-slate-50/80 transition-colors border-b border-border-subtle last:border-0"
              >
                <TableCell className="py-3.5 pl-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback
                        className="text-xs font-bold text-white"
                        style={{ backgroundColor: customer.avatarColor }}
                      >
                        {customer.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {customer.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        ID: {customer.customerId}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <ScoreBadge score={customer.rScore} />
                </TableCell>
                <TableCell className="text-center">
                  <ScoreBadge score={customer.fScore} />
                </TableCell>
                <TableCell className="text-center">
                  <ScoreBadge score={customer.mScore} />
                </TableCell>
                <TableCell className="text-right text-sm font-semibold text-foreground">
                  {formatCurrency(customer.ltv)}
                </TableCell>
                <TableCell className="text-center">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors mx-auto">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1-{Math.min(pageSize, filteredCustomers.length)} of{" "}
          {formatNumber(totalCustomers)}
        </p>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => setCurrentPage((p) => p + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function formatNumber(n: number) {
  return new Intl.NumberFormat("en-US").format(n);
}
