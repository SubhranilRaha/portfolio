import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='relative h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx:auto items-center'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 test-2xl'>Experience</h3>
        {/* Experience Cards */}
        <div>
        <Experience/>
        <Experience/>
        <Experience/>
        </div>
    </motion.div>
  )
}

export default Experience