import Image from "next/image";

type Props = {};

function Project({}: Props) {
  return (
    <div className="relative h-screen">
      <div className="flex ml-5 pt-10 py-4">
        <h1 className="text-[2rem] font-mono">
          Featured Projects
        </h1>
      </div>
      <div className="group relative overflow-hidden lg:w-[500px] m-4 rounded-xl">
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
      <Image
          src={"/Pragmate.png"}
          alt=""
          width={500} 
          height={500}
          className="group-hover:scale-125 transition-all duration-500 "
        />
        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50"><span className="">Pragmate</span> </div>
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-1000 z-50 text-xl">Fullstack development</div>
        {/* <div className="absolute top-0 text-red-400">Hello</div> */}
       </div>
       <div>
        
       </div>
       <div>
        
       </div>
       <div>
        
       </div>
    </div>
  );
}

export default Project;
