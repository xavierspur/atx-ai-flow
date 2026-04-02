import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Zap, ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import {
  OnboardingData,
  INDUSTRIES,
  NEED_OPTIONS,
  TEAM_SIZES,
  REVENUE_RANGES,
} from "@/lib/onboarding-data";

const TOTAL_STEPS = 4;

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
    // Store onboarding data in localStorage for now (will be Supabase later)
    localStorage.setItem("atxdoes_onboarding", JSON.stringify(data));
    localStorage.setItem("atxdoes_user", JSON.stringify({ name: data.fullName, email: data.email, businessName: data.businessName }));
    await new Promise((r) => setTimeout(r, 2500));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-hero flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-foreground">ATXDOES AI</span>
          </Link>
        </div>
      </div>

      {/* Progress */}
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-xl mx-auto">
          <div className="flex gap-2 mb-2">
            {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i < step ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Step {step} of {TOTAL_STEPS}</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full max-w-xl">
          {loading ? (
            <div className="glass-card rounded-xl p-12 text-center animate-fade-in">
              <Loader2 className="h-10 w-10 text-primary mx-auto animate-spin mb-4" />
              <h2 className="text-xl font-bold text-foreground mb-2">Setting up your AI workspace...</h2>
              <p className="text-muted-foreground">We're matching you with the best automations for your business.</p>
            </div>
          ) : (
            <div className="glass-card rounded-xl p-8 animate-fade-in">
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Tell us about your business</h2>
                    <p className="text-muted-foreground mt-1">We'll use this to personalize your AI automations.</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="businessName">Business Name *</Label>
                      <Input id="businessName" placeholder="Acme Corp" value={data.businessName} onChange={(e) => update({ businessName: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label>Industry *</Label>
                      <Select value={data.industry} onValueChange={(v) => update({ industry: v })}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select your industry" /></SelectTrigger>
                        <SelectContent>{INDUSTRIES.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Austin, TX" value={data.city} onChange={(e) => update({ city: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="website">Website URL (optional)</Label>
                      <Input id="website" placeholder="https://yoursite.com" value={data.websiteUrl} onChange={(e) => update({ websiteUrl: e.target.value })} className="mt-1.5" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">What do you need help with?</h2>
                    <p className="text-muted-foreground mt-1">Select all that apply — we'll match you with the right automations.</p>
                  </div>
                  <div className="grid gap-3">
                    {NEED_OPTIONS.map((need) => (
                      <label
                        key={need}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-colors ${
                          data.needs.includes(need) ? "border-primary bg-badge" : "border-border hover:border-primary/30"
                        }`}
                      >
                        <Checkbox checked={data.needs.includes(need)} onCheckedChange={() => toggleNeed(need)} />
                        <span className="font-medium text-foreground text-sm">{need}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">A bit more about your business</h2>
                    <p className="text-muted-foreground mt-1">This helps us recommend the right plan and automations.</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Team Size *</Label>
                      <Select value={data.teamSize} onValueChange={(v) => update({ teamSize: v })}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select team size" /></SelectTrigger>
                        <SelectContent>{TEAM_SIZES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Monthly Revenue Range *</Label>
                      <Select value={data.revenueRange} onValueChange={(v) => update({ revenueRange: v })}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select revenue range" /></SelectTrigger>
                        <SelectContent>{REVENUE_RANGES.map((r) => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Create your account</h2>
                    <p className="text-muted-foreground mt-1">You're almost there — let's set up your login.</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input id="fullName" placeholder="John Smith" value={data.fullName} onChange={(e) => update({ fullName: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="john@acmecorp.com" value={data.email} onChange={(e) => update({ email: e.target.value })} className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="password">Password * (min 6 characters)</Label>
                      <Input id="password" type="password" placeholder="••••••••" value={data.password} onChange={(e) => update({ password: e.target.value })} className="mt-1.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                {step > 1 ? (
                  <Button variant="ghost" onClick={() => setStep(step - 1)}>
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back
                  </Button>
                ) : (
                  <div />
                )}
                {step < TOTAL_STEPS ? (
                  <Button onClick={() => setStep(step + 1)} disabled={!canNext()}>
                    Next <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!canNext()}>
                    Create My Workspace <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
