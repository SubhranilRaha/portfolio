import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(37,38,42)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-track-gray-400/0 scrollbar-thumb-red-400/80 scrollbar-thin scrollbar-thumb-rounded-full">
      <Head>
        <title>Subhranil Raha</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <div className="snap-start">
        <Navbar />
      </div>
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      <div className="flex flex-col lg:flex-row lg:mx-[20%] lg:items-center lg:justify-between lg:translate-y-6 gap-14">
        <section id="about" className="snap-center lg:order-last lg:w-[50%]">
          <About />
        </section>
        <section id="skills" className="snap-center lg:w-[50%]">
          <Skills />
        </section>
      </div>

      {/* Experience */}
      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Project />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
      {/* Footer */}
    </div>
  );
}
