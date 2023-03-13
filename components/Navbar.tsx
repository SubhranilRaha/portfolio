import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <nav className="">
        <div className="absolute right-0 z-50 ">
          {open ? (
            <div className="w-screen z-50 bg-[#2C2E33] ">
            <div
              onClick={() => {
                setopen(!open);
              }}
              className="hover:cursor-pointer md:hidded lg:hidden flex justify-between w-screen px-5 pr-3 pt-3"
            >
              <h1 className="text-xl md:hidded lg:hidden">
                Subhranil<span className="text-[#e75151]">Raha</span>.
              </h1>
              <AiOutlineCloseCircle className="text-[28px] " />
            </div>
            <ul className="flex md:flex-col md:pt-5 lg:flex-row flex-col lg:items-center gap-[6vh] pb-3 lg:justify-end pr-10 font-rob  pl-5  shadow-md md:shadow-none lg:shadow-none rounded-bottom-xl pt-5">
              <li className="hover:text-gray-400 pt-3 md:pt-0 lg:pt-0">
                <a
                  onClick={() => {
                    setopen(!open);
                  }}
                  href="#about"
                >
                  <span className="text-[#e75151]">01.</span> About
                </a>
              </li>
              <li className="hover:text-gray-400">
                <a 
                onClick={() => {
                    setopen(!open);
                  }}
                href="#experience">
                  <span className="text-[#e75151] ">02.</span> Experience
                </a>
              </li>
              <li className="hover:text-gray-400">
                <a 
                onClick={() => {
                    setopen(!open);
                  }}
                href="#projects">
                  <span className="text-[#e75151]">03.</span> Projects
                </a>
              </li>
              <li className="hover:text-gray-400">
                <a 
                onClick={() => {
                    setopen(!open);
                  }}
                href="#contact">
                  <span className="text-[#e75151]">04.</span> Contact
                </a>
              </li>
              <li>
                <button className="py-2 px-4 border-2 border-[#e75151] rounded text-[#e75151] mb-5">
                  Resume
                </button>
              </li>
            </ul>
            </div>
          ) : (
            <div className="">
            <div
              onClick={() => {
                setopen(!open);
              }}
              className="hover:cursor-pointer md:hidded lg:hidden m-2"
            >
              <HiOutlineMenuAlt2 className=" sticky text-[28px] z-50  bg-[#2C2E33] p-2 h-10 w-10 rounded-full" />
            </div>
            </div>
          )}
        </div>
        <div className="hidden lg:block pt-5 z-50 absolute">
          <ul className="flex items-center gap-[2vw] pb-3 justify-end pr-10 font-rob pl-5 w-screen">
            <li className="hover:text-gray-400 pt-3 md:pt-0 lg:pt-0">
              <a href="#about">
                <span className="text-[#e75151]">01.</span> About
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#experience">
                <span className="text-[#e75151] ">02.</span> Experience
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#projects">
                <span className="text-[#e75151]">03.</span> Projects
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a href="#contact">
                <span className="text-[#e75151]">04.</span> Contact
              </a>
            </li>
            <li>
              <button className="py-2 px-4 border-2 border-[#e75151] rounded-[200px] text-[#e75151]">
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
