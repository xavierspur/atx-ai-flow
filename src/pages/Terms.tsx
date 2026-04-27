import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "April 28, 2026";
const CONTACT_EMAIL = "xaviercamacho@atxdoesai.com";

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
              <p className="italic text-muted-foreground">
                Welcome to ATXDOES AI. These Terms govern your use of our
                self-serve automation platform — the website, dashboard,
                onboarding flow, browse library, and the automations you build
                on top of them. By creating an account or using the Service,
                you agree to these Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. The Service</h2>
              <p>
                ATXDOES AI provides a library of pre-built AI automations and a
                dashboard where business owners can configure, run, and manage
                them. We are not a system of record — you remain responsible
                for the accuracy of inputs and the use of outputs in your
                business.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Eligibility & accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must be at least 18 and able to enter a binding contract.</li>
                <li>If you sign up on behalf of a business, you confirm you're authorized to bind it.</li>
                <li>Keep your login credentials secure. You're responsible for all activity under your account.</li>
                <li>One person per account; do not share logins.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Acceptable use</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Break the law or infringe anyone's rights, including IP, privacy, and consumer protection laws.</li>
                <li>Send spam, scams, deceptive marketing, or unsolicited bulk messages.</li>
                <li>Generate or distribute harmful, harassing, defamatory, or sexually explicit content involving real people without consent.</li>
                <li>Reverse engineer, scrape, or attempt to bypass rate limits, security, or access controls.</li>
                <li>Resell or rebrand the Service as your own without a written agreement with us.</li>
                <li>Run automations against third-party systems you are not authorized to access.</li>
              </ul>
              <p className="mt-3">We may suspend automations or accounts that violate these rules.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Plans, billing, and trials</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Paid plans renew automatically at the end of each billing cycle until canceled.</li>
                <li>You can cancel anytime from your dashboard; cancellation takes effect at the end of the current cycle.</li>
                <li>Fees are non-refundable except where required by law.</li>
                <li>Usage-based features (e.g., AI credits) are consumed as you run automations and do not roll over unless stated.</li>
                <li>We may change pricing with at least 30 days' notice; changes apply to the next renewal.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. Your content & data</h2>
              <p>
                You own the content you submit and the outputs generated for
                you ("Your Content"). You grant ATXDOES AI a worldwide,
                non-exclusive license to host, process, and transmit Your
                Content solely to operate the Service for you, including
                routing it to AI providers to produce the requested outputs.
                We do not sell Your Content and do not use it to train
                foundation models.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. AI outputs</h2>
              <p>
                AI outputs are generated probabilistically and may be
                inaccurate, incomplete, or unsuitable for your specific
                situation. You are responsible for reviewing outputs before
                using them in customer-facing, legal, medical, or financial
                contexts. The Service is not a substitute for professional
                advice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. Third-party tools</h2>
              <p>
                When you connect third-party services (email, CRM, calendars,
                messaging tools, etc.), you authorize ATXDOES AI to access
                those services on your behalf to run your automations. Their
                terms and pricing apply separately, and we are not responsible
                for their availability or behavior.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Our intellectual property</h2>
              <p>The Service, the automation library, the brand, logos, designs, and software are owned by ATXDOES AI and protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to use the Service per these Terms.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">9. Service availability</h2>
              <p>We aim for high uptime but do not guarantee uninterrupted, error-free operation. We may modify, suspend, or discontinue features with reasonable notice. Scheduled maintenance will be communicated in advance when feasible.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">10. Disclaimers</h2>
              <p>
                The Service is provided "AS IS" and "AS AVAILABLE" without
                warranties of any kind, whether express, implied, or
                statutory, including warranties of merchantability, fitness
                for a particular purpose, non-infringement, and the accuracy
                of AI outputs.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">11. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, ATXDOES AI and its
                affiliates will not be liable for indirect, incidental,
                special, consequential, exemplary, or punitive damages, or
                for lost profits, revenue, data, or business opportunities.
                Our total aggregate liability for any claim related to the
                Service is capped at the amount you paid us in the 12 months
                before the event giving rise to the claim, or USD $100,
                whichever is greater.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">12. Indemnification</h2>
              <p>You agree to defend and indemnify ATXDOES AI from claims arising out of Your Content, your use of the Service, your violation of these Terms, or your violation of any third-party rights or laws.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">13. Termination</h2>
              <p>You may stop using the Service and cancel your account at any time. We may suspend or terminate accounts that violate these Terms, pose risk to other users, or remain inactive for an extended period. Sections that should reasonably survive termination (IP, disclaimers, liability, governing law) will continue to apply.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">14. Governing law & disputes</h2>
              <p>
                These Terms are governed by the laws of the State of Texas,
                USA, without regard to conflict-of-law rules. Any dispute
                will be resolved in the state or federal courts located in
                Travis County, Texas, and you consent to their exclusive
                jurisdiction. Where allowed, claims must be brought in your
                individual capacity, not as part of a class action.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">15. Changes to these Terms</h2>
              <p>We may update these Terms as the Service evolves. Material changes will be announced in the dashboard or by email at least 14 days before they take effect. Continued use after the effective date means you accept the updated Terms.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">16. SMS Communications</h2>
              <p>
                <span className="font-medium">Program:</span> ATX Does AI customer SMS.
              </p>
              <p className="mt-2">
                <span className="font-medium">Description:</span> Appointment confirmations, reminders, customer support replies, and project updates.
              </p>
              <p className="mt-2">
                Message frequency varies. Message and data rates may apply. For help, reply HELP or email <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a>. To opt out, reply STOP at any time.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">17. Contact</h2>
              <p>
                Questions about these Terms? Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>{" "}
                or call +1 (210) 975-8369. ATXDOES AI — Austin, Texas.
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
