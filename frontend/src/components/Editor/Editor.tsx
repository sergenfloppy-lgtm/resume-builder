import { useResume } from '../../context/ResumeContext';
import ContactSection from './ContactSection';
import SummarySection from './SummarySection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

const Editor = () => {
  const { resume, resetResume } = useResume();

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
        <div className="flex gap-2">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md"
            value={resume.template}
            onChange={(e) => {
              // We'll implement template switching later
            }}
          >
            <option value="ats">ATS-Friendly</option>
            <option value="modern">Modern</option>
            <option value="creative">Creative</option>
          </select>
          <button
            onClick={resetResume}
            className="px-4 py-2 text-sm text-red-600 hover:text-red-700 border border-red-300 rounded-md hover:bg-red-50"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <ContactSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        Auto-saves every 30 seconds
      </div>
    </div>
  );
};

export default Editor;
