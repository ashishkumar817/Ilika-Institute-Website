import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">

      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
        </button>
      )}

      {/* Call Button */}
      <a
        href="tel:+919901849548"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition"
      >
        <Phone className="h-5 w-5 md:h-6 md:w-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919901849548"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        style={{ backgroundColor: "#25D366", color: "white" }}
      >
        <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
      </a>

    </div>
  );
};

export default FloatingButtons;