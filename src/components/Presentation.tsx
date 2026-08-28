import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import Typed from "typed.js";
import { ChevronDown } from "lucide-react";
import { randomNumber } from "../utils";

export default function Presentation() {
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState(1);

  useEffect(() => {
    const typed = new Typed("#rol", {
      strings: t("home.words", { returnObjects: true }) as string[],
      typeSpeed: 70,
      showCursor: true,
      backSpeed: 80,
      loop: true,
    });
    return () => typed.destroy();
  }, [i18n.language]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newProfileImage = randomNumber(1, 3);
      if (newProfileImage === profileImage) {
        newProfileImage = randomNumber(1, 3);
      }
      setProfileImage(newProfileImage);
    }, 3000);
    return () => clearInterval(interval);
  }, [profileImage]);

  return (
    <section id="home" className="w-full h-screen flex items-center justify-center flex-col gap-6">
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {/* Polaroid photo */}
        <div className="rotate-6 bg-white h-60 w-60 flex items-center justify-center p-1.5 rounded-sm
                        shadow-[0_0_25px_rgba(14,165,233,0.15),0_10px_30px_rgba(0,0,0,0.4)]
                        hover:rotate-3 transition-transform duration-500">
          <img
            key={profileImage}
            className="w-full h-full object-cover opacity-0 animate-fade-in"
            src={`/profiles/profile${profileImage}.webp`}
            alt="Jansel Roa Reyes"
            style={{ perspective: "1000px", transform: "rotateY(18deg)" }}
          />
        </div>
        {/* Text content */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Jansel Roa Reyes</h1>
          <h2
            id="rol"
            className="inline font-bold text-sky-400 text-2xl"
          ></h2>
          <div className="flex gap-3 mt-3">
            <a
              href="#projects"
              className="px-2 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-sky-500
                         hover:from-sky-500 hover:to-sky-400 transition-all duration-300
                         shadow-lg shadow-sky-600/20 hover:shadow-sky-500/30
                         font-medium text-sm"
            >
              {t("home.bottom_one")}
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              className="px-2 py-2 rounded-lg bg-white/[0.06] backdrop-blur-md
                         border border-white/[0.15] hover:bg-white/[0.12]
                         transition-all duration-300 font-medium text-sm
                         hover:border-white/[0.25]"
            >
              {t("home.bottom_two")}
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center animate-bounce text-white">
        <a href="#skills" className="hover:cursor-pointer">
          <ChevronDown size={32} className="opacity-50" />
        </a>
      </div>
    </section>
  );
}
