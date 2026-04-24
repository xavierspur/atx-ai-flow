import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FounderSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="reveal">
          <p className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">From the founder</p>

          <blockquote className="font-serif text-2xl sm:text-3xl text-foreground leading-snug italic mb-10">
            "I built ATXDOES AI because I watched dozens of Texas business owners spend thousands on agencies and tools that didn't talk to each other. There had to be a <span className="highlight-accent not-italic font-semibold">simpler way</span> — one platform, one setup, everything automated."
          </blockquote>

          <div className="thin-rule my-8"></div>

          <div className="flex items-center gap-5">
            <div
              className="shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center font-serif text-xl text-foreground font-semibold"
              aria-hidden="true"
            >
              X
            </div>
            <div>
              <p className="font-body font-semibold text-foreground uppercase tracking-wide text-sm">Xavier Camacho</p>
              <p className="font-body text-sm text-muted-foreground">Founder, ATXDOES AI — Austin, TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
