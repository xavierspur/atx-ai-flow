import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-foreground" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl text-center">
        <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-normal text-background leading-[1.1] tracking-tight text-balance">
          Ready to stop working <em className="italic">around</em> your business?
        </h2>
        <p className="reveal mt-4 font-body text-background/70 text-lg">
          Join hundreds of Texas businesses already saving 30+ hours a week.
        </p>
        <div className="reveal mt-8">
          <Link to="/onboarding">
            <Button size="lg" className="text-base px-8 py-6 rounded-pill font-body font-medium">
              Start free — takes 5 minutes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="reveal mt-4 font-body text-background/50 text-sm">No credit card required · Cancel anytime</p>
      </div>
    </section>
  );
};

export default CTASection;
