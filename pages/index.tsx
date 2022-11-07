import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth'>
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

     {/* Projects */}

     {/* Contact Me */}

     {/* Footer */}

    </div>
  )
}
