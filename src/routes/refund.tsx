import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — JXM Tour Club" },
      { name: "description", content: "Refund policies for match cancellations and entries on JXM Tour Club." },
    ],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Refund <span className="text-gradient-flame">Policy</span></>}
        desc="Financial refund policies and conditions."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20 text-sm text-foreground/80 space-y-6">
        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">1. Unfilled Lobbies</h3>
          <p>
            If a lobby fails to fill with the required minimum number of players before the match countdown expires, the match is cancelled and 100% of the entry fee is immediately refunded to your digital wallet.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">2. Server/Match Issues</h3>
          <p>
            In the event of a major game server crash or network outage that prevents players from finishing a match, the match will be marked void, and all entry fees for that specific match will be refunded.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">3. Disqualification Forfeits</h3>
          <p>
            Players who are disqualified for cheating, violating team-play agreements, or using custom modifiers will forfeit their entry fees. Disqualification results in automatic loss without a refund.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">4. Withdrawal Transfers</h3>
          <p>
            Verified winnings can be withdrawn at any time. If a withdrawal transfer fails due to invalid payment credentials, the funds are returned to your internal app wallet. We do not charge fees for failed transfers.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
