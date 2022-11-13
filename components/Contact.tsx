import React from 'react'
import {PhoneIcon, MapPinIcon , EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

type Props = {}

function Contact({}: Props) {
    const { register,
            handleSubmit,
            watch,
            formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {window.location.href=`mailto:subhranilrahaofficial@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`}

  return (
    <div className='h-screen relative flex overflow-hidden flex-col px-10 text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className="absolute top-12 uppercase tracking-[20px] text-gray-500 test-2xl">contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className="relative text-4xl font-semibold text-center">Got just what you need?{" "}
            <span className='decoration-red-500 underline'>Lets Talk.</span>
            </h4> 
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-red-400 h-7 w-7 animate-pulse'/>
                <p>+91 9163544240</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-red-400 h-7 w-7 animate-pulse'/>
                <p>subhranilrahaofficial@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapPinIcon className='text-red-400 h-7 w-7 animate-pulse'/>
                <p>254 RR plot anandapur kolkata-700130</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className="flex space-x-2">
                    <input {...register('name')} placeholder='Name' className='contactinput' type="text" /><input {...register('email')} placeholder='Email' className='contactinput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactinput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactinput'/>
                    <button type='submit' className='bg-red-400 py-3 px-10 rounded-lg font-bold text-lg'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact