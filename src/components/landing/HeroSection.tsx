import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-hero section-padding">
      <div className="container-narrow mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-badge px-4 py-1.5 text-sm font-medium text-badge-foreground mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          10,000+ Automations Available
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight max-w-4xl mx-auto text-balance">
          Your Entire Business.{" "}
          <span className="text-primary">Automated.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Tell us about your business — and our AI agents start running your marketing, sales, support, and operations automatically. No technical skills needed.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/onboarding">
            <Button size="lg" className="text-base px-8 py-6 rounded-lg font-semibold">
              Get Instant Access — Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> No credit card required</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> Setup in under 5 minutes</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-success" /> Cancel anytime</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
