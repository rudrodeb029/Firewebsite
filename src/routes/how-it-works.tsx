import { createFileRoute } from "@tanstack/react-router";
import { Download, UserPlus, Crosshair, Wallet } from "lucide-react";
import { DownloadButton, PageHeader, PageShell } from "@/components/site/shared";
import { CyberCard } from "@/components/site/CyberCard";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Jxm Tour Club" },
      { name: "description", content: "Install the app, join a lobby, win, withdraw to bKash, Nagad or Binance. Four steps to your first payout." },
      { property: "og:title", content: "How It Works — Jxm Tour Club" },
      { property: "og:description", content: "From install to bKash/Nagad/Binance payout in four steps." },
    ],
  }),
  component: HowPage,
});

const STEPS = [
  { n: "01", icon: Download, title: "Install the APK", desc: "12 MB · Android 7+. No Play Store account needed.", time: "~1 min" },
  { n: "02", icon: UserPlus, title: "Create your profile", desc: "Link your Free Fire UID. Verify mobile + email.", time: "~2 min" },
  { n: "03", icon: Crosshair, title: "Join a lobby", desc: "Pay entry from wallet. Get room ID 5 min before match.", time: "Per match" },
  { n: "04", icon: Wallet, title: "Withdraw winnings", desc: "bKash · Nagad · Binance. No minimum threshold. Available 24/7.", time: "<2 min" },
];

function HowPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>From install to <span className="text-gradient-flame">payout</span></>}
        desc="Most players finish their first match within ten minutes of opening the app."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20">
        <ol className="relative space-y-6 border-l border-border/60 pl-6">
          {STEPS.map((s, idx) => {
            const stepColors: ("blue" | "purple" | "orange")[] = ["blue", "purple", "orange", "blue"];
            const cardColor = stepColors[idx % 3];
            const glowTextClass = 
              cardColor === "blue" ? "text-sky-400 drop-shadow-[0_0_3px_rgba(14,165,233,0.4)]" :
              cardColor === "orange" ? "text-amber-400 drop-shadow-[0_0_3px_rgba(245,158,11,0.4)]" :
              "text-purple-400 drop-shadow-[0_0_3px_rgba(168,85,247,0.4)]";

            return (
              <li key={s.n} className="relative">
                <span className={`absolute -left-[37px] top-4 grid h-8 w-8 place-items-center rounded-full border bg-background font-display text-[11px] font-bold ${
                  cardColor === "blue" ? "border-sky-500/50 text-sky-400" :
                  cardColor === "orange" ? "border-amber-500/50 text-amber-400" :
                  "border-purple-500/50 text-purple-400"
                }`}>
                  {s.n}
                </span>
                <CyberCard color={cardColor} showSlantedBars={true} hoverEffect={true}>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`grid h-8 w-8 place-items-center rounded-lg bg-muted/10 border ${
                          cardColor === "blue" ? "border-sky-500/20 text-sky-400" :
                          cardColor === "orange" ? "border-amber-500/20 text-amber-400" :
                          "border-purple-500/20 text-purple-400"
                        }`}>
                          <s.icon className="h-4 w-4" strokeWidth={2.2} />
                        </div>
                        <div className="text-sm font-bold text-foreground/90">{s.title}</div>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${glowTextClass}`}>{s.time}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </CyberCard>
              </li>
            );
          })}
        </ol>

        <div className="mt-12">
          <CyberCard color="orange" showSlantedBars={false} hoverEffect={true} className="text-center p-6">
            <div className="text-[10px] uppercase font-bold tracking-[0.25em] text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]">System Ready</div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground">Get the app · $0.60 welcome bonus</h2>
            <div className="mt-5 flex justify-center">
              <DownloadButton size="lg" label="Download APK" />
            </div>
          </CyberCard>
        </div>
      </div>
    </PageShell>
  );
}
