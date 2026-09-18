import { createFileRoute } from "@tanstack/react-router";
import { Logo } from "@/components/logo";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex flex-1 flex-col">
          <section className="flex flex-1 flex-col items-center justify-center px-6">
            <Logo className="h-28 w-auto md:h-44" />
            <h1 className="mt-10 text-center text-[length:var(--text-hero)] font-semibold uppercase leading-[var(--leading-tight)] tracking-[var(--tracking-display)]">
              Vantage
            </h1>
            <p className="label mt-4">Artist Booking</p>
          </section>
          <section
            id="artists"
            className="flex flex-col items-center px-6 pb-12 pt-4 md:pb-16"
          >
            <p className="label">Artists</p>
            <a
              href="https://www.pytromusic.com"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-center text-[1.25rem] font-semibold uppercase tracking-[0.16em] transition-opacity duration-150 hover:opacity-50 md:text-[1.5rem]"
            >
              Pytro
            </a>
            <p className="mt-1 text-[0.8rem] text-muted">Techno · Speed House</p>
          </section>
        </main>
      </div>
      <SiteFooter />
    </div>
  );
}
