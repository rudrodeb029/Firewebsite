import { createFileRoute } from "@tanstack/react-router";
import { Crosshair, Users, Filter } from "lucide-react";
import { useState } from "react";
import { APK_URL, PageHeader, PageShell } from "@/components/site/shared";

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
        eyebrow="Open Lobbies"
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => {
            const pct = Math.round((t.filled / t.total) * 100);
            return (
              <article
                key={t.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-flame/40"
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider">
                  <span className="rounded-md bg-electric/15 px-1.5 py-0.5 font-semibold text-electric">
                    {t.mode}
                  </span>
                  <span className="text-muted-foreground">{t.time}</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold">{t.title}</h3>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-muted-foreground">Prize</div>
                    <div className="font-display text-lg text-gradient-flame">{t.prize}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase text-muted-foreground">Entry</div>
                    <div className="text-sm font-semibold">{t.entry}</div>
                  </div>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-gradient-flame" style={{ width: `${pct}%` }} />
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] text-muted-foreground">
                  <span><Users className="mr-1 inline h-2.5 w-2.5" />{t.filled}/{t.total}</span>
                  <span>{pct}%</span>
                </div>
                <a
                  href={APK_URL}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 py-1.5 text-xs font-semibold text-flame hover:bg-flame hover:text-flame-foreground"
                >
                  <Crosshair className="h-3 w-3" /> Join
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
