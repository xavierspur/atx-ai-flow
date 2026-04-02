import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-foreground" ref={ref}>
      <div className="container-narrow mx-auto text-center">
        <h2 className="reveal text-3xl sm:text-4xl font-medium text-background text-balance">
          Ready to put your business on autopilot?
        </h2>
        <p className="reveal mt-4 text-background/60 text-lg max-w-xl mx-auto">
          Join hundreds of Texas businesses already saving 30+ hours a week with AI automation.
        </p>
        <div className="reveal mt-8">
          <Link to="/onboarding">
            <Button size="lg" className="text-base px-8 py-6 rounded-pill font-medium">
              Get instant access — free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <p className="reveal mt-4 text-background/40 text-sm">No credit card required · Setup in under 5 minutes</p>
      </div>
    </section>
  );
};

export default CTASection;
