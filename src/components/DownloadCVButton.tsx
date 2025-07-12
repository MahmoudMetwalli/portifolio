"use client";
import React, { useState } from 'react';

const DownloadCVButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-cv');
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Mahmoud_Metwalli_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download error:', error);
      // You could show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
    >
      {isLoading ? 'Generating...' : 'Download CV'}
    </button>
  );
};

export default DownloadCVButton;
