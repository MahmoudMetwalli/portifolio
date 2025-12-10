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

const NewProjectCard = ({
  title,
  description,
  details,
  liveUrl,
  githubUrl,
  liveUrlText = "Live Demo",
  featured = false,
}: NewProjectCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {featured && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full font-semibold">
              Featured
            </span>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <ul className="space-y-2 mb-6">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-center text-gray-500 dark:text-gray-400 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mr-2" />
              {detail}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub />
            <span>Code</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors ml-auto"
            >
              <FaExternalLinkAlt />
              <span>{liveUrlText || "Live Demo"}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default NewProjectCard;
