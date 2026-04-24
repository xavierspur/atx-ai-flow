import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { n: "1", label: "Your\nbusiness" },
  { n: "2", label: "Pain\npoints" },
  { n: "3", label: "AI\nmatch" },
  { n: "4", label: "Deploy" },
];

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-background pt-16 sm:pt-20 lg:pt-28 pb-20 sm:pb-24" ref={ref}>
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        {/* Display headline — two-line, yellow highlight + ghosted second line */}
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="reveal display-headline text-5xl sm:text-7xl lg:text-[6.5rem]">
            Don't get left
            <br />
            behind <span className="highlight-accent">by AI.</span>
          </h1>
          <h2 className="reveal display-headline display-ghost text-5xl sm:text-7xl lg:text-[6.5rem] mt-2">
            Get powered by it.
          </h2>

          <p className="reveal mt-10 font-body text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Answer 3 questions about your business. Our AI matches you with the
            exact agents and workflows your business needs — deployed in days,
            not months.
          </p>

          <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding">
              <Button size="lg" className="text-base px-8 py-6 rounded-pill font-body font-semibold uppercase tracking-wide">
                Start free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#how-it-works">
              <Button variant="ghost" size="lg" className="text-base px-6 py-6 font-body font-medium text-muted-foreground hover:text-foreground uppercase tracking-wide">
                How it works
              </Button>
            </a>
          </div>
        </div>

        {/* Numbered steps bar */}
        <div className="reveal mt-20 sm:mt-24 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6">
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full border border-foreground/15 flex items-center justify-center font-serif text-foreground/60 text-lg">
                  {s.n}
                </div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-muted-foreground leading-tight whitespace-pre-line">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
