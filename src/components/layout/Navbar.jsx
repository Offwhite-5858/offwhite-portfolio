"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.querySelector(link.href));
      let current = "home";
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            current = section.getAttribute("id");
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? "bg-[#F7F7F5]/95 dark:bg-dark-900/95 backdrop-blur-md shadow-md"
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex-shrink-0">
            <img
              src={darkMode ? "/logo-dark.svg" : "/logo.svg"}
              alt="OFFWHITE TECH"
              className="h-10 md:h-14 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative pb-1 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-gold-500"
                    : "text-dark-600 dark:text-dark-200 hover:text-gold-500"
                }`}
              >
                {link.name}
                {activeSection === link.href.replace("#", "") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 rounded-full" />
                )}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-dark-600 dark:text-dark-200 hover:text-gold-500 dark:hover:text-gold-400 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button onClick={toggleTheme} className="p-2 rounded-full text-dark-600 dark:text-dark-200">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-dark-600 dark:text-dark-200">
              {isOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-80" : "max-h-0"}`}>
        <div className="bg-[#F7F7F5] dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-gold-500"
                  : "text-dark-600 dark:text-dark-200"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}