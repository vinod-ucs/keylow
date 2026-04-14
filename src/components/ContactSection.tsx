import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Connect with Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Get a free <span className="gradient-text">consultation</span></h2>
        <p className="text-muted-foreground mt-4 text-lg">Got a monthly service or have an idea to discuss? Let's connect!</p>
      </motion.div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12 max-w-5xl mx-auto">
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Your Name" className="bg-muted/50 border-border/50 focus:border-primary" />
            <Input placeholder="Your Email" type="email" className="bg-muted/50 border-border/50 focus:border-primary" />
          </div>
          <Input placeholder="Subject" className="bg-muted/50 border-border/50 focus:border-primary" />
          <Textarea placeholder="Your Message" rows={5} className="bg-muted/50 border-border/50 focus:border-primary resize-none" />
          <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
            Submit
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-3 text-primary mb-2"><MapPin className="w-5 h-5" /><span className="font-heading font-semibold">Location</span></div>
            <p className="text-muted-foreground text-sm">Level 1, Module No:3, ELCOT IT Park, Ilandhaikulam, Madurai, Tamil Nadu 625020, India</p>
          </div>
          <div className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-3 text-primary mb-2"><Phone className="w-5 h-5" /><span className="font-heading font-semibold">Contact us</span></div>
            <p className="text-muted-foreground text-sm">+971-585513</p>
          </div>
          <div className="glass-card p-6 space-y-2">
            <div className="flex items-center gap-3 text-primary mb-2"><Mail className="w-5 h-5" /><span className="font-heading font-semibold">Email</span></div>
            <p className="text-muted-foreground text-sm">info@zealsoft.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ContactSection;
