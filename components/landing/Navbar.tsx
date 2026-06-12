"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const WAITLIST_MODE = process.env.NEXT_PUBLIC_WAITLIST_MODE === "true";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Founders", href: "#founders" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
      style={scrolled ? { backgroundColor: "rgba(12,12,12,0.92)" } : undefined}
    >
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06] pointer-events-none" />
      )}

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 text-[17px] font-semibold tracking-tight select-none">
          <span className="text-text-primary">Build</span>
          <span className="text-accent">Like</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-sm text-text-muted hover:text-text-primary rounded-md hover:bg-white/[0.04] transition-all duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-2">
          {WAITLIST_MODE ? (
            <a
              href="#waitlist-form"
              className="px-4 py-1.5 text-sm bg-accent hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-150"
            >
              Join waitlist
            </a>
          ) : (
            <>
              <Link
                href="/app"
                className="px-3.5 py-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/app"
                className="px-4 py-1.5 text-sm bg-accent hover:bg-blue-500 text-white rounded-lg font-medium transition-all duration-150"
              >
                Start free trial
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors rounded-md hover:bg-white/[0.04]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="md:hidden border-t border-white/[0.06] backdrop-blur-xl px-6 py-4 flex flex-col gap-1"
            style={{ backgroundColor: "rgba(12,12,12,0.97)" }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm text-text-muted hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
              {WAITLIST_MODE ? (
                <a
                  href="#waitlist-form"
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 px-4 text-sm bg-accent hover:bg-blue-500 text-white rounded-lg font-medium text-center transition-all duration-150"
                >
                  Join waitlist
                </a>
              ) : (
                <>
                  <Link href="/app" onClick={() => setMobileOpen(false)} className="py-2.5 text-sm text-text-muted">
                    Sign in
                  </Link>
                  <Link
                    href="/app"
                    onClick={() => setMobileOpen(false)}
                    className="py-2.5 px-4 text-sm bg-accent hover:bg-blue-500 text-white rounded-lg font-medium text-center transition-all duration-150"
                  >
                    Start free trial
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
