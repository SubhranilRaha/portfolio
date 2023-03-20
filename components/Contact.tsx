import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { SubmitHandler, useForm } from "react-hook-form";
import contactJ from "../public/World.json";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:subhranilrahaofficial@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div
    
    className="pt-16 h-[600px] relative flex overflow-hidden flex-col lg:flex-row text-left md:flex-col max-w-full justify-evenly  items-center lg:translate-x-32 md:translate-x-16">
      <motion.div
      initial={{y:50,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:1,delay:0}}
      viewport={{once:true}}
      className="flex flex-col md:flex-row lg:flex-row space-y-2 lg:relative md:relative justify-center items-center">
        <div className=" lg:flex lg:flex-col lg:gap-4 lg:justify-center lg:items-center">
          <h1 className="text-gray-500 lg:text-xl flex justify-center pb-4">
            Got Just What you Need?
          </h1>

          <h1 className="pb-5 relative text-4xl font-semibold text-center lg:text-6xl">
            Get In Touch!
          </h1>
          <div className="pb-5 font-rob w-96 text-center pt-2 dark:text-gray-300 text-gray-600">
            If you are looking for a skilled web and blockchain developer to
            take your project to the next level, I would be honored to work with
            you.
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2 w-fit mx-auto justify-center items-center">
              {/* <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactinput"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactinput"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactinput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactinput"
            /> */}
              <Lottie
                className="w-[300px] lg:hidden md:hidden"
                animationData={contactJ}
                loop={true}
              />
              <button
                type="submit"
                className="bg-red-500 py-3 px-10 rounded-lg w-[200px] font-bold text-lg hover:cursor-pointer mt-10 text-white"
              >
                Say Hello!
              </button>
            </div>
          </form>
        </div>
        <Lottie
          className="min-w-[400px] max-w-[800px] hidden lg:block md:block md:-translate-x-10"
          animationData={contactJ}
          loop={true}
        />
      </motion.div>
     
    </div>
  );
}

export default Contact;
