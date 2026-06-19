import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — JXM Tour Club" },
      { name: "description", content: "Data protection and privacy policy protocols for JXM Tour Club players." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Privacy <span className="text-gradient-flame">Policy</span></>}
        desc="Your data protection and security protocols."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20 text-sm text-foreground/80 space-y-6">
        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">1. Information Collection</h3>
          <p>
            We collect the minimal data necessary to facilitate online matches and secure withdrawals. This includes your profile email, linked mobile number, and your Free Fire gaming UID to verify in-game statistics and combat outcomes.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">2. Security Measures</h3>
          <p>
            All connection credentials and personal profiles are synchronized securely with JXM Mainframe. We use industry-standard encryption protocols to protect your billing credentials and ensure secure transaction data.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">3. Third-Party Sharing</h3>
          <p>
            We do not sell or lease player profiles. Your information is only shared with verified payment processors (bKash, Nagad, Binance) to execute payouts, and anti-cheat agencies to ensure fair play compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">4. Data Retention</h3>
          <p>
            You may request account deletion at any time from the settings menu inside the application. Upon account termination, we purge your linked gaming accounts and associated transaction histories from our main servers within 30 days.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
