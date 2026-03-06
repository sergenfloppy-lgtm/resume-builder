import { useResume } from '../../context/ResumeContext';
import type { Skill } from '../../types';

const SkillsSection = () => {
  const { resume, updateResume } = useResume();

  const addSkillCategory = () => {
    const newSkill: Skill = {
      category: '',
      items: [],
    };
    updateResume({ skills: [...resume.skills, newSkill] });
  };

  const updateSkill = (index: number, updates: Partial<Skill>) => {
    const newSkills = [...resume.skills];
    newSkills[index] = { ...newSkills[index], ...updates };
    updateResume({ skills: newSkills });
  };

  const removeSkill = (index: number) => {
    updateResume({
      skills: resume.skills.filter((_, i) => i !== index),
    });
  };

  const handleItemsChange = (index: number, value: string) => {
    // Split by comma and trim
    const items = value.split(',').map(item => item.trim()).filter(item => item);
    updateSkill(index, { items });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
        <button
          onClick={addSkillCategory}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          + Add Category
        </button>
      </div>

      <div className="space-y-4">
        {resume.skills.length === 0 ? (
          <p className="text-gray-500 text-sm">No skills added yet. Click "Add Category" to get started.</p>
        ) : (
          resume.skills.map((skill, index) => (
            <div key={index} className="border border-gray-300 rounded-md p-4 bg-gray-50">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <input
                  type="text"
                  value={skill.category}
                  onChange={(e) => updateSkill(index, { category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Programming Languages, Tools, Frameworks"
                />
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills (comma-separated) *
                </label>
                <input
                  type="text"
                  value={skill.items.join(', ')}
                  onChange={(e) => handleItemsChange(index, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="JavaScript, Python, React, Node.js"
                />
                <div className="mt-1 text-xs text-gray-500">
                  {skill.items.length} skill{skill.items.length !== 1 ? 's' : ''}
                </div>
              </div>

              <button
                onClick={() => removeSkill(index)}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove Category
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SkillsSection;
