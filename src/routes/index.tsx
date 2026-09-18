import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6">
        <Logo className="h-28 w-auto md:h-44" />
        <h1 className="mt-10 text-center text-[length:var(--text-hero)] font-semibold uppercase leading-[var(--leading-tight)] tracking-[var(--tracking-display)]">
          Vantage
        </h1>
        <p className="label mt-4">Artist Booking</p>
      </main>
      <SiteFooter />
    </div>
  );
}
