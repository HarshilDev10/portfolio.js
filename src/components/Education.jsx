// src/components/Education.jsx
import React, { useEffect } from "react";
import { education } from "../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 lg:px-24 font-sans bg-black"
    >
      {/* Section Title */}
      <div className="text-center mb-20 overflow-hidden">
        <h2
          className="text-5xl font-bold text-white mb-4 transform -translate-x-full"
          data-aos="slide-right"
        >
          EDUCATION
        </h2>
        <div
          className="w-32 h-1 bg-blue-600 mx-auto mb-4 transform scale-x-0"
          data-aos="zoom-in"
        ></div>
        <p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col items-center gap-12">
  {education.map((edu, index) => {
    const isLeft = index % 2 === 0;

    return (
      <div
        key={edu.id}
        className={`w-full md:w-8/12 p-6 rounded-xl relative transition-transform duration-300 hover:scale-105
        bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 shadow-lg`}
        data-aos={isLeft ? "fade-right" : "fade-left"}
      >
        <h3 className="text-2xl font-semibold text-white mb-2">
          {edu.degree}
        </h3>
        <h4 className="text-gray-300 mb-1">{edu.school}</h4>
        <p className="text-gray-500 text-sm mb-2">{edu.date}</p>
        <p className="text-gray-300 font-semibold mb-1">
          Grade: {edu.grade}
        </p>
        <p className="text-gray-400 text-sm">{edu.desc}</p>
      </div>
    );
  })}
</div>
    </section>
  );
};

export default Education;
