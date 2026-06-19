import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — JXM Tour Club" },
      { name: "description", content: "Terms and conditions of tournament participation on JXM Tour Club." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Terms of <span className="text-gradient-flame">Service</span></>}
        desc="Rules of engagement for players on JXM Tour Club."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20 text-sm text-foreground/80 space-y-6">
        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">1. Player Eligibility</h3>
          <p>
            You must be at least 18 years of age or the age of legal majority in your jurisdiction to open an account, complete in matches, and initiate cash withdrawals. By registering, you confirm that online skill-gaming is legal in your location.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">2. Account Synchronization</h3>
          <p>
            Each user is permitted only one active profile linked to their unique Free Fire UID. Multi-accounting, account sharing, or falsifying your in-game credentials will result in an immediate account ban and forfeiture of all accumulated rewards.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">3. Fair Play Protocol</h3>
          <p>
            Cheating, hacking, exploiting glitches, or using unauthorized third-party game modification software is strictly prohibited. All match telemetry is analyzed. Confirmed cheaters will be permanently banned and their details logged.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">4. Entry and Payouts</h3>
          <p>
            Entry fees are charged from your digital wallet. Upon successful completion of matches, verified winnings are deposited directly into your balance and can be withdrawn instantly subject to standard third-party processing checks.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
