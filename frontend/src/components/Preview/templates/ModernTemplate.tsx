import type { Resume } from '../../../types';

interface ModernTemplateProps {
  resume: Resume;
}

const ModernTemplate = ({ resume }: ModernTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="flex h-full" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Left Sidebar - Dark Blue */}
      <div className="w-1/3 bg-blue-900 text-white p-6">
        {/* Contact */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">
            {resume.contact.fullName || 'Your Name'}
          </h1>
          <div className="h-1 w-16 bg-blue-400 mb-4"></div>
          
          <div className="space-y-2 text-sm">
            {resume.contact.email && (
              <div className="break-words">{resume.contact.email}</div>
            )}
            {resume.contact.phone && <div>{resume.contact.phone}</div>}
            {resume.contact.location && <div>{resume.contact.location}</div>}
          </div>

          {(resume.contact.linkedin || resume.contact.github || resume.contact.website) && (
            <div className="mt-4 space-y-1 text-xs">
              {resume.contact.linkedin && (
                <div className="break-words">🔗 {resume.contact.linkedin}</div>
              )}
              {resume.contact.github && (
                <div className="break-words">💻 {resume.contact.github}</div>
              )}
              {resume.contact.website && (
                <div className="break-words">🌐 {resume.contact.website}</div>
              )}
            </div>
          )}
        </div>

        {/* Skills */}
        {resume.skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2 border-b border-blue-400 pb-1">
              SKILLS
            </h2>
            {resume.skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <div className="font-semibold text-blue-200 text-sm mb-1">
                  {skill.category}
                </div>
                <div className="text-xs leading-relaxed">
                  {skill.items.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {resume.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-2 border-b border-blue-400 pb-1">
              EDUCATION
            </h2>
            {resume.education.map((edu) => (
              <div key={edu.id} className="mb-3 text-xs">
                <div className="font-bold text-sm">{edu.degree || 'Degree'}</div>
                <div className="text-blue-200">{edu.school}</div>
                {edu.field && <div className="italic">{edu.field}</div>}
                <div className="text-blue-300 mt-1">
                  {edu.startDate && formatDate(edu.startDate)}
                  {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                </div>
                {edu.gpa && (
                  <div className="text-blue-200 mt-1">GPA: {edu.gpa}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Content Area - White */}
      <div className="w-2/3 p-6 overflow-y-auto">
        {/* Summary */}
        {resume.summary && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2 border-b-2 border-blue-900 pb-1">
              PROFILE
            </h2>
            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {resume.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {resume.experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">
              EXPERIENCE
            </h2>
            {resume.experience.map((exp) => (
              <div key={exp.id} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <div className="font-bold text-base text-gray-900">
                      {exp.position || 'Position'}
                    </div>
                    <div className="text-blue-700 font-semibold text-sm">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-xs text-gray-600 text-right">
                    {exp.startDate && formatDate(exp.startDate)}
                    {' - '}
                    {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                    {exp.location && <div>{exp.location}</div>}
                  </div>
                </div>
                {exp.description && (
                  <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line mt-2">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {resume.projects.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">
              PROJECTS
            </h2>
            {resume.projects.map((project) => (
              <div key={project.id} className="mb-3">
                <div className="font-bold text-gray-900 text-sm">
                  {project.name}
                  {project.link && (
                    <span className="font-normal text-blue-600 text-xs ml-2">
                      {project.link}
                    </span>
                  )}
                </div>
                {project.description && (
                  <div className="text-sm text-gray-700 mt-1">{project.description}</div>
                )}
                {project.technologies.length > 0 && (
                  <div className="text-xs text-gray-600 italic mt-1">
                    {project.technologies.join(' • ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModernTemplate;
