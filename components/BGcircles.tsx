import React from 'react'
import {motion} from "framer-motion";

type Props = {}

function BGcircles({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0,}}
    animate={{scale:[0,1,3,2,1], opacity: [0,0.2,0.4,0.8,0.1,1.0],}}
    transition={{ duration: 2.5 }}
             className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52'/>
        <div className='absolute border border-[#e75151] rounded-full h-[500px] w-[500px] mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[610px] w-[610px] mt-52 '/>
        <div className='absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </motion.div>
  )
}

export default BGcircles