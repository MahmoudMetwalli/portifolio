"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const Section = ({ children, title, id }: { children: ReactNode; title: string; id?: string }) => (
  <motion.section
    id={id}
    className="mb-16 w-full"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-cyan-400">{title}</h2>
    {children}
  </motion.section>
);

export default Section;
