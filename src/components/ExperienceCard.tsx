"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const ExperienceCard = ({ title, company, duration, details }: { title: string; company: string; duration: string; details: string[] }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="text-cyan-400 mr-4 text-2xl">
        <FaBriefcase />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{company} | {duration}</p>
      </div>
    </div>
    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
      {details.map((detail, i) => <li key={i}>{detail}</li>)}
    </ul>
  </motion.div>
);

export default ExperienceCard;
