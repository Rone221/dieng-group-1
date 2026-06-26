"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useContent } from "@/lib/i18n";
import { Kicker, Standfirst } from "./primitives";

function useDialogA11y(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previously = document.activeElement as HTMLElement | null;
    const el = ref.current;
    const focusables = () =>
      Array.from(
        el?.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    focusables()[0]?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab") return;
      const list = focusables();
      if (!list.length) return;
      const i = list.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) {
        e.preventDefault();
        list[list.length - 1].focus();
      } else if (!e.shiftKey && i === list.length - 1) {
        e.preventDefault();
        list[0].focus();
      }
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previously?.focus();
    };
  }, [onClose]);
  return ref;
}

export default function DispatchDesk() {
  const c = useContent();
  const d = c.dispatch;
  const [open, setOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-5">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-navy">
          <Image
            src={d.cover}
            alt="The Meridian Dispatch, Issue 01 cover"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-navy/85 via-transparent to-navy/40 p-6">
            <span className="font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-on-dark/90">
              The Meridian Dispatch
            </span>
            <div>
              <p className="font-display text-2xl font-semibold leading-tight text-on-dark">{d.title}</p>
              <span className="mt-2 inline-block font-condensed text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">
                Issue 01
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-7">
        <Kicker>{d.kicker}</Kicker>
        <h2 className="display-h2 mt-4">{d.title}</h2>
        <Standfirst className="mt-5 measure">{d.blurb}</Standfirst>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div>
            <button
              onClick={() => setOpen(true)}
              className="font-condensed text-[0.8rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-ink px-6 py-3.5 transition-colors hover:bg-navy"
            >
              {d.download}
            </button>
            <p className="mt-3 text-[0.85rem] text-ink/60">{d.browseNote}</p>
          </div>

          <div className="border-l border-ink/12 pl-8">
            {subscribed ? (
              <p className="text-[0.9rem] text-ink/75">{d.subscribedThanks}</p>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                <label className="field-label" htmlFor="nl-email">{d.subscribeLabel}</label>
                <input id="nl-email" type="email" required placeholder="you@example.com" className="field-input mt-2" />
                <button type="submit" className="mt-4 font-condensed text-[0.78rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-5 py-2.5 transition-colors hover:bg-[#a8380a]">
                  {c.ui.subscribe}
                </button>
                <p className="mt-3 text-[0.78rem] text-ink/55">{d.newsletterNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>

      {open && <CaptureModal onClose={() => setOpen(false)} />}
    </div>
  );
}

function CaptureModal({ onClose }: { onClose: () => void }) {
  const c = useContent();
  const d = c.dispatch;
  const [done, setDone] = useState(false);
  const ref = useDialogA11y(onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-4 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="capture-title"
        className="relative w-full max-w-lg bg-cream p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close dialog" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center font-condensed text-ink/70 hover:text-ink">
          ✕
        </button>

        {done ? (
          <div className="py-6 text-center">
            <span className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] text-teal-ink dark:text-[#5cc3b0]">
              {d.modalDoneKicker}
            </span>
            <p id="capture-title" className="mt-3 font-display text-2xl font-semibold text-ink">{d.modalDoneTitle}</p>
            <p className="mt-2 text-[0.9rem] text-ink/65">{d.modalDoneBody}</p>
          </div>
        ) : (
          <>
            <span className="font-condensed text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent">
              {d.kicker}
            </span>
            <p id="capture-title" className="mt-2 font-display text-2xl font-semibold text-ink">{d.modalTitle}</p>

            <form className="mt-6 grid gap-5" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <div>
                <label className="field-label" htmlFor="c-name">{c.forms.fullName}</label>
                <input id="c-name" required type="text" className="field-input mt-1.5" placeholder="Jane Doe" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="field-label" htmlFor="c-sector">{c.forms.sector}</label>
                  <select id="c-sector" required defaultValue="" className="field-input mt-1.5">
                    <option value="" disabled>{c.contact.select}</option>
                    {c.sectors.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="c-phone">{c.forms.phone}</label>
                  <input id="c-phone" required type="tel" className="field-input mt-1.5" placeholder="+1 (201) 555-0100" />
                </div>
              </div>
              <div>
                <label className="field-label" htmlFor="c-email">{c.forms.emailAddress}</label>
                <input id="c-email" required type="email" className="field-input mt-1.5" placeholder="you@example.com" />
              </div>
              <label className="flex items-start gap-3 text-[0.85rem] text-ink/70">
                <input type="checkbox" defaultChecked className="mt-1 accent-[var(--color-orange-ink)]" />
                {d.optIn}
              </label>
              <button type="submit" className="font-condensed text-[0.8rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-6 py-3.5 transition-colors hover:bg-[#a8380a]">
                {d.download}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
