import Link from 'next/link';
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
      <Link href="https://github.com/SubhranilRaha" target='_blank' rel="noreferrer" className=""><BsGithub   className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
          <Link href="https://www.instagram.com/subhranil_raha/" target='_blank' rel="noreferrer" className=""><BsInstagram className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
          <Link href="https://twitter.com/SubhranilRaha" target='_blank' rel="noreferrer" className=""><FiTwitter className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
          <Link href="https://www.linkedin.com/in/subhranil-raha-8139981b3/" target='_blank' rel="noreferrer" className=""><FaLinkedin className="text-[25px] xl:text-[30px] z-40 hover:cursor-pointer hover:scale-105 dark:text-gray-400 text-gray-600" /></Link>
        </div>
        <div className="font-rob text-sm">Designed & Built by Subhranil Raha &#169; 2023</div>
    </div>
  )
}

export default Footer