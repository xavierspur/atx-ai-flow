import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 12, 2026";
const CONTACT_EMAIL = "xaviercamacho@atxdoesai.com";

const SMSTerms = () => {
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
            SMS Terms &amp; Conditions
          </h1>
          <p className="font-body font-light text-base text-muted-foreground mt-6">
            Effective date: {LAST_UPDATED}
          </p>
          <p className="font-body text-sm font-semibold text-foreground mt-2">
            Program Name: ATXDOES AI SMS Program
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-10 font-body text-base text-foreground/85 leading-relaxed max-w-3xl">

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">1. Program Description</h2>
              <p>
                ATXDOES AI (Austin, Texas) operates an SMS messaging program to communicate with prospective and existing clients who have opted in. Messages may include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Consultation scheduling confirmations and reminders</li>
                <li>Follow-up communications regarding our services and proposals</li>
                <li>Onboarding messages and service updates for new clients</li>
                <li>Customer care and support responses</li>
              </ul>
              <p className="mt-3">
                <strong>Consent is not a condition of purchase or use of ATXDOES AI services.</strong>
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">2. How to Opt In</h2>
              <p>You can opt in to receive SMS messages from ATXDOES AI by:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>
                  Submitting the contact form at{" "}
                  <Link to="/contact" className="underline hover:text-primary transition-colors">
                    https://www.atxdoesai.com/contact
                  </Link>{" "}
                  with your mobile phone number and checking the SMS consent box, or
                </li>
                <li>
                  Submitting the dedicated SMS sign-up form at{" "}
                  <Link to="/sms-signup" className="underline hover:text-primary transition-colors">
                    https://www.atxdoesai.com/sms-signup
                  </Link>{" "}
                  with your mobile phone number and checking the SMS consent box, or
                </li>
                <li>Texting <strong>START</strong> to our business number after an initial conversation.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">3. Message Frequency</h2>
              <p>
                Message frequency varies based on your interaction with us. Typical users receive 2–10 messages per month.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">4. Cost</h2>
              <p>
                <strong>Message and data rates may apply.</strong> ATXDOES AI does not charge for SMS messages, but standard carrier rates from your mobile provider apply. Contact your carrier for details.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">5. How to Opt Out</h2>
              <p>
                You may opt out of receiving SMS messages at any time by replying with any of the following keywords:{" "}
                <strong>STOP</strong>, <strong>STOPALL</strong>, <strong>UNSUBSCRIBE</strong>, <strong>CANCEL</strong>, <strong>END</strong>, or <strong>QUIT</strong>.
              </p>
              <p className="mt-3">
                After texting STOP, you will receive one final confirmation message and no further SMS messages will be sent. To resume receiving messages, text <strong>START</strong> or sign up again at{" "}
                <Link to="/sms-signup" className="underline hover:text-primary transition-colors">
                  https://www.atxdoesai.com/sms-signup
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">6. How to Get Help</h2>
              <p>
                For help, reply <strong>HELP</strong> or <strong>INFO</strong> to any message. You may also contact us at:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1">
                <li>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a></li>
                <li>Phone: +1 (210) 975-8369</li>
                <li>Address: ATXDOES AI, Austin, Texas 78701</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">7. Supported Carriers</h2>
              <p>
                The ATXDOES AI SMS program is compatible with AT&amp;T, Verizon, T-Mobile, Sprint, US Cellular, Boost, Cricket, MetroPCS, and other major U.S. carriers. Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">8. Privacy &amp; Data Sharing</h2>
              <p>
                See our{" "}
                <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">
                  Privacy Policy
                </Link>{" "}
                for full details on how we handle your data.
              </p>
              <p className="mt-3 font-medium text-foreground border-l-4 border-primary pl-4 py-2 bg-primary/5">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support of our services is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">9. Contact for SMS Questions</h2>
              <p>
                ATXDOES AI · Xavier Camacho, Founder · Austin, Texas 78701<br />
                Email: <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a><br />
                Phone: +1 (210) 975-8369
              </p>
            </section>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SMSTerms;
