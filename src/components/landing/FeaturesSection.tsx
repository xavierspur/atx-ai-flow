import { MessageSquare, Mail, Share2, Phone, Star, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "24/7 intelligent chatbot that answers customer questions, books appointments, and captures leads on your website.",
  },
  {
    icon: Mail,
    title: "Email Automation",
    description: "Personalized email sequences that nurture leads, follow up on inquiries, and re-engage past customers automatically.",
  },
  {
    icon: Share2,
    title: "Social Media AI",
    description: "AI-generated posts, scheduling, and engagement across all your social platforms — on autopilot.",
  },
  {
    icon: Phone,
    title: "Voice Receptionist AI",
    description: "An AI phone agent that answers calls, takes messages, routes inquiries, and never puts a customer on hold.",
  },
  {
    icon: Star,
    title: "Review Reply AI",
    description: "Automatically responds to Google, Yelp, and Facebook reviews with on-brand, thoughtful replies.",
  },
  {
    icon: BarChart3,
    title: "Business Reports AI",
    description: "Weekly and monthly AI-generated reports on your marketing, sales, and operations — no spreadsheets needed.",
  },
];

const FeaturesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="features" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="text-center mb-16">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Platform features</p>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-foreground">Everything your business needs to scale</h2>
          <p className="reveal mt-4 text-muted-foreground max-w-2xl mx-auto">One platform. Dozens of AI agents. All working for your business around the clock.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={f.title} className="reveal glass-card p-6 group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-badge text-primary mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
