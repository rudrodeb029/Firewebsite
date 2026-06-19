import { createFileRoute } from "@tanstack/react-router";
import { Crosshair, Users, Filter } from "lucide-react";
import { useState } from "react";
import { APK_URL, PageHeader, PageShell } from "@/components/site/shared";
import { CyberCard } from "@/components/site/CyberCard";

export const Route = createFileRoute("/tournaments")({
  head: () => ({
    meta: [
      { title: "Open Lobbies — Jxm Tour Club Tournaments" },
      { name: "description", content: "Browse live and upcoming Free Fire tournaments with real cash prizes." },
      { property: "og:title", content: "Open Lobbies — Jxm Tour Club Tournaments" },
      { property: "og:description", content: "Live and upcoming Free Fire tournaments." },
    ],
  }),
  component: TournamentsPage,
});

const ALL = [
  { title: "Friday Night Frenzy", mode: "Squad", entry: "$0.60", prize: "$300", filled: 78, total: 100, time: "Today · 9 PM" },
  { title: "Solo Sniper Showdown", mode: "Solo", entry: "$0.25", prize: "$120", filled: 42, total: 50, time: "Tomorrow · 7 PM" },
  { title: "Duo Domination Cup", mode: "Duo", entry: "$0.35", prize: "$180", filled: 56, total: 64, time: "Sat · 8:30 PM" },
  { title: "Booyah Grand Finale", mode: "Squad", entry: "$1.20", prize: "$1,200", filled: 88, total: 100, time: "Sun · 10 PM" },
  { title: "Clash Squad Rush", mode: "Clash", entry: "$0.15", prize: "$75", filled: 22, total: 32, time: "Today · 6 PM" },
  { title: "Midnight Mayhem", mode: "Solo", entry: "$0.10", prize: "$55", filled: 19, total: 50, time: "Today · 12 AM" },
  { title: "Weekend Warzone", mode: "Squad", entry: "$0.90", prize: "$480", filled: 64, total: 100, time: "Sat · 4 PM" },
  { title: "Free Entry Friday", mode: "Duo", entry: "FREE", prize: "$25", filled: 31, total: 64, time: "Fri · 5 PM" },
];

const TABS = ["All", "Solo", "Duo", "Squad", "Clash"] as const;

function TournamentsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const list = tab === "All" ? ALL : ALL.filter((t) => t.mode === tab);
  return (
    <PageShell>
      <PageHeader
        title={<>Find your next <span className="text-gradient-flame">Booyah</span></>}
        desc="Filter by mode. Entry fees range $0 – $1.20. Brackets fill fast."
      />
      <div className="mx-auto max-w-[1100px] px-5 pb-20">
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-wider transition-colors ${
                tab === t
                  ? "border-flame bg-flame/15 text-flame"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
          <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">
            {list.length} lobbies
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => {
            const pct = Math.round((t.filled / t.total) * 100);
            const cardColor: "blue" | "orange" | "purple" = 
              t.mode === "Solo" ? "blue" : 
              t.mode === "Duo" ? "orange" : 
              "purple";
            return (
              <CyberCard
                key={t.title}
                color={cardColor}
                showSlantedBars={true}
                hoverEffect={true}
                className="flex flex-col h-full"
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
                      <span className={`rounded px-1.5 py-0.5 font-bold ${
                        cardColor === "blue" ? "bg-sky-500/10 text-sky-400 border border-sky-500/20" :
                        cardColor === "orange" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" :
                        "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      }`}>
                        {t.mode}
                      </span>
                      <span className="text-muted-foreground">{t.time}</span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold">{t.title}</h3>
                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <div className="text-[10px] uppercase text-muted-foreground font-semibold">Prize Pool</div>
                        <div className={`font-display text-lg font-bold ${
                          cardColor === "blue" ? "text-sky-400" :
                          cardColor === "orange" ? "text-amber-400" :
                          "text-purple-400"
                        }`}>{t.prize}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase text-muted-foreground font-semibold">Entry Fee</div>
                        <div className="text-sm font-semibold text-foreground/90">{t.entry}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted/40">
                      <div className={`h-full ${
                        cardColor === "blue" ? "bg-sky-500" :
                        cardColor === "orange" ? "bg-amber-500" :
                        "bg-purple-500"
                      }`} style={{ width: `${pct}%` }} />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                      <span className="flex items-center"><Users className="mr-1 h-3 w-3 text-foreground/50" />{t.filled} / {t.total} slots</span>
                      <span className="font-semibold">{pct}% filled</span>
                    </div>
                    <div className="relative z-30 mt-4" style={{ transform: "translateZ(20px)" }}>
                    <a
                      href={APK_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => { e.stopPropagation(); window.open(APK_URL, '_blank'); }}
                      className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none rounded-sm ${
                        cardColor === "blue" ? "border-sky-500/30 bg-sky-500/10 text-sky-400 hover:bg-sky-500 hover:text-black shadow-[0_0_10px_rgba(14,165,233,0.1)]" :
                        cardColor === "orange" ? "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-black shadow-[0_0_10px_rgba(245,158,11,0.1)]" :
                        "border-purple-500/30 bg-purple-500/10 text-purple-400 hover:bg-purple-500 hover:text-black shadow-[0_0_10px_rgba(168,85,247,0.1)]"
                      }`}
                      style={{ pointerEvents: "auto" }}
                    >
                      <Crosshair className="h-3 w-3" /> Join Match
                    </a>
                    </div>
                  </div>
                </div>
              </CyberCard>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
