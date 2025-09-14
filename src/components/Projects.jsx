import React from "react";
import { projects } from "../constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      className="py-24 px-[12vw] text-white relative overflow-hidden bg-transparent backdrop-blur-sm"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold">Featured Projects</h2>
        <div className="w-32 h-1 bg-blue-700 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Explore some of my most innovative and impactful projects that showcase my skills in modern web development.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-3 gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="relative group rounded-2xl overflow-hidden transition-all duration-300"
          >
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32 bg-white/30 rounded-full blur-3xl z-0 animate-blob mix-blend-screen"></div>

            {/* Card */}
            <div className="relative bg-black/20 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 z-10">
              <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                {/* Image & Title */}
                <div>
                  <div className="relative">
                    <img
                      loading="lazy"
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    {project.featured && (
                      <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mt-4">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {new Date(project.date).toDateString()}
                  </p>
                  <p className="text-gray-300 mt-3">{project.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap mt-4 gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-between mt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg text-sm transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Projects */}
      <div className="text-center mt-12">
        <a
          href="/projects"
          className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-600 hover:text-white transition"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};

export default Projects;
