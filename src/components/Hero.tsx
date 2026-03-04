import { motion } from "framer-motion";
import heroBathroom from "@/assets/hero-bathroom.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row pt-16 lg:pt-20">
      {/* Left content */}
      <div className="lg:w-[55%] bg-navy flex items-center">
        <div className="px-6 py-16 lg:px-16 lg:py-24 max-w-2xl mx-auto lg:mx-0 lg:ml-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gold text-xs font-body font-semibold tracking-[0.25em] uppercase"
          >
            Melbourne Bathroom Renovations
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-card mt-6 leading-tight"
          >
            Your Dream Bathroom.{" "}
            <span className="italic">Done Properly.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-card/70 text-lg font-body mt-6 leading-relaxed"
          >
            Stop gambling on cheap tradies. Melbourne's most trusted bathroom
            renovation specialists — quality you can see, compliance you can
            count on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex flex-wrap gap-4 mt-6 text-sm font-body text-card/80"
          >
            <span className="flex items-center gap-1.5">✔️ 7-Year Guarantee</span>
            <span className="flex items-center gap-1.5">✔️ AS3740 Certified</span>
            <span className="flex items-center gap-1.5">✔️ Fixed Quotes</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#contact"
              className="bg-gold text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-lg hover:brightness-110 transition-all text-lg"
            >
              Book My Free Consultation
            </a>
            <a
              href="tel:0431453312"
              className="border-2 border-card text-card font-body font-semibold px-8 py-3.5 rounded-lg hover:bg-card/10 transition-all text-lg"
            >
              Call 0431 453 312
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-6 flex items-center gap-2 font-body text-sm"
          >
            <span className="text-gold text-lg">⭐⭐⭐⭐⭐</span>
            <span className="text-card/70">5-Star Rated by Melbourne Homeowners</span>
          </motion.div>
        </div>
      </div>

      {/* Right image */}
      <div className="lg:w-[45%] relative min-h-[400px] lg:min-h-0">
        <div className="absolute inset-0 p-3 lg:p-4">
          <div className="w-full h-full rounded-lg overflow-hidden ring-2 ring-gold/30">
            <img
              src={heroBathroom}
              alt="Luxury bathroom renovation by Spotless Trades Melbourne"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
