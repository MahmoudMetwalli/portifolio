"use client";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaGlobe } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const NewHero = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <a href="#">Mahmoud Metwalli</a>
        </div>
        <nav className="hidden md:flex space-x-8">
          <ScrollLink to="about" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">About</ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</ScrollLink>
        </nav>
      </div>
    </header>
  );
};

export default NewHero;
