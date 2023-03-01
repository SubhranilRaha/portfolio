import React from 'react'
import {motion} from "framer-motion";
type Props = {}

function About({}: Props) {
  return (
    <div className="relative h-screen">
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className='absolute h-screen w-screen z-10 '>
        <div className="flex flex-col items-center justify-center lg:mx-20">
        <div className="flex flex-col lg:flex-row h-screen justify-center lg:items-center">
        <motion.img id='small screen'
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.5,
            }}
            whileInView={{opacity:1 ,x:0}}
            viewport={{once:true}}
            className="w-36 h-36 rounded-full object-cover
            border-2 mx-auto mt-12 lg:hidden md:hidden"
            src='/abtpic.png'
            ></motion.img>
            <motion.img id='large screen'
            initial={{
                x:-200,
                opacity:0
            }}
            transition={{
                duration:1.5,
            }}
            whileInView={{opacity:1 ,x:0}}
            viewport={{once:true}}
            className="lg:w-64 lg:h-64 md:w-60 md:h-60 lg:rounded-3xl md:rounded-[60px] object-cover
            border-4 mx-auto mt-10 hidden lg:block md:block"
            src='/abtpic.png'
            ></motion.img>
            <div className=" space-y-5 md:space-y-7 lg:space-y-10 px-10 lg:px-32 py-10 text-center flex flex-col items-center">
            <h3 className="text-2xl font-semibold lg:text-5xl md:text-4xl w-fit">Here is a little <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
            <span className="relative text-white">background</span>
            </span> !</h3>
            <div className="lg:w-[500px] lg:text-xl md:text-lg lg:space-y-10 md:space-y-7 space-y-5 md:w-[600px]">
            <p>I am Subhranil Raha, a BTECH Undergrad from Calcutta. Someone who enjoys making cool looking websites that are live on the internet while having hot coffee and listening to chill music. I like to Explore blockchain technology and make Dapps after playing with my cat Puchku :3</p>
            <p>I have done <span className=''>HTML</span> , CSS and Javascript along with React and Next JS. Now I have entered this revolutionary technology called Blockchain learning solidity, hardhat and ethers JS. I am currently Looking for freelancing jobs to feed my pets :/ and to build my dream setup.</p>
            </div>
            </div>
            </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About