import { Hero } from "@/components/landing/hero";
import { TrustStrip } from "@/components/landing/trust-strip";
import { ChecklistSection } from "@/components/landing/checklist";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10 selection:text-primary">
      <Hero />
      <TrustStrip />
      <ChecklistSection />

      <footer className="py-16 border-t border-border/60 text-center">
        <div className="container mx-auto px-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            ProTalent Connect
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Elite Engineering Placements. For qualified professionals only.
          </p>
        </div>
      </footer>
    </main>
  );
}