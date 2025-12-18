import { Card, CardContent } from "@/components/ui/card";

export function KeyboardShortcutsPreview() {
  return (
    <div className="w-full flex flex-col items-center gap-3 pointer-events-none select-none">
      <div className="relative">
        <div className="w-48 h-24 rounded-md border-2 border-border bg-card p-2 flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="flex-1 h-2 rounded bg-muted" />
            <div className="w-2 h-2 rounded bg-muted" />
            <div className="w-2 h-2 rounded bg-muted" />
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-2 rounded bg-muted" />
            <div className="flex-1 h-2 rounded bg-muted" />
            <div className="w-3 h-2 rounded bg-muted" />
          </div>
          <div className="flex gap-1">
            <div className="w-4 h-2 rounded bg-muted" />
            <div className="flex-1 h-2 rounded bg-muted" />
            <div className="w-4 h-2 rounded bg-muted" />
          </div>
        </div>
        <Card className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 border-border bg-card shadow-lg">
          <CardContent className="p-2 space-y-1">
            <div className="text-xs font-medium text-foreground mb-1">
              Command Menu
            </div>
            <div className="text-[10px] text-muted-foreground py-0.5 px-1.5 rounded bg-muted/50">
              Search transactions
            </div>
            <div className="text-[10px] text-muted-foreground py-0.5 px-1.5 rounded bg-muted/50">
              View reports
            </div>
            <div className="text-[10px] text-muted-foreground py-0.5 px-1.5 rounded bg-muted/50">
              Settings
            </div>
            <div className="text-[10px] text-muted-foreground/50 pt-1 border-t border-border">
              Press Ctrl+K
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
