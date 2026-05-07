import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SMSSignup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast.error("Please agree to the SMS terms to continue.");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate server-side capture of IP and timestamp
    const dummySubmission = {
      ...formData,
      consent_given: formData.consent,
      consent_timestamp: new Date().toISOString(),
      ip_address: "127.0.0.1", // In reality, captured on server
      user_agent: navigator.userAgent,
    };

    console.log("Simulating server-side submission:", dummySubmission);
    
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // In a real scenario, this would be an API response check
    const isSuccess = true; 

    if (isSuccess) {
      toast.success(
        "Thanks! You're subscribed. You'll receive a confirmation text shortly. Reply STOP at any time to unsubscribe.",
        { duration: 6000 }
      );
      
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        consent: false,
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    
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
            Stay Updated
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.05] mb-12">
            Sign up for SMS updates
          </h1>

          <div className="max-w-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">Full name</Label>
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
                <Label htmlFor="email" className="text-foreground">Email</Label>
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
                <Label htmlFor="phone" className="text-foreground">Mobile phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background border-input focus:ring-primary"
                />
              </div>

              <div className="flex items-start space-x-3 pt-4">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked === true })
                  }
                  required
                  className="mt-1"
                />
                <Label
                  htmlFor="consent"
                  className="text-sm font-normal leading-relaxed text-muted-foreground cursor-pointer"
                >
                  I agree to receive SMS messages from ATXDOES AI about my account, onboarding, and service updates at the number provided. Message frequency varies. Message and data rates may apply. Reply <strong>HELP</strong> for help, <strong>STOP</strong> to unsubscribe. View our{" "}
                  <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/sms-terms" className="underline hover:text-primary transition-colors">
                    SMS Terms
                  </Link>.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto px-8 h-12 text-base font-medium mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "Sign Up for Updates"}
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
