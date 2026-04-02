import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TrendingUp, Clock, Star } from "lucide-react";

const CaseStudySection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-section-alt" ref={ref}>
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <p className="reveal text-sm font-semibold text-primary uppercase tracking-wider mb-3">Case study</p>
          <h2 className="reveal text-3xl sm:text-4xl font-medium text-foreground">Real results from a real business</h2>
        </div>

        <div className="reveal max-w-4xl mx-auto glass-card p-8 sm:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                "We were spending $4,000/month on a marketing agency and still missing follow-ups. After switching to ATXDOES AI, we activated 8 automations in one afternoon. Within 30 days, our lead response time dropped from 6 hours to under 2 minutes."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  JR
                </div>
                <div>
                  <p className="font-semibold text-foreground">James Rodriguez</p>
                  <p className="text-sm text-muted-foreground">Owner, Rodriguez HVAC — San Antonio, TX</p>
                </div>
              </div>
            </div>

            <div className="lg:w-64 shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-4">
              <div className="text-center lg:text-left p-3 rounded-xl bg-background">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-success mb-1">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-2xl font-bold">340%</span>
                </div>
                <p className="text-xs text-muted-foreground">More leads captured</p>
              </div>
              <div className="text-center lg:text-left p-3 rounded-xl bg-background">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-primary mb-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-2xl font-bold">32hrs</span>
                </div>
                <p className="text-xs text-muted-foreground">Saved per week</p>
              </div>
              <div className="text-center lg:text-left p-3 rounded-xl bg-background">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-warning mb-1">
                  <Star className="h-4 w-4" />
                  <span className="text-2xl font-bold">4.8★</span>
                </div>
                <p className="text-xs text-muted-foreground">Google rating (was 3.6)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
