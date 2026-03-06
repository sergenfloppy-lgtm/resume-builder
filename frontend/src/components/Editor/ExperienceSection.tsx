import { useResume } from '../../context/ResumeContext';
import type { Experience } from '../../types';
import { generateId } from '../../utils/id';

const ExperienceSection = () => {
  const { resume, updateResume } = useResume();

  const addExperience = () => {
    const newExp: Experience = {
      id: generateId(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    updateResume({ experience: [...resume.experience, newExp] });
  };

  const updateExperience = (id: string, updates: Partial<Experience>) => {
    updateResume({
      experience: resume.experience.map(exp =>
        exp.id === id ? { ...exp, ...updates } : exp
      ),
    });
  };

  const removeExperience = (id: string) => {
    updateResume({
      experience: resume.experience.filter(exp => exp.id !== id),
    });
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Work Experience</h2>
        <button
          onClick={addExperience}
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          + Add Experience
        </button>
      </div>

      <div className="space-y-4">
        {resume.experience.length === 0 ? (
          <p className="text-gray-500 text-sm">No experience added yet. Click "Add Experience" to get started.</p>
        ) : (
          resume.experience.map((exp) => (
            <div key={exp.id} className="border border-gray-300 rounded-md p-4 bg-gray-50">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Position *
                  </label>
                  <input
                    type="text"
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Job Title"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => updateExperience(exp.id, { location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Date
                  </label>
                  <input
                    type="month"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Date
                  </label>
                  <input
                    type="month"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    disabled={exp.current}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="flex items-center text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) => updateExperience(exp.id, { 
                      current: e.target.checked,
                      endDate: e.target.checked ? '' : exp.endDate
                    })}
                    className="mr-2"
                  />
                  Currently working here
                </label>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(exp.id, { description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[100px]"
                  placeholder="• Key responsibility or achievement&#10;• Another achievement with metrics&#10;• Technologies used"
                />
              </div>

              <button
                onClick={() => removeExperience(exp.id)}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
