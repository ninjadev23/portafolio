/*import { useEffect, useState } from "react";
import { Github, Link } from "lucide-react";

type Technology = {
  name: string;
  color: string;
};
type Props = {
  name: string;
  description: string;
  images: string[];
  github: string;
  technologies: Technology[];
  live?: string;
};

const ProjectCard: React.FC<Props> = ({
  name,
  description,
  images,
  github,
  technologies,
  live = "",
}) => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 20 - 10);
  };
  const [fade, setFade] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<string>(images[0]);
  const [rotate, setRotate] = useState<number>(randomNumber());

  const randomRotate = () => {
    setRotate(Math.floor(Math.random() * 20 - 10)); // entre -10 y +10
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // inicia fade
      setTimeout(() => {
        const index = images.indexOf(currentImage);
        const nextImage =
          index >= images.length - 1 ? images[0] : images[index + 1];
        setCurrentImage(nextImage);
        randomRotate();
        setFade(false); // termina fade
      }, 300); // tiempo de opacidad
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="flex flex-row items-center justify-center shadow bg-neutral-900/30 backdrop-blur-md">
      <div
        className="w-60 h-60 bg-white p-1 pt-5 transition-transform duration-700"
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <img
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
          src={`/projects-images/${currentImage}`}
          alt="Project"
        />
      </div>
      <div className="p-4 max-w-56">
        <h3 className="text-white/80 text-2xl font-bold border-b border-white/30 p-1">
          {name}
        </h3>
        <p className="mt-1 text-sm h-32 overflow-y-scroll text-left leading-relaxed">
          {description}
        </p>
        <div className="w-full flex gap-2 flex-wrap mt-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="p-1 rounded text-sm"
              style={{ backgroundColor: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex text-sm w-full gap-2 mt-2">
          <a
            href={github}
            className="rounded-sm p-1 border-1 border-sky-600/20 w-full text-sky-600 flex gap-1 justify-center items-center hover:scale-110"
            target="_blank"
          >
            Ver Codigo
            <Github className="w-6 h-6" />
          </a>
          {live && (
            <a
              href={live}
              className="rounded-sm p-1 w-full bg-sky-600 flex justify-center items-center hover:scale-110 gap-1"
              target="_blank"
            >
              <span className="font-bold">Ver Sitio</span>
              <Link className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
*/
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeviceCard from "./DeviceCard";
import type { Project, Image } from "../types";
import ProjectDetail from "./ProjectDetail";

const ProjectCard: React.FC<Project> = ({
  name,
  description,
  images,
  github,
  technologies,
  live = "",
}) => {
  const [fade, setFade] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<Image>(images[0]);
  const [displayDetails, setDisplayDetails] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // inicia fade out
      setTimeout(() => {
        const index = images.indexOf(currentImage);
        const nextImage =
          index >= images.length - 1 ? images[0] : images[index + 1];
        setCurrentImage(nextImage);
        setFade(false); // inicia fade in
      }, 400); // espera el fade-out antes de cambiar
    }, 6000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage.file}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <DeviceCard
            type={currentImage.display as "pc" | "phone"}
            image={`/projects-images/${currentImage.file}`}
            fade={fade}
            onClick={() => setDisplayDetails(!displayDetails)}
            title={name}
          />
        </motion.div>
      </AnimatePresence>

      {displayDetails && (
        <ProjectDetail
          image={`/projects-images/${currentImage.file}`}
          name={name}
          description={description}
          technologies={technologies}
          live={live}
          onClick={() => setDisplayDetails(!displayDetails)}
          fade={fade}
          github={github}
        />
      )}
    </>
  );
};

export default ProjectCard;
