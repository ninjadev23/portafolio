import { useTranslation } from "react-i18next";
import type { NavItemType } from "../types";
import { useState } from "react";
import { Menu } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
export default function Navigation() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = t("navigation", { returnObjects: true }) as NavItemType[];

  return (
    <nav className="w-full h-16 bg-black/30 backdrop-blur-md fixed top-0 left-0 z-20 px-4 py-2 flex items-center justify-between">
      <img
        className="h-10 w-40 -ml-6 object-cover"
        src="/logo.webp"
        alt="code"
      />
      <LanguageToggle />
      {/* Desktop nav */}
      <ul className="hidden md:flex justify-center gap-2 text-lg font-semibold">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="p-2 hover:border-b hover:text-white/60 text-[1rem]"
          >
            <a href={item.to}>{item.name}</a>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      <button
        className="md:hidden -mr-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu className="text-white w-8 h-8" />
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/30 backdrop-blur-lg flex flex-col gap-4 text-white text-center font-semibold py-5 md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              className="py-1"
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
