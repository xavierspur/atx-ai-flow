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
        <div className="max-w-3xl mb-16">
          <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">What gets automated</p>
          <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl text-balance">
            Six things you'll <span className="highlight-accent">never</span> do again.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border" style={{ border: '1px solid hsl(var(--foreground) / 0.1)' }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal bg-card p-8 group transition-colors hover:bg-section-alt"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-6 transition-transform group-hover:-translate-y-0.5">
                <f.icon className="h-4 w-4 text-foreground" />
              </div>
              <h3 className="font-body uppercase tracking-wide text-sm font-semibold text-foreground mb-3">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
