import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { CertType } from "../types";

export default function Education() {
  const [selectedCert, setSelectedCert] = useState<CertType | null>(null);
  const { t } = useTranslation();

  const certificates = t("education.certificates", {
    returnObjects: true,
  }) as CertType[];

  return (
    <div className="mt-20">
      <h2 className="text-center text-2xl font-bold m-10">
        <span className="border-b py-2">{t("education.title")}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="hover:scale-110 relative group w-52 bg-black/40 backdrop-blur-md rounded-lg overflow-hidden transition-transform"
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
              <h3 className="text-center font-semibold">{cert.name}</h3>
              <div className="flex justify-center items-center gap-2 mt-2">
                {cert.platform && <p className="font-bold">{cert.platform}</p>}
                {cert.platformIcon && (
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src={cert.platformIcon}
                    alt={cert.platform}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
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
