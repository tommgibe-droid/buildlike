"use client";

import { motion } from "framer-motion";

const companies = [
  "Stripe",
  "Linear",
  "Vercel",
  "Notion",
  "Figma",
  "Loom",
  "Resend",
  "Raycast",
];

export default function LogoStrip() {
  return (
    <section className="relative py-12 border-y border-white/[0.04] overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#070B14] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#070B14] to-transparent" />

      <p className="text-center text-[12px] text-white/20 mb-8">
        Teams at these companies use BuildLike
      </p>

      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4 px-8">
        {companies.map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className="text-[15px] font-semibold tracking-tight text-text-muted/20 hover:text-text-muted/40 transition-colors duration-200 select-none cursor-default"
            style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
          >
            {name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
