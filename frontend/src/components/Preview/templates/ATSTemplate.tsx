import { Resume } from '../../../types/resume';

interface ATSTemplateProps {
  resume: Resume;
}

const ATSTemplate = ({ resume }: ATSTemplateProps) => {
  const formatDate = (date: string) => {
    if (!date) return '';
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="p-8 text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header / Contact */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">
          {resume.contact.fullName || 'Your Name'}
        </h1>
        <div className="text-gray-700 space-x-3">
          {resume.contact.email && <span>{resume.contact.email}</span>}
          {resume.contact.phone && <span>• {resume.contact.phone}</span>}
          {resume.contact.location && <span>• {resume.contact.location}</span>}
        </div>
        <div className="text-gray-700 space-x-3 mt-1">
          {resume.contact.linkedin && <span>LinkedIn: {resume.contact.linkedin}</span>}
          {resume.contact.github && <span>• GitHub: {resume.contact.github}</span>}
          {resume.contact.website && <span>• {resume.contact.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {resume.summary && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-800 mb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-800 whitespace-pre-line">{resume.summary}</p>
        </div>
      )}

      {/* Experience */}
      {resume.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-800 mb-2">
            WORK EXPERIENCE
          </h2>
          {resume.experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">{exp.position || 'Position'}</span>
                  {exp.company && <span> • {exp.company}</span>}
                </div>
                <div className="text-gray-700 text-xs">
                  {exp.startDate && formatDate(exp.startDate)}
                  {' - '}
                  {exp.current ? 'Present' : exp.endDate ? formatDate(exp.endDate) : ''}
                </div>
              </div>
              {exp.location && (
                <div className="text-gray-700 text-xs italic">{exp.location}</div>
              )}
              {exp.description && (
                <div className="mt-1 text-gray-800 whitespace-pre-line">
                  {exp.description}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {resume.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-800 mb-2">
            EDUCATION
          </h2>
          {resume.education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="font-bold">{edu.school || 'School'}</span>
                  {edu.degree && <span> • {edu.degree}</span>}
                  {edu.field && <span> in {edu.field}</span>}
                </div>
                <div className="text-gray-700 text-xs">
                  {edu.startDate && formatDate(edu.startDate)}
                  {edu.endDate && ` - ${formatDate(edu.endDate)}`}
                </div>
              </div>
              <div className="text-gray-700 text-xs">
                {edu.location && <span>{edu.location}</span>}
                {edu.gpa && <span> • GPA: {edu.gpa}</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {resume.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-800 mb-2">
            SKILLS
          </h2>
          {resume.skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{skill.category}:</span>{' '}
              <span className="text-gray-800">{skill.items.join(', ')}</span>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {resume.projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-bold border-b-2 border-gray-800 mb-2">
            PROJECTS
          </h2>
          {resume.projects.map((project) => (
            <div key={project.id} className="mb-3">
              <div className="font-bold">
                {project.name}
                {project.link && (
                  <span className="font-normal text-gray-700"> • {project.link}</span>
                )}
              </div>
              {project.description && (
                <div className="text-gray-800">{project.description}</div>
              )}
              {project.technologies.length > 0 && (
                <div className="text-gray-700 text-xs italic">
                  Technologies: {project.technologies.join(', ')}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ATSTemplate;
