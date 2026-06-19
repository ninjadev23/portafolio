import { useState } from "react";
import { Maximize2, X, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { CertType } from "../types";

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<CertType | null>(null);
  const { t, i18n } = useTranslation();

  const certificates = t("education.certificates", {
    returnObjects: true,
  }) as CertType[];

  const inProgressLabel = i18n.language === "es" ? "En Curso..." : "In Progress...";

  return (
    <div className="mt-20">
      <h2 className="text-center text-2xl font-bold m-10">
        <span className="border-b border-white/30 py-2 tracking-wide">{t("education.title")}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-5 px-4">
        {certificates.map((cert, index) => {
          const isInProgress = cert.status === "in_progress";

          if (isInProgress) {
            return (
              <div
                key={index}
                className="relative w-52 rounded-xl overflow-hidden
                           bg-gradient-to-br from-sky-500/10 via-purple-500/5 to-sky-500/10
                           backdrop-blur-md border border-sky-400/20
                           transition-all duration-300 hover:scale-105 hover:border-sky-400/40
                           hover:shadow-lg hover:shadow-sky-500/10"
              >
                {/* Decorative top area */}
                <div className="h-35 flex items-center justify-center bg-gradient-to-br from-sky-900/30 to-purple-900/20 relative overflow-hidden">
                  {/* Animated background circles */}
                  <div className="absolute w-20 h-20 rounded-full bg-sky-400/10 top-2 -left-4 blur-xl" />
                  <div className="absolute w-16 h-16 rounded-full bg-purple-400/10 bottom-0 right-2 blur-xl" />
                  <BookOpen size={48} className="text-sky-400/60 relative z-10" />
                </div>
                {/* Badge */}
                <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-sky-500/20 backdrop-blur-md text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-sky-400/30">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse-dot" />
                  {inProgressLabel}
                </div>
                {/* Info */}
                <div className="p-3">
                  <h3 className="text-center font-semibold text-sm leading-tight">{cert.name}</h3>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <p className="font-bold text-sky-400/80 text-sm">{cert.platform}</p>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div
              key={index}
              className="relative group w-52 rounded-xl overflow-hidden
                         bg-white/[0.04] backdrop-blur-md border border-white/[0.08]
                         transition-all duration-300 hover:scale-105 hover:border-white/[0.15]
                         hover:shadow-lg hover:shadow-sky-500/5"
            >
              <img
                loading="lazy"
                className="w-full h-35 object-cover"
                src={cert.image}
                alt={cert.name}
              />
              <button
                onClick={() => setSelectedCert(cert)}
                className="hover:cursor-pointer absolute top-2 right-2 
                           opacity-100 md:opacity-0 md:group-hover:opacity-100
                           transition-opacity bg-white/80 hover:bg-white text-black p-1 rounded-full shadow"
                aria-label={`View certificate ${cert.name}`}
              >
                <Maximize2 size={18} />
              </button>
              <div className="p-2">
                <h3 className="text-center font-semibold text-sm">{cert.name}</h3>
                <div className="flex justify-center items-center gap-2 mt-2">
                  {cert.platform && <p className="font-bold text-sm text-white/70">{cert.platform}</p>}
                  {cert.platformIcon && (
                    <img
                      className="w-7 h-7 rounded-full object-cover"
                      src={cert.platformIcon}
                      alt={cert.platform}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow transition-colors"
              aria-label="Close certificate preview"
            >
              <X size={22} />
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
            />
            <h2 className="text-center text-white text-xl mt-4">
              {selectedCert.name}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
