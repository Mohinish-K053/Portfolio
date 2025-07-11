import about from "../assets/abt.jpeg";
import {motion} from "framer-motion";

export const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl">
                About
                <span className="text-purple-700"> Me</span>
            </h1>
            <div className="flex flex-wrap">
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1}} 
                className="w-full lg:w-1/2 lg:p-8">
                    <div className=" flex items-center justify-center">
                        <img src={about} alt="abtmg" />
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: 100}}
            transition={{ duration: 1}} 
            className=" mt-8 py-7 w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="text-justify font-thin">I am a passionate and driven developer with a strong foundation in modern web development and cloud computing technologies. Currently pursuing a Bachelor’s degree in Cloud Computing from D Y Patil International University, Pune, I have honed my skills in creating dynamic, user-focused web applications using tools like React, Node.js, and MongoDB.
                            My journey into technology began with a curiosity for building innovative solutions that solve real-world problems. Over the years, I’ve worked on diverse projects, including Snuggle Sanctuary, a web portal for animal shelter management, and Athyom, a feature-rich restaurant website. Each project reflects my commitment to creating functional, visually appealing, and user-friendly applications.
                            Beyond web development, I’m skilled in cloud platforms like AWS, where I have experience with EC2 instances, IAM roles, and serverless computing using Lambda. My technical repertoire also includes Python, advanced SQL, and automation tools like Ansible, making me a versatile problem-solver ready to adapt to any challenge.
                            I’m always learning and evolving—currently diving deeper into data engineering with PySpark, Azure Data Factory, and Databricks. My ultimate goal is to leverage these skills to deliver impactful, scalable solutions while staying at the forefront of technology trends.
                            When I’m not coding, you can find me exploring new tech trends, contributing to collaborative projects, or planning my next creative endeavor. Let’s connect and build something amazing together!</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
