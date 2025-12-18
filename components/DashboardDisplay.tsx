"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart3,
  Building2,
  CreditCard,
  FileText,
  Settings,
  Sparkles,
  TrendingUp,
  Search,
  Settings2,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

const chartData = [
  { date: "Jun 1", income: 4500, expenses: 3200 },
  { date: "Jun 8", income: 5200, expenses: 3800 },
  { date: "Jun 15", income: 4800, expenses: 3500 },
  { date: "Jun 22", income: 6100, expenses: 4200 },
  { date: "Jun 29", income: 5500, expenses: 3900 },
  { date: "Jul 5", income: 6800, expenses: 4500 },
];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
};

export function DashboardDisplay() {
  return (
    <div className="flex w-full max-w-7xl rounded-lg border border-border bg-card overflow-hidden pointer-events-none select-none">
      <aside className="w-64 border-r border-border bg-card p-6 flex flex-col gap-6">
        <nav className="flex flex-col gap-1">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-foreground rounded-md">
            <Sparkles className="size-4" />
            Insights
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <Building2 className="size-4" />
            Company
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <FileText className="size-4" />
            Transactions
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <CreditCard className="size-4" />
            Cards
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <BarChart3 className="size-4" />
            Accounting
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <Settings className="size-4" />
            Settings
          </div>
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground rounded-md">
            <TrendingUp className="size-4" />
            Partner rewards
          </div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between gap-4 p-6 border-b border-border">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search anything..."
              className="pl-9 pointer-events-none"
              readOnly
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="pointer-events-none">
              <Settings2 className="size-4" />
            </Button>
            <Avatar>
              <AvatarImage src="/user-avatar.png" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-normal text-muted-foreground">
                  Sales today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  $1,036.82
                </div>
                <div className="text-sm text-green-500 mt-1">+21%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-normal text-muted-foreground">
                  Avg customer spend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  $244.82
                </div>
                <div className="text-sm text-yellow-500 mt-1">-0.7%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-normal text-muted-foreground">
                  Your potential savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">
                  $1,870.00
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  $598.00
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-normal text-muted-foreground">
                  Increase in monthly spend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">72%</div>
                <div className="text-sm text-muted-foreground mt-1">
                  Your spending on SealSoftware grew up significantly in the
                  last 30 days.
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Income vs Expenses</CardTitle>
                <div className="flex items-center gap-2">
                  <Select defaultValue="4weeks" disabled>
                    <SelectTrigger className="w-[140px] pointer-events-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4weeks">Last 4 weeks</SelectItem>
                      <SelectItem value="month">Last month</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select defaultValue="jun1-jul5" disabled>
                    <SelectTrigger className="w-[140px] pointer-events-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jun1-jul5">Jun 1-Jul 5</SelectItem>
                      <SelectItem value="jul1-aug5">Jul 1-Aug 5</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    variant="outline"
                    size="sm"
                    className="pointer-events-none"
                  >
                    Daily
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="pointer-events-none"
                  >
                    Weekly
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="pointer-events-none"
                  >
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig}>
                <LineChart data={chartData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-border/50"
                  />
                  <XAxis
                    dataKey="date"
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <YAxis
                    className="text-xs"
                    tick={{ fill: "hsl(var(--muted-foreground))" }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="expenses"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
