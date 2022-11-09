import React from 'react'
import {motion} from "framer-motion";

type Props = {
  directionLeft ?: boolean;
};

function Skill({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
      initial={{
        x: directionLeft ? -200 : 200,
        opacity:0,
      }}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      className="rounded-full border border-gray-500 object-cover h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      src='/profilepicture.png'>
      </motion.img>
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center h-full justify-center'>
          <p className='text-3xl font-bold text-black opacity-100'>
            REACT
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skill