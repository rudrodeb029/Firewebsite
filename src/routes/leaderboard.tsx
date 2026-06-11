import { createFileRoute } from "@tanstack/react-router";
import { Medal, TrendingUp } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Leaderboard — Jxm Tour Club" },
      { name: "description", content: "Season 7 top earners on Jxm Tour Club. Updated hourly." },
      { property: "og:title", content: "Leaderboard — Jxm Tour Club" },
      { property: "og:description", content: "Top Free Fire earners this season." },
    ],
  }),
  component: LeaderboardPage,
});

const PLAYERS = [
  { rank: 1, name: "ShadowReaperX", region: "US-E", wins: 312, kd: "4.8", earnings: "$2,200" },
  { rank: 2, name: "FrostByte", region: "US-W", wins: 289, kd: "4.3", earnings: "$1,700" },
  { rank: 3, name: "BlazeKing", region: "US-N", wins: 271, kd: "4.1", earnings: "$1,425" },
  { rank: 4, name: "NinjaStorm", region: "US-S", wins: 244, kd: "3.9", earnings: "$1,180" },
  { rank: 5, name: "VenomEdge", region: "US-E", wins: 231, kd: "3.7", earnings: "$1,050" },
  { rank: 6, name: "GhostWraith", region: "US-W", wins: 218, kd: "3.6", earnings: "$890" },
  { rank: 7, name: "ArcAngel", region: "US-N", wins: 207, kd: "3.4", earnings: "$800" },
  { rank: 8, name: "RogueZero", region: "US-S", wins: 199, kd: "3.3", earnings: "$700" },
];

function LeaderboardPage() {
  const medal = (r: number) =>
    r === 1 ? "text-flame" : r === 2 ? "text-electric" : r === 3 ? "text-flame/70" : "text-muted-foreground";
  return (
    <PageShell>
      <PageHeader
        eyebrow="Season 7 · Hall of fame"
        title={<>Top <span className="text-gradient-flame">earners</span></>}
        desc="Refreshed every hour. Earnings are net of entry fees."
      />
      <div className="mx-auto max-w-[820px] px-5 pb-20">
        <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
          <TrendingUp className="h-3 w-3 text-flame" />
          Updated 04 min ago
        </div>
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="grid grid-cols-[40px_1fr_60px_60px_110px] gap-4 border-b border-border/60 px-4 py-2 text-[10px] uppercase tracking-wider text-muted-foreground">
            <div>#</div>
            <div>Player</div>
            <div className="text-right">Wins</div>
            <div className="text-right">K/D</div>
            <div className="text-right">Earnings</div>
          </div>
          {PLAYERS.map((p) => (
            <div
              key={p.rank}
              className="grid grid-cols-[40px_1fr_60px_60px_110px] items-center gap-4 border-b border-border/40 px-4 py-3 text-sm last:border-0 hover:bg-surface-elevated"
            >
              <div className={`flex items-center gap-1 font-display text-base ${medal(p.rank)}`}>
                <Medal className="h-3.5 w-3.5" />
                {p.rank}
              </div>
              <div>
                <div className="truncate font-medium">{p.name}</div>
                <div className="text-[10px] text-muted-foreground">{p.region}</div>
              </div>
              <div className="text-right text-xs text-muted-foreground">{p.wins}</div>
              <div className="text-right text-xs text-electric">{p.kd}</div>
              <div className="text-right font-display text-sm text-gradient-flame">
                {p.earnings}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
