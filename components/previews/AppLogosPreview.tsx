export function AppLogosPreview() {
  const logos = [
    "Stripe",
    "QuickBooks",
    "Google",
    "Amazon",
    "Shopify",
    "Xero",
    "PayPal",
    "Square",
  ];

  return (
    <div className="w-full grid grid-cols-4 gap-3 pointer-events-none select-none">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="aspect-square rounded-md border border-border bg-card flex items-center justify-center"
        >
          <span className="text-[10px] font-medium text-muted-foreground">
            {logo}
          </span>
        </div>
      ))}
    </div>
  );
}
