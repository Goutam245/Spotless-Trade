import { motion } from "framer-motion";

const included = [
  "Custom-designed bathroom tailored to your space",
  "Premium waterproofing systems",
  "Precision tiling (large format, epoxy grout options)",
  "Custom cabinetry (laminate or 2-pack finishes)",
  "Proper structural set-downs where required",
  "Clear timeline and communication throughout",
  "Compliance certificates on completion",
  "Before & after project photos provided",
];

const builtFor = [
  "You want it done once, done properly",
  "You care about compliance and long-term durability",
  "You don't want to babysit tradies on your property",
  "You value quality workmanship over bargain pricing",
];

const Services = () => (
  <section className="py-20 lg:py-28 bg-light-grey">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
            Everything Included. Nothing Hidden.
          </h2>
          <ul className="space-y-4">
            {included.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-foreground">
                <span className="text-gold text-lg mt-0.5">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-8">
            This Is Built For You If...
          </h2>
          <div className="bg-navy rounded-xl p-8">
            <ul className="space-y-4">
              {builtFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-card">
                  <span className="text-gold text-lg mt-0.5">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-gold font-body font-semibold italic text-sm leading-relaxed">
              "If you're shopping purely on price, we're not your builder. And that's okay — we're proud of it."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Services;
