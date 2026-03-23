import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import FloatingButtons from "@/components/FloatingButtons";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="pb-14 md:pb-0">
      <SEOHead
        title="Contact Ilika Institute | Video Editing Course Inquiry Udupi"
        description="Contact Ilika Institute in Udupi for video editing course admissions. Call +91 99018 49548, WhatsApp, or visit us at Brahmagiri, Udupi."
        canonical="https://ilikainstitute.com/contact"
      />
      <Navbar />
      <div className="pt-24 pb-4 bg-secondary">
        <div className="container">
          <p className="text-sm text-muted-foreground mb-2">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link> / <span className="text-foreground">Contact</span>
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Reach out for admissions, course details, or any questions about video editing training.
          </p>
        </div>
      </div>
      <AnimateOnScroll><ContactSection /></AnimateOnScroll>
      <Footer />
      
      <FloatingButtons />
    </div>
  );
};

export default ContactPage;
