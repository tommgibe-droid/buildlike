"use client";

import { founderFilters } from "@/lib/mock-data";

type Props = {
  active: string;
  onChange: (id: string) => void;
};

export default function FounderFilter({ active, onChange }: Props) {
  return (
    <div className="flex items-center gap-1.5 overflow-x-auto py-0.5" style={{ scrollbarWidth: "none" }}>
      {founderFilters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onChange(filter.id)}
          className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
            active === filter.id
              ? "bg-accent text-white shadow-[0_0_10px_rgba(59,130,246,0.25)]"
              : "text-text-muted/60 hover:text-text-muted border border-white/[0.06] hover:border-white/[0.10] bg-white/[0.02] hover:bg-white/[0.04]"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
