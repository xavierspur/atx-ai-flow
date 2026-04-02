import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, Clock, Star } from "lucide-react";

const CaseStudySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto max-w-4xl">
        <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">Case study</p>
        <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug mb-12">
          Real results from a real business
        </h2>

        <div className="reveal">
          <blockquote className="font-serif text-xl sm:text-2xl text-foreground leading-relaxed italic mb-8">
            "We were spending $4,000 a month on a marketing agency and still missing follow-ups. After switching to ATXDOES AI, we activated 8 automations in one afternoon. Within 30 days, our lead response time dropped from 6 hours to under 2 minutes."
          </blockquote>

          <div className="thin-rule my-8"></div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-body font-medium text-foreground">James Rodriguez</p>
              <p className="font-body text-sm text-muted-foreground">Owner, Rodriguez HVAC — San Antonio, TX</p>
            </div>

            <div className="flex gap-8">
              <div className="text-center">
                <p className="text-2xl font-serif font-medium text-foreground">340%</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">more leads</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-serif font-medium text-foreground">32 hrs</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">saved / week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-serif font-medium text-foreground">4.8★</p>
                <p className="font-body text-xs text-muted-foreground mt-0.5">Google rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
