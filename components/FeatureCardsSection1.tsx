import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DashboardPreview } from "./previews/DashboardPreview";
import { MobileAppPreview } from "./previews/MobileAppPreview";
import { NotificationsPreview } from "./previews/NotificationsPreview";

interface FeatureCardsSection1Props {
  className?: string;
}

const features = [
  {
    title: "Insights at your fingertips",
    description:
      "All your data and finances in one place to provide quick answers and make decisions instantly.",
    visual: "dashboard",
  },
  {
    title: "Manage in real time",
    description:
      "Have full control of your business finances on the go using our iOS/Android mobile apps. Because, you know, it's 2023.",
    visual: "mobile",
  },
  {
    title: "Important business alerts",
    description:
      "Choose the alerts you need and receive them via email, mobile or Slack. Review and take action in one click.",
    visual: "notifications",
  },
];

export function FeatureCardsSection1({ className }: FeatureCardsSection1Props) {
  return (
    <section
      className={cn(
        "flex flex-col py-24 px-32 text-center max-w-[1200px] mx-auto",
        className
      )}
    >
      <h2 className="text-[2.5rem] font-bold text-foreground leading-[1.3] mb-4">
        Everything you need. Nothing you don't
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto mb-16">
        Financial management and visibility in one place. Experience a flexible
        toolkit that makes every task feel like a breeze.
      </p>

      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader>
              <div className="h-32 w-full rounded-md mb-4 flex items-center justify-center overflow-hidden">
                {feature.visual === "dashboard" && <DashboardPreview />}
                {feature.visual === "mobile" && <MobileAppPreview />}
                {feature.visual === "notifications" && <NotificationsPreview />}
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
