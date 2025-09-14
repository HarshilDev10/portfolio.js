import React from "react";
import { skills } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", items: skills.frontend, gradient: "from-purple-500 via-pink-500 to-blue-500" },
    { title: "Backend", items: skills.backend, gradient: "from-green-400 via-yellow-400 to-orange-400" },
    { title: "Tools", items: skills.tools, gradient: "from-blue-400 via-cyan-400 to-purple-400" },
  ];

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section id="skills" className="py-24 px-[12vw] bg-black text-white font-sans">
      <div className="text-center mb-16">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Skills
        </motion.h2>
        <div className="w-32 h-1 bg-blue-700 mx-auto mt-4"></div>
        <motion.p
          className="text-gray-400 mt-4 text-lg font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          A showcase of my technical skills and tools I use regularly
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            className="relative rounded-xl p-6 border border-gray-700 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-blue-500/30 transition transform hover:scale-105 overflow-hidden"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
          >
            <div
              className={`absolute -top-16 -right-16 w-72 h-72 bg-gradient-to-r ${category.gradient} rounded-full filter blur-3xl opacity-30 animate-blob`}
            ></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10">{category.title}</h3>
            <ul className="space-y-4 relative z-10">
              {category.items.map((skill) => (
                <li key={skill.name} className="flex items-start gap-4">
                  <img loading="lazy" src={skill.icon} alt={skill.name} className="w-6 h-6" />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
