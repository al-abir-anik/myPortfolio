import { projects } from "@/data/data";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-8 lg:gap-10">
      <h2 className="font-semibold text-sm tracking-wider uppercase">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-7">
        {projects.slice(0, 4).map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
