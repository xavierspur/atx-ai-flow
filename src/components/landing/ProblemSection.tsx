import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingDown, Clock, UserX, DollarSign } from "lucide-react";

const problems = [
  { icon: Clock, text: "Spending hours on repetitive tasks that should be automated" },
  { icon: UserX, text: "Losing leads because no one follows up fast enough" },
  { icon: TrendingDown, text: "Inconsistent marketing that stops when you get busy" },
  { icon: DollarSign, text: "Paying agencies thousands for work AI can do in minutes" },
];

const ProblemSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Sound familiar?</p>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-foreground text-balance">
            You didn't start a business to spend all day on busywork
          </h2>
          <p className="reveal mt-4 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Most Texas business owners are stuck doing the work <em>around</em> their business instead of the work <em>in</em> it. You know you need to automate — you just haven't found a way that actually fits.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="reveal flex items-start gap-4 glass-card p-5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="shrink-0 w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <p.icon className="h-5 w-5 text-destructive" />
              </div>
              <p className="text-foreground text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
