import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center py-32 bg-surface-50">
        <div className="text-center px-4">
          <div className="font-mono text-[10px] text-surface-500 uppercase tracking-widest mb-4">
            Error_Code
          </div>
          <h1 className="text-8xl font-extrabold text-surface-900 tracking-tighter mb-4">
            404
          </h1>
          <p className="text-lg text-surface-600 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-surface-900 text-white px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-poruta-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
