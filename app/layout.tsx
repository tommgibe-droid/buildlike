import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BuildLike — Decisions backed by the world's best founders",
  description:
    "Ask any business question and get answers grounded in how the world's best founders actually think.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-primary text-text-primary`}
      >
        {/* Background blobs — give backdrop-blur something to catch */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full blur-[130px]" style={{ background: "rgba(59,130,246,0.07)" }} />
          <div className="absolute bottom-[-10%] left-[-8%] w-[600px] h-[600px] rounded-full blur-[120px]" style={{ background: "rgba(99,102,241,0.05)" }} />
          <div className="absolute top-[45%] left-[25%] w-[500px] h-[500px] rounded-full blur-[100px]" style={{ background: "rgba(59,130,246,0.04)" }} />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
