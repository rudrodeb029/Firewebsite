import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PageHeader, PageShell } from "@/components/site/shared";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Jxm Tour Club" },
      { name: "description", content: "Answers about payouts, devices, fair play and account safety on Jxm Tour Club." },
      { property: "og:title", content: "FAQ — Jxm Tour Club" },
      { property: "og:description", content: "Common questions about Jxm Tour Club tournaments." },
    ],
  }),
  component: FaqPage,
});

const GROUPS: { label: string; items: { q: string; a: string }[] }[] = [
  {
    label: "Payments",
    items: [
      { q: "How fast are withdrawals?", a: "PayPal usually under 5 minutes. Bank transfers under 30 minutes on weekdays." },
      { q: "Is there a minimum withdrawal?", a: "No minimum — withdraw any winning balance, anytime." },
      { q: "Are entries refundable?", a: "Yes if the lobby fails to fill or a match is cancelled by us." },
    ],
  },
  {
    label: "Account",
    items: [
      { q: "Supported devices?", a: "Android 7 and above. iOS in private beta — join the waitlist from the app." },
      { q: "Can I change my linked Free Fire UID?", a: "Once per 30 days from Settings → Linked Accounts." },
      { q: "Is Jxm Tour Club affiliated with Garena?", a: "No. We are an independent tournament platform." },
    ],
  },
  {
    label: "Fair play",
    items: [
      { q: "How do you prevent cheating?", a: "Automated kill-feed analysis plus manual review of finals. Permanent bans for confirmed cheats." },
      { q: "What if I'm wrongly banned?", a: "Appeal from the app within 7 days. Most appeals resolve in 48 hours." },
    ],
  },
];

function FaqPage() {
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <PageShell>
      <PageHeader
        eyebrow="FAQ"
        title={<>Questions, <span className="text-gradient-flame">answered</span></>}
        desc="Can't find what you need? Tap the support button inside the app."
      />
      <div className="mx-auto max-w-[720px] space-y-8 px-5 pb-20">
        {GROUPS.map((g, gi) => (
          <div key={g.label}>
            <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-electric">
              {g.label}
            </div>
            <div className="divide-y divide-border rounded-2xl border border-border bg-surface">
              {g.items.map((f, i) => {
                const key = `${gi}-${i}`;
                const isOpen = open === key;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? null : key)}
                      className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium hover:bg-surface-elevated"
                    >
                      {f.q}
                      <ChevronDown
                        className={`h-4 w-4 text-muted-foreground transition-transform ${
                          isOpen ? "rotate-180 text-flame" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3 text-xs text-muted-foreground animate-fade-in">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 text-xs">
          <MessageCircle className="h-4 w-4 text-flame" />
          Still stuck? Email{" "}
          <a className="text-flame hover:underline" href="mailto:help@jxmtourclub.app">
            help@jxmtourclub.app
          </a>
        </div>
      </div>
    </PageShell>
  );
}
