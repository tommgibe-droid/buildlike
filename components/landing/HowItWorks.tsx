"use client";

import { motion } from "framer-motion";

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
    <section id="how-it-works" className="relative py-32 overflow-hidden" style={{ background: "#070B14" }}>
      <div className="relative z-10 max-w-5xl mx-auto px-5">

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">

          {/* Left */}
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
              Every answer traces back to something a founder actually wrote, said, or published. We don&apos;t use second-hand summaries, Reddit threads, or AI-generated paraphrases.
            </p>
          </motion.div>

          {/* Right — source list */}
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
