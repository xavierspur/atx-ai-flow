import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-hero section-padding" ref={ref}>
      <div className="container-narrow mx-auto text-center">
        <div className="reveal inline-flex items-center gap-2 rounded-pill bg-badge px-4 py-1.5 text-sm font-medium text-badge-foreground mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          10,000+ automations available
        </div>

        <h1 className="reveal text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground leading-[1.1] max-w-4xl mx-auto text-balance">
          AI automation for Texas businesses.{" "}
          <span className="gradient-text font-semibold">Set up once, runs forever.</span>
        </h1>

        <p className="reveal mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
          ATXDOES AI gives your business an always-on team of AI agents that handle marketing, sales, support, and operations — so you can focus on what you do best.
        </p>

        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/onboarding">
            <Button size="lg" className="text-base px-8 py-6 rounded-pill font-medium bg-primary hover:bg-primary/90">
              Get instant access — free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <a href="#how-it-works">
            <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-pill font-medium">
              <Play className="mr-2 h-4 w-4" />
              See how it works
            </Button>
          </a>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> No credit card required</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> Setup in under 5 minutes</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
