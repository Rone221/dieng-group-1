"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";
import Hero from "@/components/sections/Hero";
import PlaceProof from "@/components/sections/PlaceProof";
import Plate from "@/components/Plate";
import { Shell, Kicker, Standfirst } from "@/components/primitives";

export default function Home() {
  const c = useContent();
  return (
    <>
      <Hero />
      <PlaceProof />

      <section className="py-20 md:py-28">
        <Shell>
          <Kicker>{c.ui.inThisIssue}</Kicker>
          <Standfirst className="mt-4 max-w-2xl">{c.ui.inThisIssueLead}</Standfirst>

          <ul className="mt-12">
            {c.homeIssue.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 rule-t py-7 transition-colors hover:bg-sand/50"
                >
                  <span className="numeral text-3xl text-ink/15 transition-colors group-hover:text-accent">
                    {it.n}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">{it.label}</h2>
                    <p className="mt-1 text-[0.95rem] text-ink/60">{it.line}</p>
                  </div>
                  <span className="font-condensed text-sm text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-accent">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Shell>
      </section>

      <Plate
        src="/images/community-joal.jpg"
        alt="Senegalese women at work in Joal-Fadiouth"
        caption={`${c.route[3].place} · ${c.route[3].note}`}
        sizes="100vw"
        className="h-[40vh] w-full md:h-[52vh]"
      />

      <section className="py-20 md:py-24">
        <Shell>
          <div className="grid items-center gap-8 md:grid-cols-12">
            <h2 className="display-h2 md:col-span-8">{c.ui.closingTitle}</h2>
            <div className="md:col-span-4 md:text-right">
              <Link
                href="/contact"
                className="inline-block font-condensed text-[0.82rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-7 py-3.5 transition-colors hover:bg-[#a8380a]"
              >
                {c.ui.cta}
              </Link>
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}
