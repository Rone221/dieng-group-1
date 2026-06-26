"use client";

import Image from "next/image";
import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst } from "../primitives";

export default function Team() {
  const c = useContent();
  return (
    <section id="team" className="py-20 md:py-28">
      <Shell>
        <div className="flex items-baseline gap-4">
          <span className="numeral text-ink/10">04</span>
          <Kicker>{c.team.kicker}</Kicker>
        </div>
        <Standfirst className="mt-4 max-w-2xl">{c.team.standfirst}</Standfirst>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {c.team.members.map((m) => (
            <li key={m.name}>
              <div className="relative aspect-square w-full overflow-hidden bg-sand">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.role}`}
                    fill
                    sizes="(max-width: 640px) 50vw, 30vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-sand-deep">
                    <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="text-navy/35 dark:text-on-dark/30" aria-hidden>
                      <circle cx="12" cy="8" r="4" fill="currentColor" />
                      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor" />
                    </svg>
                    <span className="mt-3 font-condensed text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink/55">
                      {c.team.pending}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</h3>
              <p className="font-condensed text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-navy dark:text-[#86acdb]">
                {m.role}
              </p>
              <p className="mt-1 font-condensed text-[0.72rem] uppercase tracking-[0.1em] text-ink/45">
                {m.fluency}
              </p>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
