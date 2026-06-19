import { useTranslation } from "react-i18next";
import type { NavItemType } from "../types";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

export default function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navItems = t("navigation", { returnObjects: true }) as NavItemType[];

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close menu on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className="w-full h-16 bg-black/40 backdrop-blur-xl fixed top-0 left-0 z-20 px-4 py-2 flex items-center justify-between border-b border-white/[0.06]">
      <a href="#home">
        <img
          className="h-10 w-40 -ml-6 object-cover"
          src="/logo.webp"
          alt="code"
        />
      </a>
      <LanguageToggle />
      {/* Desktop nav */}
      <ul className="hidden md:flex justify-center gap-1 text-[0.95rem] font-medium">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="relative px-3 py-2 text-white/80 hover:text-white transition-colors duration-200
                       after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2
                       after:w-0 after:h-[2px] after:bg-sky-400 after:transition-all after:duration-300
                       hover:after:w-3/4"
          >
            <a href={item.to}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu button */}
      <button
        ref={buttonRef}
        className="md:hidden -mr-2 p-2 rounded-lg hover:bg-white/10 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? (
          <X className="text-white w-7 h-7" />
        ) : (
          <Menu className="text-white w-7 h-7" />
        )}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          className="animate-slide-down absolute top-full left-0 w-full bg-black/60 backdrop-blur-2xl
                     flex flex-col gap-1 text-white text-center font-medium py-4 px-4 md:hidden
                     border-b border-white/[0.06] shadow-2xl"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              className="py-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white/85 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              href={item.to}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
