import { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import type { Resume } from '../../types';
import ContactSection from './ContactSection';
import SummarySection from './SummarySection';
import ExperienceSection from './ExperienceSection';
import EducationSection from './EducationSection';
import SkillsSection from './SkillsSection';

const Editor = () => {
  const { resume, resetResume, updateResume } = useResume();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportJSON = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target?.result as string) as Resume;
        // Validate basic structure
        if (imported.contact && imported.experience && imported.education) {
          updateResume(imported);
          alert('Resume imported successfully!');
        } else {
          alert('Invalid resume file format.');
        }
      } catch (error) {
        console.error('Error importing JSON:', error);
        alert('Failed to import resume. Make sure it\'s a valid JSON file.');
      }
    };
    reader.readAsText(file);
    
    // Reset input so same file can be imported again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
        <div className="flex gap-2">
          <select 
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            value={resume.template}
            onChange={(e) => {
              updateResume({ template: e.target.value as 'ats' | 'modern' | 'creative' });
            }}
          >
            <option value="ats">ATS-Friendly</option>
            <option value="modern">Modern</option>
            <option value="creative">Creative</option>
          </select>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Import JSON
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleImportJSON}
            className="hidden"
          />
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
