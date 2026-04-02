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
        <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug">
          Three steps. Five minutes. Done.
        </h2>

        <div className="mt-14 space-y-12">
          {steps.map((s, i) => (
            <div key={s.word} className="reveal flex items-start gap-8" style={{ transitionDelay: `${i * 80}ms` }}>
              <p className="font-serif italic text-primary text-lg pt-0.5 shrink-0 w-12">{s.word}</p>
              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
