import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can I get started?",
    a: "Most businesses are fully set up in under 5 minutes. Answer a few questions, pick your automations, and your AI agents start working immediately — no technical setup required.",
  },
  {
    q: "Do I need any technical skills?",
    a: "Not at all. ATXDOES AI is built for business owners, not developers. Everything is point-and-click. If you can fill out a form, you can run AI automations.",
  },
  {
    q: "What kind of businesses does this work for?",
    a: "We serve service-based businesses across Texas — HVAC, dental, real estate, law firms, med spas, restaurants, and more. If you have customers to serve and leads to follow up on, this works for you.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no long-term contracts. You can cancel, upgrade, or downgrade your plan at any time from your dashboard.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "Agencies cost $3,000–$10,000/month, take weeks to onboard, and stop working when the contract ends. ATXDOES AI costs a fraction of that, starts instantly, and runs 24/7.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We use enterprise-grade encryption and never share your data with third parties. Your business information stays yours.",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow mx-auto max-w-3xl">
        <p className="reveal font-body text-sm font-medium text-primary tracking-wide mb-6">FAQ</p>
        <h2 className="reveal text-3xl sm:text-4xl font-normal text-foreground leading-snug mb-12">
          Questions we hear often
        </h2>

        <div className="reveal">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-none">
                <div className="thin-rule"></div>
                <AccordionTrigger className="text-left font-serif font-normal text-foreground hover:no-underline py-5 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="thin-rule"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
