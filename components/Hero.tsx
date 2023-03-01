import Image from "next/image";
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import BGcircles from "./BGcircles";
import Navbar from "./Navbar";


type Props = {};

function Hero({}: Props) {
  return (
    <>
      <div className="relative h-screen flex flex-col space-y-8 items-center justify-center text-center pt-48">
        <BGcircles />
        <Image
          src={"/headphone.png"}
          alt=""
          width={200}
          height={200}
          className="absolute top-0 lg:top-10 left-0 lg:-left-12 xl:-translate-y-16 rotate-45 lg:h-[480px] lg:w-[350px] md:h-[400px] md:w-[300px] z-40"
        />
        <Image
          src={"/profilepicture.png"}
          alt=""
          width={500}
          height={500}
          className="relative rounded-full h-36 w-36 mx-auto object-cover"
        />
        {/* <Image
        src={'/PP.png'} 
        alt="" 
        width={600}
        height={600}
        className='hidden lg:block absolute -right-52 bottom-20 -rotate-180 lg:h-[350px] lg:w-[500px]' 
        /> */}

        <div className="z-20">
          <h2 className="text-sm lg:text-xl uppercase text-gray-500  tracking-[15px]">
            Software Developer
          </h2>
          <div className="text-4xl lg:text-5xl font-semibold px-10 ">
            <h1 className=" h-18 ">
              <Typewriter
                words={[
                  "Hi, The Name's Subhranil Raha",
                  "Guy-who-loves-Coffee.tsx",
                  "<AlsoLovesToCode />",
                  ".Freelancer { Web2 , Web3 }",
                ]}
                cursor={true}
                loop={true}
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
                cursorColor="#e75151"
              />
            </h1>
          </div>
          {/* <div className="pt-5 z-50">
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
          <button className='heroButton'>Experience</button></Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
          <Link href='#contact'>
          <button className='heroButton'>Contact</button></Link>
          <Link href='about'>
          <button className='heroButton border-gray-400'>Resume</button></Link>
          </div> */}
        </div>
        <div className="flex w-[300px] justify-between">
          <BsGithub className="text-[25px] md:text-[30px] xl:text-[35px] z-40 hover:cursor-pointer hover:scale-105 text-gray-400" />
          <BsInstagram className="text-[25px] md:text-[30px] xl:text-[35px] z-40 hover:cursor-pointer hover:scale-105 text-gray-400" />
          <FiTwitter className="text-[25px] md:text-[30px] xl:text-[35px] z-40 hover:cursor-pointer hover:scale-105 text-gray-400" />
          <FaLinkedin className="text-[25px] md:text-[30px] xl:text-[35px] z-40 hover:cursor-pointer hover:scale-105 text-gray-400" />
        </div>
      </div>
    </>
  );
}

export default Hero;
