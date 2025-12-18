import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <nav
      className={cn(
        "sticky top-0 z-50 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-border/50 px-32 py-4",
        className
      )}
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="size-2 rounded-full bg-accent" />
        <span className="text-foreground font-medium">Nexus</span>
      </Link>

      <div className="flex items-center gap-6">
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
          Join the waitlist
        </Button>
      </div>
    </nav>
  );
}
