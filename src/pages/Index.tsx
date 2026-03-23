import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LocalSEOSection from "@/components/LocalSEOSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyBottomBar from "@/components/StickyBottomBar";
import FloatingButtons from "@/components/FloatingButtons";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="pb-14 md:pb-0">
      <SEOHead
        title="Best Video Editing Institute in Udupi | Ilika Institute"
        description="Join Ilika Institute in Udupi for professional video editing courses. Learn reels, YouTube editing, and cinematic cuts with practical training. Fees from ₹4,999."
        canonical="https://ilikainstitute.com/"
      />
      <Navbar />
      <HeroSection />
      <AnimateOnScroll><AboutSection /></AnimateOnScroll>
      <AnimateOnScroll><CoursesSection /></AnimateOnScroll>
      <AnimateOnScroll><WhyChooseUs /></AnimateOnScroll>
      <AnimateOnScroll><LocalSEOSection /></AnimateOnScroll>
      <AnimateOnScroll><TestimonialsSection /></AnimateOnScroll>
      <AnimateOnScroll><ContactSection /></AnimateOnScroll>
      <Footer />
      <StickyBottomBar />
      <FloatingButtons />
    </div>
  );
};

export default Index;
