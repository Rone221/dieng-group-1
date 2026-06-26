"use client";

import { useContent } from "@/lib/i18n";

export default function SpelitLens() {
  const c = useContent();
  return (
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-ink/12 bg-ink/12 sm:grid-cols-3 lg:grid-cols-6">
      {c.spelit.segments.map((s, i) => (
        <li
          key={s.letter}
          className="group/seg flex flex-col bg-sand p-5 transition-colors hover:bg-cream"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-display text-4xl font-semibold leading-none text-ink transition-colors group-hover/seg:text-accent">
              {s.letter}
            </span>
            <span className="font-condensed text-[0.66rem] font-semibold tracking-widest text-ink/35">
              0{i + 1}
            </span>
          </div>
          <span className="mt-3 font-condensed text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-navy dark:text-[#86acdb]">
            {s.word}
          </span>
          <p className="mt-2 text-[0.86rem] leading-snug text-ink/65">{s.gloss}</p>
        </li>
      ))}
    </ul>
  );
}
