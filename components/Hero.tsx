"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardDisplay } from "./DashboardDisplay";

interface HeroProps {
  className?: string;
}

function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center bg-background py-24 px-32 text-center",
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-transparent",
        className
      )}
    >
      <StarsBackground />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-[3.5rem] font-bold text-foreground leading-[1.2] mb-6">
          Unleash the power of intuitive finance
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mb-8">
          Say goodbye to the outdated financial tools. Every small business
          owner, regardless of the background, can now manage their business
          like a pro. Simple. Intuitive. And never boring.
        </p>

        <div className="flex items-center gap-4 mb-12">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
            Join the waitlist
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            Learn more
            <ArrowDown className="size-4" />
          </Button>
        </div>

        <div className="w-full max-w-7xl">
          <DashboardDisplay />
        </div>
      </div>
    </section>
  );
}
