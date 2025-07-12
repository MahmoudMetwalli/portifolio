"use client";
import { motion } from "framer-motion";

interface NewSkillBadgeProps {
  skill: string;
  category: string;
}

const categoryColors: { [key: string]: string } = {
  language: "bg-blue-100 text-blue-800",
  frontend: "bg-green-100 text-green-800",
  backend: "bg-purple-100 text-purple-800",
  devops: "bg-orange-100 text-orange-800",
};

const NewSkillBadge = ({ skill, category }: NewSkillBadgeProps) => {
  const colorClass = categoryColors[category] || "bg-gray-100 text-gray-800";
  return (
    <motion.div
      className={`px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-center text-sm sm:text-base ${colorClass}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {skill}
    </motion.div>
  );
};

export default NewSkillBadge;
