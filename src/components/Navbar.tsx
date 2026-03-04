import { useState, useEffect } from "react";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy ${
        scrolled ? "shadow-lg shadow-navy/30" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={logo} alt="Spotless Trades Logo" className="h-10 lg:h-14 w-auto" />
          </a>

          {/* Desktop contact info */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-body">
            <a href="tel:0431453312" className="text-card hover:text-gold transition-colors flex items-center gap-1.5">
              📞 <span>0431 453 312</span>
            </a>
            <a href="mailto:info@spotlesstrades.com.au" className="text-card hover:text-gold transition-colors flex items-center gap-1.5">
              ✉️ <span>info@spotlesstrades.com.au</span>
            </a>
            <span className="text-card/60 flex items-center gap-1.5">
              📍 Melbourne, Victoria
            </span>
            <a
              href="#contact"
              className="bg-gold text-accent-foreground font-semibold px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
            >
              Book Free Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-card p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-card/10 mt-2 pt-4 space-y-3 font-body">
            <a href="tel:0431453312" className="block text-card hover:text-gold transition-colors">
              📞 0431 453 312
            </a>
            <a href="mailto:info@spotlesstrades.com.au" className="block text-card hover:text-gold transition-colors">
              ✉️ info@spotlesstrades.com.au
            </a>
            <span className="block text-card/60">📍 Melbourne, Victoria</span>
            <a
              href="#contact"
              className="block bg-gold text-accent-foreground font-semibold px-5 py-2.5 rounded-lg text-center hover:brightness-110 transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
