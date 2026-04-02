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
        <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">The problem</p>
        <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug text-balance">
          You didn't start a business to spend all day on <em className="italic">busywork</em>
        </h2>
        <p className="reveal mt-6 text-lg text-muted-foreground leading-relaxed">
          Most Texas business owners are stuck doing the work around their business instead of the work in it. You know you need to automate — you just haven't found something that actually fits.
        </p>

        <ul className="mt-10 space-y-4">
          {problems.map((p, i) => (
            <li key={i} className="reveal flex items-start gap-4" style={{ transitionDelay: `${i * 60}ms` }}>
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5"></span>
              <p className="text-foreground leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProblemSection;
