import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="thin-rule"></div>
      <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="font-serif text-base font-bold uppercase tracking-tight text-foreground">
              ATXDOES <span className="highlight-accent">AI</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
              AI-powered automation for Texas businesses. Set it up once — let it run.
            </p>
            <a
              href="mailto:xaviercamacho@atxdoesai.com"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors mt-3 inline-block"
            >
              xaviercamacho@atxdoesai.com
            </a>
            <a
              href="tel:+12109758369"
              className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors mt-1 block"
            >
              +1 (210) 975-8369
            </a>
          </div>
          <div>
            <h4 className="font-body font-semibold uppercase tracking-[0.15em] text-foreground mb-4 text-xs">Product</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold uppercase tracking-[0.15em] text-foreground mb-4 text-xs">Company</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-body font-semibold uppercase tracking-[0.15em] text-foreground mb-4 text-xs">Legal</h4>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/sms-terms" className="hover:text-foreground transition-colors">SMS Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="thin-rule mt-12"></div>
        <p className="mt-8 text-center font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} ATXDOES AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
