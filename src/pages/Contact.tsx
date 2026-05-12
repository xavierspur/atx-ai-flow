import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const CONTACT_EMAIL = "xaviercamacho@atxdoesai.com";
const CONTACT_PHONE_DISPLAY = "+1 (210) 975-8369";
const CONTACT_PHONE_HREF = "+12109758369";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    smsConsent: false,
    termsConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.termsConsent) {
      toast.error("Please agree to the Terms & Conditions and Privacy Policy to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("leads").insert({
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        status: formData.smsConsent ? "sms_subscribed" : "contact_form",
        metadata: {
          message: formData.message,
          sms_consent: formData.smsConsent,
          terms_consent: formData.termsConsent,
          consent_timestamp: new Date().toISOString(),
          user_agent: navigator.userAgent,
          source: "contact_page",
        },
      });

      if (error) throw error;

      setSubmitted(true);
    } catch (error: any) {
      toast.error("Something went wrong. Please try again or email us directly.");
      console.error(error);
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
            <h1 className="font-serif text-4xl font-medium text-foreground mb-4">Message received.</h1>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-4">
              We'll be in touch within one business day.
            </p>
            {formData.smsConsent && (
              <p className="font-body text-sm text-muted-foreground border border-foreground/10 rounded-none p-4 bg-muted">
                You've opted in to SMS updates. You'll receive a confirmation text shortly.
                Reply <strong>STOP</strong> at any time to cancel, or <strong>HELP</strong> for help.
              </p>
            )}
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
            Contact
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.05]">
            Let's talk about
            <br />
            what to automate first.
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 mt-16">
            {/* Form Side */}
            <div className="space-y-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-body text-sm uppercase tracking-wider">
                    Full name <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    required
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-background border-foreground/10 focus:ring-primary"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-body text-sm uppercase tracking-wider">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-foreground/10 focus:ring-primary"
                    />
                  </div>
                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-body text-sm uppercase tracking-wider">
                      Mobile phone <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      placeholder="+1 210-555-0123"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-foreground/10 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-body text-sm uppercase tracking-wider">
                    How can we help?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your business and what you'd like to automate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[120px] bg-background border-foreground/10 focus:ring-primary"
                  />
                </div>

                {/* SMS Consent — standalone, unchecked by default */}
                <div className="border border-foreground/10 p-5 space-y-4 bg-muted/30">
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    SMS Opt-In (optional)
                  </p>
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="smsConsent"
                      checked={formData.smsConsent}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, smsConsent: checked === true })
                      }
                      className="mt-1"
                    />
                    <Label
                      htmlFor="smsConsent"
                      className="text-sm font-normal leading-relaxed text-muted-foreground cursor-pointer"
                    >
                      I agree to receive recurring SMS text messages from ATXDOES AI at the mobile number provided, including consultation scheduling and reminders, follow-ups about services and proposals, onboarding messages, service updates, and customer care. Message frequency varies. Message and data rates may apply. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to cancel at any time. Consent is not a condition of purchase. View our{" "}
                      <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>{" "}and{" "}
                      <Link to="/sms-terms" className="underline hover:text-primary transition-colors">SMS Terms</Link>.
                    </Label>
                  </div>
                </div>

                {/* Terms & Conditions consent — separate checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="termsConsent"
                    checked={formData.termsConsent}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, termsConsent: checked === true })
                    }
                    className="mt-1"
                    required
                  />
                  <Label
                    htmlFor="termsConsent"
                    className="text-sm font-normal leading-relaxed text-muted-foreground cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link to="/terms-and-conditions" className="underline hover:text-primary transition-colors">Terms &amp; Conditions</Link>{" "}and{" "}
                    <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>. <span className="text-primary">*</span>
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-10 h-14 text-base font-body font-bold uppercase tracking-widest rounded-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get in touch"}
                </Button>
              </form>
            </div>

            {/* Contact Info Side */}
            <div className="space-y-12">
              <div className="thin-rule lg:hidden my-12"></div>

              <div className="space-y-8">
                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Direct Contact
                  </p>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="flex items-center gap-4 font-serif text-xl text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      {CONTACT_EMAIL}
                    </a>
                    <a
                      href={`tel:${CONTACT_PHONE_HREF}`}
                      className="flex items-center gap-4 font-serif text-xl text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Office
                  </p>
                  <p className="font-serif text-2xl text-foreground">Austin, Texas 78701</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">Xavier Camacho, Founder</p>
                </div>

                <div className="p-6 bg-muted border border-foreground/5 space-y-3 text-sm font-body text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wider">SMS Program Notice</p>
                  <p>
                    No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
                    Information sharing to subcontractors in support of our services is permitted.
                    All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
                  </p>
                  <p>
                    Reply <strong>STOP</strong> to opt out · Reply <strong>HELP</strong> for help
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
