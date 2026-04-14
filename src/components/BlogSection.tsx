import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

const posts = [
  {
    img: blog1,
    title: "What is a Payment Gateway and How Does it Work?",
    desc: "Learn about payment gateways, how they process transactions, and why they're essential for your e-commerce business.",
  },
  {
    img: blog2,
    title: "Setting Up of Online Real Estate Business: Best Practices in 2025",
    desc: "A comprehensive guide to launching and scaling your online real estate platform with modern technology.",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-medium tracking-wider uppercase">Blog</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Latest <span className="gradient-text">News & Blogs</span></h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground mb-4">{p.desc}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
