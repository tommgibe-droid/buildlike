"use client";

import { motion } from "framer-motion";

const messages = [
  {
    role: "user",
    content: "How should I think about pricing my SaaS?",
  },
  {
    role: "assistant",
    content: "Start value-based — charge 10–20% of the economic value you deliver. Set prices higher than feels comfortable; you can always discount, but raising prices on existing customers causes churn.",
    sources: ["Hormozi", "PG"],
  },
  {
    role: "user",
    content: "What about freemium?",
  },
  {
    role: "assistant",
    content: "Freemium is distribution, not monetization. It works with viral loops and zero marginal cost. For most B2B SaaS, a 14-day free trial beats freemium every time.",
    sources: ["Altman", "Naval"],
  },
];

const sourceColors: Record<string, string> = {
  Hormozi: "from-blue-500 to-blue-600",
  PG: "from-purple-500 to-purple-600",
  Altman: "from-emerald-500 to-emerald-600",
  Naval: "from-cyan-500 to-cyan-600",
};

export default function AppPreview() {
  return (
    <div className="relative mx-auto max-w-3xl px-0 md:px-4">
      {/* Bottom glow */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-accent/10 blur-[60px] rounded-full pointer-events-none" />

      {/* Card */}
      <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden bg-card shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-primary/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          </div>
          <div className="mx-auto flex items-center gap-2 text-[11px] text-text-muted/60 bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            buildlike.app/chat
          </div>
        </div>

        {/* Layout */}
        <div className="flex h-[360px] md:h-[420px]">
          {/* Sidebar */}
          <div className="hidden md:flex w-44 border-r border-white/[0.06] bg-primary/60 flex-col p-3 gap-0.5 shrink-0">
            <div className="px-2 py-1.5 mb-1">
              <span className="text-[11px] font-semibold text-text-primary">BuildLike</span>
            </div>
            <div className="px-2 py-1 mb-2">
              <button className="w-full text-left text-[11px] text-accent bg-accent/8 border border-accent/15 rounded-md px-2 py-1.5 font-medium">
                + New chat
              </button>
            </div>
            {["Pricing strategy", "First hire timing", "Cold email tips", "Equity splits"].map(
              (item, i) => (
                <div
                  key={i}
                  className={`text-[11px] px-2 py-1.5 rounded-md truncate cursor-default ${
                    i === 0
                      ? "bg-white/[0.06] text-text-primary"
                      : "text-text-muted/70"
                  }`}
                >
                  {item}
                </div>
              )
            )}
          </div>

          {/* Chat */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-0">
            {/* Filter chips */}
            <div className="border-b border-white/[0.06] px-4 py-2 flex gap-2">
              {["All", "Hormozi", "Bezos", "Altman"].map((f, i) => (
                <span
                  key={f}
                  className={`text-[11px] px-2.5 py-1 rounded-full ${
                    i === 0
                      ? "bg-accent text-white"
                      : "text-text-muted/60 bg-white/[0.03] border border-white/[0.06]"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.18, duration: 0.4 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start gap-2.5"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-accent to-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-[8px] font-bold">BL</span>
                    </div>
                  )}
                  <div className="max-w-[78%]">
                    <div
                      className={`text-[12px] leading-relaxed px-3 py-2 rounded-xl ${
                        msg.role === "user"
                          ? "bg-user-bubble text-text-primary rounded-br-sm"
                          : "text-text-primary/90"
                      }`}
                    >
                      {msg.content}
                    </div>
                    {msg.sources && (
                      <div className="flex gap-1.5 mt-1.5">
                        {msg.sources.map((s) => (
                          <div
                            key={s}
                            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] text-text-muted/70"
                          >
                            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${sourceColors[s] || "from-gray-500 to-gray-600"}`} />
                            {s}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-white/[0.06] p-3">
              <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2">
                <span className="flex-1 text-[12px] text-text-muted/50">
                  Ask any founder question...
                </span>
                <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
