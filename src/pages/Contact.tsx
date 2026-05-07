import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    console.log("Submitting contact form:", formData);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      smsConsent: false,
    });
    setIsSubmitting(false);
  };

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
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-body text-sm uppercase tracking-wider">Full name</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-body text-sm uppercase tracking-wider">Email</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-body text-sm uppercase tracking-wider">Phone number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background border-foreground/10 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-body text-sm uppercase tracking-wider">How can we help?</Label>
                  <Textarea
                    id="message"
                    required
                    placeholder="Tell us about your business and what you'd like to automate..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-[150px] bg-background border-foreground/10 focus:ring-primary"
                  />
                </div>

                {/* SMS Consent Checkbox */}
                <div className="flex items-start space-x-3 pt-2">
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
                    I agree to receive SMS text messages from ATXDOES AI regarding my inquiry, consultation scheduling, service updates, and customer care. Message and data rates may apply. Message frequency varies. Reply <strong>HELP</strong> for help or <strong>STOP</strong> to opt out at any time. See our{" "}
                    <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="/sms-terms" className="underline hover:text-primary transition-colors">
                      SMS Terms & Conditions
                    </Link>.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto px-10 h-14 text-base font-body font-bold uppercase tracking-widest rounded-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                      className="flex items-center gap-4 font-serif text-2xl text-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      {CONTACT_EMAIL}
                    </a>
                    <a
                      href={`tel:${CONTACT_PHONE_HREF}`}
                      className="flex items-center gap-4 font-serif text-2xl text-foreground hover:text-primary transition-colors group"
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
                  <p className="font-serif text-2xl text-foreground">
                    Austin, Texas
                  </p>
                </div>

                <div className="p-8 bg-muted border border-foreground/5 space-y-4">
                  <h3 className="font-serif text-xl text-foreground">SMS Communications</h3>
                  <div className="space-y-3 font-body text-sm text-muted-foreground leading-relaxed">
                    <p>
                      By providing your phone number, you agree to receive SMS notifications regarding account activity, consultation reminders, and service updates.
                    </p>
                    <ul className="space-y-1 list-disc pl-4">
                      <li>Message frequency varies.</li>
                      <li>Message and data rates may apply.</li>
                      <li>Reply <strong>STOP</strong> to opt out at any time.</li>
                      <li>Reply <strong>HELP</strong> for assistance.</li>
                    </ul>
                    <p className="text-xs pt-2">
                      No mobile information will be shared with third parties for marketing purposes.
                    </p>
                  </div>
                </div>

                <div className="p-8 bg-primary/5 border border-primary/10 space-y-4">
                  <h3 className="font-serif text-xl text-foreground">Consultation Booking</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Ready to dive deep? Book a 30-minute discovery call to map out your automation roadmap.
                  </p>
                  <Button variant="outline" className="rounded-none border-foreground/20 hover:bg-foreground hover:text-background transition-colors">
                    View Calendar
                  </Button>
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
