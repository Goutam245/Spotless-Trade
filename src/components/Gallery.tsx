import { motion } from "framer-motion";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const pairs = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
];

const Gallery = () => (
  <section className="py-20 lg:py-28 bg-navy">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl lg:text-4xl font-bold text-card"
        >
          See The{" "}
          <span className="border-b-2 border-gold pb-1">Difference</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-card/60 mt-4"
        >
          Real results from recent Melbourne bathroom renovations.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {pairs.map((pair, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={pair.before}
                alt="Bathroom before renovation"
                className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-body font-bold px-3 py-1 rounded">
                BEFORE
              </span>
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img
                src={pair.after}
                alt="Bathroom after renovation by Spotless Trades"
                className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 bg-gold text-accent-foreground text-xs font-body font-bold px-3 py-1 rounded">
                AFTER
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#contact"
          className="border-2 border-gold text-gold font-body font-semibold px-8 py-3 rounded-lg hover:bg-gold hover:text-accent-foreground transition-all inline-block"
        >
          View More Project Photos →
        </a>
      </div>
    </div>
  </section>
);

export default Gallery;
