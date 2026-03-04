import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-navy pt-16 pb-6">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-10 pb-10">
        {/* Left */}
        <div>
          <img src={logo} alt="Spotless Trades" className="h-14 w-auto mb-4" />
          <p className="font-body text-gold italic text-sm mb-3">Honest & Affordable</p>
          <p className="font-body text-card/60 text-sm leading-relaxed">
            Melbourne's trusted bathroom renovation specialists. Quality workmanship. Fixed prices. Zero surprises.
          </p>
        </div>

        {/* Middle */}
        <div>
          <h4 className="text-gold font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">Quick Links</h4>
          <ul className="space-y-2 font-body text-sm">
            {["Home", "About", "Gallery", "Contact", "Book Consultation"].map((link) => (
              <li key={link}>
                <a href="#" className="text-card/70 hover:text-gold transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-gold font-body font-semibold text-xs tracking-[0.2em] uppercase mb-5">Contact Us</h4>
          <ul className="space-y-2 font-body text-sm text-card/70">
            <li><a href="tel:0431453312" className="hover:text-gold transition-colors">📞 0431 453 312</a></li>
            <li><a href="mailto:info@spotlesstrades.com.au" className="hover:text-gold transition-colors">✉️ info@spotlesstrades.com.au</a></li>
            <li>📍 Melbourne, Victoria, Australia</li>
            <li>🕐 Mon–Fri 7am–5pm, Sat 8am–2pm</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20 pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-body text-card/40">
        <span>© 2024 Spotless Trades. All Rights Reserved.</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
