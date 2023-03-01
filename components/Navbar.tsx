import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Navbar = () => {
  const [open, setopen] = useState(true);
  return (
    <>
      <nav className="">
        <div className="flex justify-between px-5">
          <h1 className="text-xl md:hidded lg:hidden">
            Subhranil<span className="text-[#e75151]">Raha</span>.
          </h1>
          {open ? (
            <button className="">
              <HiOutlineMenuAlt2 className="text-[25px]" />
            </button>
          ) : (
            <button>
              <AiOutlineCloseCircle className="text-[25px]" />
            </button>
          )}
        </div>
        <ul className="flex md:flex-row lg:flex-row flex-col lg:items-center gap-[4vw] pt-3 lg:justify-end pr-10 font-rob z-50 sticky bg-[rgb(37,38,42)] w-screen pl-5 py-8 shadow-md rounded-bottom-xl">
          <li className="hover:text-gray-400">
            <a href="#about">
              <span className="text-[#e75151] ">01.</span> About
            </a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">
              <span className="text-[#e75151] ">02.</span> Projects
            </a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">
              <span className="text-[#e75151]">03.</span> Skills
            </a>
          </li>
          <li className="hover:text-gray-400">
            <a href="#about">
              <span className="text-[#e75151]">04.</span> Experience
            </a>
          </li>
          <li>
            <button className="py-2 px-4 border-2 border-[#e75151] rounded text-[#e75151]">
              Resume
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
