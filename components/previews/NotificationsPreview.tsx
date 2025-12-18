import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Edit } from "lucide-react";

export function NotificationsPreview() {
  return (
    <div className="w-full space-y-2 pointer-events-none select-none">
      <Card className="border-border bg-card">
        <CardContent className="p-3">
          <div className="space-y-2">
            <div className="text-xs font-medium text-foreground">
              Payment Request
            </div>
            <div className="text-[10px] text-muted-foreground">
              Invoice #1234 - $2,500.00
            </div>
            <div className="flex gap-1.5 pt-1">
              <Button
                size="sm"
                className="h-6 text-[10px] px-2 bg-green-600 hover:bg-green-600 pointer-events-none"
              >
                <Check className="size-3 mr-1" />
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-6 text-[10px] px-2 pointer-events-none"
              >
                <X className="size-3 mr-1" />
                Decline
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-6 text-[10px] px-2 pointer-events-none"
              >
                <Edit className="size-3 mr-1" />
                Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="border-border bg-card">
        <CardContent className="p-3">
          <div className="space-y-2">
            <div className="text-xs font-medium text-foreground">
              Low Balance Alert
            </div>
            <div className="text-[10px] text-muted-foreground">
              Account balance below threshold
            </div>
            <div className="flex gap-1.5 pt-1">
              <Button
                size="sm"
                className="h-6 text-[10px] px-2 bg-green-600 hover:bg-green-600 pointer-events-none"
              >
                <Check className="size-3 mr-1" />
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="h-6 text-[10px] px-2 pointer-events-none"
              >
                <X className="size-3 mr-1" />
                Decline
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
