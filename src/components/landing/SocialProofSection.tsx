const testimonials = [
  {
    quote: "ATXDOES AI transformed how we handle leads. Our response time went from hours to seconds.",
    name: "Sarah Mitchell",
    title: "Owner, Mitchell Dental Group",
  },
  {
    quote: "We activated 12 automations in one afternoon. Our team saves 30+ hours every single week.",
    name: "James Park",
    title: "CEO, Park & Associates Realty",
  },
  {
    quote: "The review reply AI alone paid for itself in the first month. Our Google rating went from 3.8 to 4.7.",
    name: "Maria Gonzalez",
    title: "Founder, Casa Bella Spa",
  },
];

const logos = ["TechCrunch", "Forbes", "Inc.", "Wired", "Bloomberg", "Fast Company"];

const SocialProofSection = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-narrow mx-auto">
        {/* Logos */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-6">Trusted by businesses featured in</p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {logos.map((logo) => (
              <span key={logo} className="text-lg font-bold text-muted-foreground/40">{logo}</span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-warning" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
