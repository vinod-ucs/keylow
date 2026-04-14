import { motion } from "framer-motion";
import { Shield, Lock, Cloud, Star } from "lucide-react";

const certs = [
  { icon: Shield, title: "ISO 9001 Certified" },
  { icon: Lock, title: "SOC 2 Compliant" },
  { icon: Cloud, title: "AWS Partner" },
  { icon: Star, title: "Top Rated on Clutch" },
];

const CertificatesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Certificates</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">We Are Awarded & Certified <span className="gradient-text">For Our Services</span></h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:border-primary/30 transition-all duration-500 group"
          >
            <div className="w-14 h-14 mx-auto rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <c.icon className="w-7 h-7 text-secondary" />
            </div>
            <p className="font-heading font-semibold">{c.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
