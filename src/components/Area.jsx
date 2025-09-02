import React, { useEffect, useState } from "react";
import { FaCode, FaGamepad, FaPaintBrush, FaDatabase, FaServer, FaGithub } from "react-icons/fa";
import { SiReact, SiPhp, SiMysql } from "react-icons/si";
import { animate, stagger } from "motion";

const Areas = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("areas");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight - 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Animate each skill card with stagger
      animate(
        ".skill-card",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.1) }
      );
    }
  }, [isVisible]);

  const skills = [
    {
      icon: <SiReact className="text-3xl mb-4" />,
      title: "React.js",
      description:
        "Proficient in creating dynamic, SEO-friendly, and scalable front-end solutions with React Js.",
    },
    {
      icon: <FaCode className="text-3xl mb-4" />,
      title: "Front-end Development",
      description:
        "Experienced in building front-end for web apps using Html, Css, Tailwind CSS, React Js ",
    },
    {
      icon: <FaServer className="text-3xl mb-4" />,
      title: "Databases",
      description:
        "Skilled in database integration for web apps using SQL(MySQL) and NoSQL(MongoDB).",
    },
    {
      icon: <SiPhp className="text-3xl mb-4" />,
      title: "PHP & MySQL",
      description:
        "Developed College Management System and other projects using PHP & MySQL with secure login portals.",
    },
    {
      icon: <FaGithub className="text-3xl mb-4" />,
      title: "Version Control & Collaboration",
      description:
        "Experienced in Git and GitHub for collaborative development, code versioning, and project management.",
    },
    {
      icon: <FaCode className="text-3xl mb-4" />,
      title: "Full-Stack Development",
      description:
        "Experienced in building web apps using MERN stack (MongoDB, Express, React, Node.js) and PHP/MySQL for college projects.",
    },
  ];

  return (
    <section
      id="areas"
      className={`min-h-screen flex flex-col justify-center items-center px-4 md:px-16 py-16
        transition-all duration-700 ${isVisible ? "opacity-100 blur-0" : "opacity-0 blur-sm"}`}
    >
      <h2 className="text-4xl md:text-5xl text-white mb-24 text-center">
        Areas of My Expertise
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-card border p-6 rounded-xl shadow-lg hover:scale-105 transition transform duration-300 bg-white/5"
          >
            {skill.icon}
            <h3 className="text-xl font-semibold mb-2 text-white">{skill.title}</h3>
            <p className="text-gray-400 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Areas;
