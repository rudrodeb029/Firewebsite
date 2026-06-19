import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageShell } from "@/components/site/shared";
import { CyberForm } from "@/components/site/CyberForm";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join the Arena — JXM Tour Club" },
      { name: "description", content: "Register your operator profile on JXM Tour Club. Start completing in Free Fire tournaments." },
      { property: "og:title", content: "Join the Arena — JXM Tour Club" },
      { property: "og:description", content: "Register your operator profile." },
    ],
  }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <PageShell>
      <PageHeader
        title={<>Access the <span className="text-gradient-flame">Arena</span></>}
        desc="Synchronize your credentials to complete, climb rank, and claim payouts."
      />
      
      <div className="relative z-10 w-full px-5 pb-16 flex justify-center">
        <CyberForm />
      </div>
    </PageShell>
  );
}
