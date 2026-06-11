import { createFileRoute } from "@tanstack/react-router";
import { Target, Swords, Gamepad2, Globe } from "lucide-react";
import { PageHeader, PageShell } from "@/components/site/shared";

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
        eyebrow="Modes"
        title={<>Pick your <span className="text-gradient-flame">battlefield</span></>}
        desc="Every format is ranked separately. Climb your own ladder."
      />
      <div className="mx-auto max-w-[1100px] px-5 pb-20">
        <div className="grid gap-4 md:grid-cols-2">
          {MODES.map((m) => (
            <div
              key={m.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-flame/40"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-flame/15 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-flame/10 text-flame">
                  <m.icon className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <span className="rounded-md border border-border bg-background/60 px-2 py-0.5 font-mono text-[10px] text-electric">
                  {m.tag}
                </span>
              </div>
              <div className="relative mt-5 font-display text-2xl tracking-wide">{m.title}</div>
              <p className="mt-1 text-xs text-muted-foreground">{m.blurb}</p>
              <dl className="relative mt-5 grid grid-cols-3 gap-3 border-t border-border/50 pt-4 text-[11px]">
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-muted-foreground">Maps</dt>
                  <dd className="mt-0.5 font-medium">{m.map}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-muted-foreground">Min entry</dt>
                  <dd className="mt-0.5 font-medium">{m.minEntry}</dd>
                </div>
                <div>
                  <dt className="text-[9px] uppercase tracking-wider text-muted-foreground">Prize range</dt>
                  <dd className="mt-0.5 font-medium text-gradient-flame">{m.avgPrize}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
