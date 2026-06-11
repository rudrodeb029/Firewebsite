import { createFileRoute, Link } from "@tanstack/react-router";
import { Play, Trophy, Users, Wallet } from "lucide-react";
import heroImage from "@/assets/hero-freefire.jpg";
import { DownloadButton, Footer, Navbar } from "@/components/site/shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jxm Tour Club — Free Fire Tournaments" },
      {
        name: "description",
        content:
          "Daily Free Fire tournaments. Real cash prizes, instant payouts, anti-cheat protected.",
      },
      { property: "og:title", content: "Jxm Tour Club — Free Fire Tournaments" },
      {
        property: "og:description",
        content: "Daily Free Fire tournaments with real cash prizes.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground text-[15px] leading-relaxed antialiased">
      <Navbar />
      <Hero />
      <Quick />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImage}
          alt="Free Fire battle royale action"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative mx-auto flex min-h-[82vh] max-w-[900px] flex-col items-center justify-center px-5 py-20 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-flame backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
          Season 7 · Live
        </span>

        <h1 className="mt-5 font-display text-4xl leading-[1] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl md:text-6xl">
          Compete. <span className="text-gradient-flame">Conquer.</span> Cash out.
        </h1>

        <p className="mt-4 max-w-md text-sm text-foreground/80">
          Daily Free Fire tournaments. Real prizes. Instant payouts.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          <DownloadButton size="lg" label="Download app" />
          <Link
            to="/tournaments"
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-surface-elevated"
          >
            <Play className="h-3.5 w-3.5 text-electric" /> View tournaments
          </Link>
        </div>

        <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
          <span><span className="font-semibold text-foreground">120K+</span> players</span>
          <span className="h-3 w-px bg-border" />
          <span><span className="font-semibold text-foreground">$5.8K</span> paid out</span>
          <span className="h-3 w-px bg-border" />
          <span><span className="font-semibold text-foreground">1,200+</span> matches</span>
        </div>
      </div>
    </section>
  );
}

function Quick() {
  const items = [
    { to: "/tournaments", icon: Trophy, label: "Browse open lobbies", hint: "Live & upcoming" },
    { to: "/modes", icon: Users, label: "Pick your mode", hint: "Solo · Duo · Squad" },
    { to: "/how-it-works", icon: Wallet, label: "How payouts work", hint: "Instant PayPal" },
  ] as const;
  return (
    <section className="border-t border-border/50 py-12">
      <div className="mx-auto grid max-w-[1100px] gap-3 px-5 sm:grid-cols-3">
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="group flex items-center gap-3 rounded-2xl border border-border bg-surface p-4 hover:-translate-y-0.5 hover:border-flame/40 transition-all"
          >
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-flame/10 text-flame">
              <i.icon className="h-4 w-4" strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-sm font-semibold">{i.label}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {i.hint}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
