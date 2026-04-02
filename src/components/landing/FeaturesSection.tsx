import { MessageSquare, Mail, Share2, Phone, Star, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: MessageSquare,
    title: "Conversations handled",
    description: "A chatbot that answers customer questions, books appointments, and captures leads — 24/7, in your brand voice.",
  },
  {
    icon: Mail,
    title: "Follow-ups that never stop",
    description: "Personalized email sequences that nurture leads and re-engage past customers. No one falls through the cracks.",
  },
  {
    icon: Share2,
    title: "Social on autopilot",
    description: "AI-written posts, scheduled and published across your platforms. Stay visible without lifting a finger.",
  },
  {
    icon: Phone,
    title: "Every call answered",
    description: "An AI phone agent that picks up, takes messages, routes inquiries, and never puts anyone on hold.",
  },
  {
    icon: Star,
    title: "Reviews replied to",
    description: "Thoughtful, on-brand responses to Google and Yelp reviews — automatically, within hours.",
  },
  {
    icon: BarChart3,
    title: "Clarity, not spreadsheets",
    description: "Weekly AI reports on what's working, what's not, and where your next dollar should go.",
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">What gets automated</p>
          <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug">
            Six things you'll never have to do again
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden" style={{ border: '0.5px solid hsl(var(--foreground) / 0.08)' }}>
          {features.map((f, i) => (
            <div key={f.title} className="reveal bg-card p-8 group" style={{ transitionDelay: `${i * 60}ms` }}>
              <f.icon className="h-5 w-5 text-primary mb-5" />
              <h3 className="text-lg font-medium text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
