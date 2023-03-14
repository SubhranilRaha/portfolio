import { useEffect } from "react";
import TagCloud from "TagCloud";



function Experience() {


    useEffect(()=>{
      return ()=>{
        const container = '.tagcloud';
        const texts =[
          "HTML",
          "CSS",
          "JAVASCRIPT",
          "REACT",
          "NEXTJS",
          "TAILWIND",
          "SOLIDITY",
          "ETHERSJS",
          'HARDHAT',
          'NODEJS',
          'GIT',
          'GITHUB',
          'MONGODB',
        ];
  
        const options={
          radius:300,
          maxSpeed:"normal",
          initSpeed:"normal",
          keep:true
        }
        TagCloud(container, texts, options);
      }
    },[])
  
  return (
    <div className="relative h-[1300px] lg:h-[1000px]  lg:pt-10 mx-5 lg:mx-[200px] mb-10 ">
      <h1 className="text-[2.5rem] font-mono pt-10 w-full flex justify-center">Experience</h1>
      <h1 className="flex justify-center text-gray-400 w-full">My Tech Stack and Achievements</h1>
      <div className="flex lg:flex-row  flex-col  h-full w-full items-center mt-14 lg:mt-0">
      <div className="text-sphere order-last translate-x-0 translate-y-10  lg:translate-x-0 lg:-translate-y-10  mx-5 lg:mx-0">
        <span className="tagcloud text-gray-400 font-rob "></span>
      </div>
      <div className="flex  -translate-x-10   lg:-translate-y-12 w-screen justify-center">
        <div className="absolute h-[510px] w-[2.99px] bg-white -translate-x-[100px] mt-2 "></div>
        <div className="flex flex-col gap-10 -translate-x-[107px] -translate-y-1">
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 ">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 mt-10">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 mt-10">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 mt-10">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 mt-10">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        {/* Experience */}
        <div className="ml-24 flex flex-col gap-8 mt-10">
          <div className="flex gap-2 -translate-x-9">
            <div className="h-5 w-5 bg-white rounded-full translate-y-2"></div>
            <div className="relative group">
              <div className="absolute h-[70px] w-[250px] rounded-xl border-2 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition duration-75"></div>
              <div className="absolute h-[70px] w-[250px] bg-[#2C2E33] rounded-xl border-red-500 border-2"></div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Experience;
