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
     <section id="home" className="w-full h-screen flex items-center justify-center flex-col gap-5">
          <div className="flex items-center justify-center gap-3">
            <div className="rotate-6 bg-white h-40 w-35 flex items-center justify-center p-1">
              <img
                key={profileImage}
                className="w-full h-full object-cover opacity-0 animate-fade-in shadow"
                src={`/profiles/profile${profileImage}.webp`}
                alt="Jansel Roa Reyes"
                style={{ perspective: "1000px", transform: "rotateY(18deg)" }}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Jansel Roa Reyes</h1>
              <h2
                id="rol"
                className="inline font-bold text-sky-500 text-2xl"
              ></h2>
              <div className="flex gap-3 mt-2">
                <a href="#projects" className="p-2 rounded-sm bg-sky-600 h-10">
                  {t("home.bottom_one")}
                </a>
                <a
                  href="/CV.pdf"
                  target="_blank"
                  className="rounded-sm p-2 bg-black/60 border border-white/40 h-10"
                >
                  {t("home.bottom_two")}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center animate-bounce text-white">
            <a href="#skills" className="hover:cursor-pointer">
              <ChevronDown size={32} className="opacity-70" />
            </a>
          </div>
        </section>
  )
}
