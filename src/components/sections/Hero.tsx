"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";
import { Kicker, Standfirst } from "../primitives";
import Plate from "../Plate";

export default function Hero() {
  const c = useContent();
  return (
    <section id="top" className="rule-b">
      <div className="grid items-stretch md:grid-cols-12">
        <div className="order-2 md:order-1 md:col-span-7">
          <Plate
            src="/images/dakar-skyline.jpg"
            alt="The Dakar waterfront at golden hour, with a ship on the bay — a West African trade gateway"
            caption={`${c.route[3].place} · ${c.route[3].note}`}
            grain
            priority
            sizes="(max-width: 768px) 100vw, 58vw"
            className="h-[52vh] w-full md:h-[78vh]"
          />
        </div>

        <div className="order-1 flex flex-col justify-center px-6 py-12 md:order-2 md:col-span-5 md:px-10 md:py-16">
          <Kicker className="text-accent">{c.hero.kicker}</Kicker>
          <h1 className="display-h1 mt-5">{c.hero.title}</h1>
          <Standfirst className="mt-6">{c.hero.standfirst}</Standfirst>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="font-condensed text-[0.82rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-7 py-3.5 transition-colors hover:bg-[#a8380a]"
            >
              {c.ui.cta}
            </Link>
            <Link
              href="/dispatch"
              className="font-condensed text-[0.82rem] font-bold uppercase tracking-[0.14em] text-ink link-underline"
            >
              {c.ui.readDispatch} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
