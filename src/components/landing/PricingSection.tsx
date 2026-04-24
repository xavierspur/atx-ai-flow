import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Starter",
    tagline: "For solopreneurs and small teams getting started with automation.",
    features: [
      "Up to 5 active automations",
      "AI Chatbot",
      "Email Automation",
      "Review Reply AI",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    tagline: "For growing businesses that want AI across every channel.",
    features: [
      "Up to 15 active automations",
      "Everything in Starter",
      "Social Media AI",
      "Voice Receptionist AI",
      "Advanced reports",
      "Priority support",
      "Custom branding",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For established businesses and agencies that need unlimited scale.",
    features: [
      "Unlimited automations",
      "Everything in Growth",
      "Dedicated account manager",
      "Custom AI agents",
      "API access",
      "White-label options",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="pricing" className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mb-14">
          <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">
            Pricing
          </p>
          <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl text-balance">
            Built around <span className="highlight-accent">your business.</span>
          </h2>
          <p className="reveal font-body font-light text-base sm:text-lg text-muted-foreground leading-relaxed mt-6">
            Every business runs differently. We tailor the right mix of
            automations, integrations, and support to what you actually need —
            then quote a flat monthly rate. No surprise tiers, no per-seat math.
          </p>
        </div>

        <div
          className="grid md:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden"
          style={{ border: "0.5px solid hsl(var(--foreground) / 0.08)" }}
        >
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal p-8 flex flex-col relative ${
                plan.popular ? "bg-card md:scale-[1.015] md:-my-px md:z-10 shadow-[0_8px_30px_-12px_hsl(var(--foreground)/0.12)]" : "bg-card"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.popular && (
                <span className="absolute top-0 left-0 right-0 h-1 bg-primary"></span>
              )}
              <div className="mb-6">
                <p className="font-body text-xs font-medium text-primary uppercase tracking-wider mb-3">
                  {plan.popular ? "Most popular" : "Plan"}
                </p>
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {plan.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-3xl font-medium text-foreground">
                  Custom
                </span>
                <span className="font-body text-sm text-muted-foreground">
                  quote
                </span>
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8">
                {plan.tagline}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 font-body text-sm text-foreground"
                  >
                    <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact">
                <Button
                  className="w-full rounded-pill font-body"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Contact us
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 rounded-2xl border border-foreground/10 bg-card">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground">
              Not sure where to start?
            </h3>
            <p className="font-body font-light text-sm sm:text-base text-muted-foreground mt-2 max-w-xl leading-relaxed">
              Tell us about your business and we'll recommend the right setup —
              and a flat monthly price — within one business day.
            </p>
          </div>
          <Link to="/contact" className="shrink-0">
            <Button size="lg" className="rounded-pill font-body group">
              Talk to us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
