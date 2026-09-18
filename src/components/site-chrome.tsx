import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export const BOOKING_MAIL =
  "mailto:bookings@vantageartists.xyz?subject=Booking%20inquiry";
export const BOOKING_EMAIL = "bookings@vantageartists.xyz";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
      <Link
        to="/"
        className="flex items-center gap-3 text-fg"
        aria-label="Vantage home"
      >
        <Logo className="h-6 w-auto md:h-7" title="" />
        <span className="text-[0.95rem] font-semibold uppercase tracking-[0.18em]">
          Vantage
        </span>
      </Link>
      <nav className="flex items-center gap-6 md:gap-10">
        <Link
          to="/artists"
          className="inline-flex min-h-11 items-center text-[0.85rem] text-fg transition-opacity duration-150 hover:opacity-50"
        >
          Artists
        </Link>
        <a
          href={BOOKING_MAIL}
          className="inline-flex min-h-11 items-center text-[0.85rem] text-fg transition-opacity duration-150 hover:opacity-50"
        >
          Booking
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-inverse px-6 py-12 text-on-inverse md:px-12 md:py-16">
      <div className="flex flex-col items-center gap-6 text-center">
        <a
          href={BOOKING_MAIL}
          className="text-[0.95rem] tracking-wide transition-opacity duration-150 hover:opacity-60"
        >
          {BOOKING_EMAIL}
        </a>
        <p className="text-[0.8rem] tracking-[0.08em] text-muted">
          by Vantage Artists
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link
            to="/impressum"
            className="inline-flex min-h-11 items-center text-[0.75rem] uppercase tracking-[0.14em] text-muted transition-opacity duration-150 hover:text-on-inverse"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz"
            className="inline-flex min-h-11 items-center text-[0.75rem] uppercase tracking-[0.14em] text-muted transition-opacity duration-150 hover:text-on-inverse"
          >
            Datenschutz
          </Link>
        </nav>
      </div>
    </footer>
  );
}
