import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const LAST_UPDATED = "May 6, 2026";
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
            SMS Terms & Conditions
          </h1>
          <p className="font-body font-light text-base text-muted-foreground mt-6">
            Last updated: {LAST_UPDATED}
          </p>
          <p className="font-body text-sm font-semibold text-foreground mt-2">
            Program Name: ATXDOES AI Account & Service Notifications
          </p>

          <div className="thin-rule my-12"></div>

          <div className="space-y-10 font-body text-base text-foreground/85 leading-relaxed max-w-3xl">


            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Program Description</h2>
              <p>
                By opting in, you agree to receive SMS text messages from ATXDOES AI. Messages may include consultation confirmations, appointment reminders, follow-ups regarding your inquiry, service updates, customer care responses, and onboarding information related to AI automation services you have requested.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">How to Opt In</h2>
              <p>
                You can opt in to receive SMS messages from ATXDOES AI by:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Submitting the sign-up form on this page (atxdoesai.com/sms-terms) with your mobile phone number and checking the SMS consent box, or</li>
                <li>Checking the SMS consent box during account creation or onboarding on atxdoesai.com, or</li>
                <li>Texting START to our business number after an initial conversation.</li>
              </ul>
              <p className="mt-4 font-medium">
                Consent to receive SMS is not a condition of purchase or use of the ATXDOES AI service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Message Frequency</h2>
              <p>
                Message frequency varies depending on your interactions with ATXDOES AI. You may receive up to 10 messages per month under typical use.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Message and Data Rates</h2>
              <p>
                Message and data rates may apply. Your mobile carrier may charge for sending or receiving text messages depending on your plan. ATXDOES AI does not charge for SMS messages, and we are not responsible for any charges from your wireless carrier.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Help Instructions</h2>
              <p>
                Reply <strong>HELP</strong> for help, or email <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a>. You will receive a reply with our support contact information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Opt-Out Instructions</h2>
              <p>
                Reply <strong>STOP</strong> to any message to unsubscribe. You will receive one confirmation message and no further texts. If you wish to resume messages, reply START or sign up again through our website.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Carrier Disclaimer</h2>
              <p>
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Privacy</h2>
              <p>
                For information on how we handle your data, see our <Link to="/privacy-policy" className="underline hover:text-primary transition-colors">Privacy Policy</Link>. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-foreground mb-3">Contact</h2>
              <p>
                ATXDOES AI · <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-primary transition-colors">{CONTACT_EMAIL}</a> · <Link to="/" className="underline hover:text-primary transition-colors">https://www.atxdoesai.com/</Link>
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
