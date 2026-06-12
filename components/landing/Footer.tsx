import Link from "next/link";

const links = {
  Product: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]" style={{ background: "#070B14" }}>
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 mb-16">
          {/* Brand */}
          <div className="md:w-48 shrink-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white/[0.07] border border-white/[0.1] flex items-center justify-center">
                <span className="text-white/60 text-[10px] font-bold">BL</span>
              </div>
              <span className="text-sm font-semibold text-white/80">BuildLike</span>
            </Link>
            <p className="text-[12px] text-white/25 leading-relaxed">
              The decision-making platform for founders. Sourced from the people who&apos;ve already solved your problem.
            </p>
          </div>

          {/* Link columns */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(links).map(([col, items]) => (
              <div key={col}>
                <p className="text-[11px] font-medium text-white/30 uppercase tracking-wider mb-4">{col}</p>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-[13px] text-white/35 hover:text-white/65 transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.04]">
          <p className="text-[12px] text-white/20">
            © 2026 BuildLike. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Twitter", "GitHub", "LinkedIn"].map(s => (
              <Link
                key={s}
                href="#"
                className="text-[12px] text-white/20 hover:text-white/45 transition-colors duration-150"
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
