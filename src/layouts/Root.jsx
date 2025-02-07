import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow">
        <Outlet></Outlet>
      </div>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default Root;
