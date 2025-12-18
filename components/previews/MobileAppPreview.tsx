import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, DollarSign, CreditCard } from "lucide-react";

export function MobileAppPreview() {
  return (
    <div className="w-full flex items-center justify-center pointer-events-none select-none">
      <div className="relative w-32 h-56 rounded-[2rem] border-4 border-border bg-card p-3 shadow-lg">
        <div className="w-full h-full rounded-[1.5rem] bg-background overflow-hidden">
          <div className="h-8 bg-card border-b border-border flex items-center justify-center">
            <div className="w-12 h-1 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="p-3 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Balance</span>
              <TrendingUp className="size-3 text-green-500" />
            </div>
            <div className="text-lg font-bold text-foreground">$24,582</div>
            <div className="space-y-1.5 mt-3">
              <Card className="border-border bg-card p-2">
                <CardContent className="p-0 flex items-center gap-2">
                  <DollarSign className="size-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">
                      Income
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      +$1,240
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border bg-card p-2">
                <CardContent className="p-0 flex items-center gap-2">
                  <CreditCard className="size-4 text-muted-foreground" />
                  <div className="flex-1">
                    <div className="text-xs font-medium text-foreground">
                      Expenses
                    </div>
                    <div className="text-[10px] text-muted-foreground">
                      -$820
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
