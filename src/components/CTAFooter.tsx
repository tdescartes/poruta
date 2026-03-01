import Link from "next/link";

const CTAFooter = () => {
  return (
    <footer className="bg-surface-950 pt-16 pb-8 border-t border-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-surface-900 pb-10 mb-8">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/poruta-logo.png"
              alt="Poruta"
              className="h-8 w-auto brightness-0 invert"
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-16 gap-y-4">
            <div>
              <h4 className="text-surface-300 font-mono text-[10px] uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/careers" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-surface-300 font-mono text-[10px] uppercase tracking-widest mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-surface-300 font-mono text-[10px] uppercase tracking-widest mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:sales@poruta.com" className="text-surface-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
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
