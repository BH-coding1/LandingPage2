import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CallToActionSectionProps {
  className?: string;
}

export function CallToActionSection({ className }: CallToActionSectionProps) {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center bg-background py-24 px-32 text-center",
        "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background via-background to-transparent",
        className
      )}
    >
      <h2 className="text-[2.5rem] font-bold text-foreground leading-[1.3] mb-4">
        See where financial automation can take your business.
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-[600px] mx-auto my-4 mb-8">
        The first financial tool you'll love. And the last one you'll ever need
      </p>
      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md">
        Join the waitlist
      </Button>
    </section>
  );
}
