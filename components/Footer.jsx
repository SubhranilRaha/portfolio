import React from 'react'
import { BsGithub, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center relative h-[300px] gap-6'>
         <div className="h-[1px] w-80 bg-gray-500"></div>
      <h1 className="text-3xl ">
        Subhranil<span className="text-[#e75151]">Raha</span>.
      </h1>
      <div className="flex min-w-[200px] max-w-[400px] justify-between">
          <BsGithub className="text-[25px] xl:text-[30px]  hover:cursor-pointer hover:scale-105 dark:text-gray-300 text-gray-600" />
          <BsInstagram className="text-[25px] xl:text-[30px]  hover:cursor-pointer hover:scale-105 dark:text-gray-300 text-gray-600"/>
          <FiTwitter className="text-[25px] xl:text-[30px] hover:cursor-pointer hover:scale-105 dark:text-gray-300 text-gray-600" />
          <FaLinkedin className="text-[25px] xl:text-[30px]  hover:cursor-pointer hover:scale-105 dark:text-gray-300 text-gray-600" />
        </div>
        <div className="font-rob text-sm">Designed & Built by Subhranil Raha &#169; 2023</div>
    </div>
  )
}

export default Footer