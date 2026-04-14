import { motion } from "framer-motion";

const stats = [
  { value: "5 Year+", label: "Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "40+", label: "Expert Developers" },
];

const StatsSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h3 className="font-heading text-xl text-primary mb-2">ZealSoft Systems</h3>
        <p className="text-muted-foreground text-lg">We are a company which is passionate about its work</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
          >
            <div className="text-4xl md:text-5xl font-bold font-heading gradient-text mb-2">{s.value}</div>
            <div className="text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
