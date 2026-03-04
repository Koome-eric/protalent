import { CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const points = [
    "Fully Remote",
    "Competitive Hourly Contracts",
    "Technical Evaluation Process",
  ];

  return (
    <div className="py-16 border-y border-border/60 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {points.map((text, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}