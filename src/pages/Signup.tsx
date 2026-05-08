import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Zap, Loader2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const [formData, setFormData] = useState({
    fullName: searchParams.get("full_name") || "",
    email: searchParams.get("email") || "",
    password: searchParams.get("password") || "",
  });
  
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Store in leads table
      const { error: leadError } = await supabase.from("leads").insert({
        email: formData.email,
        full_name: formData.fullName,
        status: "signed_up",
        metadata: { source: "signup_page" }
      });

      if (leadError) console.error("Lead storage error:", leadError);

      // 2. Auth signup
      const { data, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            name: formData.fullName,
          },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (authError) throw authError;

      toast({
        title: "Account created!",
        description: "Welcome aboard! You can now access your dashboard.",
      });

      // Redirect to dashboard ONLY if we have a session
      if (data.session) {
          navigate("/dashboard");
      } else {
          toast({
            title: "Check your email",
            description: "We've sent a verification link. Please confirm your email to log in.",
          });
          navigate("/login");
      }

    } catch (error: any) {
      toast({
        title: "Signup failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-hero flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8 group">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <span className="text-2xl font-bold text-foreground tracking-tight">ATXDOES <span className="text-primary">AI</span></span>
        </Link>

        <div className="glass-card rounded-2xl p-8 border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-muted-foreground">Join the future of business automation</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium text-white/70">Full Name</Label>
              <Input
                id="fullName"
                placeholder="Carl Johnson"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-primary focus:border-primary transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-white/70">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="carl@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-primary focus:border-primary transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" title="Password must be at least 6 characters" className="text-sm font-medium text-white/70">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="bg-white/5 border-white/10 text-white h-12 focus:ring-primary focus:border-primary transition-all"
                required
                minLength={6}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                <>
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/5 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline decoration-2 underline-offset-4">
                Log in
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground/50 mt-8 px-4">
          By signing up, you agree to our{" "}
          <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link> and{" "}
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
