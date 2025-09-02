import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-around items-center transition-all duration-300
      ${scrolled ? "bg-black/50 backdrop-blur-md" : "bg-transparent"}`}
    >
      <h1 className="text-xl font-futuralumine tracking-widest ">&lt;HP/&gt;</h1>

      <ul className="hidden md:flex gap-6">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu/>
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col gap-4 py-4 items-center md:hidden">
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
