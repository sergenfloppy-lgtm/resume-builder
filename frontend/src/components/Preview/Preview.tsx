import { useRef, useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import ATSTemplate from './templates/ATSTemplate';
import ModernTemplate from './templates/ModernTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Preview = () => {
  const { resume } = useResume();
  const previewRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleDownloadPDF = async () => {
    if (!previewRef.current) return;
    
    setIsExporting(true);
    try {
      // Capture the preview as canvas
      const canvas = await html2canvas(previewRef.current, {
        scale: 2, // Higher quality
        useCORS: true,
        logging: false,
      });

      // A4 dimensions in mm
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Use contact name or default filename
      const filename = resume.contact.fullName 
        ? `${resume.contact.fullName.replace(/\s+/g, '_')}_Resume.pdf`
        : 'Resume.pdf';
      
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(resume, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `resume_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-[210mm] mx-auto">
      <div className="mb-4 flex justify-end gap-2">
        <button 
          onClick={handleDownloadPDF}
          disabled={isExporting}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {isExporting ? 'Generating...' : 'Download PDF'}
        </button>
        <button 
          onClick={handleExportJSON}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm"
        >
          Export JSON
        </button>
      </div>

      <div 
        ref={previewRef}
        className="bg-white shadow-lg" 
        style={{ aspectRatio: '210/297' }}
      >
        {resume.template === 'ats' && <ATSTemplate resume={resume} />}
        {resume.template === 'modern' && <ModernTemplate resume={resume} />}
        {resume.template === 'creative' && <CreativeTemplate resume={resume} />}
      </div>
    </div>
  );
};

export default Preview;
