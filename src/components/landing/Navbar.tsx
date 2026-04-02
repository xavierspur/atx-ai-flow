import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80" style={{ borderColor: 'hsl(var(--foreground) / 0.06)' }}>
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Zap className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold tracking-tight text-foreground">ATXDOES AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="rounded-pill">Log in</Button>
          </Link>
          <Link to="/onboarding">
            <Button size="sm" className="rounded-pill">Get instant access</Button>
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 py-4 space-y-3" style={{ borderColor: 'hsl(var(--foreground) / 0.06)' }}>
          <a href="#features" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#how-it-works" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#pricing" className="block text-sm text-muted-foreground" onClick={() => setMobileOpen(false)}>Pricing</a>
          <div className="pt-3 space-y-2">
            <Link to="/login"><Button variant="outline" className="w-full rounded-pill" size="sm">Log in</Button></Link>
            <Link to="/onboarding"><Button className="w-full rounded-pill" size="sm">Get instant access</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
