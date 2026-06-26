"use client";

import { useContent } from "@/lib/i18n";

export default function DatelineRail() {
  const c = useContent();
  return (
    <aside
      aria-hidden
      className="fixed left-0 top-0 z-40 hidden h-screen flex-col items-center justify-between border-r border-ink/10 bg-cream/70 py-6 backdrop-blur-sm md:flex"
      style={{ width: "var(--rail-w)" }}
    >
      <span className="font-condensed text-[0.7rem] font-bold tracking-[0.2em] text-accent">d.</span>

      <div className="flex items-center">
        <span
          className="whitespace-nowrap font-condensed text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-ink/65"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          {c.dateline} · Est.
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        {c.spelit.segments.map((s) => (
          <span key={s.letter} className="font-condensed text-[0.7rem] font-bold tracking-widest text-ink/35">
            {s.letter}
          </span>
        ))}
      </div>
    </aside>
  );
}

export function MobileDatelineBar() {
  const c = useContent();
  return (
    <div className="flex items-center justify-between border-b border-ink/12 bg-cream px-5 py-2 md:hidden">
      <span className="font-condensed text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-ink/70">
        {c.dateline}
      </span>
      <span className="font-condensed text-[0.66rem] font-bold tracking-[0.2em] text-accent">No. 01</span>
    </div>
  );
}
