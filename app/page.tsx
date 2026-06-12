import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Marquee from "@/components/landing/Marquee";
import Comparison from "@/components/landing/Comparison";
import HowItWorks from "@/components/landing/HowItWorks";
import Waitlist from "@/components/landing/Waitlist";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen" style={{ background: "#070B14" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <Comparison />
      <HowItWorks />
      <Waitlist />
      <Footer />
    </main>
  );
}
