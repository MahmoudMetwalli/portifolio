"use client";

import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const CertificationCard = ({ title, issuer, credentialUrl }: { title: string; issuer: string; credentialUrl: string }) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 mr-4 text-2xl">
        <FaCertificate />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-400">{issuer}</p>
      </div>
    </div>
    <a
      href={credentialUrl}
      className="text-yellow-400 hover:underline mt-2 inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Credential
    </a>
  </motion.div>
);

export default CertificationCard;
