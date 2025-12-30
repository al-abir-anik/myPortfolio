import Link from "next/link";
import Image from "next/image";
import { upArrowGradientIcon } from "@/data/icons";

const ProjectCard = ({ project }) => {
  return (
    <Link
      href={"/nice"}
      className="w-full p-5 flex gap-5 bg-white/40 border-2 border-white rounded-xl hover:scale-105 hover:bg-white transition-all ease-in-out"
    >
      <figure className="w-48 h-28 relative rounded-md border border-zinc-300 overflow-hidden">
        <Image
          src="/images/aboutImg.png"
          alt="profile-pic"
          fill
          sizes="56px"
          className="object-cover"
        />
      </figure>

      <div className="w-full space-y-2">
        <div className="flex gap-3">
          <p className="text-lg font-medium">{project.title}</p>
          {/* <Link href={`projects/${project.url}`}>
            <div className="w-4 h-4 grid place-items-center bg-white/90 outline-1 outline-white rounded-full backdrop-blur-md">
              {upArrowGradientIcon}
            </div>
          </Link> */}
        </div>

        <p className="pb-1 text-[15px]">{project.description}</p>

        <div className="flex gap-3">
          {project.technologies.map((t, index) => (
            <span
              key={index}
              className="w-fit px-2 py-1.5 flex gap-1.5 items-center bg-zinc50 outline-1 outline-zinc200 rounded-lg"
            >
              <Image
                src={t.icon}
                alt={t.tech}
                width={15}
                height={15}
                className=" object-cover rounded-full select-none"
              />
              <p className="text-xs">{t.tech}</p>
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
