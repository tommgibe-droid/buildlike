"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/mock-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#060910" }}>
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-4">FAQ</p>
          <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-white leading-[1.05]">
            Questions.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-1.5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="p-px rounded-xl overflow-hidden"
              style={{
                background: open === i
                  ? "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(255,255,255,0.04) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)"
              }}
            >
              <div className="rounded-[11px] overflow-hidden backdrop-blur-xl" style={{ background: open === i ? "rgba(13,21,37,0.65)" : "rgba(9,13,21,0.55)" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                >
                  <span className={`text-[14px] font-medium transition-colors ${open === i ? "text-white/90" : "text-white/50"}`}>
                    {faq.q}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    open === i ? "border-accent/40 bg-accent/10 rotate-45" : "border-white/[0.08]"
                  }`}>
                    <Plus size={10} className={open === i ? "text-accent" : "text-white/30"} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[13px] text-white/38 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
