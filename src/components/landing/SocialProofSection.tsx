import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const logos = ["TechCrunch", "Forbes", "Inc.", "Wired", "Bloomberg", "Fast Company"];

const SocialProofSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 bg-background border-y border-foreground/5" ref={ref}>
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <p className="reveal font-body text-xs font-medium text-muted-foreground/70 uppercase tracking-[0.18em] text-center mb-6">
          As seen in
        </p>
        <div className="reveal flex flex-wrap items-center justify-center gap-x-10 gap-y-4 lg:gap-x-14">
          {logos.map((logo) => (
            <span
              key={logo}
              className="font-serif text-base sm:text-lg text-muted-foreground/55 italic transition-colors hover:text-foreground/70"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
