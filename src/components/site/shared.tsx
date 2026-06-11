import { Link } from "@tanstack/react-router";
import { Download, Mail, MessageCircle, Shield, Twitter } from "lucide-react";

export const APK_URL = "https://drive.google.com/uc?id=1zyXmADCKSLJZNf-w2DqBIdoeiLHVctFQ&export=download";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="font-display text-base tracking-[0.15em]">
        JXM <span className="text-gradient-flame">TOUR CLUB</span>
      </span>
    </Link>
  );
}


export function DownloadButton({
  size = "md",
  variant = "primary",
  className = "",
  label = "Download",
}: {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
  label?: string;
}) {
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-xs",
    lg: "px-5 py-2.5 text-sm",
  };
  const variants = {
    primary: "btn-3d bg-gradient-flame text-flame-foreground",
    ghost: "btn-3d border border-border bg-background/60 text-foreground backdrop-blur",
  };
  return (
    <a
      href={APK_URL}
      download
      className={`inline-flex items-center gap-1.5 rounded-full font-medium ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Download className="h-3.5 w-3.5" strokeWidth={2.5} />
      {label}
    </a>
  );
}

const NAV = [
  { to: "/tournaments", label: "Tournaments" },
  { to: "/modes", label: "Modes" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-2.5">
        <Logo />
        <nav className="hidden items-center gap-7 text-xs text-muted-foreground md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="hover:text-foreground"
              activeProps={{ className: "text-flame" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <DownloadButton size="sm" label="Get the app" />
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/40">
      <div className="mx-auto max-w-[1280px] px-5 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-3 max-w-[16rem] text-[11px] leading-relaxed text-muted-foreground">
              Daily Free Fire tournaments with real cash prizes. Anti-cheat protected, instant payouts.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <a href="#" aria-label="Twitter" className="grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground hover:text-flame">
                <Twitter className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Discord" className="grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground hover:text-flame">
                <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
              <a href="#" aria-label="Email" className="grid h-8 w-8 place-items-center rounded-lg border border-border/60 bg-background/50 text-muted-foreground hover:text-flame">
                <Mail className="h-3.5 w-3.5" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">Explore</div>
            <ul className="mt-3 space-y-2 text-[11px] text-muted-foreground">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-flame">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">Legal</div>
            <ul className="mt-3 space-y-2 text-[11px] text-muted-foreground">
              <li><a href="#" className="hover:text-flame">Terms of Service</a></li>
              <li><a href="#" className="hover:text-flame">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-flame">Refund Policy</a></li>
              <li><a href="#" className="hover:text-flame">Responsible Gaming</a></li>
            </ul>
          </div>

          {/* Trust */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">Trust</div>
            <ul className="mt-3 space-y-2 text-[11px] text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-electric" strokeWidth={2} />
                Fair play guaranteed
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-electric" strokeWidth={2} />
                Instant withdrawals
              </li>
              <li className="flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-electric" strokeWidth={2} />
                24/7 support
              </li>
              <li className="mt-3 text-[10px] text-muted-foreground/60">
                Not affiliated with Garena. 18+ only.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-5 py-3 sm:flex-row">
          <span className="text-[10px] text-muted-foreground">
            © {new Date().getFullYear()} Jxm Tour Club. All rights reserved.
          </span>
          <a
            href={APK_URL}
            download
            className="inline-flex items-center gap-1 text-[10px] font-medium text-flame hover:underline"
          >
            <Download className="h-3 w-3" strokeWidth={2} />
            Download APK
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-[820px] px-5 pb-10 pt-16 text-center">
      <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-flame">
        {eyebrow}
      </div>
      <h1 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">{title}</h1>
      {desc && <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground text-[15px] leading-relaxed antialiased">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
