"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

type Props = {
  onSend: (message: string) => void;
  disabled?: boolean;
};

export default function MessageInput({ onSend, disabled }: Props) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [value]);

  const hasValue = value.trim().length > 0;

  return (
    <div className="border-t border-white/[0.06] bg-primary/70 backdrop-blur-xl px-4 md:px-6 py-4">
      <div className="max-w-3xl mx-auto">
        {/* Input container */}
        <div
          className={`relative flex items-end gap-3 rounded-2xl border bg-card transition-all duration-200 px-4 py-3 ${
            hasValue
              ? "border-white/[0.14]"
              : "border-white/[0.07]"
          }`}
        >
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What decision are you working through?"
            rows={1}
            disabled={disabled}
            className="flex-1 bg-transparent text-sm text-text-primary/90 placeholder:text-text-muted/40 resize-none outline-none min-h-[24px] max-h-40 leading-6 py-0 disabled:opacity-40"
          />

          {/* Send button */}
          <button
            onClick={handleSend}
            disabled={!hasValue || disabled}
            className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
              hasValue && !disabled
                ? "bg-accent hover:bg-blue-500 text-white"
                : "bg-white/[0.05] text-text-muted/30 cursor-not-allowed"
            }`}
          >
            <ArrowUp size={13} strokeWidth={2.5} />
          </button>
        </div>

        {/* Hint */}
        <p className="text-[11px] text-text-muted/30 mt-2 text-center">
          <span className="font-mono">↵</span> to send &nbsp;·&nbsp; <span className="font-mono">⇧↵</span> for new line
        </p>
      </div>
    </div>
  );
}
