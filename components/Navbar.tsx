import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { HiMoon } from "react-icons/hi";

function Navbar(props: any) {
  const [open, setopen] = useState(false);

  return (
    <>
      <nav className="">
        {/* larger screen */}
        <div className="hidden lg:block pt-4 z-50 absolute -translate-x-2 backdrop-blur-sm">
          <motion.ul className="flex items-center gap-[1.5vw] pb-3 justify-end pr-10 font-rob pl-5 w-screen">
            <motion.li
              initial={{ opacity: 0.5, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="hover:text-gray-400 pt-3 md:pt-0 lg:pt-0"
            >
              <a href="#hero">
                <span className="text-[#e75151]">01.</span> Home
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0.5, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.4 }}
              className="hover:text-gray-400"
            >
              <a href="#about">
                <span className="text-[#e75151] ">02.</span> About
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0.5, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="hover:text-gray-400"
            >
              <a href="#projects">
                <span className="text-[#e75151]">03.</span> Projects
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0.5, y: -70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.8 }}
              className="hover:text-gray-400"
            >
              <a href="#contact">
                <span className="text-[#e75151]">04.</span> Contact
              </a>
            </motion.li>
            {/* #DCE4E6 */}
            <motion.li>
              <motion.button
                initial={{ opacity: 0.5, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 1 }}
                className="py-2 px-4 gap-2 border-[#e75151] rounded-[200px]  flex items-center text-lg group"
                onClick={props.handfunc}
              >
                {props.mode === "light" ? (
                  <>
                    <HiMoon className="group-active:animate-spin group-hover:animate-spin text-[#e75151]" />
                    <h1>dark</h1>
                  </>
                ) : (
                  <>
                    <BsFillSunFill className="group-active:animate-spin group-hover:animate-spin text-[#e75151]" />
                    <h1>light</h1>
                  </>
                )}
              </motion.button>
            </motion.li>
            <motion.li>
              <Link href="/subhranilraha.pdf" download="subhranilraha target='_blank'">
              <motion.button
                initial={{ opacity: 0.5, y: -70 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 1.2 }}
                className="py-2 px-4 border-2 border-[#e75151] rounded-[200px] text-[#e75151]"
              >
                Resume
              </motion.button>
              </Link>
            </motion.li>
          </motion.ul>
        </div>

        {/* smaller screen */}
        <div className="absolute right-2 h-[50px] z-50  px-3 pt-1 block lg:hidden">
          
          <div
            className=" rounded-full flex flex-col justify-between p-4 right-3 top-2 hover:cursor-pointer group z-50 h-14 w-14"
            onClick={() => setopen(!open)}
          >
            <div
              className={
                "rounded bg-slate-400 h-[3px] w-8  " +
                (open
                  ? "rotate-[225deg] translate-y-2 transition-all duration-300"
                  : "rotate-0 translate-y-0 transition-all duration-300")
              }
            ></div>
            <div
              className={
                "h-[3px] w-8 rounded bg-slate-400" + (open ? "hidden" : "")
              }
            ></div>
            <div
              className={
                " h-[3px] rounded bg-slate-400 " +
                (open
                  ? "-rotate-[225deg] w-8  -translate-y-[13px] transition-all duration-500"
                  : "rotate-0 transition-all duration-500 w-6")
              }
            ></div>
          </div>
        </div>
        <div
          className={
            open
              ? " absolute h-screen w-screen backdrop-blur-xl translate-x-0 transition-all duration-[1s] z-40 lg:hidden"
              : "absolute h-screen w-screen  -translate-x-[1000px] backdrop-blur-xl transition-all duration-[1s] z-40 lg:hidden"
          }
        >
          
          <ul className="flex flex-col items-center justify-center gap-12  text-xl font-rob h-screen">
          <a href='#hero' className="text-3xl top-4 left-4">
            Subhranil<span className="text-[#e75151]">Raha</span>.
          </a>
            <li className="hover:text-gray-400 pt-3 md:pt-0 lg:pt-0">
              <a
                onClick={() => {
                  setopen(!open);
                }}
                href="#hero"
              >
                <span className="text-[#e75151]">01.</span> Hero
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a
                onClick={() => {
                  setopen(!open);
                }}
                href="#about"
              >
                <span className="text-[#e75151] ">02.</span> About
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a
                onClick={() => {
                  setopen(!open);
                }}
                href="#projects"
              >
                <span className="text-[#e75151]">03.</span> Projects
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a
                onClick={() => {
                  setopen(!open);
                }}
                href="#contact"
              >
                <span className="text-[#e75151]">04.</span> Contact
              </a>
            </li>
            <li
              className="py-2 px-4 gap-2 border-[rgb(231,81,81)] rounded-[200px] flex items-center text-xl group hover:cursor-pointer"
              onClick={props.handfunc}
            >
              {props.mode === "light" ? (
                <>
                  <HiMoon className="text-[#e75151] group-active:animate-spin group-hover:animate-spin" />
                  <h1>dark</h1>
                </>
              ) : (
                <>
                  <BsFillSunFill className="text-[#e75151] group-active:animate-spin group-hover:animate-spin" />
                  <h1>light</h1>
                </>
              )}
            </li>
            <li>
            <Link href="/SubhranilRahaResume.pdf" download="subhranilraha target='_blank'">
              <button className="py-2 px-4 border-2 border-[#e75151] rounded text-[#e75151] mb-5">
                Resume
              </button>
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
