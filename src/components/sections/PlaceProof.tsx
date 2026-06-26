"use client";

import { useContent } from "@/lib/i18n";
import RouteLine from "../RouteLine";

export default function PlaceProof() {
  const c = useContent();
  return (
    <section className="relative overflow-hidden bg-navy text-on-dark">
      {/* Decorative trade route — desktop only (it can't align with the wrapped grid on mobile) */}
      <RouteLine className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-70 md:block" />
      <div className="relative mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-14">
        <p className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold">
          {c.routeKicker}
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:flex md:flex-wrap md:items-end md:gap-x-8 md:gap-y-4">
          {c.route.map((r) => (
            <li key={r.place} className="flex flex-col">
              <span className="font-display text-xl font-semibold leading-tight md:text-2xl">{r.place}</span>
              <span className="font-condensed text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-on-dark/70">
                {r.note}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-condensed text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-on-dark/70">
          {c.expansion}
        </p>
      </div>
    </section>
  );
}
