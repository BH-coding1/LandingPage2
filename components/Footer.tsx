import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Linkedin, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        "grid grid-cols-4 gap-8 pt-16 pb-8 px-32 border-t border-border",
        className
      )}
    >
      <div className="text-sm text-muted-foreground">
        © 2023 Cobalt Financial Technologies Inc.
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="/privacy-policy"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-use"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Terms of Use
        </Link>
      </div>

      <div className="text-[0.875rem] text-muted-foreground col-span-2">
        Cobalt is a trademark or registered trademark of Cobalt Financial
        Technologies Inc. Any other trademarks are the property of their
        respective owners. Unless otherwise noted, use of third party logos does
        not imply endorsement of, sponsorship of, or affiliation with Cobalt.
        Cobalt is a financial technology company, not a bank. Banking services
        are provided by Celtic Bank and Evolve Bank & Trust®, Members FDIC.
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="#">
            <X className="size-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#">
            <Linkedin className="size-4" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="#">
            <Facebook className="size-4" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
