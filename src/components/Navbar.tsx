import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/ilika-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Ilika Institute of Editing" className="h-20 w-auto py-1" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${
                isActive(l.href) ? "text-accent" : "text-foreground/80 hover:text-accent"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Button variant="cta" size="sm" asChild>
            <a href="tel:+919901849548">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="container flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  isActive(l.href) ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button variant="cta" size="default" asChild>
              <a href="tel:+919901849548">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
