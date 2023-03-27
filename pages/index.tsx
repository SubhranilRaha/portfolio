import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
// import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";


export default function Home() {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    if(theme==="dark"){
      document.documentElement.classList.add("dark")
    
    }else{
      document.documentElement.classList.remove("dark")
   
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark"?"light":"dark")
    console.log(theme)
  }
  

  return (
    <>
      <Head>
        <title>Subhranil Raha</title>
        <meta name="" content="" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
    <div className="dark:bg-[rgb(37,38,42)]  dark:text-white bg-[#DCE4E6]  h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-thumb-red-400/80 scrollbar-thin scrollbar-thumb-rounded-full ">
      
      {/* Header */}
      <div className="">
        <Navbar
        mode={theme}
        handfunc={handleThemeSwitch}
        />
      </div>
      {/* Hero */}
      <section id="hero" className="">
        <Hero mode={theme}
        />
      </section>
      {/* About */}
      <div className="flex flex-col lg:flex-row lg:mx-[20%] lg:items-center lg:justify-between lg:translate-y-6 gap-14">
        <section id="about" className="lg:order-last lg:w-[50%]">
          <About />
        </section>
        <section id="skills" className=" lg:w-[50%]">
          <Skills />
        </section>
      </div>

      {/* Experience */}
      <section id="experience" className="">
        {/* <Experience /> */}
      </section>
      {/* Projects */}
      <section id="projects" className="">
        <Project />
      </section>
      {/* Contact Me */}
      <section id="contact" className="">
        <Contact />
      </section>
      {/* Footer */}
      <Footer/>
    </div>
    </>
  );
}
