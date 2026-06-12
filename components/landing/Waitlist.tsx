"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
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
    <section className="relative py-48 overflow-hidden" style={{ background: "#040E1C" }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)" }} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-lg mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
            <span className="text-[11px] text-white/30 tracking-[0.12em] uppercase font-medium">Launching soon</span>
          </div>

          <h2 className="text-[2.2rem] md:text-[2.8rem] font-bold tracking-[-0.03em] text-white leading-[1.08] mb-4">
            Access opens soon.
          </h2>
          <p className="text-[15px] text-white/35 leading-relaxed mb-10 max-w-xs mx-auto">
            We&apos;re not live yet. Leave your email and we&apos;ll reach out directly when we open up.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl border border-white/[0.06]"
                style={{ background: "rgba(13,18,32,0.6)" }}
              >
                <span className="w-4 h-4 rounded-full bg-green-400/60 flex items-center justify-center shrink-0">
                  <Check size={9} strokeWidth={3} className="text-black" />
                </span>
                <span className="text-sm text-white/50">We&apos;ll be in touch.</span>
              </motion.div>
            ) : duplicate ? (
              <motion.div
                key="duplicate"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 py-4 rounded-2xl border border-white/[0.06] text-sm text-white/35"
                style={{ background: "rgba(13,18,32,0.6)" }}
              >
                Already registered.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="p-px rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(59,130,246,0.1) 100%)" }}>
                  <div className="flex gap-2 p-1.5 rounded-[15px] backdrop-blur-xl" style={{ background: "rgba(13,18,32,0.85)" }}>
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 min-w-0 px-4 py-2.5 bg-transparent text-[14px] text-white/80 placeholder:text-white/18 outline-none"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-5 py-2.5 rounded-xl bg-accent hover:bg-blue-500 text-white text-[13px] font-medium tracking-tight transition-all duration-150 shrink-0 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin block" />
                      ) : (
                        "Notify me"
                      )}
                    </button>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-[11px] text-white/18 mt-5">
            {count !== null && count > 0
              ? `${count.toLocaleString()} people signed up`
              : "No spam."}
          </p>

        </motion.div>
      </div>
    </section>
  );
}
