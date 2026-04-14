import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What services does ZealSoft offer?", a: "We offer full-stack software development including frontend, backend, mobile apps, AI/ML solutions, QA & testing, cloud solutions, UI/UX design, e-commerce, and DevOps services." },
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A typical MVP takes 8-12 weeks, while larger enterprise solutions may take 4-6 months. We provide detailed timelines during our discovery phase." },
  { q: "Do you offer ongoing support after launch?", a: "Yes, we offer comprehensive post-launch support including bug fixes, performance monitoring, feature updates, and dedicated support packages tailored to your needs." },
  { q: "What industries do you specialize in?", a: "We serve diverse industries including FinTech, Healthcare, E-Commerce, Education, Real Estate, Logistics, and more. Our adaptable team brings industry-specific expertise to every project." },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold">Question? <span className="gradient-text">Look here.</span></h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border/50 rounded-xl overflow-hidden">
            <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors py-5">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
