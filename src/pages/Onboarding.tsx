import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import {
  OnboardingData,
  INDUSTRIES,
  NEED_OPTIONS,
  TEAM_SIZES,
  REVENUE_RANGES,
} from "@/lib/onboarding-data";

const TOTAL_STEPS = 4;

const STEP_META = [
  { n: "1", label: "Your\nbusiness" },
  { n: "2", label: "Pain\npoints" },
  { n: "3", label: "AI\nmatch" },
  { n: "4", label: "Deploy" },
];

// Editorial label — uppercase yellow caption above each field
const FieldLabel = ({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) => (
  <label
    htmlFor={htmlFor}
    className="block font-body text-xs font-bold uppercase tracking-[0.2em] highlight-accent mb-3"
  >
    {children}
  </label>
);

// Underlined input — no box, ghosted placeholder
const editorialInputClass =
  "border-0 border-b border-foreground/15 rounded-none px-0 h-12 text-lg font-body text-foreground placeholder:text-foreground/25 placeholder:font-light focus-visible:ring-0 focus-visible:border-foreground/60 bg-transparent";

const editorialSelectClass =
  "border-0 border-b border-foreground/15 rounded-none px-0 h-12 text-lg font-body text-foreground placeholder:text-foreground/25 focus:ring-0 bg-transparent [&>span]:text-foreground/25 data-[placeholder]:[&>span]:text-foreground/25";

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    businessName: "",
    industry: "",
    city: "",
    websiteUrl: "",
    needs: [],
    teamSize: "",
    revenueRange: "",
    fullName: "",
    email: "",
    password: "",
  });

  const update = (partial: Partial<OnboardingData>) => setData((d) => ({ ...d, ...partial }));

  const toggleNeed = (need: string) => {
    setData((d) => ({
      ...d,
      needs: d.needs.includes(need) ? d.needs.filter((n) => n !== need) : [...d.needs, need],
    }));
  };

  const canNext = () => {
    switch (step) {
      case 1: return data.businessName && data.industry && data.city;
      case 2: return data.needs.length > 0;
      case 3: return data.teamSize && data.revenueRange;
      case 4: return data.fullName && data.email && data.password.length >= 6;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { data: signUpData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            name: data.fullName,
            full_name: data.fullName,
            business_name: data.businessName,
          },
        },
      });
      if (error) throw error;
      
      // Store in leads table
      await supabase.from("leads").insert({
        email: data.email,
        full_name: data.fullName,
        status: "onboarded",
        metadata: {
          business_name: data.businessName,
          industry: data.industry,
          city: data.city,
          needs: data.needs,
          team_size: data.teamSize,
          revenue_range: data.revenueRange,
          source: "onboarding_flow"
        }
      });

      // Save onboarding answers locally for dashboard recommendations
      localStorage.setItem("atxdoes_onboarding", JSON.stringify(data));

      // Update profile with business details (trigger only sets name/email)
      if (signUpData.user) {
        await supabase.from("profiles").update({
          business_name: data.businessName,
          name: data.fullName,
        }).eq("user_id", signUpData.user.id);
      }

      toast({ title: "Account created", description: "Welcome aboard! Your dashboard is ready." });
      navigate("/dashboard");
    } catch (err: any) {
      toast({ title: "Sign up failed", description: err.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };


  const ctaLabel =
    step === 1 ? "Find my pain points"
    : step === 2 ? "Match my AI stack"
    : step === 3 ? "Almost there"
    : "Find my AI stack";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-foreground/10 bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-base font-bold uppercase tracking-tight text-foreground">
            ATXDOES <span className="highlight-accent">AI</span>
          </Link>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Step {step} / {TOTAL_STEPS}
          </p>
        </div>
      </div>

      {/* Hero / numbered step strip — like the reference */}
      <div className="container-narrow mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <h1 className="display-headline text-3xl sm:text-5xl lg:text-6xl text-center max-w-4xl mx-auto">
          Don't get left behind <span className="highlight-accent">by AI.</span>
          <br />
          <span className="display-ghost">Get powered by it.</span>
        </h1>

        <div className="mt-12 sm:mt-14 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4">
          {STEP_META.map((s, i) => {
            const isActive = i + 1 === step;
            const isDone = i + 1 < step;
            return (
              <div key={s.n} className="flex items-center gap-3">
                <div
                  className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-serif text-base transition-colors ${
                    isDone
                      ? "bg-primary text-foreground border border-primary"
                      : isActive
                      ? "bg-primary text-foreground border border-primary"
                      : "border border-foreground/15 text-foreground/40"
                  }`}
                >
                  {s.n}
                </div>
                <p
                  className={`font-body text-[11px] uppercase tracking-[0.18em] leading-tight whitespace-pre-line transition-colors ${
                    isActive || isDone ? "text-foreground font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8 py-14">
        <div className="w-full max-w-3xl">
          {loading ? (
            <div className="bg-card border border-foreground/10 p-12 text-center animate-fade-in">
              <Loader2 className="h-8 w-8 text-foreground mx-auto animate-spin mb-6" />
              <h2 className="display-headline text-2xl sm:text-3xl mb-3">
                Building your <span className="highlight-accent">AI stack…</span>
              </h2>
              <p className="font-body text-muted-foreground">
                Matching agents and workflows to your business.
              </p>
            </div>
          ) : (
            <div className="bg-card border border-foreground/10 p-8 sm:p-12 animate-fade-in">
              {step === 1 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="display-headline text-2xl sm:text-3xl">Tell us about your business</h2>
                    <p className="font-body text-muted-foreground mt-3">
                      We'll use this to build your custom AI stack.
                    </p>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <FieldLabel htmlFor="businessName">Business name</FieldLabel>
                      <Input
                        id="businessName"
                        placeholder="e.g. Highland Lake Customs"
                        value={data.businessName}
                        onChange={(e) => update({ businessName: e.target.value })}
                        className={editorialInputClass}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div>
                        <FieldLabel>Industry</FieldLabel>
                        <Select value={data.industry} onValueChange={(v) => update({ industry: v })}>
                          <SelectTrigger className={editorialSelectClass}>
                            <SelectValue placeholder="Select your industry" />
                          </SelectTrigger>
                          <SelectContent>
                            {INDUSTRIES.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <FieldLabel htmlFor="city">City</FieldLabel>
                        <Input
                          id="city"
                          placeholder="Austin, TX"
                          value={data.city}
                          onChange={(e) => update({ city: e.target.value })}
                          className={editorialInputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <FieldLabel htmlFor="website">Website (optional)</FieldLabel>
                      <Input
                        id="website"
                        placeholder="https://yoursite.com"
                        value={data.websiteUrl}
                        onChange={(e) => update({ websiteUrl: e.target.value })}
                        className={editorialInputClass}
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="display-headline text-2xl sm:text-3xl">
                      Where does it <span className="highlight-accent">hurt?</span>
                    </h2>
                    <p className="font-body text-muted-foreground mt-3">
                      Pick everything that drains your time. We'll fix it.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {NEED_OPTIONS.map((need) => {
                      const active = data.needs.includes(need);
                      return (
                        <label
                          key={need}
                          className={`flex items-center gap-3 p-4 border cursor-pointer transition-colors ${
                            active
                              ? "border-foreground bg-primary/15"
                              : "border-foreground/15 hover:border-foreground/40"
                          }`}
                        >
                          <Checkbox checked={active} onCheckedChange={() => toggleNeed(need)} />
                          <span className="font-body text-sm text-foreground uppercase tracking-wide font-medium">
                            {need}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="display-headline text-2xl sm:text-3xl">A bit more context</h2>
                    <p className="font-body text-muted-foreground mt-3">
                      So we recommend the right plan and automations.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <FieldLabel>Team size</FieldLabel>
                      <Select value={data.teamSize} onValueChange={(v) => update({ teamSize: v })}>
                        <SelectTrigger className={editorialSelectClass}>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          {TEAM_SIZES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <FieldLabel>Monthly revenue goal</FieldLabel>
                      <Select value={data.revenueRange} onValueChange={(v) => update({ revenueRange: v })}>
                        <SelectTrigger className={editorialSelectClass}>
                          <SelectValue placeholder="Where do you want to be?" />
                        </SelectTrigger>
                        <SelectContent>
                          {REVENUE_RANGES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-10">
                  <div>
                    <h2 className="display-headline text-2xl sm:text-3xl">
                      Create your <span className="highlight-accent">account</span>
                    </h2>
                    <p className="font-body text-muted-foreground mt-3">Almost there — let's set up your login.</p>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <FieldLabel htmlFor="fullName">Full name</FieldLabel>
                      <Input id="fullName" placeholder="John Smith" value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} className={editorialInputClass} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input id="email" type="email" placeholder="john@acmecorp.com" value={data.email} onChange={(e) => update({ email: e.target.value })} className={editorialInputClass} />
                    </div>
                    <div>
                      <FieldLabel htmlFor="password">Password (min 6 characters)</FieldLabel>
                      <Input id="password" type="password" placeholder="••••••••" value={data.password} onChange={(e) => update({ password: e.target.value })} className={editorialInputClass} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Editorial CTA row — text-link styled like reference */}
          {!loading && (
            <div className="mt-10 flex items-center justify-between">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground hover:bg-transparent px-0"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back
                </Button>
              ) : (
                <span />
              )}
              <button
                type="button"
                onClick={() => (step < TOTAL_STEPS ? setStep(step + 1) : handleSubmit())}
                disabled={!canNext()}
                className="group flex items-center gap-3 font-body text-xs font-bold uppercase tracking-[0.22em] text-foreground disabled:text-foreground/30 disabled:cursor-not-allowed"
              >
                <span className="text-muted-foreground group-disabled:text-foreground/30">
                  Continue
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-disabled:translate-x-0" />
                <span className="highlight-accent group-disabled:!text-foreground/30">
                  {ctaLabel}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
