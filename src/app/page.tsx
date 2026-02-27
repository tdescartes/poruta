import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenges from "@/components/Challenges";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CompetitiveAdvantage from "@/components/CompetitiveAdvantage";
import MarketOpportunity from "@/components/MarketOpportunity";
import Contact from "@/components/Contact";
import CTAFooter from "@/components/CTAFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Challenges />
      <Solution />
      <Features />
      <Benefits />
      <CompetitiveAdvantage />
      <MarketOpportunity />
      <Contact />
      <CTAFooter />
    </div>
  );
}
