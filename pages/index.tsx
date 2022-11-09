import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Project from '../components/Project'
import Contact from '../components/Contact'
import Link from 'next/link'



export default function Home() {
  return (
    <div className='bg-[rgb(37,38,42)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-track-gray-400/0 scrollbar-thumb-red-400/80 scrollbar-thin scrollbar-thumb-rounded-full'>
      <Head>
        <title>Subhranil Raha</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     {/* Header */}
        <Header/>
     {/* Hero */}
      <section id='hero' className='snap-start'>
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
    <section id='skills' className='snap-center'>
      <Skills/>
    </section>
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
