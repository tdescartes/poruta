import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import Capabilities from "@/components/Capabilities";
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

      <section className="py-20 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 mb-6 tracking-tighter">
              Features Built for Africa
            </h1>
            <p className="text-lg text-surface-600 leading-relaxed">
              Discover how Poruta&apos;s AI-powered platform transforms
              procurement workflows from documentation to insights.
            </p>
          </div>
        </div>
      </section>

      <Capabilities />

      <section className="py-16 bg-surface-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-surface-900 text-center mb-10 tracking-tighter">
              Before vs After Poruta
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 border border-surface-200">
                <h3 className="text-xl font-bold mb-4 text-surface-900">
                  Before
                </h3>
                <ul className="space-y-3 text-surface-600 text-sm">
                  <li className="font-mono">• 10+ days for document processing</li>
                  <li className="font-mono">• 30-50% error rates in data entry</li>
                  <li className="font-mono">• Hours wasted on manual HS coding</li>
                  <li className="font-mono">• Limited market intelligence</li>
                  <li className="font-mono">• Paper-based audit trails</li>
                </ul>
              </div>
              <div className="bg-surface-900 p-6 border border-surface-800">
                <h3 className="text-xl font-bold mb-4 text-poruta-400">After</h3>
                <ul className="space-y-3 text-surface-300 text-sm">
                  <li className="font-mono">• Hours for automated processing</li>
                  <li className="font-mono">• 99% accuracy with AI validation</li>
                  <li className="font-mono">• Instant automated codification</li>
                  <li className="font-mono">• Real-time predictive analytics</li>
                  <li className="font-mono">• Blockchain-verified transparency</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-surface-900 mb-6 tracking-tighter">
            Ready to Transform Your Workflow?
          </h2>
          <BookDemoModal size="lg" />
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
