import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BookDemoModal from "@/components/BookDemoModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isHomePage ? [
    { name: "Home", href: "#home", type: "anchor" },
    { name: "Features", href: "#features", type: "anchor" },
    { name: "About", href: "#about", type: "anchor" },
    { name: "Contact", href: "#contact", type: "anchor" },
  ] : [
    { name: "Home", href: "/", type: "route" },
    { name: "Features", href: "/features", type: "route" },
    { name: "About", href: "/about", type: "route" },
    { name: "Pricing", href: "/pricing", type: "route" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card shadow-md" : "backdrop-blur-sm bg-black/10"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className={`text-2xl font-bold hover:opacity-80 transition-opacity ${
                isScrolled ? "text-primary" : "text-white"
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
            >
              Poruta
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => 
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative transition-all duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:tracking-wide ${
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white hover:text-white/90"
                  }`}
                  style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative transition-all duration-200 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:tracking-wide ${
                    isScrolled 
                      ? "text-foreground hover:text-primary" 
                      : "text-white hover:text-white/90"
                  }`}
                  style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
                >
                  {link.name}
                </Link>
              )
            )}
            <BookDemoModal className="hover:scale-105 transition-transform" />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors ${
                isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/90"
              }`}
              aria-label="Toggle menu"
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3)' } : {}}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => 
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div onClick={() => setIsMobileMenuOpen(false)}>
              <BookDemoModal className="w-full mt-2" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
