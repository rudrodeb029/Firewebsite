import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { Crosshair, Play, Trophy, Users, Wallet } from "lucide-react";
import heroImage1 from "@/assets/hero-freefire.jpg";
import heroImage2 from "@/assets/hero-freefire-2.png";
import heroImage3 from "@/assets/hero-freefire-3.png";
import heroImage4 from "@/assets/hero-freefire-4.png";
import { DownloadButton, Footer, Navbar } from "@/components/site/shared";
import { CyberCard } from "@/components/site/CyberCard";

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
          "Join 120K+ players on Bangladesh's premier Free Fire tournament platform. Complete daily, climb the leaderboard, and withdraw winnings instantly.",
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
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-6xl">
            Where Champions{" "}
            <span className="text-gradient-flame">Rise.</span>
            <br />
            Where Legends{" "}
            <span className="text-gradient-flame">Earn.</span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/75">
            Bangladesh&apos;s premier Free Fire tournament platform — complete in daily
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
            { value: "120K+", label: "Active Players", icon: Users, desc: "", color: "purple" },
            { value: "৳5.8L+", label: "Prize Pool Paid", icon: Trophy, desc: "", color: "blue" },
            { value: "1,200+", label: "Matches Hosted", icon: Crosshair, desc: "", color: "orange" },
          ].map((stat, i) => (
            <CyberCard
              key={i}
              color={stat.color as any}
              showSlantedBars={true}
              hoverEffect={true}
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#1d1929] border border-border/40">
                  <stat.icon className={`h-5 w-5 ${
                    stat.color === "purple" ? "text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]" :
                    stat.color === "blue" ? "text-sky-400 drop-shadow-[0_0_5px_rgba(14,165,233,0.5)]" :
                    "text-amber-400 drop-shadow-[0_0_5px_rgba(245,158,11,0.5)]"
                  }`} strokeWidth={2} />
                </div>
                <div>
                  <div className="font-display text-2xl tracking-tight text-foreground lg:text-3xl animate-pulse-slow">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                    {stat.label}
                  </div>
                  {stat.desc && (
                    <div className="mt-0.5 text-[11px] text-muted-foreground">
                      {stat.desc}
                    </div>
                  )}
                </div>
              </div>
            </CyberCard>
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
        {items.map((i, index) => {
          const colors: ("purple" | "blue" | "orange")[] = ["blue", "purple", "orange"];
          const color = colors[index % 3];
          return (
            <Link
              key={i.to}
              to={i.to}
              className="block group"
            >
              <CyberCard color={color} showSlantedBars={true} hoverEffect={true} className="h-full">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[#141221] border border-border/30">
                    <i.icon className={`h-4 w-4 ${
                      color === "purple" ? "text-purple-400 drop-shadow-[0_0_4px_rgba(168,85,247,0.5)]" :
                      color === "blue" ? "text-sky-400 drop-shadow-[0_0_4px_rgba(14,165,233,0.5)]" :
                      "text-amber-400 drop-shadow-[0_0_4px_rgba(245,158,11,0.5)]"
                    }`} strokeWidth={2.2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{i.label}</div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {i.hint}
                    </div>
                  </div>
                </div>
              </CyberCard>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
