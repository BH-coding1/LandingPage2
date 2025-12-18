import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AppLogosPreview } from "./previews/AppLogosPreview";
import { KeyboardShortcutsPreview } from "./previews/KeyboardShortcutsPreview";

interface FeatureCardsSection2Props {
  className?: string;
}

const features = [
  {
    title: "Connect all your apps",
    description:
      "Bring your data with our built-in integrations for accounting, revenue tools and banking.",
    visual: "app-logos",
  },
  {
    title: "You're in control",
    description:
      "Lightning fast. Shortcuts for everything. Command+K on Mac, Ctrl-K on Windows. Dark mode.",
    visual: "keyboard-shortcuts",
  },
];

export function FeatureCardsSection2({ className }: FeatureCardsSection2Props) {
  return (
    <section className={cn("grid grid-cols-2 gap-16 py-24 px-32", className)}>
      {features.map((feature, index) => (
        <Card key={index} className="border-border bg-card">
          <CardHeader>
            <div className="h-48 w-full rounded-md mb-4 flex items-center justify-center overflow-hidden">
              {feature.visual === "app-logos" && <AppLogosPreview />}
              {feature.visual === "keyboard-shortcuts" && (
                <KeyboardShortcutsPreview />
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
    </section>
  );
}
