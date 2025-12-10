import React,{useState} from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaCodepen ,FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setformData] = useState({
    name : "",
    email : "",
    message : ""
  });

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setformData((prev)=>{
      return {...prev,[name]:[value]}
    })
  };

  return (
    <section
      id="contact"
      className="py-24 px-[8vw] md:px-[6vw] lg:px-[12vw] font-sans bg-black text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">Contact me for collaboration</h2>
          <p className="text-gray-400 text-lg">
            Reach out today to discuss your project needs and start collaborating on something amazing!
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="https://github.com/HarshilDev10" className="p-3 rounded-md border border-gray-600 hover:bg-blue-600 transition">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/harshil-patell/" className="p-3 rounded-md border border-gray-600 hover:bg-blue-600 transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-md border border-gray-600 hover:bg-blue-600 transition">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="p-3 rounded-md border border-gray-600 hover:bg-blue-600 transition">
              <FaInstagram size={20} />
            </a>
            
          </div>
          <div>
  <ul className="text-gray-400 space-y-2">
    <li className="flex items-center gap-2">
      <FaEnvelope/>
      <a href="mailto:harshildeveloper10@gmail.com" className="hover:text-blue-600 transition-colors">
        harshildeveloper10@gmail.com
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaPhone />
      <a href="tel:+919913098634" className="hover:text-blue-600 transition-colors">
        +91 9913098634
      </a>
    </li>
    <li className="flex items-center gap-2">
      <FaGlobe />
      <a
        href="https://harshill-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors"
      >
        harshill-portfolio.vercel.app
      </a>
    </li>
  </ul>
</div>
        </div>
<div className="max-w-3xl mx-auto px-6 py-12 relative">
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-56 h-56 bg-white/50 rounded-full filter blur-3xl animate-pulse opacity-50"></div>
  </div>

  <form className="relative z-10 space-y-6 bg-white/10 border border-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleForm}
        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleForm}
        className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600 transition"
      />
    </div>
    <textarea
      rows="5"
      placeholder="Message"
      name="message"
      value={formData.message}
      onChange={handleForm}
      className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-gray-200 text-white focus:outline-none focus:ring-0 focus:ring-blue-600 focus:border-blue-600 transition"
    />
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-900 to-blue-500 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      Submit
    </button>
  </form>
</div>
</div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-16 border-t border-gray-800">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Let’s work together today!</h3>
          <button className="px-6 py-3 bg-blue-500 text-black font-semibold rounded-md hover:bg-blue-600 transition">
            <Link to="/projects">Start a Project</Link>
          </button>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#experience" className="hover:text-blue-600">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Socials</h4>
          <ul className="space-y-2 text-gray-400 ">
            <li className="hover:text-blue-700"><a href="https://github.com/HarshilDev10">GitHub</a></li>
            <li className="hover:text-blue-700"><a href="https://www.linkedin.com/in/harshil-patell/">LinkedIn</a></li>
            <li className="hover:text-blue-700"><a href="#">Twitter X</a></li>
            <li className="hover:text-blue-700"><a href="#">Instagram</a></li>
          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;

