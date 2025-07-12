"use client";

import { motion } from "framer-motion";

const SkillBadge = ({ skill }: { skill: string }) => (
  <motion.div
    className="bg-gray-700 text-cyan-300 py-2 px-4 rounded-lg font-medium"
    whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(107, 226, 255, 0.5)" }}
  >
    {skill}
  </motion.div>
);

export default SkillBadge;
