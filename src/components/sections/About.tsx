"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst, TradeLine } from "../primitives";

export default function About() {
  const c = useContent();
  return (
    <section id="about" className="py-20 md:py-28">
      <Shell>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="numeral text-ink/10">01</span>
              <Kicker>{c.about.kicker}</Kicker>
            </div>
            <Standfirst className="mt-4">{c.about.standfirst}</Standfirst>

            <figure className="mt-8 overflow-hidden border border-ink/12 bg-sand">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/images/infographics/mission-vision-values.png"
                  alt="The Dieng Group mission, vision and core values infographic"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain p-2"
                />
              </div>
              <figcaption className="border-t border-ink/12 px-4 py-3 font-condensed text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
                {c.about.infographicCaption}
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-7">
            <TradeLine />
            <ol className="mt-2">
              {c.values.map((v, i) => (
                <li key={v.title} className="grid grid-cols-[auto_1fr] gap-x-5 rule-b py-5">
                  <span className="font-condensed text-[0.8rem] font-bold tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{v.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">{v.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Shell>
    </section>
  );
}
