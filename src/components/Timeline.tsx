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
      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="relative mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                <p className="text-blue-600 font-semibold my-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-3">{exp.duration}</p>
                <ul className="space-y-1 text-gray-600 text-left">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">▪</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
