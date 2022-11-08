import React from 'react'
import Image from 'next/image'
import {motion} from "framer-motion";
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-xl items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.div
      initial={{
        y:-100,
        opacity:0
    }}
    transition={{
        duration:1.2,
    }}
    whileInView={{opacity:1 ,y:0}}
    viewport={{once:true}}
      >
      <Image
      src={'/profilepicture.png'}
      alt="" 
      width={500}
      height={500}
      className='w-32 h-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center' 
      ></Image>
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Tech Stack</h4>
        <p className='font-bold text-2xl mt-1'>Web Development</p>
        <div className='flex space-x-2 my-2'>

        </div>
        <p className='uppercase py-5 text-gray-300'></p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary Points Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe culpa s</li>
          <li>Summary Points  tenetur ipsum, eum aliquam necessitatibus obcaecati </li>
          <li>Summary Pointscupiditate sit praesentium explicabo! Nulla, a sequiint voluptates,.</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard