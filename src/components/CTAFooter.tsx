import { Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import BookDemoModal from "@/components/BookDemoModal";

const CTAFooter = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Section */}
      <div className="border-t-2 border-primary/20 bg-secondary/95 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-8">
            Ready to Transform Your Procurement?
          </h2>
          <BookDemoModal 
            size="lg"
            className="text-lg px-6 py-6 rounded-sm transition-transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Poruta</h3>
              <p className="text-secondary-foreground/70 text-sm">
                Powering Africa&apos;s Trade with AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://x.com/poruta"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/poruta"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@poruta.com"
                  className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/10 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>&copy; {currentYear} Poruta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
