"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { AlertTriangle } from "lucide-react";

const chartData = [
  { date: "Jan", value: 4500 },
  { date: "Feb", value: 5200 },
  { date: "Mar", value: 4800 },
  { date: "Apr", value: 6100 },
  { date: "May", value: 5500 },
  { date: "Jun", value: 6800 },
  { date: "Jul", value: 4200 },
];

const chartConfig = {
  value: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
};

export function ForecastChartPreview() {
  return (
    <div className="w-full pointer-events-none select-none">
      <Card className="border-border bg-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-foreground">
            Financial Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <ChartContainer config={chartConfig}>
              <LineChart data={chartData} width={300} height={150}>
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
                  width={40}
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
            <div className="absolute top-8 right-4">
              <Card className="border-yellow-500/50 bg-yellow-500/10 p-2">
                <CardContent className="p-0 flex items-center gap-1.5">
                  <AlertTriangle className="size-3 text-yellow-500" />
                  <div>
                    <div className="text-[10px] font-medium text-foreground">
                      Critical balance alert
                    </div>
                    <div className="text-[9px] text-muted-foreground">
                      Balance below threshold
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
