import { motion } from "framer-motion";

const stats = [
  { icon: "🏆", value: "500+", label: "Bathrooms Renovated" },
  { icon: "⭐", value: "5-Star", label: "Google Rating" },
  { icon: "🛡️", value: "7-Year", label: "Guarantee" },
  { icon: "📋", value: "AS3740", label: "Certified" },
];

const TrustBar = () => (
  <section className="bg-navy py-10 lg:py-14">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-gold font-heading text-2xl lg:text-3xl font-bold">{stat.value}</div>
            <div className="text-card/80 font-body text-sm mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
