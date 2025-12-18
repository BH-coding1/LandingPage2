"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function ChatInterfacePreview() {
  return (
    <div className="w-full h-full flex flex-col gap-3 pointer-events-none select-none">
      <div className="text-sm text-muted-foreground text-left p-2 rounded-md bg-muted/30">
        Hey! How can I help you?
      </div>
      <div className="flex gap-2 mt-auto">
        <Input
          placeholder="Who's our most profitable customer?"
          className="flex-1 pointer-events-none"
          readOnly
          value="Who's our most profitable customer?"
        />
        <Button className="pointer-events-none">Ask Genius</Button>
      </div>
    </div>
  );
}
