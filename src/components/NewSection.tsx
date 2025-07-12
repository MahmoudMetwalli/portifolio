"use client";
import { motion } from "framer-motion";

interface NewSectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
  bgColor?: string;
}

const NewSection = ({ title, children, id, bgColor = "bg-white" }: NewSectionProps) => {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${bgColor}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-10 lg:mb-12">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default NewSection;
