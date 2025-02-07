import { FaDiscord, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <p>alAbirAnik</p>
      </div>
      <div className="text-2xl m-8 flex items-center justify-center gap-4 cursor-pointer">
        <FaLinkedin></FaLinkedin>
        <FaGithub></FaGithub>
        <FaFacebook></FaFacebook>
        <FaDiscord></FaDiscord>
      </div>
    </nav>
  );
};

export default Navbar;
