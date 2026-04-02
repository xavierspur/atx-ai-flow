import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder login — will be replaced with Supabase auth
    const stored = localStorage.getItem("atxdoes_user");
    if (stored) {
      navigate("/dashboard");
    } else {
      navigate("/onboarding");
    }
  };

  return (
    <div className="min-h-screen bg-hero flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">ATXDOES AI</span>
        </Link>

        <div className="glass-card rounded-xl p-8">
          <h2 className="text-xl font-bold text-foreground text-center mb-6">Welcome back</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5" required />
            </div>
            <Button type="submit" className="w-full">Log In</Button>
          </form>
          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{" "}
            <Link to="/onboarding" className="text-primary font-medium hover:underline">Sign up free</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
