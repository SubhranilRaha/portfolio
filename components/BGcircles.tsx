import React from 'react'
import {motion} from "framer-motion";


type Props = {}

function BGcircles({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0,}}
    animate={{scale:[0,1,3,2,1], opacity: [0,0.2,0.4,0.8,0.1,1.0],}}
    transition={{ duration: 2.5,delay:1.2 }}
             className='relative flex justify-center items-center '>
        <div className='absolute border dark:border-[#333333] rounded-full border-gray-400 h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute rodade border dark:border-[#333333] border-gray-400 rounded-full h-[250px] w-[250px] mt-52'>
        <div className='h-3 w-3 translate-x-[160px] border border-red-500 bg-[#DCE4E6] dark:bg-[#25262A]  rounded-full'/>
        </div>
        <div className='absolute border border-[#e75151] h-[480px] w-[480px] mt-52 rounded-full robabe'>
        <div className='h-6 w-6 translate-x-[310px] bg-red-500  rounded-full'/>
        </div>
        <div className='absolute border dark:border-[#333333] border-gray-400 rounded-full h-[610px] w-[610px] mt-52  rodade '>
        <div className='h-5 w-5 translate-x-[260px] -translate-y-[11px] border border-gray-400 bg-[#DCE4E6] dark:bg-[#25262A] rounded-full'/>
        </div>
        <div className='absolute border dark:border-[#333333] border-gray-400 rounded-full lg:h-[750px] lg:w-[750px] h-[750px] w-[750px] mt-52 z-30 robabe'>
          <div className='h-4 w-4 translate-x-[350px] -translate-y-[10px] bg-gray-400  rounded-full'/>
        </div>
    </motion.div>
  )
}

export default BGcircles