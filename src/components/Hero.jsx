import { HERO_CONTENT } from "./../constants/index";
import profilePic from "./../assets/anikProfilePic.jpg"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 lg:mt-16 text-6xl lg:text-8xl font-thin tracking-tight">
              Al Abir Anik
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Juniour Web Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight text-center lg:text-start">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-xl max-w-md lg:max-w-xl" src={profilePic} alt="Profile-Pic"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
