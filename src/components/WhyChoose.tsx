import { motion } from "framer-motion";

const features = [
  { icon: "🔨", title: "Full Renovation Service", text: "Demolition, plumbing, electrical, waterproofing, tiling, cabinetry, painting — all managed for you." },
  { icon: "🛡️", title: "AS3740 Waterproofing", text: "Premium waterproofing systems adhering strictly to Australian Standard AS3740. No shortcuts." },
  { icon: "⭐", title: "7-Year Workmanship Guarantee", text: "Total peace of mind with our 7-year guarantee. Compliance certificates provided." },
  { icon: "📋", title: "Fixed, Transparent Quotes", text: "Clear scope. No vague allowances. No tricks. You know exactly what you're paying." },
  { icon: "👔", title: "Owner-Supervised Projects", text: "You deal directly with the business owner — not a sales rep or random subcontractors." },
  { icon: "✨", title: "Clean & Organised Sites", text: "We respect your home. Job sites remain clean, safe, and highly organised throughout the entire build." },
];

const WhyChoose = () => (
  <section className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl lg:text-4xl font-bold text-foreground"
        >
          Why Melbourne Homeowners Choose Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground mt-4 text-lg"
        >
          We don't compete with the cheapest quote. We compete on quality, precision and results that still look perfect in 10 years.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border-t-4 border-t-gold"
          >
            <div className="text-3xl mb-4">{f.icon}</div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
