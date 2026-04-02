import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const FounderSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="reveal glass-card p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
          <div className="shrink-0 w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl">
            {/* Replace with real photo: <img src="/founder.jpg" alt="Founder" className="w-24 h-24 rounded-2xl object-cover" /> */}
            A
          </div>
          <div>
            <p className="text-foreground leading-relaxed mb-3">
              "I built ATXDOES AI because I watched dozens of Texas business owners spend thousands on agencies and tools that didn't talk to each other. There had to be a simpler way — one platform, one setup, everything automated."
            </p>
            <p className="font-semibold text-foreground">Founder, ATXDOES AI</p>
            <p className="text-sm text-muted-foreground">Austin, TX — Helping 200+ businesses automate their operations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
