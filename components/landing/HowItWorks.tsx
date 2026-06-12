"use client";

import { motion } from "framer-motion";

const WAITLIST_MODE = process.env.NEXT_PUBLIC_WAITLIST_MODE === "true";

const steps = [
  {
    num: "01",
    title: "Ask",
    sub: "Any business decision",
    body: "Type any question — pricing, hiring, fundraising, GTM, culture. No structure needed. Speak like you'd speak to a mentor.",
    q: "How should I price my SaaS?",
    a: "Start value-based. Charge 10–20% of the economic value you deliver. Set prices higher than feels comfortable — you can always discount, but you can't raise on existing customers.",
    sources: ["Hormozi", "PG"],
  },
  {
    num: "02",
    title: "Match",
    sub: "To primary sources",
    body: "BuildLike searches across 12,000+ verified source documents — books, interviews, essays, shareholder letters. Only primary sources, no paraphrases.",
    q: "When is the right time to hire?",
    a: "Hire when the cost of not hiring is greater than the risk of hiring wrong. For your first engineer: when you're building more slowly than your market is moving.",
    sources: ["Altman", "PG"],
  },
  {
    num: "03",
    title: "Decide",
    sub: "With a named source",
    body: "Get a direct, opinionated answer — not hedged advice. Every answer cites the exact source. You can always trace where an idea came from.",
    q: "Should I raise venture capital?",
    a: "Only raise if your market requires it. VC is fuel for a rocket already pointing in the right direction — not the thing that points it.",
    sources: ["Naval", "Bezos"],
  },
];

const sources = [
  {
    label: "Books & essays",
    detail: "Every book, long-form essay, and published piece written directly by the founder.",
  },
  {
    label: "Interviews & podcasts",
    detail: "Thousands of hours of recorded conversations — we extract the substance, not the filler.",
  },
  {
    label: "Shareholder letters & memos",
    detail: "Internal documents that became public: letters, strategy memos, all-hands transcripts.",
  },
  {
    label: "Frameworks & mental models",
    detail: "Named decision templates and repeatable playbooks — attributed, sourced, traceable.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden" style={{ background: "#070B14" }}>

      {/* Steps */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 py-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <p className="text-[11px] font-medium text-white/20 uppercase tracking-[0.15em] mb-5">How it works</p>
          <h2 className="text-[3.5rem] md:text-[5.5rem] font-bold tracking-[-0.04em] leading-[1.0] text-white">
            Three steps.
            <br />
            <span className="text-white/18">One sourced answer.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
              className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16 py-12 border-t border-white/[0.05] first:border-t-0"
            >
              <div className="flex flex-col justify-center">
                <div className="text-[5.5rem] font-bold leading-none text-white/[0.05] font-mono mb-4 select-none">
                  {step.num}
                </div>
                <h3 className="text-[1.8rem] font-bold text-white tracking-tight mb-1">{step.title}</h3>
                <p className="text-[13px] text-accent/50 font-medium mb-4">{step.sub}</p>
                <p className="text-[14px] text-white/35 leading-relaxed max-w-xs">{step.body}</p>
              </div>

              <div className="flex items-center">
                <div className="w-full p-px rounded-3xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.12) 100%)" }}>
                  <div className="glass-shimmer relative rounded-[23px] overflow-hidden backdrop-blur-xl" style={{ background: "rgba(13,18,32,0.6)" }}>
                    <div className="px-5 pt-5 pb-4 flex justify-end border-b border-white/[0.04]">
                      <div className="max-w-[80%] bg-white/[0.05] border border-white/[0.07] rounded-2xl rounded-br-sm px-4 py-2.5 text-[13px] text-white/55">
                        {step.q}
                      </div>
                    </div>
                    <div className="px-5 py-5 flex gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-accent/60 text-[8px] font-bold">BL</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-[13px] text-white/65 leading-relaxed mb-3">{step.a}</p>
                        <div className="flex gap-2">
                          {step.sources.map(s => (
                            <span key={s} className="px-2.5 py-1 rounded-full border border-accent/15 text-[11px] text-accent/40">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px mx-5 md:mx-auto md:max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* Data sources */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 py-24">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-medium text-white/20 uppercase tracking-[0.15em] mb-5">The knowledge base</p>
            <h2 className="text-[2.4rem] md:text-[3rem] font-bold tracking-[-0.035em] leading-[1.05] text-white mb-6">
              Primary sources only.
              <br />
              <span className="text-white/22">Nothing made up.</span>
            </h2>
            <p className="text-[14px] text-white/35 leading-relaxed max-w-sm">
              Every answer traces back to something a founder actually wrote, said, or published. No second-hand summaries, no Reddit threads, no paraphrases.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2 pt-1">
            {sources.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-4 px-5 py-4 rounded-2xl border border-white/[0.05]"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <span className="text-[11px] text-accent/40 font-mono mt-0.5 shrink-0">0{i + 1}</span>
                <div>
                  <div className="text-[13px] font-medium text-white/65 mb-1">{s.label}</div>
                  <div className="text-[12px] text-white/28 leading-relaxed">{s.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
