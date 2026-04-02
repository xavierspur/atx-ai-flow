import { ClipboardList, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Tell us about your business",
    description: "Answer a few simple questions about your industry, team size, and what you need help with.",
  },
  {
    icon: Cpu,
    step: "02",
    title: "We match you with automations",
    description: "Our AI engine selects the best workflows for your business type and goals instantly.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Your AI agents start working",
    description: "Automations go live immediately — generating leads, sending emails, managing reviews, and more.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Up and running in 3 simple steps</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-badge text-primary mb-5">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Step {s.step}</p>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
