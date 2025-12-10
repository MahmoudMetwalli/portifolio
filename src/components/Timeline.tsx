"use client";
import { motion } from "framer-motion";

interface Experience {
  title: string;
  company: string;
  duration: string;
  details: string[];
}

interface TimelineProps {
  experiences: Experience[];
}

const Timeline = ({ experiences }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Mobile: Left-aligned line, Desktop: Center line */}
      <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className={`relative mb-8 sm:mb-12 ${
            index % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8 sm:text-left"
          }`} // Added for desktop alignment
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          {/* Mobile Layout */}
          <div className="sm:hidden">
            <div className="ml-12">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold my-1 text-sm">
                  {exp.company}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                  {exp.duration}
                </p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-300 text-sm">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 dark:text-blue-400 mr-2 text-xs">
                        ▪
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="absolute left-4 -translate-x-1/2 top-4 w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full border-2 border-white dark:border-gray-900"></div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:block">
            <div
              className={`flex items-center ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`w-1/2 px-8 ${
                  index % 2 === 0 ? "ml-auto text-left" : "mr-auto text-right"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-bold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    {exp.duration}
                  </p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-left">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 dark:text-blue-400 mr-2 mt-1.5 flex-shrink-0 text-xs">
                          ●
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 top-6 w-5 h-5 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
