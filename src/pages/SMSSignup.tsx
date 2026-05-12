import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SMSSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error("Please check the SMS consent box to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        status: "sms_subscribed",
        metadata: {
          consent_given: formData.consent,
          consent_timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          source: "sms_signup_page",
        },
      });

      if (error) throw error;

      setSubmitted(true);
    } catch (error: any) {
      toast.error("Something went wrong: " + error.message);
    }

    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl font-medium text-foreground mb-4">You're subscribed.</h1>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              Thanks for signing up for SMS updates from ATXDOES AI. You'll receive a confirmation text shortly.
            </p>
            <p className="font-body text-sm text-muted-foreground border border-foreground/10 p-4 bg-muted">
              Reply <strong>STOP</strong> at any time to cancel · Reply <strong>HELP</strong> for help.
              Msg &amp; data rates may apply.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back home
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </Link>

          <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Stay Updated
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.05] mb-4">
            Sign up for SMS updates
          </h1>
          <p className="font-body text-base text-muted-foreground mb-12 max-w-xl">
            Get consultation reminders, follow-ups, and service updates from ATXDOES AI delivered by text.
            Consent is not a condition of purchase or use of our services.
          </p>

          <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground font-body text-sm uppercase tracking-wider">
                  Full name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-background border-input focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-body text-sm uppercase tracking-wider">
                  Email address <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-input focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground font-body text-sm uppercase tracking-wider">
                  Mobile phone number <span className="text-primary">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 210-555-0123"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-input focus:ring-primary"
                />
              </div>

              {/* SMS Consent — standalone, unchecked by default */}
              <div className="border border-foreground/10 p-5 bg-muted/30">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, consent: checked === true })
                    }
                    className="mt-1"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm font-normal leading-relaxed text-muted-foreground cursor-pointer"
                  >
                    I agree to receive recurring SMS text messages from ATXDOES AI at the mobile number provided, including consultation scheduling and reminders, follow-ups about services and proposals, onboarding messages, service updates, and customer care. Message frequency varies. Message and data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to cancel at any time. Consent is not a condition of purchase. View our{" "}
                    <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>{" "}and{" "}
                    <Link to="/sms-terms" className="underline hover:text-primary transition-colors">SMS Terms</Link>.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto px-8 h-12 text-base font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up for SMS Updates"}
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMSSignup;
