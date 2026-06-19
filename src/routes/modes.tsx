import { createFileRoute } from "@tanstack/react-router";
import { Target, Swords, Gamepad2, Globe } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/shared";
import { CyberCard } from "@/components/site/CyberCard";

export const Route = createFileRoute("/modes")({
  head: () => ({
    meta: [
      { title: "Game Modes — Jxm Tour Club" },
      { name: "description", content: "Solo, Duo, Squad and Clash Squad — every Free Fire format with cash prizes." },
      { property: "og:title", content: "Game Modes — Jxm Tour Club" },
      { property: "og:description", content: "Every Free Fire format, ranked and ready." },
    ],
  }),
  component: ModesPage,
});

const MODES = [
  {
    icon: Target,
    title: "Solo",
    tag: "1v49",
    blurb: "One drop, one survivor. Pure aim and rotations.",
    map: "Bermuda · Purgatory",
    minEntry: "$0.12",
    avgPrize: "$50 – $150",
  },
  {
    icon: Swords,
    title: "Duo",
    tag: "2v48",
    blurb: "Bring a partner. Revive, flank, finish.",
    map: "Bermuda · Kalahari",
    minEntry: "$0.25",
    avgPrize: "$75 – $225",
  },
  {
    icon: Gamepad2,
    title: "Squad",
    tag: "4v46",
    blurb: "Full team play. Comms, IGL, clutch.",
    map: "Bermuda · Alpine",
    minEntry: "$0.35",
    avgPrize: "$180 – $1.2K",
  },
  {
    icon: Globe,
    title: "Clash Squad",
    tag: "4v4",
    blurb: "Best of 7 rounds. Economy-based fights.",
    map: "Bermuda Remastered",
    minEntry: "$0.15",
    avgPrize: "$35 – $100",
  },
];

function ModesPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Pick your <span className="text-gradient-flame">battlefield</span></>}
        desc="Every format is ranked separately. Climb your own ladder."
      />
      <div className="mx-auto max-w-[1100px] px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {MODES.map((m) => {
            const cardColor: "blue" | "orange" | "purple" = 
              m.title === "Solo" ? "blue" : 
              m.title === "Duo" ? "orange" : 
              "purple";
            return (
              <CyberCard
                key={m.title}
                color={cardColor}
                showSlantedBars={true}
                hoverEffect={true}
                className="h-full"
              >
                <div className="relative flex flex-col h-full justify-between min-h-[160px]">
                  <div>
                    <div className="relative flex items-start justify-between">
                      {/* Octagonal Icon Box */}
                      <div
                        className={`flex items-center justify-center h-10 w-10 border bg-muted/10 ${
                          cardColor === "blue" ? "border-sky-500/40 text-sky-400 shadow-[0_0_10px_rgba(14,165,233,0.2)]" :
                          cardColor === "orange" ? "border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]" :
                          "border-purple-500/40 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                        }`}
                        style={{
                          clipPath: "polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)"
                        }}
                      >
                        <m.icon className="h-5 w-5" strokeWidth={2.2} />
                      </div>
                      <span className={`rounded-md border bg-[#141221]/90 px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                        cardColor === "blue" ? "border-sky-500/30 text-sky-400" :
                        cardColor === "orange" ? "border-amber-500/30 text-amber-400" :
                        "border-purple-500/30 text-purple-400"
                      }`}>
                        {m.tag}
                      </span>
                    </div>
                    <div className="relative mt-5 font-display text-2xl tracking-wide text-foreground">{m.title}</div>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{m.blurb}</p>
                  </div>
                  
                  <dl className="relative mt-6 grid grid-cols-3 gap-3 border-t border-border/40 pt-4 text-[11px]">
                    <div>
                      <dt className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Maps</dt>
                      <dd className="mt-0.5 font-bold text-foreground/90">{m.map}</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Min entry</dt>
                      <dd className="mt-0.5 font-bold text-foreground/90">{m.minEntry}</dd>
                    </div>
                    <div>
                      <dt className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Prize range</dt>
                      <dd className={`mt-0.5 font-bold ${
                        cardColor === "blue" ? "text-sky-400" :
                        cardColor === "orange" ? "text-amber-400" :
                        "text-purple-400"
                      }`}>{m.avgPrize}</dd>
                    </div>
                  </dl>
                </div>
              </CyberCard>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}
