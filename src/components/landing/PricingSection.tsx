import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Starter",
    price: "$297",
    description: "For solopreneurs and small teams getting started with automation.",
    features: [
      "Up to 5 active automations",
      "AI Chatbot",
      "Email Automation",
      "Review Reply AI",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$597",
    description: "For growing businesses that want AI across every channel.",
    features: [
      "Up to 15 active automations",
      "Everything in Starter",
      "Social Media AI",
      "Voice Receptionist AI",
      "Advanced reports",
      "Priority support",
      "Custom branding",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$1,497",
    description: "For established businesses and agencies that need unlimited scale.",
    features: [
      "Unlimited automations",
      "Everything in Growth",
      "Dedicated account manager",
      "Custom AI agents",
      "API access",
      "White-label options",
      "SLA guarantee",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">Pricing</p>
          <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug">
            Simple, transparent, cancel anytime
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden" style={{ border: '0.5px solid hsl(var(--foreground) / 0.08)' }}>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal bg-card p-8 flex flex-col ${plan.popular ? "ring-1 ring-primary relative" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.popular && (
                <span className="absolute -top-px left-0 right-0 h-0.5 bg-primary rounded-t-lg"></span>
              )}
              <div className="mb-6">
                <p className="font-body text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  {plan.popular ? "Most popular" : plan.name}
                </p>
                {!plan.popular && <p className="font-body text-sm text-muted-foreground sr-only">{plan.name}</p>}
                <h3 className="text-lg font-medium text-foreground">{plan.name}</h3>
              </div>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-serif font-medium text-foreground">{plan.price}</span>
                <span className="font-body text-sm text-muted-foreground">/mo</span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">{plan.description}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 font-body text-sm text-foreground">
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/onboarding">
                <Button
                  className={`w-full rounded-pill font-body ${plan.popular ? "" : ""}`}
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
