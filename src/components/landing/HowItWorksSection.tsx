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
      <div className="container-narrow mx-auto max-w-3xl">
        <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">How it works</p>
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-normal text-foreground leading-[1.1] tracking-tight text-balance">
          Three steps. Five minutes. Done.
        </h2>
        <p className="reveal font-body font-light text-base sm:text-lg text-muted-foreground leading-relaxed mt-6 max-w-2xl">
          No contracts, no consultants, no setup fees. Just a quick conversation and a working set of agents.
        </p>

        <div className="mt-14 space-y-10 sm:space-y-12">
          {steps.map((s, i) => (
            <div key={s.word} className="reveal flex items-start gap-6 sm:gap-8" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-serif italic text-primary text-lg pt-1 shrink-0 w-10 sm:w-12 border-t border-primary/30">
                <span className="block pt-3">{s.word}</span>
              </p>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
