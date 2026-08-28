import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { randomNumber } from "../utils";

export default function Letrero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [active, setActive] = useState(false);
  const { t } = useTranslation();
  const [profileImage, setProfileImage] = useState(1);

  useEffect(() => {
    if (inView) setActive(true);
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newProfileImage = randomNumber(1, 3);
      if (newProfileImage === profileImage) {
        newProfileImage = randomNumber(1, 3); // try again
      }
      setProfileImage(newProfileImage);
    }, 3000);
    return () => clearInterval(interval);
  }, [profileImage]);

  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section className="mt-15 flex justify-center w-full flex-col items-center">
      <h2 className="my-10 text-center text-2xl py-2">
        <span className="border-b border-white/30 py-2 tracking-wide">{t("about.title")}</span>
      </h2>
      <div className="flex flex-wrap-reverse justify-center bg-white/[0.04] backdrop-blur-md p-10 rounded-xl
                       border border-white/[0.08] glow-border">
        <div className="max-w-96">
          {paragraphs.map((text, i) => (
            <p key={i} className={`${i > 0 ? "mt-3" : ""} text-white/80 leading-relaxed`}>
              <Trans
                i18nKey={`about.paragraphs.${i}`}
                components={{
                  highlight: <span className="text-sky-400 font-semibold" />,
                  highlight1: <span className="text-sky-400 font-semibold" />,
                  highlight2: <span className="text-sky-400 font-semibold" />,
                }}
              />
            </p>
          ))}
        </div>

        <div className="flex justify-center items-start relative h-80">
          {/* el puntico de anclaje */}
          <div className="absolute top-0 left-1/2 -translate-x-1 w-2 h-2 bg-sky-500 rounded-full z-10 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />

          {/* Imagen colgando */}
          <div
            ref={ref}
            className={`relative sm:w-60 sm:h-60 w-56 h-56 shadow-xl border-[4px] border-white rounded-md overflow-hidden transition-transform duration-1000
              ${active ? "animate-sign-swing" : "origin-top rotate-0"}`}
            style={{
              transformOrigin: "top center",
              perspective: "800px",
            }}
          >
            <img
              key={profileImage}
              loading="lazy"
              src={`/profiles/profile${profileImage}.webp`}
              alt="letrero"
              className="w-full h-full object-cover opacity-0 animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
