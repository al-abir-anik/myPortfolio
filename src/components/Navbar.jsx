import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <p className="mx-2 text-3xl font-semibold">aaA</p>
      </div>
      <div className="text-2xl m-8 flex items-center justify-center gap-4">
        <a href="https://www.linkedin.com/in/al-abir-anik/" target="blank">
          <FaLinkedin className="text-sky-300"></FaLinkedin>
        </a>
        <a href="">
          <FaGithub className="text-gray-300"></FaGithub>
        </a>
        <a href="">
          <FaFacebook className="text-blue-500"></FaFacebook>
        </a>
        <a href="">
          <FaDiscord className="text-indigo-500"></FaDiscord>
        </a>
        <a
          href="https://drive.google.com/file/d/1JsocUIdftVxd-VX-372TI51XDaI7g-jS/view?usp=sharing"
          target="blank"
          className="mx-2 font-mono text-sm bg-gradient-to-r from-pink-300 to-purple-500 hover:from-purple-500 hover:to-pink-300 p-3 transition ease-in-out duration-300 font-semibold rounded cursor-pointer active:scale-95 text-white"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
