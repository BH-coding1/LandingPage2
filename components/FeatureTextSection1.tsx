import { cn } from "@/lib/utils";

interface FeatureTextSection1Props {
  className?: string;
}

export function FeatureTextSection1({ className }: FeatureTextSection1Props) {
  return (
    <section
      className={cn(
        "grid grid-cols-2 gap-16 py-24 px-32 items-center",
        className
      )}
    >
      <h2 className="text-[2.5rem] font-bold text-foreground leading-[1.3]">
        Who said finance has to be boring?
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed">
        With Cobalt, managing your business finances is effortless, empowering,
        and anything but boring. Our intuitive platform brings clarity to your
        cash flow, simplifies your financial decision-making, and puts the power
        of advanced financial management right at your fingertips. Say no to
        spreadsheets and tools designed in the 80s.
      </p>
    </section>
  );
}
