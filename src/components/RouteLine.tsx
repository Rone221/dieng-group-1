// Animated dotted trade route across a navy band: qualitative geographic proof
// that stands in for the forbidden "countries reached" counter.
export default function RouteLine({ className = "" }: { className?: string }) {
  // Five stops along a gentle Atlantic arc (Indianapolis -> Banjul).
  const stops = [
    { x: 70, y: 70 },
    { x: 230, y: 110 },
    { x: 430, y: 150 },
    { x: 660, y: 95 },
    { x: 830, y: 130 },
  ];
  const d = `M ${stops[0].x} ${stops[0].y} C 150 130, 150 130, ${stops[1].x} ${stops[1].y} S 350 200, ${stops[2].x} ${stops[2].y} S 580 60, ${stops[3].x} ${stops[3].y} S 790 170, ${stops[4].x} ${stops[4].y}`;

  return (
    <svg
      viewBox="0 0 900 200"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden
    >
      <path d={d} fill="none" stroke="#efa82e" strokeWidth="1.5" strokeOpacity="0.35" />
      <path
        d={d}
        fill="none"
        stroke="#efa82e"
        strokeWidth="2"
        strokeLinecap="round"
        className="route-dash"
      />
      {stops.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={i === 0 ? 5 : 4} fill="#f26b2a" />
      ))}
    </svg>
  );
}
