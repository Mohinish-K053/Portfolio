import profile from "../assets/rajim.jpg";
import {motion} from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay},
    }
})
const Hero = () => {
    return (
        <div className="border-b border-stone-900 pb-4 lg:mb-35 ">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-start lg:item-start">
                        <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Mohinish Kashyap
                        </motion.h1>
                        <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            DevOps Engineer
                        </motion.span>
                        <motion.p 
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">
                        As a passionate and dedicated fresher in software development, I am eager to leverage my skills in
                         programming, web development, and cloud technologies to create innovative solutions. With a strong 
                         foundation in languages like Python, JavaScript, and C++, alongside experience in modern frameworks 
                         such as React and Node.js, I specialize in developing responsive and dynamic web applications.
                          My projects, including a web portal for animal shelter management 
                          showcase my ability to design, develop, and deploy user-focused applications.
                           Additionally, my proficiency in cloud platforms like AWS and database systems like MongoDB and MySQL positions me to contribute effectively to scalable and efficient development processes. Constantly seeking to expand my knowledge, I am driven to deliver impactful solutions that blend creativity and technical expertise.
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100, opacity: 0 }} animate={{ x: 0, opacity: 1.2}} transition={{ duration: 1, delay: 1.2}} className="rounded-lg h-auto w-auto shadow-lg opacity-75 border-purple-600" src={profile} alt="proimg"/>

                </div>

                </div>
            </div>
        </div>
    )
}

export default Hero