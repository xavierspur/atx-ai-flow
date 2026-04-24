import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const problems = [
  "Spending hours on repetitive tasks that should run themselves",
  "Losing leads because no one follows up fast enough",
  "Paying agencies thousands for work AI can handle in minutes",
  "Marketing that stops the moment you get busy with clients",
];

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl">
        <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] mb-8">The problem</p>
        <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl text-balance">
          You didn't start a business
          <br className="hidden sm:block" />
          {" "}to do <span className="highlight-accent">busywork.</span>
        </h2>
        <p className="reveal mt-8 font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Most Texas business owners are stuck doing the work around their business instead of the work in it. You know you need to automate — you just haven't found something that actually fits.
        </p>

        <ul className="mt-12 space-y-5">
          {problems.map((p, i) => (
            <li key={i} className="reveal flex items-start gap-4 pb-5 border-b border-foreground/8" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="shrink-0 font-serif text-sm text-muted-foreground/60 mt-1 w-6">0{i + 1}</span>
              <p className="font-body text-foreground leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSection;
