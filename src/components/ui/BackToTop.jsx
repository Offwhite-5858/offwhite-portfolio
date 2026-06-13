"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 p-3 bg-gold-500 text-dark-900 rounded-full shadow-lg hover:bg-gold-400 transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  ) : null;
}