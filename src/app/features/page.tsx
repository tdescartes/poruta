import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import Features from "@/components/Features";
import BookDemoModal from "@/components/BookDemoModal";

export const metadata: Metadata = {
  title: "Features | Poruta AI-Powered Procurement",
  description:
    "Discover how Poruta's AI-powered platform transforms procurement workflows from documentation to insights.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Features Built for Africa
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover how Poruta&apos;s AI-powered platform transforms
              procurement workflows from documentation to insights.
            </p>
          </div>
        </div>
      </section>

      <Features />

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">
              Before vs After Poruta
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-destructive">
                  Before
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 10+ days for document processing</li>
                  <li>• 30-50% error rates in data entry</li>
                  <li>• Hours wasted on manual HS coding</li>
                  <li>• Limited market intelligence</li>
                  <li>• Paper-based audit trails</li>
                </ul>
              </div>
              <div className="bg-gradient-hero p-6 rounded-lg border border-primary">
                <h3 className="text-xl font-semibold mb-4 text-white">After</h3>
                <ul className="space-y-3 text-white/90">
                  <li>• Hours for automated processing</li>
                  <li>• 99% accuracy with AI validation</li>
                  <li>• Instant automated codification</li>
                  <li>• Real-time predictive analytics</li>
                  <li>• Blockchain-verified transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <BookDemoModal size="lg" />
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
