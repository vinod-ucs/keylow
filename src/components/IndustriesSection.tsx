import { motion } from "framer-motion";
import { Users, Package, BookOpen, Banknote, GraduationCap, ShoppingCart } from "lucide-react";

const industries = [
  { icon: Users, title: "CRM/Custom/Marketing Development", desc: "We build custom CRM solutions and marketing tools tailored to your workflow." },
  { icon: Package, title: "Inventory Management", desc: "Streamline your inventory with real-time tracking and automated reordering." },
  { icon: BookOpen, title: "LMS / Management Support", desc: "Learning management systems and support tools for educational institutions." },
  { icon: Banknote, title: "FinTech", desc: "Secure, compliant financial technology solutions for modern banking needs." },
  { icon: GraduationCap, title: "School Counselling", desc: "Digital platforms for student guidance and academic counselling services." },
  { icon: ShoppingCart, title: "EcoOms", desc: "E-commerce order management systems for seamless online retail operations." },
];

const IndustriesSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Industries</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Industries <span className="gradient-text">We Serve</span></h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">We partner with businesses across diverse sectors to deliver industry-specific solutions.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card p-8 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <ind.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{ind.title}</h3>
            <p className="text-muted-foreground text-sm">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
