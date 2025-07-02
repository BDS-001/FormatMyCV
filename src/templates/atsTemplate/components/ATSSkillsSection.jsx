import { useMemo } from 'react';
import useResume from '../../../context/resumeContext';

export default function ATSSkillsSection() {
    const { resumeData } = useResume();
    
    const skills = useMemo(() => {
        return resumeData.skills || [];
    }, [resumeData.skills]);
    
    // Hide the section if there are no skills
    if (skills.length === 0) {
        return null;
    }
    
    return (
        <div className="ats-section">
            <div className="ats-section-title">Skills</div>
            <div className="ats-skills-section">
                <ul className="skills-list ats-skills-list" id="atsSkills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}