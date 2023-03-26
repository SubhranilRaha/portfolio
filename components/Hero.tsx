import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { Typewriter } from "react-simple-typewriter";
import scrollJL from "../public/LScroll.json";
import scrollJ from "../public/scroll.json";
import BGcircles from "./BGcircles";

function Hero(props: any) {
  return (
    <>
      <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center pt-32 translate-y-10 lg:translate-y-16">
        <motion.div
          initial={{ opacity: 0,x:-60,y:-40 }}
          animate={{ opacity: 1,x:0,y:0 }}
          transition={{ duration: 1, delay: 4 }}
          className="absolute -left-28 -top-[9vw] "
        >
          <Image
            src={"/astro.svg"}
            alt=""
            width={200}
            height={200}
            className="w-[32vw] h-[32vw] md:hidden hidden lg:block xl:block rotate-[40deg]"
          />
        </motion.div>
        <div className=" hover:scale-110 transition duration-500 group">
          <Tilt>
            <div className="-translate-y-8">
              <BGcircles />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              transition={{ duration: 2, delay: 1 }}
              className="hover:scale-125 transition-all duration-300"
            >
              <Image
                src={"/profilepicture.png"}
                alt=""
                width={500}
                height={500}
                className="relative rounded-full h-36 w-36 mx-auto object-cover "
              />
            </motion.div>
          </Tilt>
        </div>

   
        <motion.div className="z-20">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
            className="text-sm lg:text-xl uppercase dark:text-gray-500 text-gray-700  tracking-[15px]"
          >
            Software Developer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="text-4xl lg:text-5xl font-semibold px-10 "
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 2.2 }}
              className=" h-18 pt-2"
            >
              <Typewriter
                words={[
                  "Hi, The Name's Subhranil Raha",
                  "Guy-who-loves-Coffee.tsx",
                  "<AlsoLovesToCode />",
                  ".Freelancer { Web2 , Web3 }",
                ]}
                cursor={true}
                loop={true}
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={3000}
                cursorColor="#e75151"
              />
            </motion.h1>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 2.6 }}
          className="flex min-w-[250px] max-w-[300px] justify-between z-40"
        >
          <a href="https://github.com/SubhranilRaha" target='_blank' rel="noreferrer" className=""><BsGithub   className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></a>
          <a href="https://www.instagram.com/subhranil_raha/" target='_blank' rel="noreferrer" className=""><BsInstagram className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></a>
          <a href="https://twitter.com/SubhranilRaha" target='_blank' rel="noreferrer" className=""><FiTwitter className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></a>
          <a href="https://www.linkedin.com/in/subhranil-raha-8139981b3/" target='_blank' rel="noreferrer" className=""><FaLinkedin className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></a>
          
          
          
          
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3 }}
          href="#about"
          className="hover:cursor-pointer z-50"
        >
          {props.mode === "dark" ? (
            <Lottie className="h-12" animationData={scrollJ} loop={true} />
          ) : (
            <Lottie className="h-12" animationData={scrollJL} loop={true} />
          )}
        </motion.a>
      </div>
    </>
  );
}

export default Hero;
