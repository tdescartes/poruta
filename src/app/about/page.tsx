import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { Users, Target, Award } from "lucide-react";
import BookDemoModal from "@/components/BookDemoModal";

export const metadata: Metadata = {
  title: "About Poruta | AI-Powered Procurement for Africa",
  description:
    "Learn about Poruta's mission to transform African procurement with AI-powered automation and transparent trade infrastructure.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              About Poruta
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Poruta is transforming African procurement with AI-powered
              automation. We&apos;re building the infrastructure for
              transparent, efficient trade across the continent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                Empower African businesses with AI tools that eliminate
                procurement friction and unlock AfCFTA&apos;s potential.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                A connected Africa where cross-border trade is seamless,
                transparent, and accessible to all businesses.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, transparency, and inclusivity drive everything we
                build for African markets.
              </p>
            </div>
          </div>

          <div className="text-center">
            <BookDemoModal size="lg" />
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
