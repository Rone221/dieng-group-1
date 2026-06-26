"use client";

import { useContent } from "@/lib/i18n";
import { Shell, Kicker } from "../primitives";
import Plate from "../Plate";
import SpelitLens from "../SpelitLens";

export default function Approach() {
  const c = useContent();
  return (
    <section id="approach">
      <Plate
        src="/images/market-serrekunda.jpg"
        alt="A seller and buyer exchanging goods in Serekunda market, The Gambia"
        caption={c.approach.caption}
        sizes="100vw"
        className="h-[38vh] w-full md:h-[46vh]"
      />

      <div className="bg-sand py-20 md:py-28">
        <Shell>
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Kicker>{c.approach.kicker}</Kicker>
              <h2 className="display-h2 mt-4">{c.approach.title}</h2>
            </div>
            <p className="standfirst md:col-span-5">{c.spelit.standfirst}</p>
          </div>

          <div className="mt-12">
            <SpelitLens />
          </div>
        </Shell>
      </div>
    </section>
  );
}
