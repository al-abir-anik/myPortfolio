import { projects } from "@/data/data";
import Button from "./buttons/Button";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <h2 className="font-semibold text-2xl sm:text-xs tracking-wider uppercase">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-7">
        {projects.slice(0, 4).map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>

      <Button
        id="view-all-projects"
        title="View All Projects"
        containerClass="text-zinc800 bg-white"
        btnIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M4.27748 14.9723L4.27734 13.028H20L16.16 9.18791L17.535 7.81299L23.7222 14.0002L17.535 20.1874L16.16 18.8124L20.0001 14.9724L4.27748 14.9723Z"
              fill="#f64617"
            />
          </svg>
        }
      />
    </div>
  );
};

export default Projects;
