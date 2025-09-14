import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-white/5
            bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
                linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
            bg-[size:6rem_4rem]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF/30,transparent)] animate-pulse-slow" />
      </div>

      {/* Name */}
      <h1 className="md:text-8xl text-4xl font-rockville font-bold mb-6 tracking-widest text-white animate-fade-in">
        Harshil Patel
      </h1>

      {/* Role with typing effect */}
      <h2 className="text-3xl mb-4 font-asimov text-blue-400 animate-fade-in delay-200">
        <TypeAnimation
          sequence={["Front-end Developer", 2000, "Javascript Developer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-white"
        />
      </h2>

      {/* About Text */}
      <p className="text-lg max-w-xl mb-6 font-poppins text-gray-500 animate-fade-in delay-400">
        I am a passionate Web Developer with expertise in HTML, CSS, JavaScript, React Js, Tailwind CSS, and modern web technologies. I enjoy building clean, responsive, and user-friendly applications while constantly exploring new tools to bring creative ideas to life.
      </p>

      {/* Resume Button */}
      <a
        href="/assets/resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition transform hover:scale-105 animate-fade-in delay-600"
      >
        Download Resume
      </a>

      {/* Social Links */}
      <div className="flex gap-6 mt-6 text-3xl animate-fade-in delay-800">
        <a href="https://github.com/HarshilDev10" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition-transform hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/harshil-patell/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-blue-500 transition-transform hover:scale-110" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-pink-500 transition-transform hover:scale-110" />
        </a>
      </div>

      {/* Simple CSS Animations */}
      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeIn 1s forwards;
        }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-800 { animation-delay: 0.8s; }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
