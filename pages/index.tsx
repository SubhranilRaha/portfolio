import Head from 'next/head'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'



export default function Home() {
  return (
    <div className='bg-[rgb(37,38,42)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-track-gray-400/0 scrollbar-thumb-red-400/80 scrollbar-thin scrollbar-thumb-rounded-full'>
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
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
     {/* About */}
     <section id='about' className='snap-center'>
        <About/>
      </section>
     {/* Experience */}
     <section id='experience' className='snap-center'>
      <Experience/>
     </section>
     {/* Skills */}

     {/* Projects */}
    <section id='projects' className='snap-center'>
      <Project/>
    </section>
     {/* Contact Me */}
    <section id='contact' className='snap-center'>
      <Contact/>
    </section>
     {/* Footer */}

    </div>
  )
}
