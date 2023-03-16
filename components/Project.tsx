import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

type Props = {};

function Project({}: Props) {
  return (
    <div className="relative h-full top-24">
      <div className="flex flex-col ml-5 pt-10 py-4 justify-center items-center">
        <h1 className="text-gray-500 font-mono">Some Things I have built</h1>
        <h1 className="text-4xl font-mono font-extrabold mb-10">
          Featured Projects
        </h1>
      </div>
      <div className="lg:hidden md:hidden">
        {/* 1st Project */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center w-screen mb-24 mt-5"
        >
          <div className="group max-w-[500px]">
            <div className="relative group-hover:-translate-y-2 z-40 transition duration-300">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 absolute z-40 -top-3 right-3 inline-block px-2">
                <span className="relative text-white text-2xl font-mono">
                  Pragmate
                </span>
              </span>
            </div>
            <div className=" relative overflow-hidden m-4">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

              <Image
                src={"/Pragmate.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500  border-white border-2 p-1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-30 ">
                <span className="font-extrabold ">Pragmate</span>{" "}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-1000 z-30 text-xl font-extrabold">
                Group Project
              </div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute  bg-[#2C2E33]p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eos obcaecati atque aliquam ratione tempore
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 2nd Project */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center w-screen mb-24 mt-5"
        >
          <div className="group max-w-[500px]">
            <div className="relative group-hover:-translate-y-2 z-40 transition duration-300">
              <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-red-500 absolute z-40 -top-1 left-3 inline-block px-2">
                <span className="relative text-white text-xl font-mono">
                  Youtube Clone
                </span>
              </span>
            </div>
            <div className=" relative overflow-hidden m-4">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

              <Image
                src={"/SubroTube.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500  border-white border-2 p-1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-30 ">
                <span className="font-extrabold ">Pragmate</span>{" "}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-1000 z-30 text-xl font-extrabold">
                Group Project
              </div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eos obcaecati atque aliquam ratione tempore
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 3rd Project */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center w-screen mb-24 mt-5"
        >
          <div className="group max-w-[500px]">
            <div className="relative group-hover:-translate-y-2 z-40 transition duration-300">
              <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 absolute z-40 -top-2 right-3 inline-block px-2">
                <span className="relative text-white text-xl font-mono">
                  CryptoTracker
                </span>
              </span>
            </div>
            <div className=" relative overflow-hidden m-4">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

              <Image
                src={"/CryptoTracker.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500  border-white border-2 p-1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-30 ">
                <span className="font-extrabold ">Pragmate</span>{" "}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-1000 z-30 text-xl font-extrabold">
                Group Project
              </div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eos obcaecati atque aliquam ratione tempore
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 4th Project */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center items-center w-screen mb-24 mt-5"
        >
          <div className="group max-w-[500px]">
            <div className="relative group-hover:-translate-y-2 z-40 transition duration-300">
              <span className="before:block before:absolute before:-inset-1 before:skew-y-3 before:bg-red-500 absolute z-40 -top-2 left-3 inline-block px-2">
                <span className="relative text-white text-2xl font-mono">
                  GDrive3.0
                </span>
              </span>
            </div>
            <div className=" relative overflow-hidden m-4">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-30 transition-all duration-300"></div>

              <Image
                src={"/GDrive.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500  border-white border-2 p-1"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-700 z-30 ">
                <span className="font-extrabold ">Pragmate</span>{" "}
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-1000 z-30 text-xl font-extrabold">
                Group Project
              </div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eos obcaecati atque aliquam ratione tempore
                <div></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* for large and medium screens */}
      <div className="hidden lg:block md:block lg:mx-64 md:mx-32 ">
        {/* project1 */}
        <div className="flex pb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative m-4 group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer"
          >
            <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
              <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
            </div>
            <Image
              src={"/SubroTube.png"}
              alt=""
              width={550}
              height={550}
              className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute lg:right-64 md:right-32 flex flex-col gap-3 text-right group-hover:translate-x-5 transition duration-300"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2">
              FullStack Project
            </div>
            <div className=" font-extrabold font-mono text-2xl">SubroTube</div>
            <div className="w-[500px] p-8 bg-[#2C2E33] text-sm text-left rounded-xl text-gray-400 z-30">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose.It uses Firebase storage for storing
              large video files.
            </div>
            <div className="text-[12px] flex gap-4 font-bold justify-end text-gray-300 pb-1">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-end gap-4 pr-4 text-2xl">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
        </div>
         {/* project2 */}
         <div className="flex p-10">
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" flex flex-col gap-3 text-left group-hover:translate-x-5 transition duration-300"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2">
              FullStack Project
            </div>
            <div className=" font-extrabold font-mono text-2xl">SubroTube</div>
            <div className="w-[500px] p-8 bg-[#2C2E33] text-sm text-left rounded-xl text-gray-400 z-30">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose.It uses Firebase storage for storing
              large video files.
            </div>
            <div className="text-[12px] flex gap-4 font-bold start text-gray-300 pb-1">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-start gap-4 pr-4 text-2xl">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute lg:right-64 md:right-32 m-4 group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer"
          >
            <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
              <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
            </div>
            <Image
              src={"/SubroTube.png"}
              alt=""
              width={550}
              height={550}
              className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm"
            />
          </motion.div>

          
        </div>
         {/* project3 */}
         <div className="flex py-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative m-4 group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer"
          >
            <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
              <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
            </div>
            <Image
              src={"/SubroTube.png"}
              alt=""
              width={550}
              height={550}
              className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute lg:right-64 md:right-32 flex flex-col gap-3 text-right group-hover:translate-x-5 transition duration-300"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2">
              FullStack Project
            </div>
            <div className=" font-extrabold font-mono text-2xl">SubroTube</div>
            <div className="w-[500px] p-8 bg-[#2C2E33] text-sm text-left rounded-xl text-gray-400 z-30">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose.It uses Firebase storage for storing
              large video files.
            </div>
            <div className="text-[12px] flex gap-4 font-bold justify-end text-gray-300 pb-1">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-end gap-4 pr-4 text-2xl">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
        </div>
        {/* project2 */}
        <div className="flex p-10">
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className=" flex flex-col gap-3 text-left group-hover:translate-x-5 transition duration-300"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2">
              FullStack Project
            </div>
            <div className=" font-extrabold font-mono text-2xl">SubroTube</div>
            <div className="w-[500px] p-8 bg-[#2C2E33] text-sm text-left rounded-xl text-gray-400 z-30">
              SubroTube is a youtube clone. It is fullstack MERN application.
              The application has APIs and can perform basic CRUD functionality
              using MongoDB and Mongoose.It uses Firebase storage for storing
              large video files.
            </div>
            <div className="text-[12px] flex gap-4 font-bold start text-gray-300 pb-1">
              <span className=""># JWT Auth</span>
              <span className=""># Firebase</span>
              <span className=""># MongoDB</span>
              <span className=""># Mongoose</span>
              <span className=""># ExpressJS</span>
            </div>
            <div className="flex justify-start gap-4 pr-4 text-2xl">
              <FiGithub />
              <HiOutlineExternalLink />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="absolute lg:right-64 md:right-32 m-4 group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer"
          >
            <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
              <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
            </div>
            <Image
              src={"/SubroTube.png"}
              alt=""
              width={550}
              height={550}
              className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm"
            />
          </motion.div>

          
        </div>
      </div>
    </div>
  );
}

export default Project;
