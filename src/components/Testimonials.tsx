import { motion } from "framer-motion";
import avatarSarah from "@/assets/avatar-sarah.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarLisa from "@/assets/avatar-lisa.jpg";

const testimonials = [
  {
    avatar: avatarSarah,
    name: "Sarah M.",
    location: "Toorak",
    review: "Spotless Trades transformed our dated ensuite into something out of a magazine. The attention to detail was incredible — every tile was perfectly aligned, and the waterproofing was done to the highest standard. Couldn't recommend them more highly.",
  },
  {
    avatar: avatarJames,
    name: "James R.",
    location: "Brighton",
    review: "After two bad experiences with other builders, we were nervous. From the first consultation, the transparency was refreshing — fixed quote, clear timeline, and zero surprises. The final result exceeded our expectations.",
  },
  {
    avatar: avatarLisa,
    name: "Lisa T.",
    location: "South Yarra",
    review: "What impressed me most was the communication throughout the entire project. The site was always clean, the team was respectful, and the finished bathroom is absolutely stunning. Worth every cent.",
  },
];

const Testimonials = () => (
  <section className="py-20 lg:py-28 bg-cream">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl lg:text-4xl font-bold text-foreground"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground mt-4"
        >
          Real homeowners. Real renovations. Real results.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-gold"
          >
            <div className="text-gold text-lg mb-2">⭐⭐⭐⭐⭐</div>
            <span className="text-gold/30 font-heading text-5xl leading-none">"</span>
            <p className="font-body text-muted-foreground italic text-sm leading-relaxed -mt-4 mb-5">
              {t.review}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-body font-semibold text-foreground text-sm">{t.name}</div>
                <div className="font-body text-muted-foreground text-xs">{t.location}</div>
              </div>
              <span className="ml-auto text-xs font-body text-gold bg-gold/10 px-2 py-1 rounded">
                Verified Client
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
