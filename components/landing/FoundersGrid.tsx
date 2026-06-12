"use client";

import { motion } from "framer-motion";
import { founders } from "@/lib/mock-data";

const sources = [
  { label: "Books & essays", detail: "Every major book, essay, and long-form piece each founder has published." },
  { label: "Interviews & talks", detail: "Thousands of hours of podcast interviews, conference talks, and Q&As." },
  { label: "Shareholder letters", detail: "Annual letters, memos, and documents that became public." },
  { label: "Frameworks", detail: "Named mental models, decision templates, and repeatable playbooks." },
];

const stats = [
  { value: "12k+", label: "Source documents" },
  { value: "100%", label: "Primary sources" },
  { value: "50+", label: "Founders" },
];

export default function FoundersGrid() {
  return (
    <section id="founders" className="relative py-28 overflow-hidden" style={{ background: "#060910" }}>
      <div className="relative z-10 max-w-6xl mx-auto px-5">

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-4">The knowledge base</p>
          <h2 className="text-[2.5rem] md:text-[3.2rem] font-bold tracking-[-0.03em] leading-[1.05] text-white mb-4 max-w-xl">
            The best founders.
            <br />
            <span className="text-white/25">Every answer sourced.</span>
          </h2>
        </motion.div>

        {/* Founder cards — glass + circular avatars + dot grid texture */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="group p-px rounded-3xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.11) 0%, rgba(59,130,246,0.06) 100%)" }}
            >
              <div className="glass-shimmer relative rounded-[23px] flex flex-col gap-4 p-5 h-full backdrop-blur-xl overflow-hidden"
                style={{ background: "rgba(13,18,32,0.65)" }}>
                {/* Dot grid texture */}
                <div className="absolute inset-0 rounded-[23px] pointer-events-none card-grid opacity-100" />

                {/* Diagonal inner gradient */}
                <div className="absolute inset-0 rounded-[23px] pointer-events-none"
                  style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, transparent 60%)" }} />

                <div className="relative flex items-center gap-3">
                  {/* Double-ring circular avatar */}
                  <div className="relative shrink-0">
                    {/* Outer faint ring */}
                    <div className="absolute -inset-1.5 rounded-full border border-white/[0.07]" />
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-white/50 text-[11px] font-semibold ring-glow"
                      style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.08) 100%)" }}>
                      {founder.initials}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <div className="text-[13px] font-semibold text-white/80 group-hover:text-white transition-colors leading-tight">
                      {founder.name}
                    </div>
                    <div className="text-[11px] text-white/28 truncate mt-0.5">{founder.title}</div>
                  </div>
                </div>

                <p className="relative text-[13px] text-white/38 leading-relaxed italic border-t border-white/[0.06] pt-4 group-hover:text-white/55 transition-colors">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-[12px] text-white/18 mb-20 pl-1">
          + more founders added regularly
        </motion.p>

        <div className="h-px mb-20" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)" }} />

        {/* Methodology */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <p className="text-[11px] font-medium text-white/25 uppercase tracking-[0.15em] mb-4">Methodology</p>
            <h3 className="text-[1.7rem] md:text-[2.1rem] font-bold tracking-[-0.025em] text-white leading-snug mb-5">
              How we build the knowledge base.
            </h3>
            <p className="text-[14px] text-white/38 leading-relaxed mb-5 max-w-md">
              ChatGPT tools train on the entire internet — Reddit threads, SEO articles, second-hand paraphrases. We don&apos;t. Every founder&apos;s corpus is built from primary sources only, verified against the original before it goes live.
            </p>

            {/* Circular stats — with rings + gradient fill */}
            <div className="flex gap-5 mt-10">
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.45, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center"
                >
                  {/* Triple-layered circle */}
                  <div className="relative mb-2">
                    <div className="absolute -inset-2 rounded-full border border-accent/[0.1]" />
                    <div className="absolute -inset-1 rounded-full border border-accent/[0.15]" />
                    <div className="w-20 h-20 rounded-full flex flex-col items-center justify-center ring-glow-accent backdrop-blur-xl"
                      style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(13,18,32,0.8) 100%)" }}>
                      {/* Dot grid inside circle */}
                      <div className="absolute inset-0 rounded-full card-grid opacity-50 pointer-events-none" />
                      <div className="relative text-[1.1rem] font-bold text-white/90 tracking-tight leading-none">{s.value}</div>
                    </div>
                  </div>
                  <div className="text-[11px] text-white/28 text-center max-w-[60px] leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-2">
            {sources.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="p-px rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(59,130,246,0.04) 100%)" }}
              >
                <div className="glass-shimmer relative flex gap-4 px-5 py-4 rounded-[15px] backdrop-blur-xl overflow-hidden"
                  style={{ background: "rgba(13,18,32,0.6)" }}>
                  <div className="absolute inset-0 card-grid opacity-100 pointer-events-none rounded-[15px]" />
                  {/* Circle number */}
                  <div className="relative w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ring-glow-accent"
                    style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(13,18,32,0.8))" }}>
                    <span className="text-[10px] text-accent/60 font-mono font-bold">{i + 1}</span>
                  </div>
                  <div className="relative">
                    <div className="text-[13px] font-medium text-white/65 mb-1">{s.label}</div>
                    <div className="text-[12px] text-white/28 leading-relaxed">{s.detail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
