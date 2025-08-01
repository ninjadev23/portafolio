import data from "../data.json"
import ProjectCard from "./ProjectCard";
export default function Projects() {
    return (
        <section>
            
            <h2 className="text-center text-2xl p-10 mt-15"><span className="border-b p-3">Proyectos</span></h2>
            <p className="text-center mb-10 text-lg">Si lo puedes <span className="text-sky-600">imaginar</span> lo puedes <span className="text-sky-600">programar</span></p>
            <div className="flex justify-center w-full items-center gap-10 flex-wrap">
                {data.projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.name}
                        description={project.description}
                        images={project.images}
                        github={project.github}
                        technologies={project.technologies}
                        live={project.live}
                    />
                ))}
            </div>
        </section>
    )
}