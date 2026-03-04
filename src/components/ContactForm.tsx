import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
          {/* Left */}
          <div className="bg-navy p-8 lg:p-14 flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl lg:text-4xl font-bold text-card"
            >
              Ready To Renovate Properly?
            </motion.h2>
            <p className="font-body text-card/70 mt-4 leading-relaxed">
              Spots are limited to maintain quality control. Request your free on-site consultation today.
            </p>

            <ul className="space-y-3 mt-8 font-body text-card text-sm">
              <li className="flex items-center gap-2"><span className="text-gold">✔</span> Free on-site consultation</li>
              <li className="flex items-center gap-2"><span className="text-gold">✔</span> No obligation fixed quote</li>
              <li className="flex items-center gap-2"><span className="text-gold">✔</span> Speak directly with the owner</li>
              <li className="flex items-center gap-2"><span className="text-gold">✔</span> Response within 24 hours</li>
            </ul>

            <div className="mt-10 space-y-3">
              <a href="tel:0431453312" className="flex items-center gap-2 text-gold font-body text-xl font-bold hover:underline">
                📞 0431 453 312
              </a>
              <a href="mailto:info@spotlesstrades.com.au" className="flex items-center gap-2 text-card/80 font-body hover:text-gold transition-colors">
                ✉️ info@spotlesstrades.com.au
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-card p-8 lg:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Thank You!</h3>
                <p className="font-body text-muted-foreground mt-2">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Book My Free Consultation
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 font-body">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                  <input
                    type="text"
                    placeholder="Suburb *"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                  />
                  <select
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition"
                    defaultValue=""
                  >
                    <option value="" disabled>Renovation Budget</option>
                    <option>Under $10,000</option>
                    <option>$10,000–$20,000</option>
                    <option>$20,000–$35,000</option>
                    <option>$35,000+</option>
                  </select>
                  <textarea
                    placeholder="Tell us about your bathroom (optional)"
                    rows={3}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-gold focus:border-gold outline-none transition resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gold text-accent-foreground font-semibold py-4 rounded-lg text-lg hover:brightness-110 transition-all"
                  >
                    BOOK MY FREE CONSULTATION →
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    🔒 Your details are private. No spam. No pressure.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
