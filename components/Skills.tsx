import { FaEthereum } from "react-icons/fa";
import { ImDatabase } from "react-icons/im";
import { MdDesignServices } from "react-icons/md";

const Skills = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center  md:p-20 lg:p-0 -translate-y-10 lg:translate-y-0">
      <h1 className="text-[2.5rem] font-mono mt-20 ml-5 lg:hidden">Skills</h1>
      <p className="mx-5 text-gray-400 lg:hidden">
        These are the things I am good at
      </p>
      <div className="flex flex-col gap-5 h-[350px]  lg:w-full items-center justify-between mt-10 mx-5">
        <div className="p-5 group border h-full w-full rounded-xl  hover:border-[#e75151] font-rob hover:translate-x-1 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
              FrontEnd Development
            </div>
            <MdDesignServices className="text-[#e75151] text-xl" />
          </div>

          <div className=" text-gray-400 text-sm">
            This includes designing responsive UI for web and mobile
            applications.
          </div>
        </div>
        <div className="group border h-full w-full rounded-xl  hover:border-[#e75151] p-5 font-rob hover:translate-x-1 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
              BackEnd Development
            </div>
            <ImDatabase className="text-[#e75151] text-lg" />
          </div>

          <div className=" text-gray-400 text-sm">
            This includes working with API, database and authentication.
          </div>
        </div>
        <div className="group border h-full w-full rounded-xl  hover:border-[#e75151] p-5 font-rob hover:translate-x-1 transition">
          <div className="flex flex-row justify-between">
            <div className="group-hover:text-[#e75151]">
              Blockchain Development
            </div>
            <FaEthereum className="text-[#e75151] text-xl" />
          </div>

          <div className=" text-gray-400 text-sm">
            This include creating smart contracts and interacting with the
            blockchain.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
