import { motion } from "framer-motion";
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SlSocialLinkedin } from "react-icons/sl";

type Props = {};

function Project({}: Props) {
  return (
    <div className="relative h-full top-12 mb-32">
      <motion.div
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:0}}
      viewport={{once:true}}
      className="flex flex-col ml-5 py-4 justify-center items-center">
        <h1 className="text-gray-500 font-mono">Things I have built</h1>
        <h1 className="text-4xl font-mono font-extrabold mb-10">
          Featured Projects
        </h1>
      </motion.div>
      <div className="lg:hidden md:hidden flex flex-col gap-72">
        {/* smaller screen */}
      
        {/* 1st Project s*/}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen h-[30vh]"
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/70 w-full h-full absolute z-10 transition-all duration-300 rounded-lg"></div>

              <Image
                src={"/Subrotube.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  FullStack Project
                </span>{" "}
              </motion.div>
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                SubroTube
              </motion.div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400 ">
                <div className="flex gap-2 flex-wrap text-red-400">
                  
                  <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#ExpressJS</span>
                  <span className="text-xs">#Redux</span>
                  <span className="text-xs">#MaterialUI</span>
                  
                </div>
                <div className="text-slate-500 pt-3">
                SubroTube is a full-stack MERN application that functions as a YouTube clone. Users can sign in to their account using their Google credentials and browse through a variety of videos, as well as upload their own. Once logged in, users can interact with content by liking videos and subscribing to channels. All data is securely stored in MongoDB and Firebase, ensuring data safety and security for all users.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  <a className="hover:scale-110 hover:text-red-400" href="https://github.com/SubhranilRaha/subrotube">
                  <FiGithub />
                  </a>
                  <a className="hover:scale-110 hover:text-red-400" href="https://subrotube.netlify.app">
                  <HiOutlineExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 2nd Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen mb-20"
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300"> 
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/80 w-full h-full absolute z-10 transition-all duration-300 rounded-lg"></div>

              <Image
                src={"/Pragmate.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Hackathon Project
                </span>{" "}
              </motion.div>
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                Pragmate
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2 flex-wrap text-orange-400">
                  <span className="text-xs">#ReactJS</span>
                  <span className="text-xs">#Tailwind</span>
                  <span className="text-xs">#ReactRouter</span>
                  <span className="text-xs">#ReactQuery</span>
                  <span className="text-xs">#ChartJS</span>
                  <span className="text-xs">#ArtificialIntelligence</span>
                  <span className="text-xs">#Chatbot</span>
                  
                </div>
                <div className="text-slate-500 pt-3">
                  My team, developed a full-stack project for the final round of Smart India Hackathon 2022. As a member, I was responsible for the frontend development, UI/UX design, and overall architecture of the web app. Our goal was to create a platform that can assist teachers in their work. The application collects and records data about students and utilizes an AI model to predict their future outcomes. The collected data is presented to the user through visually appealing charts, which enhances the user experience.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                <a className="flex justify-center items-center" href="https://github.com/SubhranilRaha/PragmateSIH">
                  <FiGithub />
                  </a>
                  <a href="https://www.linkedin.com/feed/update/urn:li:activity:6972480779570352128/">
                  <SlSocialLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 3rd Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen "
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/60 w-full h-full absolute z-10 transition-all duration-300 rounded-xl"></div>

              <Image
                src={"/CryptoTracker.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Frontend Project
                </span>{" "}
              </motion.div>
              <motion.div 
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                CryptTracker
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-16 group-hover:-translate-y-14 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2 text-yellow-600 flex-wrap">
                  <span className="text-xs">#WebAPI</span>
                  <span className="text-xs">#Axios</span>
                  <span className="text-xs">#DaisyUI</span>
                  <span className="text-xs">#Tailwind</span>
                  <span className="text-xs">#ContextAPI</span>
                  <span className="text-xs">#Crypto</span>
                </div>
                <div className="text-slate-500 pt-3">
                The web API project is designed to fetch data from the CoinGecko API. The API retrieves up-to-date information on cryptocurrency prices, market capitalization, trading volume, and other related data. Users can easily navigate through the data using pagination and search features. In addition, the web API project also includes a carousel to showcase trending projects and also has the ability to change themes.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                  
                  <a href="https://github.com/SubhranilRaha/crypto-tracker">
                  <FiGithub />
                  </a>
                  <a href="https://cryptrackr.netlify.app">
                  <HiOutlineExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* 4th Project s */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{once:true}}
          className="flex flex-col justify-center items-center w-screen mb-32"
        >
          <div className="group max-w-[500px]">
            <div className="relative transition duration-300">
            </div>
            <div className="relative overflow-hidden mx-4 rounded-lg">
              <div className="bg-black/80 w-full h-full absolute z-10 transition-all duration-300 "></div>

              <Image
                src={"/GDrive.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 "
              />
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.1}}
              viewport={{once:true}}
              className="absolute left-12 top-14 transition-all duration-700 z-20">
                <span className="font-extrabold text-red-500 font-rob">
                  Web3 Project
                </span>{" "}
              </motion.div>
              <motion.div
              initial={{y:50,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:1,delay:.2}}
              viewport={{once:true}}
              className="absolute  left-12 top-20 transition-all duration-1000 z-20 text-xl font-extrabold text-white">
                GoogleDrive 3.0
              </motion.div>
            </div>
            <div className="relative flex justify-center ">
              <div className="absolute bg-slate-300  dark:bg-[#2C2E33]  p-4 rounded-xl -translate-y-20 group-hover:-translate-y-16 mx-7 z-20 transition duration-300 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex gap-2 flex-wrap text-violet-300">
                  <span className="text-xs">#Solidity</span>
                  <span className="text-xs">#EthersJS</span>
                  <span className="text-xs">#Hardhat</span>
                  <span className="text-xs">#Metamask</span>
                  <span className="text-xs">#IPFS</span>
                  <span className="text-xs">#Alchemy</span>
                  <span className="text-xs">#NodeJS</span>
                </div>
                <div className="text-slate-500 pt-3">
                This is a Decentralized Application (Dapp) that utilizes the Pinata IPFS to securely store image file hashes on the blockchain. The application is compiled and deployed to the Sepolia test network with the help of Hardhat. The frontend of the application is written in React and interacts with the smart contract via EthersJS. To access the application, users must log in using their MetaMask account and can share their data with other addresses.
                </div>
                <div className="flex justify-start gap-4 text-xl pt-3">
                <a href="https://github.com/SubhranilRaha/client">
                  <FiGithub />
                  </a>
                  <a href="https://gdriveweb3.netlify.app">
                  <HiOutlineExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* for large and medium screens */}
      <div className="hidden lg:flex lg:flex-col md:flex md:flex-col lg:gap-20 md:gap-20 mx-10">
        {/* 1st project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "tween" }}
            viewport={{ once: true }}
            className=""
          >
            <a className="hover:scale-110 hover:text-red-400" href="https://subrotube.netlify.app" target='_blank'>
            <div className="relative group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="group-hover:bg-black/50 w-full h-full z-10 absolute transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/Subrotube.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-right transition duration-30 absolute right-0 top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              FullStack Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw]">
              SubroTube
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl z-30 text-[1vw]">
            SubroTube is a full-stack MERN application that functions as a YouTube clone. Users can sign in to their account using their Google credentials and browse through a variety of videos, as well as upload their own. Once logged in, users can interact with content by liking videos and subscribing to channels. All data is securely stored in MongoDB and Firebase, ensuring data safety and security for all users.
            </div>
            <div className="flex gap-4 font-bold justify-end dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
            <span className="text-xs">#JWTAuth</span>
                  <span className="text-xs">#Firebase</span>
                  <span className="text-xs">#MongoDB</span>
                  <span className="text-xs">#ExpressJS</span>
                  <span className="text-xs">#Redux</span>
                  <span className="text-xs">#MaterialUI</span>
            </div>
            <div className="flex justify-end gap-4 text-[1.5vw]">
            <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://github.com/SubhranilRaha/subrotube">
                  <FiGithub />
                  </a>
                  <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://subrotube.netlify.app">
                  <HiOutlineExternalLink /></a>
            </div>
          </motion.div>
        </div>
        {/* 2nd project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-left transition duration-30 absolute top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              Hackathon Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw] z-30">
              Pragmate
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl  z-30 text-[.9vw]">
            My team, developed a full-stack project as the finalist Smart India Hackathon 2022. I was responsible for the frontend development, UI/UX design, and overall architecture of the web app. Our goal was to create a platform that can assist teachers in their work. The application collects and records data about students and utilizes an AI model to predict their future outcomes. The collected data is presented to the user through visually appealing charts, which enhances the user experience.
            </div>
            <div className="flex gap-4 font-bold justify-start dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
            <span className="text-xs">#ReactJS</span>
                  <span className="text-xs">#Tailwind</span>
                  <span className="text-xs">#ReactRouter</span>
                  <span className="text-xs">#ReactQuery</span>
                  <span className="text-xs">#ChartJS</span>
                  <span className="text-xs">#ArtificialIntelligence</span>
                  <span className="text-xs">#Chatbot</span>
            </div>
            <div className="flex justify-start gap-4 text-[1.5vw]">
            <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://github.com/SubhranilRaha/PragmateSIH">
                  <FiGithub />
                  </a>
                  <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://www.linkedin.com/feed/update/urn:li:activity:6972480779570352128/">
                  <SlSocialLinkedin />
                  </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10 absolute top-0 right-0"
          >
            <a href="https://github.com/SubhranilRaha/PragmateSIH"  rel="noreferrer" target='_blank' className="">
            <div className="group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="rounded-xl group-hover:bg-black/50 w-full h-full z-20 absolute top-0 right-0 transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/Pragmate.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw] scale-105"
              />
            </div>
            </a>
          </motion.div>
        </div>
        {/* 3rd project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10"
          >
          <a href="https://cryptrackr.netlify.app" target='_blank' rel="noreferrer" className="">
            <div className="relative group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="group-hover:bg-black/50 w-full h-full z-20 absolute transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/CryptoTracker.png"}
                alt=""
                width={600}
                height={600}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-right transition duration-30 absolute right-0 top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-40 text-[1.2vw]">
              Frontend Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw]">
            CrypTracker
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl z-30 text-[1vw]">
            The web API project is designed to fetch data from the CoinGecko API. The API retrieves up-to-date information on cryptocurrency prices, market capitalization, trading volume, and other related data. Users can easily navigate through the data using pagination and search features. In addition, the web API project also includes a carousel to showcase trending projects and also has the ability to change themes.
            </div>
            <div className="flex gap-4 font-bold justify-end dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
            <span className="text-xs">#WebAPI</span>
                  <span className="text-xs">#Axios</span>
                  <span className="text-xs">#DaisyUI</span>
                  <span className="text-xs">#Tailwind</span>
                  <span className="text-xs">#ContextAPI</span>
                  <span className="text-xs">#Crypto</span>
            </div>
            <div className="flex justify-end gap-4 text-[1.5vw]">
            <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://github.com/SubhranilRaha/crypto-tracker">
                  <FiGithub />
                  </a>
                  <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://cryptrackr.netlify.app">
                  <HiOutlineExternalLink /></a>
            </div>
          </motion.div>
        </div>
        {/* 4th project */}
        <div className="relative flex items-center justify-between lg:mx-[12vw] md:mx-[5vw] h-[23vw]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-30 flex flex-col gap-[1vw] text-left transition duration-30 absolute top-0 lg:w-[35vw] md:w-[43vw]"
          >
            <div className="text-red-500 font-rob font-bold text-base translate-y-2 z-30 text-[1.2vw]">
            Web3 Project
            </div>
            <div className="font-extrabold font-mono text-[1.5vw] z-30">
            GoogleDrive 3.0
            </div>
            <div className="p-6 dark:text-gray-400 text-gray-700  bg-gray-300 dark:bg-[#2C2E33] text-left rounded-xl  z-30 text-[1vw]">
            This is a Decentralized Application (Dapp) that utilizes the Pinata IPFS to securely store image file hashes on the blockchain. The application is compiled and deployed to the Sepolia test network with the help of Hardhat. The frontend of the application is written in React and interacts with the smart contract via EthersJS. To access the application, users must log in using their MetaMask account and can share their data with other addresses.
            </div>
            <div className="flex gap-4 font-bold justify-start dark:text-gray-300 text-gray-400 z-30 text-[0.8vw]">
            <span className="text-xs">#Solidity</span>
                  <span className="text-xs">#EthersJS</span>
                  <span className="text-xs">#Hardhat</span>
                  <span className="text-xs">#Metamask</span>
                  <span className="text-xs">#IPFS</span>
                  <span className="text-xs">#Alchemy</span>
                  <span className="text-xs">#NodeJS</span>
            </div>
            <div className="flex justify-start gap-4 text-[1.5vw]">
            <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://github.com/SubhranilRaha/client">
                  <FiGithub />
                  </a>
                  <a className="hover:scale-110 hover:text-red-400" target='_blank' rel="noreferrer" href="https://gdriveweb3.netlify.app">
                  <HiOutlineExternalLink /></a>
            </div>
          </motion.div>
          <a href="https://gdriveweb3.netlify.app" rel="noreferrer" target='_blank' className="">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "linear" }}
            viewport={{ once: true }}
            className="z-10 absolute top-0 right-0"
          >
            <div className="group transition duration-300 overflow-hidden rounded-xl hover:cursor-pointer">
              <div className="rounded-xl group-hover:bg-black/50 w-full h-full z-20 absolute top-0 right-0 transition duration-300 flex justify-center items-center">
                <BsFillArrowRightCircleFill className="text-red-500 text-7xl hidden group-hover:block transition duration-500" />
              </div>
              <Image
                src={"/GDrive.png"}
                alt=""
                width={500}
                height={500}
                className="group-hover:scale-125 transition-all duration-500 hover:cursor-pointer group-hover:blur-sm lg:w-[43vw] md:w-[52vw]"
              />
            </div>
          </motion.div>
              </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
