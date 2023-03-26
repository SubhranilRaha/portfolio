import { motion } from 'framer-motion';
import {MdArrowForward} from 'react-icons/md'



function About() {
  return (

    <div className="relative h-full lg:h-screen w-full flex flex-col justify-center p-5 md:p-20 lg:p-0 -translate-y-10 lg:translate-y-0">
      <motion.h1
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1}}
      viewport={{once:true}}
      className="text-[2.5rem] font-mono mt-20 ml-5">About Me</motion.h1>
      <motion.div 
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:.2}}
      viewport={{once:true}}
      className="mx-5 my-6 flex flex-col gap-5 text-sm dark:text-gray-400 text-gray-600">
        <p>
          Hello, my name is Subhranil Raha, a BTECH Undergrad from Kolkata who
          likes building things for the web.
        </p>
        <p>
          My expertise in web development extends to both front-end and back-end
          technologies, including HTML, CSS, JavaScript, React, Node.js, and
          more. I am committed to building responsive, user-friendly, and
          scalable web applications that provide an exceptional user experience.
        </p>
        <p>
          My experience in developing blockchain applications includes creating
          custom smart contracts, designing and building decentralized
          applications (dApps), and developing blockchain-based solutions with
          the help of technologies such as solidity, hardhat, ethers and much
          more.
        </p>
        <a className='lg:hidden' href="#skills">
        <motion.div
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1,delay:.3}}
        viewport={{once:true}}
        className="bg-[#e75151] w-40 h-8 text-lg flex justify-center items-center rounded-xl text-stone-50 hover:scale-110 p-5 hover:cursor-pointer transition">
            Know more
        <MdArrowForward className='ml-2'/>
        </motion.div>
        </a>
        <a className='hidden lg:block' href="#experience">
        <motion.div
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1,delay:.3}}
        viewport={{once:true}}
        className="bg-[#e75151] w-40 h-8 text-lg flex justify-center items-center rounded-xl text-stone-50 hover:scale-110 p-5 hover:cursor-pointer transition ">
            Know more
        <MdArrowForward className='ml-2'/>
        </motion.div>
        </a>
      </motion.div>
      <div className='w-screen absolute top-[30%] bg-red-500 bg-opacity-20 left-0 h-[300px] -skew-y-12 lg:hidden'></div>
    </div>
   
  );
}

export default About;
