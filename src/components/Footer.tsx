import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";
import logo from "@/assets/ilika-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Ilika Institute of Editing - Video Editing Training in Udupi" className="h-20 mb-4" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Best video editing institute in Udupi offering professional courses in reels editing,
              YouTube content creation, and cinematic video editing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919901849548" className="hover:text-accent transition-colors">+91 99018 49548</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Brahmagiri, Udupi, Karnataka 576101</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a href="https://www.instagram.com/ilikainstitute" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@ilikainstitute</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Ilika Institute of Editing, Udupi. All rights reserved. |
          Video Editing Course in Udupi | Best Editing Institute Karnataka
        </div>
      </div>
    </footer>
  );
};

export default Footer;
