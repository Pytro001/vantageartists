import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CopyEmail } from "@/components/copy-email";

export const Route = createFileRoute("/datenschutz")({ component: Privacy });

function Privacy() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl flex-1 px-6 pb-16 pt-16 md:px-10 md:pb-24">
        <p className="label">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[var(--tracking-display)] md:text-5xl">
          Datenschutz
        </h1>
        <div className="mt-12 space-y-8 text-[0.95rem] leading-normal text-muted">
          <section>
            <h2 className="label mb-3 text-fg">Verantwortlicher</h2>
            <p>
              HUGE Production GmbH
              <br />
              Sebnitzer Str. 35, 01099 Dresden
              <br />
              <CopyEmail className="text-fg" />
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Hosting</h2>
            <p>
              This website is hosted by Vercel Inc. Server logs (IP address, time,
              requested URL, user agent) may be processed to deliver and secure the
              site. Legal basis: Art. 6 (1) (f) GDPR.
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Contact</h2>
            <p>
              If you write to us, we process the data you send solely to handle your
              inquiry, then delete it when no longer needed. No newsletter. No
              tracking cookies. No analytics.
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Rights</h2>
            <p>
              You may request access, correction, deletion, restriction, portability,
              and lodge a complaint with the Sächsische Datenschutz- und
              Transparenzbeauftragte.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
