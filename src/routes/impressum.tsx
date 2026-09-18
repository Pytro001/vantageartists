import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { CopyEmail } from "@/components/copy-email";

export const Route = createFileRoute("/impressum")({ component: Impressum });

function Impressum() {
  return (
    <div className="flex min-h-dvh flex-col bg-bg text-fg">
      <SiteHeader />
      <main className="mx-auto w-full max-w-xl flex-1 px-6 pb-16 pt-16 md:px-10 md:pb-24">
        <p className="label">Legal</p>
        <h1 className="mt-4 text-4xl font-semibold uppercase tracking-[var(--tracking-display)] md:text-5xl">
          Impressum
        </h1>
        <div className="mt-12 space-y-8 text-[0.95rem] leading-normal text-muted">
          <section>
            <h2 className="label mb-3 text-fg">Angaben gemäß § 5 DDG</h2>
            <p>
              HUGE Production GmbH
              <br />
              Sebnitzer Str. 35
              <br />
              01099 Dresden
              <br />
              Germany
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Vertreten durch</h2>
            <p>
              Tadeus Jonathan Mehl
              <br />
              Konstantin Saifoulline
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Register</h2>
            <p>
              Amtsgericht Dresden
              <br />
              HRB 46720
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Kontakt</h2>
            <p>
              <CopyEmail className="text-fg" />
            </p>
          </section>
          <section>
            <h2 className="label mb-3 text-fg">Marke</h2>
            <p>Vantage Artists is the booking imprint of HUGE Production GmbH.</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
