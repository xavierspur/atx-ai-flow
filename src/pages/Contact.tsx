import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, ArrowLeft } from "lucide-react";

const CONTACT_EMAIL = "xaviercamacho@atxdoesai.com";

const Contact = () => {
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
          <p className="font-body font-light text-lg text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Questions, partnerships, or a quick hello — reach out directly. We
            read every email and reply within one business day.
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-6">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Email
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-3 font-serif text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Based in
              </p>
              <p className="font-body text-base text-foreground">
                Austin, Texas
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
