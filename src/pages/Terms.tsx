import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "April 27, 2026";

const Terms = () => {
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
            Terms of service
          </h1>
          <p className="font-body font-light text-base text-muted-foreground mt-6">
            Last updated: {LAST_UPDATED}
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-10 font-body text-base text-foreground/85 leading-relaxed max-w-3xl">
            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Agreement</h2>
              <p>
                By accessing or using ATXDOES AI ("the Service"), you agree to
                these Terms of Service. If you do not agree, do not use the
                Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Eligibility</h2>
              <p>You must be at least 18 years old and able to form a binding contract to use the Service. Business accounts must be authorized to bind their organization.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Your account</h2>
              <p>You are responsible for keeping your credentials secure and for all activity under your account. Notify us immediately of any unauthorized use.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Acceptable use</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>No illegal, harmful, or fraudulent activity.</li>
                <li>No reverse engineering, scraping, or abusing rate limits.</li>
                <li>No content that infringes third-party rights or violates privacy.</li>
                <li>No automation used to harass, mislead, or spam.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. Subscriptions and billing</h2>
              <p>Paid plans renew automatically until canceled. Fees are non-refundable except where required by law. We may update pricing with reasonable notice.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. Your content</h2>
              <p>You retain ownership of the content and data you submit. You grant us a limited license to process it solely to operate and improve the Service for you.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. Service availability</h2>
              <p>We aim for high availability but do not guarantee uninterrupted access. We may modify, suspend, or discontinue features at any time.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Disclaimers</h2>
              <p>The Service is provided "as is" without warranties of any kind. AI outputs may contain errors — review before acting on them in critical workflows.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">9. Limitation of liability</h2>
              <p>To the maximum extent permitted by law, ATXDOES AI is not liable for indirect, incidental, or consequential damages. Our total liability is capped at the fees you paid in the prior 12 months.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">10. Termination</h2>
              <p>You may cancel anytime. We may suspend or terminate accounts that violate these Terms or pose risk to the Service or other users.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">11. Governing law</h2>
              <p>These Terms are governed by the laws of the State of Texas, USA, without regard to conflict-of-law rules.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">12. Contact</h2>
              <p>
                Questions? Email{" "}
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

export default Terms;
