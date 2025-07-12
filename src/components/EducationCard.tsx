"use client";

import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const EducationCard = ({ title, school, duration, details, credentialUrl }: { title: string; school: string; duration: string; details?: string; credentialUrl?: string }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="text-purple-400 mr-4 text-2xl">
        <FaGraduationCap />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{school} | {duration}</p>
      </div>
    </div>
    {details && <p className="text-gray-300">{details}</p>}
    {credentialUrl && (
      <a
        href={credentialUrl}
        className="text-purple-400 hover:underline mt-2 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        Credential URL
      </a>
    )}
  </motion.div>
);

export default EducationCard;
