import { createFileRoute } from "@tanstack/react-router";
import { Download, UserPlus, Crosshair, Wallet } from "lucide-react";
import { DownloadButton, PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Jxm Tour Club" },
      { name: "description", content: "Install the app, join a lobby, win, withdraw to PayPal or bank. Four steps to your first payout." },
      { property: "og:title", content: "How It Works — Jxm Tour Club" },
      { property: "og:description", content: "From install to PayPal payout in four steps." },
    ],
  }),
  component: HowPage,
});

const STEPS = [
  { n: "01", icon: Download, title: "Install the APK", desc: "12 MB · Android 7+. No Play Store account needed.", time: "~1 min" },
  { n: "02", icon: UserPlus, title: "Create your profile", desc: "Link your Free Fire UID. Verify mobile + email.", time: "~2 min" },
  { n: "03", icon: Crosshair, title: "Join a lobby", desc: "Pay entry from wallet. Get room ID 5 min before match.", time: "Per match" },
  { n: "04", icon: Wallet, title: "Withdraw winnings", desc: "PayPal / bank / crypto. No minimum threshold.", time: "<5 min" },
];

function HowPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="How it works"
        title={<>From install to <span className="text-gradient-flame">payout</span></>}
        desc="Most players finish their first match within ten minutes of opening the app."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20">
        <ol className="relative space-y-4 border-l border-border/60 pl-6">
          {STEPS.map((s) => (
            <li key={s.n} className="relative">
              <span className="absolute -left-[34px] top-3 grid h-7 w-7 place-items-center rounded-full border border-flame/40 bg-background font-display text-[11px] text-flame">
                {s.n}
              </span>
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-flame/10 text-flame">
                      <s.icon className="h-4 w-4" strokeWidth={2.2} />
                    </div>
                    <div className="text-sm font-semibold">{s.title}</div>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-electric">{s.time}</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl border border-border bg-surface p-6 text-center">
          <div className="text-[10px] uppercase tracking-[0.25em] text-flame">Ready?</div>
          <h2 className="mt-2 font-display text-2xl">Get the app · $0.60 welcome bonus</h2>
          <div className="mt-4 flex justify-center">
            <DownloadButton size="lg" label="Download APK" />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
