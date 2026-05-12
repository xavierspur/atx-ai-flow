import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CaseStudySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto max-w-4xl">
        <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">Results</p>
        <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl mb-12 text-balance">
          What automation <span className="highlight-accent">actually does</span> for a Texas business.
        </h2>

        <div className="reveal grid sm:grid-cols-3 gap-8">
          <div className="p-8 bg-background border border-foreground/5 space-y-3">
            <p className="font-serif text-4xl font-medium text-foreground">6 hrs</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Average time a new lead waits before a business responds — without automation.
            </p>
          </div>
          <div className="p-8 bg-primary/5 border border-primary/10 space-y-3">
            <p className="font-serif text-4xl font-medium text-foreground">&lt; 2 min</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              How fast ATXDOES AI can trigger a personalized SMS or email follow-up after a form submission.
            </p>
          </div>
          <div className="p-8 bg-background border border-foreground/5 space-y-3">
            <p className="font-serif text-4xl font-medium text-foreground">32 hrs</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Typical hours saved per month when scheduling, follow-ups, and reminders run on autopilot.
            </p>
          </div>
        </div>

        <p className="reveal mt-10 font-body text-sm text-muted-foreground italic">
          Results are illustrative based on client onboarding data. Individual results vary by business type, volume, and configuration.
        </p>
      </div>
    </section>
  );
};

export default CaseStudySection;
