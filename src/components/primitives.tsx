import type { Lane } from "@/lib/content";

// Text-grade lane colours (AA on cream/sand, lightened in dark). Fills = laneBg.
export const laneText: Record<Lane, string> = {
  navy: "text-navy dark:text-[#86acdb]",
  teal: "text-teal-ink dark:text-[#5cc3b0]",
  amber: "text-amber-ink dark:text-[#e0a23f]",
};
export const laneBg: Record<Lane, string> = {
  navy: "bg-navy",
  teal: "bg-teal",
  amber: "bg-amber",
};
export const laneDuo: Record<Lane, string> = {
  navy: "duo-navy",
  teal: "duo-teal",
  amber: "duo-amber",
};

export function Shell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Kicker({
  children,
  lane,
  className = "",
}: {
  children: React.ReactNode;
  lane?: Lane;
  className?: string;
}) {
  return (
    <span className={`kicker block ${lane ? laneText[lane] : ""} ${className}`}>
      {children}
    </span>
  );
}

export function Standfirst({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={`standfirst ${className}`}>{children}</p>;
}

export function TradeLine({ className = "" }: { className?: string }) {
  return <div className={`trade-line ${className}`} role="presentation" />;
}

export function GeoCaption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-condensed inline-block rounded-sm bg-ink/55 px-2 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-on-dark backdrop-blur-sm">
      {children}
    </span>
  );
}

// Asymmetric 7/5 spread. `reverse` flips media to the right.
export function Spread({
  media,
  children,
  reverse = false,
  className = "",
  id,
}: {
  media: React.ReactNode;
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${className}`}
    >
      <div
        className={`md:col-span-7 ${reverse ? "md:order-2" : "md:order-1"}`}
      >
        {media}
      </div>
      <div
        className={`md:col-span-5 ${reverse ? "md:order-1" : "md:order-2"}`}
      >
        {children}
      </div>
    </div>
  );
}

// Broadsheet indexed list: hairline leaders + gold ticks.
export function IndexedList({
  items,
  lane = "navy",
  columns = 1,
}: {
  items: string[];
  lane?: Lane;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`mt-2 ${columns === 2 ? "sm:columns-2 sm:gap-10" : ""}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-baseline gap-3 break-inside-avoid rule-b py-3"
        >
          <span className={`mt-1 h-2 w-2 shrink-0 ${laneBg[lane]}`} aria-hidden />
          <span className="text-[0.98rem] text-ink/85">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PageHeader({
  numeral,
  kicker,
  title,
  standfirst,
}: {
  numeral?: string;
  kicker: string;
  title: string;
  standfirst?: string;
}) {
  return (
    <header className="rule-b py-14 md:py-20">
      <Shell>
        <div className="flex items-baseline gap-4">
          {numeral && <span className="numeral text-ink/10">{numeral}</span>}
          <Kicker>{kicker}</Kicker>
        </div>
        <h1 className="display-h1 mt-4 max-w-3xl">{title}</h1>
        {standfirst && <Standfirst className="mt-5 max-w-2xl">{standfirst}</Standfirst>}
      </Shell>
    </header>
  );
}

export function HallmarkSeal({ name, note }: { name: string; note: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-ink/25">
        <span className="font-display text-base font-semibold text-ink">
          {name}
        </span>
      </div>
      <p className="mt-3 max-w-[14ch] text-[0.82rem] leading-snug text-ink/55">
        {note}
      </p>
    </div>
  );
}
