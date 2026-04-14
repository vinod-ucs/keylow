import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBar from "@/components/MarqueeBar";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";
import CertificatesSection from "@/components/CertificatesSection";
import PortfolioSection from "@/components/PortfolioSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <Navbar />
    <HeroSection />
    <MarqueeBar />
    <StatsSection />
    <ServicesSection />
    <ProcessSection />
    <CTABanner />
    <CertificatesSection />
    <PortfolioSection />
    <IndustriesSection />
    <TestimonialsSection />
    <BlogSection />
    <FAQSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
