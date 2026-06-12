"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import type { Message } from "@/lib/mock-data";


export default function MessageBubble({ message }: { message: Message }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (message.role === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-end"
      >
        <div className="max-w-[65%] md:max-w-[55%]">
          <div className="bg-white/[0.06] border border-white/[0.08] text-text-primary px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed">
            {message.content}
          </div>
          <div className="text-[10px] text-text-muted/40 mt-1 text-right">
            {message.timestamp}
          </div>
        </div>
      </motion.div>
    );
  }

  // AI message — document style, not bubble
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="flex justify-start gap-3"
    >
      {/* Avatar */}
      <div className="w-7 h-7 rounded-lg bg-white/[0.07] border border-white/[0.1] flex items-center justify-center shrink-0 mt-0.5">
        <span className="text-white/50 text-[9px] font-bold">BL</span>
      </div>

      <div className="max-w-[75%] md:max-w-[70%] min-w-0">
        {/* Message body */}
        <div className="group relative">
          <div className="text-sm text-text-primary/90 leading-[1.75] whitespace-pre-line">
            {message.content}
          </div>

          {/* Copy — appears on hover */}
          <button
            onClick={handleCopy}
            className="absolute -top-1 -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-150 p-1.5 rounded-md bg-card border border-white/[0.06] text-text-muted/50 hover:text-text-muted"
            title="Copy"
          >
            {copied
              ? <Check size={11} className="text-accent" />
              : <Copy size={11} />
            }
          </button>
        </div>

        {/* Source tags — Perplexity style */}
        {message.sources && message.sources.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {message.sources.map((source, i) => (
              <div
                key={source.id}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.07] text-[11px] text-white/35 hover:text-white/55 hover:bg-white/[0.05] transition-colors cursor-default"
              >
                <span className="text-white/20 font-mono text-[10px]">{i + 1}</span>
                <span>{source.name}</span>
              </div>
            ))}
          </div>
        )}

        <div className="text-[10px] text-text-muted/30 mt-2">
          {message.timestamp}
        </div>
      </div>
    </motion.div>
  );
}
