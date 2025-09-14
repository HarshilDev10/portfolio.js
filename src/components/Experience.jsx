import { motion } from "framer-motion";
import mdcollegeLogo from "../assets/work_logo/mdcollege.png";

export default function Experience() {
  const experiences = [
    {
      logo: mdcollegeLogo,
      company: "Meshdroid Technologies",
      location: "Navsari, India",
      duration: "Jan 2024 – April 2024",
      role: "Web Developer Intern",
      description:
        "Developed a College Management System using HTML, CSS, JavaScript, PHP, and MySQL, featuring secure login portals for students and teachers, and functionalities for marks entry and comprehensive student records.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Xampp", "Github"],
      certificate: "/certificates/meshdroid.pdf",
    },
  ];

  return (
    <motion.section
      className="min-h-[600px] bg-transparent text-white px-4 md:px-16 py-12 flex justify-center items-center relative overflow-hidden"
      initial={{ y: "100vh", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>

        {/* Background blob */}
        <div className="absolute -top-32 -left-32 w-72 h-72 bg-white/20 rounded-full blur-3xl animate-blob mix-blend-screen pointer-events-none"></div>

        <div className="grid gap-6 relative z-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 60px rgba(255,255,255,0.1)" }}
              className="bg-transparent backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  loading="lazy"
                  src={exp.logo}
                  alt={exp.company}
                  className="w-14 h-14 object-contain rounded-lg bg-white p-2"
                />
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-400">{exp.location}</p>
                </div>
              </div>

              {/* Details */}
              <p className="text-sm text-gray-400 mb-2">{exp.duration}</p>
              <p className="mb-4 text-gray-300">{exp.description}</p>
              <div className="mt-8 mb-8">
  <a
    href="./assets/certificates/meshdroid.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-blue-600 hover:bg-blue-900 hover:text-black text-white rounded-lg transition-colors duration-300"
  >
    View Certificate
  </a>
</div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-gray-200 hover:bg-white/30 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
