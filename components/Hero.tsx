"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardDisplay } from "./DashboardDisplay";

interface HeroProps {
  className?: string;
}

function StarsBackground() {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.4,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-foreground animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
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
        "relative flex flex-col items-center bg-background py-32 px-32 text-center overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <StarsBackground />

      <div className="relative z-10 flex flex-col items-center max-w-5xl">
        <h1 className="text-[4.5rem] font-bold text-foreground leading-[1.1] mb-8 font-[var(--font-space-grotesk)] tracking-tight">
          Transform your business finances with clarity and control
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-[700px] mb-12">
          Modern financial management designed for ambitious entrepreneurs.
          Streamline operations, track performance, and make data-driven
          decisions with tools that actually make sense.
        </p>

        <div className="flex items-center gap-4 mb-16">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
          >
            Get started
            <ArrowRight className="ml-2 size-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 rounded-lg px-8 py-6 text-base font-medium border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-all"
          >
            <Play className="size-5" />
            Watch demo
          </Button>
        </div>

        <div className="w-full max-w-7xl max-h-[500px]">
          <DashboardDisplay />
        </div>
      </div>
    </section>
  );
}
