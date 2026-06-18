import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Crosshair, Play, Trophy, Users, Wallet } from "lucide-react";
import heroImage1 from "@/assets/hero-freefire.jpg";
import heroImage2 from "@/assets/hero-freefire-2.png";
import heroImage3 from "@/assets/hero-freefire-3.png";
import heroImage4 from "@/assets/hero-freefire-4.png";
import { DownloadButton, Footer, Navbar } from "@/components/site/shared";

const heroSlides = [heroImage1, heroImage2, heroImage3, heroImage4];
const SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 1200;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JXM Tour Club — Bangladesh's #1 Free Fire Tournament Platform" },
      {
        name: "description",
        content:
          "Join 120K+ players on Bangladesh's premier Free Fire tournament platform. Compete daily, climb the leaderboard, and withdraw winnings instantly.",
      },
      { property: "og:title", content: "JXM Tour Club — Where Champions Rise" },
      {
        property: "og:description",
        content: "Bangladesh's premier Free Fire tournament platform. Daily matches, real prizes, instant payouts.",
      },
      { property: "og:image", content: heroImage1 },
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative isolate overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0 -z-10">
        {heroSlides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Free Fire battle royale action ${index + 1}`}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          />
        ))}
        {/* Subtle zoom animation on the active image */}
        <style>{`
          @keyframes heroSlideZoom {
            from { transform: scale(1); }
            to { transform: scale(1.08); }
          }
        `}</style>
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      <div className="relative mx-auto grid min-h-[82vh] max-w-[1200px] grid-cols-1 items-center gap-8 px-5 py-20 md:grid-cols-2 md:gap-12 lg:gap-20">
        {/* Left column — Text & CTA */}
        <div className="flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-flame/40 bg-flame/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-flame backdrop-blur">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-flame" />
            Season 7 — Now Live
          </span>

          <h1 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
            Where Champions{" "}
            <span className="text-gradient-flame">Rise.</span>
            <br />
            Where Legends{" "}
            <span className="text-gradient-flame">Earn.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/75">
            Bangladesh&apos;s premier Free Fire tournament platform — compete in daily
            matches, climb the leaderboard, and withdraw your winnings instantly.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            <DownloadButton size="lg" label="Join the Arena" />
            <Link
              to="/tournaments"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-surface-elevated"
            >
              <Play className="h-3.5 w-3.5 text-electric" /> Explore Tournaments
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="mt-8 flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className="group relative h-2 rounded-full transition-all duration-500"
                style={{
                  width: currentSlide === index ? "24px" : "8px",
                  backgroundColor: currentSlide === index ? "var(--flame)" : "rgba(255,255,255,0.25)",
                }}
              >
                {currentSlide === index && (
                  <span className="absolute inset-0 rounded-full bg-flame/50 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Right column — Stats cards */}
        <div className="flex flex-col gap-3 md:gap-4">
          {[
            { value: "120K+", label: "Active Players", icon: Users, desc: "Competing across Bangladesh" },
            { value: "\u09f35.8L+", label: "Prize Pool Paid", icon: Trophy, desc: "Real cash, instant withdrawals" },
            { value: "1,200+", label: "Matches Hosted", icon: Crosshair, desc: "Daily tournaments, zero downtime" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background/30 p-4 backdrop-blur-md transition-all hover:border-flame/40 hover:bg-background/50 md:p-5"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-flame/10 text-flame transition-transform group-hover:scale-110">
                <stat.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <div className="font-display text-2xl tracking-tight text-foreground lg:text-3xl">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                  {stat.label}
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
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
