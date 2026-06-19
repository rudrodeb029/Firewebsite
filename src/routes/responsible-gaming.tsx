import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/responsible-gaming")({
  head: () => ({
    meta: [
      { title: "Responsible Gaming — JXM Tour Club" },
      { name: "description", content: "Responsible gaming policies, limits, and support at JXM Tour Club." },
    ],
  }),
  component: ResponsibleGamingPage,
});

function ResponsibleGamingPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Responsible <span className="text-gradient-flame">Gaming</span></>}
        desc="Keeping tournament play safe, healthy, and fun."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20 text-sm text-foreground/80 space-y-6">
        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">1. Age Restrictive Access</h3>
          <p>
            JXM Tour Club is strictly restricted to players who are 18 years of age or older. We implement identity verification protocols to prevent underage participation.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">2. Healthy Combat Boundaries</h3>
          <p>
            We encourage competitive gameplay to remain a healthy form of entertainment. You can set daily entry limit caps and time restricts directly from your account dashboard to keep your gameplay balanced.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">3. Self-Exclusion Protocols</h3>
          <p>
            If you need a break, you can request a temporary or permanent self-exclusion lock from your profile settings. During the self-exclusion window, you will be blocked from joining lobbies or adding entry funds.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-display text-lg tracking-wider text-muted-foreground uppercase">4. Support Resources</h3>
          <p>
            If you or someone you know is struggling with gaming limits or balance, please reach out to our 24/7 client support channels or consult local gaming helpline resources.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
