import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import BGcircles from './BGcircles'
import Image from 'next/image'
import Link from 'next/link'
type Props = {}

function Hero({}: Props) {
  return (
    <div className='relative h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-48'>
        
        <BGcircles/>
       
        <Image
        src={'/headphone.png'} 
        alt="" 
        width={200}
        height={200}
        className='absolute top-0 lg:top-10 left-0 lg:-left-12 -translate-y-20 rotate-45 lg:h-[480px] lg:w-[350px] md:h-[400px] md:w-[300px]' 
        />
       
        
        <Image
        src={'/profilepicture.png'} 
        alt="" 
        width={500}
        height={500}
        className='relative rounded-full h-36 w-36 mx-auto object-cover ' 
        />
       
        <Image
        src={'/PP.png'} 
        alt="" 
        width={600}
        height={600}
        className='hidden lg:block absolute -right-52 bottom-20 -rotate-180 lg:h-[350px] lg:w-[500px]' 
        />
       
        <div className='z-20'>
          <h2 className='text-sm lg:text-xl uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
        <div className="text-4xl lg:text-5xl font-semibold px-10 mr-3">
          <h1 className="mr-3 h-24 mb-1">
         <Typewriter
            words={["Hi, The Name's Subhranil Raha", 'Guy-who-loves-Coffee.tsx', '<AlsoLovesToCode />', '.Freelancer { Web2 , Web3 }']}
            cursor={true}
            loop={true}
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
            cursorColor='#e75151'
          />
          </h1>
          </div>
          <div className="pt-5">
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
          <button className='heroButton'>Experience</button></Link>
          <Link href='#skills'>
          <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Contact</button></Link>
          <Link href='about'>
          <button className='heroButton border-gray-400'>Resume</button></Link>
          </div>
          </div>
    </div>
  )
}

export default Hero