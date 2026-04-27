import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "April 27, 2026";

const Privacy = () => {
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
            Legal
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-foreground tracking-tight leading-[1.05]">
            Privacy policy
          </h1>
          <p className="font-body font-light text-base text-muted-foreground mt-6">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-10 font-body text-base text-foreground/85 leading-relaxed max-w-3xl">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Who we are</h2>
              <p>
                ATXDOES AI ("we", "us", "our") is an automation platform based in
                Austin, Texas. This policy describes how we collect, use, and
                protect your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Information we collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Account data:</span> name, email, business name, and role you provide during onboarding.</li>
                <li><span className="font-medium">Usage data:</span> pages visited, features used, and device or browser metadata.</li>
                <li><span className="font-medium">Automation data:</span> content you connect or feed into automations you set up.</li>
                <li><span className="font-medium">Communications:</span> messages you send us via email, forms, or phone.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. How we use your information</h2>
              <p>We use your information to operate the service, personalize your dashboard, run the automations you configure, respond to support requests, improve our product, and meet legal obligations.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Sharing</h2>
              <p>
                We do not sell your personal information. We share data only with
                trusted service providers (hosting, analytics, AI infrastructure)
                who process it on our behalf, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. Data retention</h2>
              <p>We retain your information for as long as your account is active or as needed to provide the service. You can request deletion at any time.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. Your rights</h2>
              <p>Depending on your location, you may have the right to access, correct, export, or delete your personal data. Contact us to exercise any of these rights.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. Security</h2>
              <p>We use industry-standard safeguards to protect your data. No system is perfectly secure, but we work to minimize risk and notify you of material incidents.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Changes</h2>
              <p>We may update this policy from time to time. Significant changes will be communicated through the product or by email.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">9. Contact</h2>
              <p>
                Questions about this policy? Email{" "}
                <a href="mailto:xaviercamacho@atxdoesai.com" className="underline hover:text-primary transition-colors">
                  xaviercamacho@atxdoesai.com
                </a>.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
