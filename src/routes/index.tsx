import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="bg-bg text-fg">
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col items-center justify-center px-6 pb-16">
          <h1 className="text-center text-[length:var(--text-hero)] font-semibold uppercase leading-[var(--leading-tight)] tracking-[var(--tracking-display)]">
            Vantage
          </h1>
          <p className="label mt-5">Artist Bookings</p>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
