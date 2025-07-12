"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, details, liveUrl, githubUrl, liveUrlText }: { title: string; description: string; details: string[]; liveUrl?: string; githubUrl?: string; liveUrlText?: string }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col h-full"
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-gray-300 mb-2">{description}</p>
    <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1 flex-grow">
      {details.map((detail, i) => <li key={i}>{detail}</li>)}
    </ul>
    <div className="mt-4 space-x-4">
      {liveUrl && (
        <a
          href={liveUrl}
          className="text-blue-400 hover:underline inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt className="mr-2" /> {liveUrlText || "Live Demo"}
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          className="text-blue-400 hover:underline inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
