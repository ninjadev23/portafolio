import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutSection from "./components/About";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";
import Navigation from "./components/Navigation";
import Presentation from "./components/Presentation";
import { randomNumber } from "./utils";
import "./i18n";

export default function App() {
  const [bgIndex, setBgIndex] = useState(1);
  const [fade, setFade] = useState(false);

  // Precargado de imagenes
  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      const img = new Image();
      img.src = `/wallpaper${i}.webp`;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let next;
      do {
        next = randomNumber(1, 3);
      } while (next === bgIndex);

      setFade(true);
      setTimeout(() => {
        setBgIndex(next);
        setFade(false);
      }, 500); // Duración del fade
    }, 7000);

    return () => clearInterval(interval);
  }, [bgIndex]);

  return (
    <div className="bg-gradient-to-tr from-gray-900 via-sky-700/40 to-black flex flex-col min-h-screen relative w-full text-white">
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transition-opacity duration-1000 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url(/wallpaper${bgIndex}.webp)`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10">
        <header>
          <Navigation />
          <Presentation />
        </header>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="education">
          <Education />
        </section>
        <ContactSection />
      </div>
    </div>
  );
}
