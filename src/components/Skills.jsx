import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-[12vw] bg-black text-white font-sans"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Skills</h2>
        <div className="w-32 h-1 bg-blue-700 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of my technical skills and tools I use regularly
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
  <motion.div
    whileInView={{ opacity: [0, 1], y: [50, 0] }}
    transition={{ duration: 0.8 }}
    className="relative rounded-xl p-6 border border-gray-700 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 transition overflow-hidden"
  >
    <div className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full filter blur-3xl opacity-30 animate-blob"></div>

    <h3 className="text-2xl font-bold mb-6 relative z-10">Frontend</h3>
    <ul className="space-y-4 relative z-10">
      {skills.frontend.map((skill) => (
        <li key={skill.name} className="flex items-start gap-4">
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
          <div>
            <h4 className="font-semibold">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </motion.div>

  <motion.div
    whileInView={{ opacity: [0, 1], y: [50, 0] }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="relative rounded-xl p-6 border border-gray-700 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 transition overflow-hidden"
  >
    <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 rounded-full filter blur-3xl opacity-30 animate-blob"></div>

    <h3 className="text-2xl font-bold mb-6 relative z-10">Backend</h3>
    <ul className="space-y-4 relative z-10">
      {skills.backend.map((skill) => (
        <li key={skill.name} className="flex items-start gap-4">
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
          <div>
            <h4 className="font-semibold">{skill.name}</h4>
            <p className="text-gray-400 text-sm">{skill.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </motion.div>

  <motion.div
    whileInView={{ opacity: [0, 1], y: [50, 0] }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="relative rounded-xl p-6 border border-gray-700 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 transition overflow-hidden"
  >
    <div className="absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 rounded-full filter blur-3xl opacity-30 animate-blob"></div>

    <h3 className="text-2xl font-bold mb-6 relative z-10">Tools</h3>
    <ul className="space-y-4 relative z-10">
      {skills.tools.map((tool) => (
        <li key={tool.name} className="flex items-start gap-4">
          <img loading="lazy" src={tool.icon} alt={tool.name} className="w-6 h-6" />
          <div>
            <h4 className="font-semibold">{tool.name}</h4>
            <p className="text-gray-400 text-sm">{tool.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </motion.div>
</div>

    </section>
  );
};

export default Skills;
