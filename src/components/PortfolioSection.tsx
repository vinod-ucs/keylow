import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const projects = [
  { img: portfolio1, tag: "COMPLETED", title: "Listerpros help real estate agents grow their businesses" },
  { img: portfolio2, tag: "PARKING", title: "Reserve a parking spot in Hawai'i University" },
  { img: portfolio1, tag: "FINTECH", title: "Secure payment platform for digital banking" },
  { img: portfolio2, tag: "E-COMMERCE", title: "Scalable online marketplace for retail brands" },
  { img: portfolio1, tag: "HEALTH", title: "Patient management system for healthcare providers" },
  { img: portfolio2, tag: "EDUCATION", title: "LMS platform for universities and colleges" },
];

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding relative">
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">The Successfully <span className="gradient-text">Brewed Businesses</span></h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">Here's a look at some of the projects we've delivered for our clients across industries.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                {p.tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <span className="inline-flex items-center gap-1 text-sm text-primary">
                View Project <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
