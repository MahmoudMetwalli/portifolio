"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NewHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-gray-800">
            <a href="#">Mahmoud Metwalli</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">About</ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Projects</ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors">Contact</ScrollLink>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://www.linkedin.com/in/mahmoud-metwalli/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/MahmoudMetwalli" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a href="https://www.linkedin.com/in/mahmoud-metwalli/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
                <FaLinkedin size={18} />
              </a>
              <a href="https://github.com/MahmoudMetwalli" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
                <FaGithub size={18} />
              </a>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </ScrollLink>
              <ScrollLink 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </ScrollLink>
              <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="text-gray-600 hover:text-blue-600 cursor-pointer transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHero;
