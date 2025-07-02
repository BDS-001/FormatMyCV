import { useMemo } from 'react';
import useResume from '../../../context/resumeContext';

export default function ExperienceSection() {
    const { resumeData } = useResume();
    
    const experience = useMemo(() => {
        return resumeData.experience || [];
    }, [resumeData.experience]);
    
    // Hide the section if there is no experience
    if (experience.length === 0) {
        return null;
    }
    
    return (
        <div className="resume-section">
            <div className="resume-section-title">EXPERIENCE</div>
            <div id="previewExperience">
                {experience.map((exp, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <div className="resume-item-title">{exp.position}</div>
                            <div className="resume-item-date">{exp.startDate} - {exp.endDate}</div>
                        </div>
                        <div className="resume-item-subtitle">{exp.company} | {exp.location}</div>
                        <div className="resume-item-description" 
                             dangerouslySetInnerHTML={{ __html: exp.responsibilities.replace(/\n/g, '<br/>') }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}