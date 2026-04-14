import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import avatar from "@/assets/testimonial-avatar.jpg";

const TestimonialsSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Testimonials: Trusted <span className="gradient-text">by Our Clients</span></h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-card p-10 md:p-14 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />
          <div className="flex items-center gap-2 mb-6">
            <span className="text-4xl font-bold text-primary">4.9</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <span className="text-sm text-muted-foreground">Based on client reviews</span>
            </div>
          </div>
          <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
            "Everything about our relationship with ZealSoft has been exceptional. They've assisted us quickly across the project, got us started, were very easy to communicate with, managed our expectations. On our projects, there was complete and thorough understanding. They've outsourced before throughout our engagement, but It's my hope that they continue to do well."
          </blockquote>
          <div className="flex items-center gap-4">
            <img src={avatar} alt="Tyler Seerust" className="w-14 h-14 rounded-full border-2 border-primary/30 object-cover" />
            <div>
              <p className="font-bold">Tyler Seerust</p>
              <p className="text-sm text-muted-foreground">Brand Proding</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
