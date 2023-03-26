import { motion } from "framer-motion";
import { FaEthereum } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { MdDesignServices } from "react-icons/md";


const Skills = () => {
  return (
    <div className="relative h-full lg:h-screen w-full flex flex-col justify-center  md:p-20 lg:p-0 -translate-y-10 lg:translate-y-0">
      <motion.h1
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:0}}
      viewport={{once:true}}
      className="text-[2.5rem] font-mono mt-20 ml-5 lg:hidden">Skills</motion.h1>
      <motion.p
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:.1}}
      viewport={{once:true}}
      className="mx-5 text-gray-400 lg:hidden">
        These are the things I am good at
      </motion.p>
      <div
      className="flex flex-col gap-5 h-[350px]  lg:w-full items-center justify-between mt-10 mx-5 lg:mx-0">
        <motion.div 
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1,delay:0}}
        viewport={{once:true}}
        className="">
          <div className="p-5 group border border-gray-600 dark:border-gray-200 h-full w-full rounded-xl   font-rob hover:translate-x-1 hover:dark:border-red-400 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
              FrontEnd Development
            </div>
            <MdDesignServices className="text-[#e75151] text-xl" />
          </div>

          <div className="dark:text-gray-400 text-gray-600 text-sm">
            This includes designing responsive UI for web and mobile
            applications.
          </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1,delay:.2}}
        viewport={{once:true}}
        className="">
          <div className="p-5 group border border-gray-600 dark:border-gray-200 h-full w-full rounded-xl   font-rob hover:translate-x-1 hover:dark:border-red-400 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
            BackEnd Development
            </div>
            <ImDatabase className="text-[#e75151] text-lg" />
          </div>

          <div className="dark:text-gray-400 text-gray-600 text-sm">
          This includes working with API, database and authentication.
          </div>
          </div>
        </motion.div>
        <motion.div 
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:1,delay:.4}}
        viewport={{once:true}}
        className="">
          <div className="p-5 group border border-gray-600 dark:border-gray-200 h-full w-full rounded-xl   font-rob hover:translate-x-1 hover:dark:border-red-400 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
            Blockchain Development
            </div>
            <FaEthereum className="text-[#e75151] text-xl" />
          </div>

          <div className="dark:text-gray-400 text-gray-600 text-sm">
            This include creating smart contracts and interacting with the
            blockchain.
          </div>
          </div>
        </motion.div>
       
      </div>
    </div>
  );
};

export default Skills;
