import React from 'react'

type Props = {}

function Project({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 test-2xl">Projects</h3>
        <div className="relative w-full flex overlfow-x-scroll">
            
        </div>
        <div className='w-full absolute top-[30%] bg-red-500 bg-opacity-20 left-0 h-[300px] -skew-y-12'></div>
    </div>
  )
}

export default Project