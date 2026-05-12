import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "200+", label: "Hours saved per client / year" },
  { value: "< 2 min", label: "Avg. lead response time" },
  { value: "5★", label: "Client satisfaction" },
  { value: "10×", label: "Faster follow-up cadence" },
];

const SocialProofSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-14 bg-background border-y border-foreground/5" ref={ref}>
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] text-center mb-10">
          What our clients experience
        </p>
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl font-medium text-foreground">{stat.value}</p>
              <p className="font-body text-xs text-muted-foreground mt-2 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
