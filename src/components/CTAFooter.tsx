import Link from "next/link";
import Image from "next/image";

const CTAFooter = () => {
  return (
    <footer className="bg-surface-950 pt-16 pb-8 border-t border-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-surface-900 pb-10 mb-8">
          <div className="flex items-center gap-3">
            <Image
              src="/poruta-logo.png"
              alt="Poruta"
              width={120}
              height={40}
              className="h-8 w-auto brightness-0 invert"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Link href="/about" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link href="/pricing" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="text-center text-surface-600 font-mono text-xs uppercase">
          &copy; 2026 Poruta Infrastructure.
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
