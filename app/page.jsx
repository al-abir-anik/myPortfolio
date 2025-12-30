import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full max-w-300 mx-auto flex justify-between">
      <Header />

      <main className="w-full max-w-156 py-24 space-y-36 scroll-smooth">
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
