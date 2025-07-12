"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NewHero = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Mahmoud Metwalli</a>
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex space-x-8">
            <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">About</ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Projects</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</ScrollLink>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/mahmoud-metwalli/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/MahmoudMetwalli" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewHero;
