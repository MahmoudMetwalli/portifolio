"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface NewProjectCardProps {
  title: string;
  description: string;
  details: string[];
  liveUrl?: string;
  githubUrl: string;
  liveUrlText?: string;
  featured?: boolean;
}

const NewProjectCard = ({ title, description, details, liveUrl, githubUrl, liveUrlText = "Live Demo", featured = false }: NewProjectCardProps) => {
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ${featured ? 'border-2 border-blue-500' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>
        <ul className="space-y-1 sm:space-y-2 text-gray-600 mb-4 sm:mb-6">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start text-sm sm:text-base">
              <span className="text-blue-500 mr-2 mt-0.5 text-xs sm:text-sm">✓</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <div className="flex space-x-3 sm:space-x-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-800 transition-colors">
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                <FaExternalLinkAlt size={18} className="sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold text-sm sm:text-base">
              {liveUrlText}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NewProjectCard;
