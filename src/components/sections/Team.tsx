"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/i18n";
import { Shell, Kicker, Standfirst } from "../primitives";

type Member = ReturnType<typeof useContent>["team"]["members"][number];

export default function Team() {
  const c = useContent();
  const [active, setActive] = useState<Member | null>(null);

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
              <button
                type="button"
                onClick={() => setActive(m)}
                aria-haspopup="dialog"
                className="group block w-full text-left"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-sand">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.role}`}
                      fill
                      sizes="(max-width: 640px) 50vw, 30vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-3 py-1.5 text-center font-condensed text-[0.66rem] font-bold uppercase tracking-[0.14em] text-on-dark transition-transform duration-300 group-hover:translate-y-0">
                    {c.ui.viewProfile} →
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">{m.name}</h3>
                <p className="font-condensed text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-navy dark:text-[#86acdb]">
                  {m.role}
                </p>
                <p className="mt-1 font-condensed text-[0.72rem] uppercase tracking-[0.1em] text-ink/45">
                  {m.fluency}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </Shell>

      {active && <MemberModal member={active} onClose={() => setActive(null)} closeLabel={c.ui.close} />}
    </section>
  );
}

function MemberModal({ member, onClose, closeLabel }: { member: Member; onClose: () => void; closeLabel: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    const el = ref.current;
    const focusables = () => Array.from(el?.querySelectorAll<HTMLElement>('a[href],button,[tabindex]:not([tabindex="-1"])') ?? []);
    focusables()[0]?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const i = list.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); list[list.length - 1].focus(); }
      else if (!e.shiftKey && i === list.length - 1) { e.preventDefault(); list[0].focus(); }
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; prev?.focus(); };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/65 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="member-name"
        className="relative grid w-full max-w-2xl gap-6 bg-cream p-6 shadow-2xl sm:grid-cols-[200px_1fr] sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label={closeLabel}
          title={closeLabel}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink/25 bg-cream text-base text-ink shadow-md transition-colors hover:border-orange-ink hover:bg-orange-ink hover:text-on-dark"
        >
          ✕
        </button>

        <div className="relative aspect-square w-full overflow-hidden bg-sand">
          {member.image ? (
            <Image src={member.image} alt={member.name} fill sizes="200px" className="object-cover object-top" />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-sand-deep">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" className="text-navy/30" aria-hidden>
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="currentColor" />
              </svg>
            </div>
          )}
        </div>

        <div className="min-w-0">
          <h3 id="member-name" className="font-display text-2xl font-semibold text-ink">{member.name}</h3>
          <p className="mt-1 font-condensed text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-navy dark:text-[#86acdb]">
            {member.role}
          </p>
          <div className="trade-line mt-4" />
          <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/75">{member.bio}</p>
          <p className="mt-5 font-condensed text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink/45">
            {member.fluency}
          </p>
          <button
            onClick={onClose}
            className="mt-7 font-condensed text-[0.74rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-5 py-2.5 transition-colors hover:bg-[#a8380a]"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
