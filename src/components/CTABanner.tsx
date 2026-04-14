import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImg from "@/assets/teamwork.jpg";

const CTABanner = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <div className="relative rounded-3xl overflow-hidden">
        <img src={teamImg} alt="Team collaboration" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="relative p-12 md:p-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">We Engineer <span className="gradient-text">Products</span></h2>
            <p className="text-muted-foreground text-lg mb-8">Turning your business ideas into reality.</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group">
              Get Started <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
