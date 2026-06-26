"use client";

import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst, IndexedList, HallmarkSeal, TradeLine, laneText } from "../primitives";

export default function Services() {
  const c = useContent();
  return (
    <section id="services" className="py-20 md:py-28">
      <Shell>
        <Kicker>{c.services.kicker}</Kicker>
        <Standfirst className="mt-4 max-w-2xl">{c.services.standfirst}</Standfirst>

        <div className="mt-14 space-y-14">
          {c.lanes.map((l) => (
            <div key={l.name} className="grid gap-6 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className={`numeral text-4xl ${laneText[l.lane]}`}>{l.numeral}</span>
                <Kicker lane={l.lane} className="mt-3">{l.name}</Kicker>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-ink/65">{l.line}</p>
              </div>
              <div className="md:col-span-8">
                <IndexedList items={l.services} lane={l.lane} columns={2} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <TradeLine />
          <div className="mt-8">
            <Kicker>{c.services.tiersKicker}</Kicker>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-y-10 sm:grid-cols-4">
            {c.tiers.map((t) => (
              <HallmarkSeal key={t.name} name={t.name} note={t.note} />
            ))}
          </div>
        </div>

        <div className="mt-16 border border-ink/12 bg-sand/60 p-7 md:p-9">
          <Kicker>{c.services.extendedKicker}</Kicker>
          <p className="mt-3 max-w-xl text-[0.92rem] text-ink/65">{c.partnerServices.line}</p>
          <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
            {c.partnerServices.items.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-[0.9rem] text-ink/80">
                <span className="h-1.5 w-1.5 bg-gold" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
