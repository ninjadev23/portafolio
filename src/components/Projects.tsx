import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import type { Image, Project } from "../types";
import { Trans } from "react-i18next";
import { useMemo } from "react";
export default function Projects() {
  const { t, i18n } = useTranslation();
  const projects = useMemo(() => {
  return t("projects.projects", { returnObjects: true }) as Project[];
}, [i18n.language]);
  return (
    <section>
      <h2 className="text-center text-2xl p-10 mt-15">
        <span className="border-b p-3">{t("projects.title")}</span>
      </h2>
      <p className="text-center mb-10 text-lg">
        <Trans
          i18nKey="projects.description"
          components={{
            highlight1: <span className="text-sky-600 font-semibold" />,
            highlight2: <span className="text-sky-600 font-semibold" />,
          }}
        />
      </p>
      <div className="flex justify-center w-full items-center gap-10 flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            images={project.images as Image[]}
            github={project.github}
            technologies={project.technologies}
            live={project.live}
          />
        ))}
      </div>
    </section>
  );
}
