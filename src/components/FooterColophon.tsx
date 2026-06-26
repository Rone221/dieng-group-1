"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";

export default function FooterColophon() {
  const c = useContent();
  const year = 2026;
  return (
    <footer className="bg-navy text-on-dark">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Image src="/logo.png" alt="The Dieng Group" width={170} height={54} className="h-12 w-auto bg-on-dark px-3 py-2" />
            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-on-dark/70">{c.footer.blurb}</p>
            <div className="mt-6 flex items-center gap-2.5">
              {c.spelit.segments.map((s) => (
                <span key={s.letter} className="font-condensed text-[0.72rem] font-bold tracking-widest text-on-dark/45">
                  {s.letter}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.sections}
            </h3>
            <ul className="mt-4 space-y-2.5 text-[0.92rem] text-on-dark/75">
              {c.nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-on-dark">{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
              {c.footer.desk}
            </h3>
            <address className="mt-4 space-y-2.5 text-[0.92rem] not-italic text-on-dark/75">
              <p>{c.site.address}</p>
              <p><a href={`tel:${c.site.phone.replace(/[^+\d]/g, "")}`} className="hover:text-on-dark">{c.site.phone}</a></p>
              <p><a href={`mailto:${c.site.email}`} className="hover:text-on-dark">{c.site.email}</a></p>
            </address>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1">
              {c.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-condensed text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-on-dark/60 hover:text-gold">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-on-dark/15 pt-6 text-[0.74rem] text-on-dark/45 sm:flex-row sm:items-center">
          <span className="font-condensed uppercase tracking-[0.16em]">{c.dateline} · Est.</span>
          <span>© {year} The Dieng Group, LLC. {c.footer.rights}</span>
        </div>
      </div>
    </footer>
  );
}
