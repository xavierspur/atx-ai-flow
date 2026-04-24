import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 border-b border-foreground/10">
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-serif text-base font-bold uppercase tracking-tight text-foreground">
          ATXDOES <span className="highlight-accent">AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#how-it-works" className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">How it works</a>
          <a href="#pricing" className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <Button variant="ghost" size="sm" className="rounded-pill font-body text-xs uppercase tracking-wide font-semibold">Log in</Button>
          </Link>
          <Link to="/onboarding">
            <Button size="sm" className="rounded-pill font-body text-xs uppercase tracking-wide font-semibold bg-foreground text-background hover:bg-foreground/85">Get started</Button>
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

      {mobileOpen && (
        <div className="md:hidden bg-background px-4 py-4 space-y-1 animate-fade-in border-t border-foreground/10">
          <a href="#features" className="block font-body text-xs uppercase tracking-wide font-semibold text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>Features</a>
          <a href="#how-it-works" className="block font-body text-xs uppercase tracking-wide font-semibold text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>How it works</a>
          <a href="#pricing" className="block font-body text-xs uppercase tracking-wide font-semibold text-foreground py-3 border-b border-foreground/5" onClick={() => setMobileOpen(false)}>Pricing</a>
          <div className="pt-4 space-y-2">
            <Link to="/login" onClick={() => setMobileOpen(false)}><Button variant="outline" className="w-full rounded-pill font-body uppercase tracking-wide text-xs font-semibold" size="sm">Log in</Button></Link>
            <Link to="/onboarding" onClick={() => setMobileOpen(false)}><Button className="w-full rounded-pill font-body uppercase tracking-wide text-xs font-semibold bg-foreground text-background hover:bg-foreground/85" size="sm">Get started</Button></Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
