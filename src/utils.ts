import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDjango,
  SiLinux,
  SiSass,
  SiPostgresql,
  SiMongodb,
  SiReactrouter,
  SiVite,
  SiExpress,
  SiDocker
} from "react-icons/si";
import { TbTopologyStar3 } from "react-icons/tb";
export const iconMap: Record<string, React.ElementType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  NodeJS: SiNodedotjs,
  TailwindCSS: SiTailwindcss,
  HTML: SiHtml5,
  CSS: SiCss3,
  Python: SiPython,
  Django: SiDjango,
  Linux: SiLinux,
  Sass: SiSass,
  WebSockets: TbTopologyStar3,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  ReactRouter: SiReactrouter,
  Vite: SiVite,
  ExpressJS: SiExpress,
  Docker:SiDocker
};

export  const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
