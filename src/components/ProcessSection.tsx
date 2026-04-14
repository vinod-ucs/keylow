import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, Palette, Hammer, Rocket } from "lucide-react";

const steps = [
  { icon: Search, num: "01", title: "Discover", desc: "We analyze your requirements, market, and competition to build a strategic plan." },
  { icon: Palette, num: "02", title: "Design", desc: "Our designers craft intuitive, user-centric designs that align with your brand." },
  { icon: Hammer, num: "03", title: "Build", desc: "We develop scalable, high-quality software using modern tech stacks." },
  { icon: Rocket, num: "04", title: "Deliver", desc: "We deploy, test, and ensure a smooth launch with ongoing support." },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Development Process</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">We simplify software <span className="gradient-text">development process</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">Our proven 4-step process ensures transparency, quality, and on-time delivery for every project.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              {i < 3 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              <div className="glass-card p-8 text-center hover:border-primary/30 transition-all duration-500 h-full">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-5xl font-heading font-bold text-muted/50">{s.num}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
