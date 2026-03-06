import type { Resume } from '../../../types';

interface CreativeTemplateProps {
  resume: Resume;
}

const CreativeTemplate = ({ resume }: CreativeTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="p-8" style={{ fontFamily: 'Georgia, serif' }}>
      {/* Header - Bold Gradient */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white p-6 rounded-lg mb-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-2">
          {resume.contact.fullName || 'Your Name'}
        </h1>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {resume.contact.email && <span>✉️ {resume.contact.email}</span>}
          {resume.contact.phone && <span>📞 {resume.contact.phone}</span>}
          {resume.contact.location && <span>📍 {resume.contact.location}</span>}
        </div>
        {(resume.contact.linkedin || resume.contact.github || resume.contact.website) && (
          <div className="flex flex-wrap gap-x-3 mt-2 text-xs">
            {resume.contact.linkedin && <span>LinkedIn: {resume.contact.linkedin}</span>}
            {resume.contact.github && <span>GitHub: {resume.contact.github}</span>}
            {resume.contact.website && <span>Web: {resume.contact.website}</span>}
          </div>
        )}
      </div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded mr-3"></div>
            <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed italic border-l-4 border-purple-300 pl-4 whitespace-pre-line">
            {resume.summary}
          </p>
        </div>
      )}

      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - 2/3 width */}
        <div className="col-span-2">
          {/* Experience */}
          {resume.experience.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
              </div>
              {resume.experience.map((exp, idx) => (
                <div key={exp.id} className="mb-4 relative pl-4">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-3 h-3 bg-pink-500 rounded-full"></div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-bold text-lg text-purple-900">
                          {exp.position || 'Position'}
                        </div>
                        <div className="text-pink-600 font-semibold">
                          {exp.company}
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 text-right bg-white px-2 py-1 rounded">
                        {exp.startDate && formatDate(exp.startDate)}
                        {' - '}
                        {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                      </div>
                    </div>
                    {exp.location && (
                      <div className="text-xs text-gray-600 mb-2">📍 {exp.location}</div>
                    )}
                    {exp.description && (
                      <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                        {exp.description}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {resume.projects.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
              </div>
              {resume.projects.map((project) => (
                <div key={project.id} className="mb-3 bg-gradient-to-r from-purple-50 to-pink-50 p-3 rounded-lg border-l-4 border-pink-400">
                  <div className="font-bold text-purple-900">
                    {project.name}
                    {project.link && (
                      <span className="font-normal text-pink-600 text-xs ml-2">
                        🔗 {project.link}
                      </span>
                    )}
                  </div>
                  {project.description && (
                    <div className="text-sm text-gray-700 mt-1">{project.description}</div>
                  )}
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white px-2 py-1 rounded text-purple-700 border border-purple-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - 1/3 width */}
        <div className="col-span-1">
          {/* Skills */}
          {resume.skills.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded mr-2"></div>
                <h2 className="text-xl font-bold text-gray-900">Skills</h2>
              </div>
              {resume.skills.map((skill, index) => (
                <div key={index} className="mb-3 bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-lg">
                  <div className="font-bold text-purple-900 text-sm mb-2">
                    {skill.category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white px-2 py-1 rounded text-gray-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {resume.education.length > 0 && (
            <div>
              <div className="flex items-center mb-3">
                <div className="w-2 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded mr-2"></div>
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
              </div>
              {resume.education.map((edu) => (
                <div key={edu.id} className="mb-3 bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-lg">
                  <div className="font-bold text-sm text-purple-900">
                    {edu.degree || 'Degree'}
                  </div>
                  <div className="text-xs text-gray-800 font-semibold">{edu.school}</div>
                  {edu.field && (
                    <div className="text-xs text-gray-700 italic">{edu.field}</div>
                  )}
                  <div className="text-xs text-gray-600 mt-1">
                    {edu.startDate && formatDate(edu.startDate)}
                    {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                  </div>
                  {edu.gpa && (
                    <div className="text-xs text-purple-700 font-semibold mt-1">
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreativeTemplate;
