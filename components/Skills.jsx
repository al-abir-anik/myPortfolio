import Image from "next/image";
import { skills } from "@/data/data";

const Skills = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="w-full flex flex-col gap-5">
          <h3 className="font-semibold text-2xl sm:text-xs tracking-wider uppercase">
            {category}
          </h3>

          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {items.map((s) => (
              <a
                key={s.tech}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto h-32 border-t-2 border-white rounded-lg flex flex-col justify-center items-center gap-3.5 bg-white/40 hover:bg-white ease-in-out transition-colors duration-200"
              >
                <figure className="w-14 h-14 bg-white shadow rounded-2xl flex justify-center items-center">
                  <Image
                    src={s.logo}
                    alt={s.tech}
                    width={32}
                    height={32}
                    className=" object-cover rounded select-none"
                  />
                </figure>
                <span className="text-sm font-medium">{s.tech}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
