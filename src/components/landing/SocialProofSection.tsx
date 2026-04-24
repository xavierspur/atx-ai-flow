import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * Wordmark-style logos rendered as SVG text so they stay crisp,
 * monochrome, and on-brand with the editorial aesthetic.
 */
const Wordmark = ({
  children,
  font,
  weight = 700,
  letterSpacing = "0",
  italic = false,
  width = 160,
}: {
  children: string;
  font: string;
  weight?: number;
  letterSpacing?: string | number;
  italic?: boolean;
  width?: number;
}) => (
  <svg
    viewBox={`0 0 ${width} 32`}
    width={width}
    height={28}
    role="img"
    aria-label={children}
    className="text-muted-foreground/70 transition-colors hover:text-foreground"
  >
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="currentColor"
      fontFamily={font}
      fontWeight={weight}
      fontStyle={italic ? "italic" : "normal"}
      fontSize="22"
      letterSpacing={letterSpacing as string}
    >
      {children}
    </text>
  </svg>
);

const logos = [
  // TechCrunch — bold sans, tight tracking
  <Wordmark key="tc" font="'DM Sans', sans-serif" weight={700} letterSpacing="-0.5" width={150}>
    TechCrunch
  </Wordmark>,
  // Forbes — serif, heavy
  <Wordmark key="forbes" font="'Lora', Georgia, serif" weight={700} letterSpacing="0.5" width={110}>
    Forbes
  </Wordmark>,
  // Inc. — bold serif italic
  <Wordmark key="inc" font="'Lora', Georgia, serif" weight={700} italic letterSpacing="-0.5" width={70}>
    Inc.
  </Wordmark>,
  // Wired — condensed bold sans, all caps
  <Wordmark key="wired" font="'DM Sans', sans-serif" weight={700} letterSpacing="2" width={110}>
    WIRED
  </Wordmark>,
  // Bloomberg — bold serif
  <Wordmark key="bloomberg" font="'Lora', Georgia, serif" weight={700} letterSpacing="-0.3" width={150}>
    Bloomberg
  </Wordmark>,
  // Fast Company — bold sans
  <Wordmark key="fc" font="'DM Sans', sans-serif" weight={600} letterSpacing="-0.2" width={170}>
    Fast Company
  </Wordmark>,
];

const SocialProofSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="py-12 bg-background border-y border-foreground/5" ref={ref}>
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
        <p className="reveal font-body text-xs font-semibold text-muted-foreground uppercase tracking-[0.2em] text-center mb-8">
          As seen in
        </p>
        <div className="reveal flex flex-wrap items-center justify-center gap-x-10 gap-y-6 lg:gap-x-14">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
