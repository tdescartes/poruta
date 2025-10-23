import { Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTAFooter = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-background/20 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Poruta</h3>
              <p className="text-background/70 text-sm">
                Powering Africa's Trade with AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/about" className="text-background/70 hover:text-background transition-colors hover:underline">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-background/70 hover:text-background transition-colors hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-background/70 hover:text-background transition-colors hover:underline">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-background/70 hover:text-background transition-colors hover:underline">
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
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/company/poruta"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@poruta.com"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-sm text-background/60">
            <p>© 2025 Poruta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CTAFooter;
