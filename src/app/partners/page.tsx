import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";

export const metadata: Metadata = {
  title: "Partners | Poruta",
  description: "Explore partnership opportunities and integrations with Poruta's trade infrastructure platform.",
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-surface-900 mb-6 tracking-tighter">
            Partners
          </h1>
          <p className="text-lg text-surface-600 max-w-2xl mx-auto mb-4">
            Partner with Poruta to expand trade infrastructure across Africa. Integration and partnership details coming soon.
          </p>
          <p className="text-sm text-surface-500 font-mono uppercase tracking-widest">
            Coming Soon
          </p>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
