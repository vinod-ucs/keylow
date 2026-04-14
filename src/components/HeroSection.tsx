import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IPadMockup from "@/components/iPadMockup";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/15 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-accent/10 blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div style={{ opacity }} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              SOFTWARE DEVELOPMENT COMPANY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              We Build Custom Software That Help Businesses{" "}
              <span className="gradient-text-hero">Accelerate Growth</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-lg"
            >
              ZealSoft Systems is a software company consisting of a team of top-tier software engineers, product designers who understand the challenges of product development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary group text-base px-8">
                Build Your Success Story <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted text-base px-8">
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <IPadMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
