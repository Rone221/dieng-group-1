"use client";

import Link from "next/link";
import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Spread, laneText } from "../primitives";
import Plate from "../Plate";

export default function WhoWeServe() {
  const c = useContent();
  return (
    <section id="serve" className="bg-sand py-20 md:py-28">
      <Shell>
        <div className="flex items-baseline gap-4">
          <span className="numeral text-ink/10">02</span>
          <Kicker>{c.serve.kicker}</Kicker>
        </div>
        <p className="standfirst mt-4 max-w-2xl">{c.serve.standfirst}</p>

        <div className="mt-12 space-y-px">
          {c.lanes.map((l, i) => (
            <div key={l.name} className="bg-cream p-6 md:p-9">
              <Spread
                reverse={i % 2 === 1}
                media={
                  <Plate
                    src={l.image}
                    alt={l.line}
                    caption={l.caption}
                    sizes="(max-width: 768px) 100vw, 52vw"
                    className="aspect-[16/10] w-full"
                  />
                }
              >
                <div className="flex items-baseline gap-4">
                  <span className={`numeral text-3xl ${laneText[l.lane]}`}>{l.numeral}</span>
                  <Kicker lane={l.lane}>{l.name}</Kicker>
                </div>
                <p className="mt-4 font-display text-xl font-semibold leading-snug text-ink">{l.line}</p>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink/60">{l.services.join(" · ")}</p>
                <Link
                  href="/services"
                  className={`mt-5 inline-block font-condensed text-[0.78rem] font-bold uppercase tracking-[0.14em] link-underline ${laneText[l.lane]}`}
                >
                  {c.ui.enterLane} →
                </Link>
              </Spread>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
