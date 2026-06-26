"use client";

import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst } from "../primitives";

export default function Podcast() {
  const c = useContent();
  return (
    <section id="podcast" className="bg-navy py-20 text-on-dark md:py-28">
      <Shell>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-4">
              <span className="numeral text-on-dark/15">08</span>
              <Kicker className="text-gold">{c.podcast.kicker}</Kicker>
            </div>
            <h2 className="display-h2 mt-4 text-on-dark">{c.podcast.title}</h2>
            <Standfirst className="mt-5 text-on-dark/85">{c.podcast.standfirst}</Standfirst>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {["YouTube", "Spotify", "Apple Podcasts"].map((p) => (
                <a key={p} href="#" className="font-condensed text-[0.74rem] font-semibold uppercase tracking-[0.14em] text-on-dark/70 link-underline hover:text-gold">
                  {p}
                </a>
              ))}
            </div>
          </div>

          <ul className="md:col-span-7 md:border-l md:border-on-dark/15 md:pl-10">
            {c.podcast.episodes.map((title, i) => (
              <li key={title} className="flex items-center gap-5 border-b border-on-dark/12 py-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <div className="min-w-0 flex-1">
                  <span className="font-condensed text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">
                    {`${i + 1}`.padStart(2, "0")}
                  </span>
                  <p className="font-display text-lg font-semibold text-on-dark">{title}</p>
                </div>
                <span className="shrink-0 font-condensed text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-on-dark/45">
                  {c.podcast.comingSoon}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
