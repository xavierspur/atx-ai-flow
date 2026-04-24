import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    word: "one",
    title: "Tell us about your business",
    description: "A short conversation — your industry, your goals, where your time goes. No pitch. Just a map of where the bottlenecks are.",
  },
  {
    word: "two",
    title: "We match you with automations",
    description: "Our engine selects the workflows that actually fit your business type. Not a generic template — a tailored set of agents ready to work.",
  },
  {
    word: "three",
    title: "Your AI agents start running",
    description: "Leads get followed up. Reviews get answered. Emails go out. Reports land in your inbox. You focus on your craft.",
  },
];

const HowItWorksSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto max-w-4xl">
        <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">How it works</p>
        <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl text-balance">
          Three steps. <span className="highlight-accent">Five minutes.</span> Done.
        </h2>
        <p className="reveal font-body text-base sm:text-lg text-muted-foreground leading-relaxed mt-8 max-w-2xl">
          No contracts, no consultants, no setup fees. Just a quick conversation and a working set of agents.
        </p>

        <div className="mt-16 space-y-12">
          {steps.map((s, i) => (
            <div key={s.word} className="reveal grid grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start pt-8 border-t border-foreground/10" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-serif text-foreground/30 text-3xl sm:text-4xl tabular-nums">
                0{i + 1}
              </p>
              <div>
                <h3 className="font-body uppercase tracking-wide text-base sm:text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed max-w-xl">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
