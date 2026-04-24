import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-foreground" ref={ref}>
      <div className="container-narrow mx-auto max-w-4xl text-center">
        <h2 className="reveal display-headline text-4xl sm:text-5xl lg:text-6xl text-background text-balance">
          Stop working <span className="highlight-accent">around</span>
          <br />
          your business.
        </h2>
        <p className="reveal mt-6 font-body text-background/70 text-base sm:text-lg max-w-xl mx-auto">
          Join hundreds of Texas businesses already saving 30+ hours a week.
        </p>
        <div className="reveal mt-10">
          <Link to="/onboarding">
            <Button size="lg" className="text-base px-8 py-6 rounded-pill font-body font-semibold uppercase tracking-wide">
              Start free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="reveal mt-4 font-body text-background/50 text-xs uppercase tracking-wider">No credit card · Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTASection;
