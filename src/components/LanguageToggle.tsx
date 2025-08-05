import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { Lang } from "../types";

export default function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const [langSelected, setLangSelected] = useState<Lang>("es");
  const { i18n } = useTranslation();
  const toggleRef = useRef<HTMLDivElement>(null);

  // Leer idioma guardado
  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "es" || lang === "en") setLangSelected(lang);
  }, []);

  // Cambiar idioma y guardar
  useEffect(() => {
    i18n.changeLanguage(langSelected);
    localStorage.setItem("lang", langSelected);
    setOpen(false)
  }, [langSelected]);

  // Cerrar si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (toggleRef.current && !toggleRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={toggleRef} className="relative">
      {/* Botón actual */}
      <button
        onClick={() => setOpen(!open)}
        className="p-1 rounded border border-white/20 backdrop-blur-md transition-transform hover:scale-110 hover:cursor-pointer"
      >
        <img
          className="w-10 h-7 object-cover"
          src={`/${langSelected}.webp`}
          alt={langSelected}
        />
      </button>

      {/* Menú idiomas */}
      {open && (
        <div className="w-15 h-20 absolute -left-2 mt-2 flex flex-col items-center justify-center gap-2 rounded-md bg-black/70 backdrop-blur-md border border-white/10 z-50">
          <img
            onClick={() => setLangSelected("es")}
            className="w-10 h-7 object-cover cursor-pointer hover:scale-110 transition"
            src="/es.webp"
            alt="Español"
          />
          <img
            onClick={() => setLangSelected("en")}
            className="w-10 h-7 object-cover cursor-pointer hover:scale-110 transition"
            src="/en.webp"
            alt="English"
          />
        </div>
      )}
    </div>
  );
}
