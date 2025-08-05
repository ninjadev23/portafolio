import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DeviceCard from "./DeviceCard";
import type { Project, Image } from "../types";
import ProjectDetail from "./ProjectDetail";
interface Props extends Project {
  images: Image[];
}
const ProjectCard: React.FC<Props> = ({
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
      setFade(true);
      setTimeout(() => {
        setCurrentImage((prev) => {
          const index = images.indexOf(prev);
          const nextImage =
            index + 1 >= images.length ? images[0] : images[index + 1];
          return nextImage;
        });
        setFade(false);
      }, 400);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

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
