import { useResume } from '../../context/ResumeContext';

const SummarySection = () => {
  const { resume, updateResume } = useResume();

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Professional Summary</h2>
      
      <textarea
        value={resume.summary}
        onChange={(e) => updateResume({ summary: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px]"
        placeholder="A brief overview of your professional background, key skills, and career objectives..."
      />
      
      <div className="mt-2 text-xs text-gray-500">
        {resume.summary.length} characters
      </div>
    </div>
  );
};

export default SummarySection;
