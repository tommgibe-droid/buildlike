"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true })
      .then(({ count: c }) => setCount(c ?? 0));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return;

    setSubmitting(true);
    setDuplicate(false);

    const { error } = await supabase
      .from("waitlist")
      .insert({ email: trimmed, source: "waitlist-section" });

    setSubmitting(false);

    if (error) {
      if (error.code === "23505") setDuplicate(true);
      return;
    }

    setSubmitted(true);
    setCount((c) => (c ?? 0) + 1);
  };

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#070B14" }}>

      {/* Subtle centered glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-6">Early access</p>

          <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] text-white leading-[1.05] mb-4">
            Be among the first.
          </h2>
          <p className="text-[15px] text-white/35 leading-relaxed mb-10 max-w-sm mx-auto">
            We&apos;re rolling out access gradually. Drop your email and we&apos;ll let you know when your spot is ready.
          </p>

          {/* Stats row */}
          <div className="flex items-center justify-center gap-10 mb-10">
            {[
              { value: "25+", label: "Founders indexed" },
              { value: "12k+", label: "Source documents" },
              { value: "Free", label: "To start" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[1.5rem] font-bold text-white/80 tracking-tight">{s.value}</div>
                <div className="text-[11px] text-white/25 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03] text-sm text-white/55"
              >
                <span className="w-4 h-4 rounded-full bg-green-400/80 flex items-center justify-center shrink-0">
                  <Check size={10} strokeWidth={3} className="text-black" />
                </span>
                You&apos;re on the list! We&apos;ll email you when BuildLike launches.
              </motion.div>
            ) : duplicate ? (
              <motion.div
                key="duplicate"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl border border-accent/20 bg-white/[0.02] text-sm text-accent/60"
              >
                <span className="w-4 h-4 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <Check size={10} strokeWidth={3} className="text-accent/70" />
                </span>
                You&apos;re already on the list!
              </motion.div>
            ) : (
              <motion.div key="form" className="max-w-sm mx-auto">
                <div className="p-px rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)" }}>
                  <form onSubmit={handleSubmit} className="flex gap-2 p-1.5 rounded-[15px]" style={{ background: "#0D1220" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 min-w-0 px-3 py-2 bg-transparent text-sm text-white/80 placeholder:text-white/20 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-blue-500 text-white text-sm font-medium transition-all duration-150 shrink-0 disabled:opacity-60"
                    >
                      {submitting ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Join <ArrowRight size={13} /></>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Live counter */}
          <p className="text-[11px] text-white/18 mt-4">
            {count !== null && count > 0
              ? `🔥 ${count.toLocaleString()} founders already joined · No spam · Free to start`
              : "No spam. No credit card. Just early access."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
