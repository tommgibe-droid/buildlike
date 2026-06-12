"use client";

import { motion } from "framer-motion";

const question = "Should I raise my prices?";

export default function Comparison() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#060910" }}>
      <div className="relative z-10 max-w-5xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-4">The difference</p>
          <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-4">
            Same question.
            <br />
            <span className="text-white/25">Very different answer.</span>
          </h2>
          <p className="text-[14px] text-white/35 max-w-md">
            The difference isn&apos;t the question. It&apos;s what you get back — and whether you can trust it.
          </p>
        </motion.div>

        {/* Question pill */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] bg-white/[0.02] text-[13px] text-white/40">
            <div className="w-1.5 h-1.5 rounded-full bg-white/25" />
            &ldquo;{question}&rdquo;
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">

          {/* ChatGPT column */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-px rounded-3xl opacity-50"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))" }}
          >
            <div className="rounded-[23px] p-6 flex flex-col backdrop-blur-xl" style={{ background: "rgba(9,13,21,0.6)" }}>
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-medium text-white/35 uppercase tracking-widest">ChatGPT</span>
              <div className="flex gap-1.5">
                {["Generic", "Hedged", "No source"].map(t => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/[0.06] text-white/20">{t}</span>
                ))}
              </div>
            </div>
            <p className="text-[13px] leading-relaxed flex-1 text-white/30 italic">
              &ldquo;Whether to raise prices depends on several factors including your market positioning, competitive landscape, customer price sensitivity, and perceived value. You may want to consider A/B testing different price points...&rdquo;
            </p>
            <div className="mt-5 pt-4 border-t border-white/[0.04] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <span className="text-[11px] text-white/20 italic">No source</span>
            </div>
            </div>
          </motion.div>

          {/* BuildLike column — gradient border */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="p-px rounded-3xl"
            style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.1) 60%, rgba(255,255,255,0.06) 100%)" }}
          >
            <div className="rounded-[23px] p-6 flex flex-col h-full backdrop-blur-xl" style={{ background: "rgba(13,21,37,0.65)" }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-medium text-white/65 uppercase tracking-widest">BuildLike</span>
                <div className="flex gap-1.5">
                  {["Direct", "Opinionated", "Sourced"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-accent/20 text-accent/50">{t}</span>
                  ))}
                </div>
              </div>
              <p className="text-[14px] leading-relaxed flex-1 text-white/80">
                &ldquo;Raise them. You&apos;re underpricing by at least 3x. Price from the value you deliver, not what it costs you to build. Most founders price from fear — that&apos;s why they stay small. Set prices higher than feels comfortable.&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-white/[0.07] flex items-center gap-2">
                <span className="text-[11px] text-accent/50 font-medium">↗</span>
                <span className="text-[11px] text-white/45">Hormozi — $100M Offers</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 grid md:grid-cols-3 gap-3"
        >
          {[
            { stat: "0 citations", label: "ChatGPT gives you per answer", dim: true },
            { stat: "Every answer", label: "in BuildLike traces to a primary source", dim: false },
            { stat: "Nothing", label: "is generated or made up", dim: false },
          ].map((item, i) => (
            <div key={i} className={`px-5 py-4 rounded-xl border ${item.dim ? "border-white/[0.04] opacity-35" : "border-white/[0.07]"}`}
              style={{ background: "#0D1220" }}>
              <div className={`text-[1.15rem] font-bold tracking-tight mb-1 ${item.dim ? "text-white/40" : "text-white/85"}`}>
                {item.stat}
              </div>
              <div className="text-[12px] text-white/28 leading-snug">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
