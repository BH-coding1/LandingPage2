"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ForecastChartPreview } from "./previews/ForecastChartPreview";
import { ChatInterfacePreview } from "./previews/ChatInterfacePreview";

interface GeniusSectionProps {
  className?: string;
}

const geniusFeatures = [
  {
    title: "Smart forecasting",
    description:
      "Harness the power of Cobalt's predictive analytics to map out the financial future of your business.",
    visual: "forecast-chart",
  },
  {
    title: "Chat with Genius",
    description:
      "Just ask. With Genius by your side, navigating the financial maze becomes intuitive and effortless.",
    visual: "chat-interface",
  },
];

export function GeniusSection({ className }: GeniusSectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col py-24 px-32 text-center max-w-[1200px] mx-auto",
        className
      )}
    >
      <h2 className="text-[2.5rem] font-bold text-foreground leading-[1.3] mb-4">
        Meet Genius
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto mb-16">
        Our AI-driven assistant is designed to decode complex financial figures
        and illuminate key trends in your business.
      </p>

      <div className="grid grid-cols-2 gap-8">
        {geniusFeatures.map((feature, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader>
              <div className="h-48 w-full rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {feature.visual === "forecast-chart" ? (
                  <ForecastChartPreview />
                ) : (
                  <ChatInterfacePreview />
                )}
              </div>
              <CardTitle className="text-foreground">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
