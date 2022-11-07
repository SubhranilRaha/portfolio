import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Header({}: Props) {
  return (
    <div className="max-w-7xl mx-auto max-h-7xl my-auto relative flex justify-end">
    <header className='absolute top-0 p-5 flex items-end justify-between max-w-7xl mx-auto z-30 '>
    
    <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration: 1.3,
    }}
    className='flex flex-row items-center'>
    <SocialIcon 
    url='https://www.linkedin.com/in/subhranil-raha-8139981b3/' 
    fgColor='gray' 
    bgColor='transparent'/>
    <SocialIcon 
    url='https://twitter.com/SubhranilRaha' 
    fgColor='gray' 
    bgColor='transparent'/>
    <SocialIcon 
    url='https://github.com/SubhranilRaha' 
    fgColor='gray' 
    bgColor='transparent'/>
    <SocialIcon 
    url='https://www.instagram.com/subhranil_raha/?hl=en' 
    fgColor='gray' 
    bgColor='transparent'/>
    </motion.div>
    {/* <motion.div 
    initial={{
        x:500,
        opacity:0,
        scale:0.5
    }}
    animate={{
        x:0,
        opacity:1,
        scale:1
    }}
    transition={{
        duration: 1.3,
    }}
    className='flex flex-row items-center text-gray-300 cursor-pointer'>

    </motion.div> */}
    </header>
    </div>
  )
}

export default Header