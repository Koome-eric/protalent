"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const criteria = [
  "2+ years experience in AI, software, or tech",
  "Strong system design & problem-solving skills",
  "Fluent English communication",
  "Experience shipping real production systems",
  "Comfortable working remotely",
];

export function ChecklistSection() {
  const [revealed, setRevealed] = useState<number[]>([]);

  useEffect(() => {
    const timers = criteria.map((_, i) =>
      setTimeout(() => {
        setRevealed((prev) => [...prev, i]);
      }, 250 * (i + 1))
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleRedirect = () => {
    window.location.href = "https://t.mercor.com/KmzuD";
  };

  return (
    <section id="qualify" className="py-28 container mx-auto px-4 max-w-2xl">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold mb-4">
          This Is For You If…
        </h2>
        <p className="text-muted-foreground">
          We work exclusively with high-level professionals. Ensure you meet these requirements before applying.
        </p>
      </div>

      <div className="space-y-4 mb-14">
        {criteria.map((item, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 p-5 rounded-xl border border-border/60 transition-all duration-500 ${
              revealed.includes(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <p className="text-base md:text-lg font-medium text-foreground/90">
              {item}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground mb-4">
          Only apply if you meet all criteria.
        </p>

        <Button
          size="lg"
          onClick={handleRedirect}
          className="px-10 py-6 text-lg font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          See If I Qualify
        </Button>
      </div>
    </section>
  );
}