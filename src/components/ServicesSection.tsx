import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Server, Smartphone, TestTube, Brain, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2, num: "01", tag: "frontend", title: "Front-end Development",
    desc: "Frontend development involves the development of the parts of user interfaces with which users interact directly. Through the use of HTML, CSS, JavaScript, and various frameworks, we build responsive, accessible, and intuitive interfaces.",
    sub: "From modern dashboards to customer-facing portals, our frontend engineering ensures pixel-perfect execution with performance baked in.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server, num: "02", tag: "backend", title: "Backend Development",
    desc: "We engineer scalable, secure backend systems using Node.js, Python, Go, and cloud-native architectures that power your applications reliably.",
    sub: "Our backend services ensure high availability, data integrity, and seamless API integrations.",
    tags: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    icon: Smartphone, num: "03", tag: "mobile", title: "Mobile App Development",
    desc: "Cross-platform and native mobile development for iOS and Android, delivering smooth, performant experiences users love.",
    sub: "From concept to App Store launch, we handle the entire mobile development lifecycle.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    icon: TestTube, num: "04", tag: "testing", title: "QA & Testing",
    desc: "Comprehensive quality assurance with automated testing, performance testing, and security audits to ship bug-free software.",
    sub: "We integrate testing into every phase of development for maximum reliability.",
    tags: ["Selenium", "Jest", "Cypress", "Load Testing"],
  },
  {
    icon: Brain, num: "05", tag: "ai", title: "AI Development",
    desc: "Custom AI and machine learning solutions including NLP, computer vision, and predictive analytics to give your business an intelligent edge.",
    sub: "We build AI-powered features that transform data into actionable insights.",
    tags: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-padding relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">What's Brewing in <span className="gradient-text">ZealSoft Systems?</span></h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">We offer a comprehensive range of software development services tailored to meet your business needs.</p>
        </motion.div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
            {services.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap ${
                  active === i ? "bg-primary/10 border border-primary/30 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <span className="text-primary font-heading font-bold">{s.num}</span>
                <span className="font-medium">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-2 text-sm text-primary font-medium tracking-wider uppercase">
              {services[active].num} — {services[active].tag}
            </div>
            <h3 className="text-3xl font-bold mb-4">{services[active].title}</h3>
            <p className="text-muted-foreground text-lg mb-4">{services[active].desc}</p>
            <p className="text-muted-foreground mb-6">{services[active].sub}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {services[active].tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-sm bg-muted text-muted-foreground border border-border/50">{t}</span>
              ))}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium">
              Explore <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
