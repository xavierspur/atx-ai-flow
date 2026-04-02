import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-hero" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Main copy — 3 cols */}
          <div className="lg:col-span-3">
            <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">
              AI automation for Texas businesses
            </p>

            <h1 className="reveal text-4xl sm:text-5xl lg:text-[3.5rem] font-normal text-foreground leading-[1.15] text-balance">
              Your business, running{" "}
              <em className="italic">while you sleep</em>
            </h1>

            <p className="reveal mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We set up AI agents that handle your marketing, follow-ups, reviews, and operations — so you can stop doing the work around your business and start doing the work in it.
            </p>

            <div className="reveal mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link to="/onboarding">
                <Button size="lg" className="text-base px-8 py-6 rounded-pill font-body font-medium">
                  Start free — takes 5 minutes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="ghost" size="lg" className="text-base px-6 py-6 font-body font-normal text-muted-foreground hover:text-foreground">
                  See how it works ↓
                </Button>
              </a>
            </div>
          </div>

          {/* Aside — quote + metric — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="reveal glass-card p-6">
              <p className="font-serif italic text-foreground leading-relaxed text-lg mb-4">
                "We activated 8 automations in one afternoon. Within 30 days our lead response time dropped from 6 hours to under 2 minutes."
              </p>
              <div className="thin-rule my-4"></div>
              <p className="font-body text-sm font-medium text-foreground">James Rodriguez</p>
              <p className="font-body text-xs text-muted-foreground">Owner, Rodriguez HVAC — San Antonio</p>
            </div>

            <div className="reveal glass-card p-6 text-center" style={{ transitionDelay: '100ms' }}>
              <p className="text-4xl font-serif font-medium text-foreground">200+</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Texas businesses automated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
