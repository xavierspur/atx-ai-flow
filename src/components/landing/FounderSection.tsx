import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FounderSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="reveal">
          <p className="font-body text-sm font-medium text-primary tracking-wide mb-6">A note from the founder</p>

          <blockquote className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic mb-8">
            "I built ATXDOES AI because I watched dozens of Texas business owners spend thousands on agencies and tools that didn't talk to each other. There had to be a simpler way — one platform, one setup, everything automated."
          </blockquote>

          <div className="thin-rule my-8"></div>

          <div className="flex items-center gap-5">
            <div className="shrink-0 w-14 h-14 rounded-full bg-section-alt flex items-center justify-center font-serif text-xl text-foreground">
              {/* Replace with: <img src="/founder.jpg" alt="Founder" className="w-14 h-14 rounded-full object-cover" /> */}
              A
            </div>
            <div>
              <p className="font-body font-medium text-foreground">Founder, ATXDOES AI</p>
              <p className="font-body text-sm text-muted-foreground">Austin, TX — Helping 200+ businesses automate their operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
