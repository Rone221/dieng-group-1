"use client";

import { useState } from "react";
import { useContent } from "@/lib/i18n";
import { Kicker, Standfirst } from "./primitives";

export default function Contact() {
  const c = useContent();
  const t = c.contact;
  const [sent, setSent] = useState(false);

  return (
    <div className="grid gap-10 md:grid-cols-12 md:gap-12">
      <div className="md:col-span-5">
        <Kicker>{t.kicker}</Kicker>
        <h2 className="display-h2 mt-4">{t.title}</h2>
        <Standfirst className="mt-5">{t.standfirst}</Standfirst>

        <dl className="mt-8 space-y-4 text-[0.9rem]">
          <div>
            <dt className="field-label">{t.homeDesk}</dt>
            <dd className="mt-1 text-ink/80">{c.site.address}</dd>
          </div>
          <div>
            <dt className="field-label">{t.corridor}</dt>
            <dd className="mt-1 text-ink/80">{c.route.map((r) => r.place).join(" · ")}</dd>
          </div>
          <div>
            <dt className="field-label">{t.reach}</dt>
            <dd className="mt-1 text-ink/80">
              <a href={`tel:${c.site.phone.replace(/[^+\d]/g, "")}`} className="link-underline">{c.site.phone}</a>
              {" · "}
              <a href={`mailto:${c.site.email}`} className="link-underline">{c.site.email}</a>
            </dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7">
        {sent ? (
          <div className="rule-t pt-10">
            <p className="font-display text-2xl font-semibold text-ink">{t.sentTitle}</p>
            <p className="mt-2 text-ink/60">{t.sentBody}</p>
          </div>
        ) : (
          <form className="grid gap-6 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <Field id="f-name" label={t.nameLabel}>
              <input id="f-name" required type="text" className="field-input mt-1.5" placeholder="Jane Doe" />
            </Field>
            <Field id="f-email" label={t.emailLabel}>
              <input id="f-email" required type="email" className="field-input mt-1.5" placeholder="you@example.com" />
            </Field>
            <Select id="f-org" label={t.orgLabel} options={c.probing.orgType} placeholder={t.select} />
            <Select id="f-need" label={t.needLabel} options={c.probing.need} placeholder={t.select} />
            <Select id="f-region" label={t.regionLabel} options={c.probing.region} placeholder={t.select} />
            <Select id="f-tier" label={t.tierLabel} options={c.probing.engagement} placeholder={t.select} />
            <div className="sm:col-span-2">
              <Field id="f-msg" label={t.msgLabel}>
                <textarea id="f-msg" rows={3} className="field-input mt-1.5 resize-none" placeholder={t.msgPlaceholder} />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="font-condensed text-[0.8rem] font-bold uppercase tracking-[0.14em] text-on-dark bg-orange-ink px-7 py-3.5 transition-colors hover:bg-[#a8380a]">
                {t.send}
              </button>
              <span className="ml-4 text-[0.78rem] text-ink/45">{t.expandingNote}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <label htmlFor={id} className="block">
      <span className="field-label">{label}</span>
      {children}
    </label>
  );
}

function Select({ id, label, options, placeholder }: { id: string; label: string; options: string[]; placeholder: string }) {
  return (
    <Field id={id} label={label}>
      <select id={id} defaultValue="" className="field-input mt-1.5">
        <option value="" disabled>{placeholder}</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </Field>
  );
}
