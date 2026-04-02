import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = ["TechCrunch", "Forbes", "Inc.", "Wired", "Bloomberg", "Fast Company"];

const SocialProofSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-10 bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="reveal flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          <span className="font-body text-xs font-medium text-muted-foreground uppercase tracking-widest mr-4">As seen in</span>
          {logos.map((logo) => (
            <span key={logo} className="font-serif text-base text-muted-foreground/30 italic">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
