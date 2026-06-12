"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/mock-data";

export default function Testimonials() {
  return (
    <section className="relative py-20 overflow-hidden">

      <div className="relative z-10 max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col rounded-2xl border border-white/[0.07] p-6 hover:border-white/[0.12] transition-all duration-300"
              style={{ background: "#0D1220" }}
            >
              <p className="text-[13px] text-white/55 leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-[11px] font-semibold shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-white/75">{t.name}</p>
                  <p className="text-[11px] text-white/30">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
