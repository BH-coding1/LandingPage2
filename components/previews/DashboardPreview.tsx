"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

const chartData = [
  { date: "Mon", value: 4200 },
  { date: "Tue", value: 4800 },
  { date: "Wed", value: 5100 },
  { date: "Thu", value: 4500 },
  { date: "Fri", value: 5200 },
];

const chartConfig = {
  value: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
};

export function DashboardPreview() {
  return (
    <div className="w-full space-y-3 pointer-events-none select-none">
      <div className="grid grid-cols-2 gap-2">
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-normal text-muted-foreground">
              Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-foreground">$12.4K</div>
            <div className="text-xs text-green-500 mt-0.5">+12%</div>
          </CardContent>
        </Card>
        <Card className="border-border bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-normal text-muted-foreground">
              Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-foreground">$8.2K</div>
            <div className="text-xs text-yellow-500 mt-0.5">-3%</div>
          </CardContent>
        </Card>
      </div>
      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-xs font-normal text-foreground">
            Weekly Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart data={chartData} width={200} height={80}>
              <CartesianGrid
                strokeDasharray="3 3"
                className="stroke-border/30"
              />
              <XAxis
                dataKey="date"
                className="text-[10px]"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                className="text-[10px]"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                width={30}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
