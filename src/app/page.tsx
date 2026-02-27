import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketOpportunity from "@/components/MarketOpportunity";
import Challenges from "@/components/Challenges";
import Capabilities from "@/components/Capabilities";
import About from "@/components/About";
import Contact from "@/components/Contact";
import CTAFooter from "@/components/CTAFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarketOpportunity />
      <Challenges />
      <Capabilities />
      <About />
      <Contact />
      <CTAFooter />
    </div>
  );
}
