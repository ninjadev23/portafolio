import { X, ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";
import { iconMap } from "../utils";

interface Props extends Project {
  onClick?: () => void;
  image: string;
  fade?: boolean;
}

const ProjectDetail: React.FC<Props> = ({
  image,
  name,
  description,
  technologies,
  live,
  github,
  fade,
  onClick = () => {},
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 overflow-y-auto">
      {/* ===== Mobile Layout con look tipo PC ===== */}
      <div className="md:hidden flex flex-col items-center w-full max-w-md">
        <div
          className="-mt-20 bg-[url('/pcwallpaper.webp')] bg-cover bg-center 
                        border-4 border-white rounded-lg shadow-2xl relative w-full"
        >
          {/* Controles simulados arriba */}
          <div className="flex justify-end gap-2 bg-black/70 p-2 rounded-t-md">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-60"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-60"></span>
          </div>

          {/* Botón cerrar */}
          <button
            onClick={onClick}
            className="absolute top-3 left-3 p-2 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
          >
            <X size={20} />
          </button>

          {/* Imagen */}
          <div className="p-4">
            <img
              loading="lazy"
              className={`w-full max-h-[35vh] object-contain mx-auto transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
              src={image}
              alt="Project"
            />
          </div>

          {/* Info */}
          <div className="bg-black/70 backdrop-blur-md p-3 flex flex-col gap-3 rounded-b-lg">
            <h2 className="text-lg font-bold text-white text-center border-b border-white/30 pb-1">
              {name}
            </h2>
            <p className="text-gray-300 text-sm max-h-[20vh] overflow-y-auto px-1">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-2">
              {live && (
                <a
                  href={live}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-3 py-2 border border-white/30 text-white rounded hover:scale-105 transition text-sm"
                >
                  <ExternalLink size={16} /> Ver proyecto
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-3 py-2 border border-sky-700/50 text-white rounded hover:scale-105 transition text-sm"
                >
                  <Github size={16} /> Ver código
                </a>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-3 bg-black/40 p-2 rounded-md mt-2">
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.name];
                return (
                  Icon && (
                    <Icon
                      key={index}
                      size={26}
                      color={tech.color}
                      className="hover:scale-125 transition-transform"
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>

        {/* Base de “monitor” simulada */}
        <div className="w-20 h-2 bg-white mt-2 rounded shadow"></div>
        <div className="w-36 h-2 bg-white mt-1 rounded shadow"></div>
      </div>

      {/* ===== Layout original PC (desde md en adelante) ===== */}
      <div className="hidden md:flex flex-col items-center">
        <div className="bg-[url('/pcwallpaper.webp')] h-[600px] w-full max-w-3xl rounded-xl shadow-2xl relative overflow-hidden border-6 border-white">
          <div className="relative mx-5 mt-5 p-2 bg-black/70 backdrop-blur-md rounded-t-md">
            <div className="mt-10">
              <img
                className={`w-full h-65 transition-opacity duration-300 object-contain ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
                src={image}
                alt="Project"
              />

              {/* Controles simulados */}
              <div className="absolute top-0 right-0 flex gap-2 rounded-t-md bg-black/70 w-full justify-end p-2">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-60"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-60"></span>
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-60"></span>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={onClick}
                className="hover:cursor-pointer absolute top-0 left-0 p-1 rounded-full bg-white text-black hover:bg-red-500 hover:text-white transition"
              >
                <X size={18} />
              </button>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white text-center">
                  <span className="border-b border-white/30 p-2">{name}</span>
                </h2>
                <p className="text-gray-300 mt-2 p-3">{description}</p>
                <div className="flex gap-3 w-full items-center justify-center">
                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      className="flex items-center gap-2 px-2 py-1 border border-white/30 text-white rounded hover:scale-105 transition"
                    >
                      <ExternalLink size={16} /> Ver proyecto
                    </a>
                  )}
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      className="flex items-center gap-2 px-2 py-1 border-sky-700/50 border text-white rounded hover:scale-105 transition"
                    >
                      <Github size={16} /> Ver código
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <div className="bg-black/30 mt-1 flex gap-3 p-2 rounded-md backdrop-blur-md">
              {technologies.map((tech, index) => {
                const Icon = iconMap[tech.name];
                return (
                  Icon && (
                    <Icon
                      className="hover:scale-150 transition-transform"
                      size={24}
                      key={index}
                      color={tech.color}
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-30 h-4 bg-white mx-auto shadow"></div>
        <div className="w-80 h-2 bg-white mx-auto shadow"></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
