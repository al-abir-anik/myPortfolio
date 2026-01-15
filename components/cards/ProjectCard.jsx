"use client";
import Image from "next/image";
import { CodeAndLink } from "../CodeAndLink";

const ProjectCard = ({ project }) => {
  return (
    <div className="group w-full p-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 bg-white/40 border-2 border-white rounded-2xl  hover:bg-white transition-colors ease-in-out duration-300 hover:shadow">
      <div className="w-50 h-28 flex flex-col">
        <Image
          src={project.banner}
          alt={project.title}
          width={150}
          height={112}
          className="w-full h-full object-cover  rounded-xl border border-zinc300  group-hover:scale-105 transition-transform ease-in-out duration-300 overflow-hidden"
        />
        {/* <CodeAndLink containerClass="flex" /> */}
      </div>

      <div className="w-full">
        <p className="text-lg font-medium group-hover:text-blue">
          {project.title}
        </p>
        <p className="mt-1.5 text-[15px] text-zinc600">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((t, index) => (
            <span
              key={index}
              className="w-fit px-2 py-1.5 flex gap-1.5 items-center bg-zinc50 outline outline-zinc200 border border-white rounded-lg cursor-text"
            >
              {t.logo && (
                <Image
                  src={t.logo}
                  alt={t.tech}
                  width={15}
                  height={15}
                  className="object-cover rounded select-none"
                />
              )}
              <p className="text-xs tracking-wider bg-secondary-gradient bg-clip-text">
                {t.tech}
              </p>
            </span>
          ))}
        </div>

        <CodeAndLink
          liveLink={project.liveLink}
          sourceCode={project.sourceCode}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
