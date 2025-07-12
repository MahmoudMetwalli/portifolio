"use client";
import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadCVButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const generatePDFClientSide = async () => {
    try {
      // Check if we're on the CV page, if not navigate there first
      const isOnCVPage = window.location.pathname === '/cv';
      if (!isOnCVPage) {
        window.location.href = '/cv';
        return;
      }

      const element = document.body;
      const canvas = await html2canvas(element, {
        useCORS: true,
        allowTaint: true,
        background: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Mahmoud_Metwalli_CV.pdf');
    } catch (error) {
      console.error('Client-side PDF generation error:', error);
      throw error;
    }
  };

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      // Try server-side generation first
      console.log('Attempting server-side PDF generation...');
      const response = await fetch('/api/generate-cv');
      
      if (!response.ok) {
        throw new Error(`Server returned ${response.status}: ${response.statusText}`);
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
      
      console.log('Server-side PDF generation successful');
    } catch (error) {
      console.error('Server-side PDF generation failed:', error);
      console.log('Falling back to client-side generation...');
      
      try {
        await generatePDFClientSide();
        console.log('Client-side PDF generation successful');
      } catch (clientError) {
        console.error('Both server and client-side PDF generation failed:', clientError);
        alert('PDF generation failed. Please try again or contact support.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="bg-blue-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:bg-gray-400 disabled:cursor-not-allowed w-full sm:w-auto text-center"
    >
      {isLoading ? 'Generating...' : 'Download CV'}
    </button>
  );
};

export default DownloadCVButton;
