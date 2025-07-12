"use client";

import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="text-center py-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
        Mahmoud Metwalli
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 mb-8">
        From Pixels to Pills: A Pharmacist Crafting Scalable Software Solutions.
      </p>
      <motion.button
        onClick={scrollToProjects}
        className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-colors duration-300 inline-flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work <FaArrowDown className="ml-2" />
      </motion.button>
    </motion.header>
  );
};

export default Hero;
