// src/components/About.jsx
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <section
      id="about"
      className="relative h-screen flex flex-col bg-transparent justify-center items-center text-center px-4 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-white/5
            bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
                linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
            bg-[size:6rem_4rem]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF/30,transparent)] animate-pulse-slow" />
      </div>

      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="md:text-8xl text-4xl font-rockville font-bold mb-6 tracking-widest text-white"
        data-aos="fade-down"
      >
        Harshil Patel
      </motion.h1>

      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-3xl mb-4 font-asimov text-blue-400"
        data-aos="fade-up"
      >
        <TypeAnimation
          sequence={["Front-end Developer", 2000, "Javascript Developer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-white"
        />
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 1.2 }}
        className="text-lg max-w-xl mb-6 font-poppins text-gray-500"
        data-aos="fade-up"
      >
        I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, React Js, Tailwind CSS, and modern web technologies. I enjoy building clean, responsive, and user-friendly applications while constantly exploring new tools to bring creative ideas to life.
      </motion.p>

      <motion.a
        href="/assets/resume.pdf"
        download
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        data-aos="zoom-in"
      >
        Download Resume
      </motion.a>

      <motion.div
        className="flex gap-6 mt-6 text-3xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        data-aos="fade-up"
      >
        <a href="https://github.com/HarshilDev10" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/harshil-patell/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-transform hover:scale-110" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
        </a>
      </motion.div>
    </section>
  );
};

export default About;
