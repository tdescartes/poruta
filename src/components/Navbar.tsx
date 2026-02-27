"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookDemoModal from "@/components/BookDemoModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isHomePage
    ? [
        { name: "Scale", href: "#scale", type: "anchor" },
        { name: "Platform", href: "#platform", type: "anchor" },
        { name: "Capabilities", href: "#capabilities", type: "anchor" },
        { name: "About", href: "#about", type: "anchor" },
      ]
    : [
        { name: "Home", href: "/", type: "route" },
        { name: "Features", href: "/features", type: "route" },
        { name: "About", href: "/about", type: "route" },
        { name: "Pricing", href: "/pricing", type: "route" },
      ];

  return (
    <nav className="fixed w-full bg-surface-50/95 backdrop-blur-md z-50 border-b border-surface-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/poruta-logo.png"
                alt="Poruta"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-xs font-bold text-surface-600 uppercase tracking-widest">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-surface-900 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-surface-900 transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <BookDemoModal
              trigger={
                <a className="bg-surface-900 text-white px-6 py-3 hover:bg-poruta-700 transition-colors cursor-pointer">
                  Book Demo
                </a>
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-surface-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface-50 border-t border-surface-200 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) =>
              link.type === "anchor" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-xs font-bold text-surface-600 uppercase tracking-widest hover:text-surface-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block py-3 text-xs font-bold text-surface-600 uppercase tracking-widest hover:text-surface-900 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <div onClick={() => setIsMobileMenuOpen(false)}>
              <BookDemoModal
                trigger={
                  <button className="w-full mt-2 bg-surface-900 text-white px-6 py-3 hover:bg-poruta-700 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer">
                    Book Demo
                  </button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
