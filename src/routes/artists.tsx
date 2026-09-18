import { createFileRoute } from "@tanstack/react-router";
import { BOOKING_MAIL, SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/artists")({ component: Artists });

function Artists() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-16">
        <p className="label">Artists</p>
        <h1 className="mt-6 text-center text-[length:var(--text-hero)] font-semibold uppercase leading-[var(--leading-tight)] tracking-[var(--tracking-display)]">
          Pytro
        </h1>
        <p className="mt-6 max-w-sm text-center text-body leading-normal text-muted">
          Techno and speed house. Booking worldwide.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={BOOKING_MAIL}
            className="inline-flex min-h-11 items-center text-[0.85rem] text-fg transition-opacity duration-150 hover:opacity-50"
          >
            Book
          </a>
          <a
            href="https://www.pytromusic.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center text-[0.85rem] text-muted transition-opacity duration-150 hover:opacity-50"
          >
            pytromusic.com
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
