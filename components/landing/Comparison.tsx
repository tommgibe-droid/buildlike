"use client";

import { motion } from "framer-motion";

const question = "Should I raise my prices?";

export default function Comparison() {
  return (
    <section className="relative py-36 overflow-hidden" style={{ background: "#030508" }}>
      <div className="relative z-10 max-w-4xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-[2.8rem] md:text-[4.2rem] font-bold tracking-[-0.04em] text-white leading-[1.02] mb-5">
            Same question.
            <br />
            <span className="text-white/20">Very different answer.</span>
          </h2>
          <p className="text-[14px] text-white/30 max-w-sm mx-auto">
            The difference isn&apos;t the question — it&apos;s what you get back, and whether you can trust it.
          </p>
        </motion.div>

        {/* Question */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-12 text-center"
        >
          <span className="text-[13px] text-white/30 italic">&ldquo;{question}&rdquo;</span>
        </motion.div>

        {/* Two columns — no cards, just text */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-0 md:divide-x divide-white/[0.06]">

          {/* ChatGPT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:pr-14"
          >
            <span className="text-[11px] text-white/18 uppercase tracking-[0.14em] mb-5 block">ChatGPT</span>
            <p className="text-[15px] leading-relaxed text-white/22 italic">
              &ldquo;Whether to raise prices depends on several factors including your market positioning, competitive landscape, customer price sensitivity, and perceived value. You may want to consider A/B testing different price points...&rdquo;
            </p>
            <p className="mt-6 text-[12px] text-white/15 italic">No source</p>
          </motion.div>

          {/* BuildLike */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="md:pl-14 border-t border-white/[0.06] pt-10 md:border-t-0 md:pt-0"
          >
            <span className="text-[11px] text-white/40 uppercase tracking-[0.14em] mb-5 block">BuildLike</span>
            <p className="text-[16px] leading-relaxed text-white/80">
              &ldquo;Raise them. You&apos;re underpricing by at least 3x. Price from the value you deliver, not what it costs you to build. Most founders price from fear — that&apos;s why they stay small. Set prices higher than feels comfortable.&rdquo;
            </p>
            <p className="mt-6 text-[12px] text-white/40">↗ Hormozi — $100M Offers</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
