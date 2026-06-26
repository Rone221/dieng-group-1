"use client";

import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst, Spread } from "../primitives";
import Plate from "../Plate";

export default function Impact() {
  const c = useContent();
  return (
    <section id="impact" className="bg-sand py-20 md:py-28">
      <Shell>
        <div className="flex items-baseline gap-4">
          <span className="numeral text-ink/10">03</span>
          <Kicker>{c.impact.kicker}</Kicker>
        </div>
        <Standfirst className="mt-4 max-w-2xl">{c.impact.standfirst}</Standfirst>

        <div className="mt-14 space-y-16">
          {c.fieldNotes.map((n, i) => (
            <Spread
              key={n.title}
              reverse={i % 2 === 1}
              media={
                <Plate
                  src={n.image}
                  alt={n.title}
                  caption={n.tag.replace(/^.*· /, "")}
                  sizes="(max-width: 768px) 100vw, 52vw"
                  className="aspect-[16/11] w-full"
                />
              }
            >
              <span className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.16em] text-accent">
                {n.tag}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink md:text-3xl">
                {n.title}
              </h3>
              <p className="mt-4 measure text-[0.98rem] leading-relaxed text-ink/70">{n.body}</p>
            </Spread>
          ))}
        </div>
      </Shell>
    </section>
  );
}
