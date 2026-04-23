import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-lg font-medium text-foreground tracking-tight">
          ATXDOES AI
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="rounded-pill font-body font-normal">Log in</Button>
          </Link>
          <Link to="/onboarding">
            <Button size="sm" className="rounded-pill font-body font-medium">Get started</Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className="thin-rule"></div>

      {mobileOpen && (
        <div className="md:hidden bg-background px-4 py-4 space-y-1 animate-fade-in">
          <a href="#features" className="block font-body text-sm text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#how-it-works" className="block font-body text-sm text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#pricing" className="block font-body text-sm text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>Pricing</a>
          <div className="pt-4 space-y-2">
            <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="outline" className="w-full rounded-pill font-body" size="sm">Log in</Button></Link>
            <Link to="/onboarding" onClick={() => setMobileOpen(false)}><Button className="w-full rounded-pill font-body" size="sm">Get started</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
