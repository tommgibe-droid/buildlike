"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/mock-data";

const WAITLIST_MODE = process.env.NEXT_PUBLIC_WAITLIST_MODE === "true";

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  const annualPrices: Record<string, string> = {
    Free: "$0",
    Pro: "$16",
    Team: "$40",
  };

  return (
    <section id="pricing" className="relative py-28 overflow-hidden" style={{ background: "#070B14" }}>
      <div className="relative z-10 max-w-5xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-4">Pricing</p>
              <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-white leading-[1.05]">
                Simple pricing.
                <br />
                <span className="text-white/25">No surprises.</span>
              </h2>
            </div>

            {/* Annual toggle */}
            <div className="flex items-center gap-3 pb-1">
              <span className={`text-sm transition-colors ${!annual ? "text-white/60" : "text-white/25"}`}>Monthly</span>
              <button
                onClick={() => setAnnual(a => !a)}
                className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${annual ? "bg-accent/40" : "bg-white/10"}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 rounded-full transition-all duration-200 ${annual ? "translate-x-5 bg-accent" : "translate-x-0.5 bg-white"}`} />
              </button>
              <span className={`text-sm transition-colors ${annual ? "text-white/60" : "text-white/25"}`}>
                Annual
                <span className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded bg-accent/10 text-accent/50 border border-accent/20">-20%</span>
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3 md:items-end">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`p-px rounded-3xl ${plan.highlighted ? "md:-mt-6" : ""}`}
              style={{
                background: plan.highlighted
                  ? "linear-gradient(135deg, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0.15) 40%, rgba(255,255,255,0.06) 100%)"
                  : "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)"
              }}
            >
              <div
                className="glass-shimmer relative rounded-[23px] flex flex-col p-6 h-full backdrop-blur-xl overflow-hidden"
                style={{ background: plan.highlighted ? "rgba(13,21,37,0.7)" : "rgba(13,18,32,0.6)" }}
              >
                <div className="absolute inset-0 card-grid pointer-events-none" />
                {plan.highlighted && (
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, transparent 60%)" }} />
                )}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white/40 uppercase tracking-wider">
                      {plan.name}
                    </span>
                    {plan.highlighted && (
                      <span className="text-[10px] font-medium text-accent/70 bg-accent/[0.08] border border-accent/20 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold text-white tracking-tight">
                      {annual ? annualPrices[plan.name] : plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-white/30">/mo</span>
                    )}
                  </div>
                  {annual && plan.price !== "$0" && (
                    <p className="text-[11px] text-white/22 mt-1">Billed annually</p>
                  )}
                </div>

                <p className="text-[13px] text-white/35 leading-relaxed mb-5">{plan.description}</p>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-[13px] leading-snug ${plan.highlighted ? "text-white/60" : "text-white/28"}`}>
                      <span className={`mt-1 shrink-0 text-[10px] ${plan.highlighted ? "text-accent/50" : "text-white/20"}`}>—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={WAITLIST_MODE ? "#waitlist-form" : "/app"}
                  className={`w-full py-2.5 rounded-xl text-sm font-medium text-center transition-all duration-150 block ${
                    plan.highlighted
                      ? "bg-accent hover:bg-blue-500 text-white"
                      : "bg-white/[0.04] hover:bg-white/[0.07] text-white/45 hover:text-white/70 border border-white/[0.07]"
                  }`}
                >
                  {WAITLIST_MODE ? "Join waitlist" : plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center text-[12px] text-white/18 mt-8"
        >
          No credit card required for free trial · Cancel any time
        </motion.p>
      </div>
    </section>
  );
}
