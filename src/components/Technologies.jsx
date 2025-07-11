import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { SiYaml } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { GrDocker } from "react-icons/gr";
import { SiKubernetes } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { DiJenkins } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{ opacity: 1, y: 0}}
        initial={{ opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div 
        whileInView={{ opacity:1, x: 0}}
        initial={{ oacity: 0, x: -100}}
        transition={{ duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400 items-center" />
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400 items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-400 items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiNodejs  className="text-7xl text-green-500 items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(4.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython  className="text-7xl rounded-lg bg-gradient-to-r from-cyan-500 to-yellow-500 bg-blend-overlay items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-violet-400 items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-red-600 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(2.9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-amber-500 items-center" />

            </motion.div>
            <motion.div
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiYaml className="text-7xl text-blue-600 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(5.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BsFiletypeJson className="text-7xl text-yellow-700 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(6.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <GrDocker className="text-7xl text-cyan-400 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl rounded-lg bg-black text-neutral-200 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(6.9)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoAws className="text-7xl text-orange-500 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(3.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <VscAzure className="text-7xl text-blue-600 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-cyan-400 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFlask className="text-7xl rounded-3xl bg-white text-cyan-400 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(2.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiKubernetes className="text-7xl text-blue-600 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(4.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithubSquare className="text-7xl text-neutral-200 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(7)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTerraform className="text-7xl text-purple-500 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAnsible className="text-7xl text-neutral-500 items-center" />

            </motion.div>
            <motion.div 
            variants={iconVariants(6.6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJenkins className="text-7xl rounded-lg bg-neutral-200 text-red-600 items-center" />

            </motion.div>
            </motion.div>        
    </div>
  )
}

export default Technologies