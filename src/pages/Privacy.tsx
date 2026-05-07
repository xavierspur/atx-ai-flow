import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 6, 2026";
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
            Last updated: {LAST_UPDATED}
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
              <p className="mt-4 text-sm font-medium italic text-muted-foreground">
                Note: Mobile phone numbers and SMS opt-in data are governed by Section 7 below and are never shared with third parties or affiliates for marketing purposes, regardless of the categories listed above.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. SMS / Text Message Communications</h2>
              <p>
                When you provide your mobile phone number to ATXDOES AI through our website contact form, consultation booking, or by texting us directly, you consent to receive SMS text messages from us related to your inquiry, scheduled consultations, service updates, customer care, and follow-up communications.
              </p>
              <p className="mt-3">
                <span className="font-medium">Information We Collect:</span> We collect your name, mobile phone number, and the content of messages you send us. This information is used solely to communicate with you about ATXDOES AI services.
              </p>
              <p className="mt-3">
                <span className="font-medium">How We Use Your Information:</span> Mobile phone numbers and SMS opt-in data are used only to send you the messages you have consented to receive. We use this information to confirm appointments, respond to inquiries, send service-related updates, and provide customer support.
              </p>
              <p className="mt-3">
                <span className="font-medium">No Sharing of Mobile Information:</span> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <p className="mt-3">
                <span className="font-medium">Message Frequency and Rates:</span> Message frequency varies based on your interactions with us. Message and data rates may apply per your mobile carrier's plan. ATXDOES AI is not responsible for any carrier charges incurred.
              </p>
              <p className="mt-3">
                <span className="font-medium">Opt-Out:</span> You may opt out of SMS communications at any time by replying STOP to any message. For help, reply HELP or contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a>.
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
              <p>The Service is built for business owners and is not directed to anyone under 18. We do not knowingly collect data from children.</p>
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
