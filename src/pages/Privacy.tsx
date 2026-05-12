import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 12, 2026";
const CONTACT_EMAIL = "xaviercamacho@atxdoesai.com";

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
            Effective date: {LAST_UPDATED}
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-10 font-body text-base text-foreground/85 leading-relaxed max-w-3xl">
            <section>
              <p className="italic text-muted-foreground">
                ATXDOES AI is a self-serve AI automation platform for business
                owners, based in Austin, Texas. We take privacy seriously
                because the automations you build often touch your customers,
                your inbox, and your operations. This page explains, in plain
                English, what we collect and what we do with it.
              </p>
              <div className="mt-6 p-5 bg-muted border border-foreground/5 font-body text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground text-xs uppercase tracking-wider mb-2">Business Identity</p>
                <p><span className="font-medium text-foreground">Business:</span> ATXDOES AI</p>
                <p><span className="font-medium text-foreground">Founder:</span> Xavier Camacho</p>
                <p><span className="font-medium text-foreground">Address:</span> Austin, Texas 78701</p>
                <p><span className="font-medium text-foreground">Email:</span> <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a></p>
                <p><span className="font-medium text-foreground">Phone:</span> +1 (210) 975-8369</p>
                <p><span className="font-medium text-foreground">Website:</span> https://www.atxdoesai.com</p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Who we are</h2>
              <p>
                "ATXDOES AI", "we", "us", and "our" refer to ATXDOES AI, an
                Austin, Texas–based company operating the website at
                atxdoesai.com and the related dashboard, onboarding flow, and
                automation tools (together, the "Service").
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. Information you give us</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Account & onboarding:</span> name, email, business name, industry, team size, location, and the goals you share in our 4-step onboarding flow so we can personalize your dashboard.</li>
                <li><span className="font-medium">Automation inputs:</span> the prompts, documents, contact lists, customer messages, and other content you connect to or feed into the automations you set up.</li>
                <li><span className="font-medium">Third-party connections:</span> credentials and tokens you authorize for tools like email, CRMs, calendars, or messaging apps. We store only what is needed to run your automations.</li>
                <li><span className="font-medium">Billing:</span> for paid plans, payment details are processed by our payment processor; we store limited records (plan, last 4 digits, invoices).</li>
                <li><span className="font-medium">Support:</span> messages you send to <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a> or via our contact page.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Information we collect automatically</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><span className="font-medium">Usage:</span> pages viewed, automations browsed, features used, errors encountered.</li>
                <li><span className="font-medium">Device:</span> browser, OS, device type, approximate location from IP, language.</li>
                <li><span className="font-medium">Cookies:</span> essential cookies for login and session, plus limited analytics cookies to understand how the Service is used.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. How we use your information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Run, maintain, and personalize your dashboard and automations.</li>
                <li>Generate AI outputs through our model providers based on the inputs you submit.</li>
                <li>Process payments, prevent fraud, and enforce our Terms.</li>
                <li>Send transactional messages (account, billing, security) and, only with your consent, occasional product updates.</li>
                <li>Improve the Service through aggregated and de-identified analytics. We do not train foundation models on your private data.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. AI processing</h2>
              <p>
                When you run an automation, your inputs may be sent to third-party
                AI providers (such as large language model APIs) strictly to
                generate the output you requested. We use providers that contractually
                agree not to use your content to train their public models. Outputs
                may be inaccurate — always review before acting on them in
                customer-facing or financial workflows.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. Sharing</h2>
              <p>We do not sell your personal information. We share data only with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><span className="font-medium">Infrastructure providers:</span> hosting, database, authentication, and storage (e.g., Supabase, cloud hosting).</li>
                <li><span className="font-medium">AI providers:</span> to generate the automation outputs you request.</li>
                <li><span className="font-medium">Tools you connect:</span> only the data needed to perform the action you authorized.</li>
                <li><span className="font-medium">Legal:</span> when required by law, subpoena, or to protect rights and safety.</li>
                <li><span className="font-medium">Business transfers:</span> in connection with a merger, acquisition, or sale of assets, with notice to you.</li>
              </ul>
              <p className="mt-4 text-sm font-medium text-foreground border-l-4 border-primary pl-4 py-2 bg-primary/5">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support of our services is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. SMS / Text Messaging Privacy</h2>
              <p>
                When you opt in to receive SMS messages from ATXDOES AI, we collect your mobile phone number, the timestamp of your consent, and a record of how you opted in (web form, text-to-join, or during a conversation with us). We use this information solely to send you the messages you have opted in to receive, including:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Responses to inquiries you submit through our website</li>
                <li>Consultation scheduling, confirmations, and reminders</li>
                <li>Follow-up messages regarding our services and proposals</li>
                <li>Onboarding messages and service updates if you become a client</li>
                <li>Customer care and support communications</li>
              </ul>
              <p className="mt-3">
                <span className="font-medium">Message frequency:</span> Message frequency varies based on your interactions with ATXDOES AI.
              </p>
              <p className="mt-3">
                <span className="font-medium">Rates:</span> Message and data rates may apply per your mobile carrier's plan. ATXDOES AI does not charge for SMS messages.
              </p>
              <p className="mt-3">
                <span className="font-medium">Sharing:</span> No mobile information, including phone numbers and SMS opt-in data, will be shared with or sold to third parties or affiliates for marketing or promotional purposes. We share data only with subprocessors required to deliver the SMS service (e.g., Twilio), who are bound by contract to protect it.
              </p>
              <p className="mt-3">
                <span className="font-medium">Opt-out:</span> You can revoke consent at any time by replying STOP to any message. For help, reply HELP or contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a>.
              </p>
              <p className="mt-3">
                <span className="font-medium">Full SMS Terms:</span> See our <Link to="/sms-terms" className="underline hover:text-primary transition-colors">SMS Terms & Conditions</Link> for the complete program description.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Data retention</h2>
              <p>
                We retain account and automation data while your account is
                active. You can delete individual automations at any time from
                your dashboard. If you close your account, we delete or
                de-identify your personal data within 90 days, except where we
                are required to keep records (e.g., tax, fraud prevention).
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">9. Your rights</h2>
              <p>
                Depending on where you live (including Texas residents under the
                Texas Data Privacy and Security Act, and residents of other US
                states or the EU/UK), you may have the right to access, correct,
                export, or delete your personal data, and to opt out of certain
                processing. Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>{" "}
                and we will respond within 45 days.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">10. Security</h2>
              <p>
                We use encryption in transit (TLS), encryption at rest for
                sensitive fields, role-based access controls, and audit logs.
                No system is perfectly secure — if we discover a material
                breach affecting your data, we will notify you promptly.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">11. Children</h2>
              <p>
                The Service is built for business owners and is not directed to children under 13. We do not knowingly collect data from children under 13. The SMS program is not directed to anyone under 18, and we do not knowingly collect mobile numbers from minors.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">12. Changes</h2>
              <p>We may update this policy as the Service evolves. Material changes will be announced in the dashboard or by email at least 14 days before they take effect.</p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">13. Contact</h2>
              <p>
                Questions, requests, or concerns? Email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">
                  {CONTACT_EMAIL}
                </a>{" "}
                or call +1 (210) 975-8369. We're based in Austin, Texas.
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
