import { useResume } from '../../context/ResumeContext';
import ATSTemplate from './templates/ATSTemplate';

const Preview = () => {
  const { resume } = useResume();

  return (
    <div className="max-w-[210mm] mx-auto">
      <div className="mb-4 flex justify-end gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
          Download PDF
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
          Export JSON
        </button>
      </div>

      <div className="bg-white shadow-lg" style={{ aspectRatio: '210/297' }}>
        {resume.template === 'ats' && <ATSTemplate resume={resume} />}
        {resume.template === 'modern' && (
          <div className="p-8 text-gray-500">Modern template coming soon...</div>
        )}
        {resume.template === 'creative' && (
          <div className="p-8 text-gray-500">Creative template coming soon...</div>
        )}
      </div>
    </div>
  );
};

export default Preview;
