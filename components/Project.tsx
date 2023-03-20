import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {};

function Project({}: Props) {
  return (
    <div className="relative h-full top-12 mb-32">
      <motion.div
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:0}}
      viewport={{once:true}}
      className="flex flex-col ml-5 py-4 justify-center items-center">
        <h1 className="text-gray-500 font-mono">Some Things I have built</h1>
        <h1 className="text-4xl font-mono font-extrabold mb-10">
          Featured Projects
        </h1>
      </motion.div>
      <div className="lg:hidden md:hidden flex flex-col gap-36">
        {/* smaller screen */}
      
        {/* 1st Project s*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen h-[30vh]"
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/70 w-full h-full absolute z-10 transition-all duration-300 rounded-lg"></div>

              <Image
                src={"/SubroTube.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  FullStack Project
                </span>{" "}
              </motion.div>
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                SubroTube
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2">
                  <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#Mongoose</span>
                  <span className="text-xs">#ExpressJS</span>
                </div>
                <div className="text-slate-500 pt-3">
                  SubroTube is a youtube clone. It is fullstack MERN
                  application. The application has APIs and can perform basic
                  CRUD functionality using MongoDB and Mongoose. It uses
                  Firebase storage for storing large video files.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  <FiGithub />
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 2nd Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen "
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300"> 
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/80 w-full h-full absolute z-10 transition-all duration-300 rounded-lg"></div>

              <Image
                src={"/Pragmate.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Group Project
                </span>{" "}
              </motion.div>
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                Pragmate
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2">
                  <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#Mongoose</span>
                  <span className="text-xs">#ExpressJS</span>
                </div>
                <div className="text-slate-500 pt-3">
                  SubroTube is a youtube clone. It is fullstack MERN
                  application. The application has APIs and can perform basic
                  CRUD functionality using MongoDB and Mongoose. It uses
                  Firebase storage for storing large video files.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  <FiGithub />
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 3rd Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen "
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/60 w-full h-full absolute z-10 transition-all duration-300 rounded-xl"></div>

              <Image
                src={"/CryptoTracker.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Frontend Project
                </span>{" "}
              </motion.div>
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                CryptTracker
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2">
                  <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#Mongoose</span>
                  <span className="text-xs">#ExpressJS</span>
                </div>
                <div className="text-slate-500 pt-3">
                  SubroTube is a youtube clone. It is fullstack MERN
                  application. The application has APIs and can perform basic
                  CRUD functionality using MongoDB and Mongoose. It uses
                  Firebase storage for storing large video files.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  <FiGithub />
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 4th Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen "
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/80 w-full h-full absolute z-10 transition-all duration-300 "></div>

              <Image
                src={"/GDrive.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Web3 Project
                </span>{" "}
              </motion.div>
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                GoogleDrive 3.0
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-20 group-hover:-translate-y-16 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2">
                  <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#Mongoose</span>
                  <span className="text-xs">#ExpressJS</span>
                </div>
                <div className="text-slate-500 pt-3">
                  SubroTube is a youtube clone. It is fullstack MERN
                  application. The application has APIs and can perform basic
                  CRUD functionality using MongoDB and Mongoose. It uses
                  Firebase storage for storing large video files.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  <FiGithub />
                  <HiOutlineExternalLink />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* for large and medium screens */}
      <div className="hidden lg:flex lg:flex-col md:flex md:flex-col lg:gap-10 md:gap-20">
        {/* 1st project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            viewport={{ once: true }}
            className=""
          >
            <div className="relative group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="group-hover:bg-black/50 w-full h-full z-10 absolute transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/SubroTube.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-right transition duration-30 absolute right-0 top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              FullStack Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw]">
              SubroTube
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl z-30 text-[1vw]">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose. It uses Firebase storage for storing
              large video files.
            </div>
            <div className="flex gap-4 font-bold justify-end dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-end gap-4 text-[1.5vw]">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
        </div>
        {/* 2nd project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-left transition duration-30 absolute top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              Frontend Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw] z-30">
              CryptoTracker
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl  z-30 text-[1vw]">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose. It uses Firebase storage for storing
              large video files.
            </div>
            <div className="flex gap-4 font-bold justify-start dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-start gap-4 text-[1.5vw]">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10 absolute top-0 right-0"
          >
            <div className="group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="rounded-xl group-hover:bg-black/50 w-full h-full z-20 absolute top-0 right-0 transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/Pragmate.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw] scale-105"
              />
            </div>
          </motion.div>
        </div>
        {/* 3rd project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10"
          >
            <div className="relative group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/CryptoTracker.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-right transition duration-30 absolute right-0 top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              FullStack Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw]">
              SubroTube
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl z-30 text-[1vw]">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose. It uses Firebase storage for storing
              large video files.
            </div>
            <div className="flex gap-4 font-bold justify-end dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-end gap-4 text-[1.5vw]">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
        </div>
        {/* 4th project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-left transition duration-30 absolute top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-30 text-[1.2vw]">
              Frontend Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw] z-30">
              CryptoTracker
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl  z-30 text-[1vw]">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose. It uses Firebase storage for storing
              large video files.
            </div>
            <div className="flex gap-4 font-bold justify-start dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-start gap-4 text-[1.5vw]">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10 absolute top-0 right-0"
          >
            <div className="group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="rounded-xl group-hover:bg-black/50 w-full h-full z-20 absolute top-0 right-0 transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/GDrive.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Project;
