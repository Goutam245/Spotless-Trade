import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "On-Site Consultation", text: "We assess your space, discuss your vision, and provide honest guidance. No pushy sales." },
  { num: "02", title: "Detailed Fixed Quote", text: "Clear scope. No vague allowances. No tricks. You know exactly what you're getting." },
  { num: "03", title: "Structured Renovation Phase", text: "Demolition → Plumbing/Electrical → Waterproofing → Tiling → Cabinetry → Fit-off." },
  { num: "04", title: "Final Inspection & Handover", text: "Quality checked. Cleaned. Certified. Before & after project photos provided." },
];

const Process = () => (
  <section className="py-20 lg:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl lg:text-4xl font-bold text-foreground"
        >
          Simple, Structured & Stress-Free
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground mt-4 text-lg"
        >
          From first call to final handover — you're in control.
        </motion.p>
      </div>

      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gold/30" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto mb-5">
                <span className="text-gold font-heading font-bold text-xl">{s.num}</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Process;
