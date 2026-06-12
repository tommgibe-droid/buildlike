const items = [
  "Jeff Bezos", "Alex Hormozi", "Sam Altman", "Paul Graham",
  "Naval Ravikant", "Reid Hoffman", "12,000+ source documents",
  "Primary sources only", "Cited every time", "No hallucinations",
  "Jeff Bezos", "Alex Hormozi", "Sam Altman", "Paul Graham",
  "Naval Ravikant", "Reid Hoffman", "12,000+ source documents",
  "Primary sources only", "Cited every time", "No hallucinations",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.04]" style={{ background: "#050810" }}>
      <div className="absolute left-0 inset-y-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #050810, transparent)" }} />
      <div className="absolute right-0 inset-y-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #050810, transparent)" }} />
      <div className="flex animate-marquee whitespace-nowrap py-3.5">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className={`text-[12px] tracking-wide ${
              ["12,000+ source documents", "Primary sources only", "Cited every time", "No hallucinations"].includes(item)
                ? "text-accent/40 font-medium"
                : "text-white/22"
            }`}>
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/10 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
