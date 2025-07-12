"use client";

import { motion } from "framer-motion";

const Header = () => (
  <motion.header
    className="text-center mb-20"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h1 className="text-5xl sm:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
      Mahmoud Metwalli
    </h1>
    <p className="text-xl sm:text-2xl text-gray-300">Software Engineer | Pharmacist</p>
  </motion.header>
);

export default Header;
