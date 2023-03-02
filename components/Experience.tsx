import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCards from './ExperienceCard'




function Experience() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative h-screen overflow-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx:auto items-center '>
       
    </motion.div>
  )
}

export default Experience