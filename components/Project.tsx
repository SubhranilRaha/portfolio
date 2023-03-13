import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Project({}: Props) {
  return (
    <div className="relative h-full">
      <div className="flex flex-col ml-5 pt-10 py-4 justify-center items-center">
        <h1 className="text-gray-500 font-mono">Some Things I have built</h1>
        <h1 className="text-4xl font-mono font-extrabold mb-10">
          Featured Projects
        </h1>
      </div>
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
            <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos obcaecati atque aliquam ratione tempore
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
            <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos obcaecati atque aliquam ratione tempore
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
            <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos obcaecati atque aliquam ratione tempore
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
            <div className="absolute bg-[#2C2E33] p-4 rounded-xl -translate-y-10 mx-7 group-hover:-translate-y-8 z-40 transition duration-300 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              eos obcaecati atque aliquam ratione tempore
              <div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Project;
