"use client";

import { Button } from "@/components/ui/button";
import { AnimatedHeadline } from "./animated-headline";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const scrollToQualify = () => {
    const element = document.getElementById("qualify");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const referralLink = "https://t.mercor.com/KmzuD";

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center max-w-4xl">
        {/* Badge */}
        <div className="mb-8">
          <Badge
            variant="secondary"
            className="px-4 py-1 text-xs font-semibold uppercase tracking-wide bg-primary/5 text-primary border-primary/10 rounded-full"
          >
            Limited Spots • Selective Process
          </Badge>
        </div>

        {/* Animated Headline */}
        <AnimatedHeadline />

        {/* Subtext */}
        <div className="mt-8 space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Work remotely with top global teams. Competitive compensation. Serious builders only.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/80">
            Opportunities with vetted global companies.
          </p>
        </div>

        {/* Dual CTA Buttons */}
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Primary: Referral Link */}
            <Button
              size="lg"
              onClick={() => window.open(referralLink, "_blank")}
              className="px-10 py-6 text-lg font-semibold rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              See If I Qualify
            </Button>

            {/* Secondary: Scroll to Checklist */}
            <Button
              size="lg"
              onClick={scrollToQualify}
              className="px-10 py-6 text-lg font-semibold rounded-full bg-transparent border border-primary text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
            >
              Check My Eligibility
            </Button>
          </div>

          {/* Supporting Text */}
          <span className="text-xs text-muted-foreground italic mt-2">
            High hourly contracts available for qualified engineers.
          </span>
        </div>
      </div>
    </section>
  );
}