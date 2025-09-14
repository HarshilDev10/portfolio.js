import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { animate, stagger } from "motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    animate(
      ".desktop-nav li",
      { opacity: [0, 1], y: [50, 0] },
      { delay: stagger(0.5) }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      animate(
        ".mobile-nav li",
        { opacity: [0, 1], y: [50, 0] },
        { delay: stagger(0.5) }
      );
    }
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-around items-center bg-black/50 backdrop-blur-md">
      <h1 className="text-xl font-futuralumine tracking-widest">&lt;HP/&gt;</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 desktop-nav">
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <FiMenu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md flex flex-col gap-4 py-4 items-center mobile-nav md:hidden">
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
