import Typed from "typed.js";
import { useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import AboutSection from "./components/About";
import Education from "./components/Education";
import ContactSection from "./components/ContactSection";
export default function App() {
  const [background, setBackground] = useState(1);
  const [profileImage, setProfileImage] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    const typed = new Typed("#rol", {
      strings: [
        "Desarrollador Full Stack",
        "Desarrollador Frontend",
        "Desarrollador Backend",
        "Python & Django",
        "NodeJS & Express",
        "React & NextJS",
      ],
      typeSpeed: 70,
      showCursor: true,
      backSpeed: 80,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let newBackground = randomNumber(1, 3);
      if (newBackground === background) {
        newBackground = randomNumber(1, 3);
      }
      setBackground(newBackground);
    }, 6000);
    return () => clearInterval(interval);
  }, [background]);

  useEffect(() => {
    const interval = setInterval(() => {
      let newProfileImage = randomNumber(1, 2);
      if (newProfileImage === profileImage) {
        newProfileImage = randomNumber(1, 2);
      }
      setProfileImage(newProfileImage);
    }, 3000);
    return () => clearInterval(interval);
  }, [profileImage]);

  return (
    <div
      className={`flex flex-col min-h-screen relative w-full bg-cover bg-center bg-no-repeat bg-fixed bg-blend-overlay bg-black/60 text-white`}
      style={{ backgroundImage: `url(/wallpaper${background}.jpg)` }}
    >
      <header>
        <nav className="w-full bg-black/30 backdrop-blur-md fixed top-0 left-0 z-20 px-4 py-2 flex items-center justify-between">
          <img className="h-10 w-40 object-cover" src="/logo.png" alt="code" />

          {/* Desktop nav */}
          <ul className="hidden md:flex justify-center gap-5 text-lg font-semibold">
            <li className="p-2 hover:border-b hover:text-white/60">
              <a href="#about">Sobre mí</a>
            </li>
            <li className="p-2 hover:border-b hover:text-white/60">
              <a href="#skills">Habilidades</a>
            </li>
            <li className="p-2 hover:border-b hover:text-white/60">
              <a href="#projects">Proyectos</a>
            </li>
            <li className="p-2 hover:border-b hover:text-white/60">
              <a href="#contact">Contacto</a>
            </li>
          </ul>

          {/* Mobile menu */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="text-white w-8 h-8" />
          </button>

          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black/30 backdrop-blur-md flex flex-col gap-4 text-white text-center font-semibold py-5 md:hidden">
              <a onClick={() => setIsMobileMenuOpen(false)} href="#about">Sobre mí</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#skills">Habilidades</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#projects">Proyectos</a>
              <a onClick={() => setIsMobileMenuOpen(false)} href="#contact">Contacto</a>
            </div>
          )}
        </nav>

        {/* Hero section */}
        <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
          <div className="flex items-center justify-center gap-3">
            <div className="rotate-6 bg-white h-40 w-35 flex items-center justify-center p-1">
              <img
                key={profileImage}
                className="w-full h-full object-cover opacity-0 animate-fade-in shadow"
                src={`/profile${profileImage}.jpg`}
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
                <a href="#projects" className="p-2 rounded-sm bg-sky-600 h-10">Sobre Mi</a>
                <a href="" className="rounded-sm p-2 bg-black/40 border border-white/40 h-10">Ver CV</a>
              </div>
            </div>
          </div>

          {/* Chevron hacia la siguiente sección */}
          <div className="flex justify-center animate-bounce text-white">
            <a href="#skills" className="hover:cursor-pointer">
              <ChevronDown size={32} className="opacity-70" />
            </a>
          </div>
        </div>
      </header>

      {/* Secciones con sus IDs */}
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
      <ContactSection/>
    </div>
  );
}
