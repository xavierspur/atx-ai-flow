import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Starter",
    price: "$297",
    description: "Perfect for solopreneurs and small businesses just getting started with AI automation.",
    features: [
      "Up to 5 active automations",
      "AI Chatbot",
      "Email Automation",
      "Review Reply AI",
      "Basic analytics dashboard",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$597",
    description: "For growing businesses that want the full power of AI across every channel.",
    features: [
      "Up to 15 active automations",
      "Everything in Starter",
      "Social Media AI",
      "Voice Receptionist AI",
      "Advanced analytics & reports",
      "Priority support",
      "Custom branding",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$1,497",
    description: "For established businesses and agencies that need unlimited scale and white-glove service.",
    features: [
      "Unlimited automations",
      "Everything in Growth",
      "Dedicated account manager",
      "Custom AI agent development",
      "API access",
      "White-label options",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Pricing</p>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-foreground">Simple, transparent pricing</h2>
          <p className="reveal mt-4 text-muted-foreground">No hidden fees. No long-term contracts. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? "bg-foreground text-background ring-2 ring-primary shadow-xl scale-[1.02]"
                  : "glass-card"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {plan.popular && (
                <span className="inline-flex self-start text-xs font-medium bg-primary text-primary-foreground px-3 py-1 rounded-pill mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-semibold ${plan.popular ? "" : "text-foreground"}`}>{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${plan.popular ? "" : "text-foreground"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-background/60" : "text-muted-foreground"}`}>/mo</span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.popular ? "text-accent" : "text-success"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/onboarding" className="mt-8">
                <Button
                  className={`w-full rounded-pill ${plan.popular ? "" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
