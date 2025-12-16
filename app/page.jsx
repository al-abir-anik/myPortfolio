import ClientCarousel from "@/components/carousel/ClientCarousel";
import FAQ from "@/components/FAQ";
import GetInTouch from "@/components/GetInTouch";
import About from "@/components/home-sections/About";
import Hero from "@/components/home-sections/Hero";
import Process from "@/components/home-sections/Process";
import Service from "@/components/home-sections/Service";
import Projects from "@/components/home-sections/Projects";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <ClientCarousel />
      <Projects />
      <Testimonial />
      <Process />
      <Service />
      <FAQ />
      <GetInTouch />
    </div>
  );
};

export default Home;
