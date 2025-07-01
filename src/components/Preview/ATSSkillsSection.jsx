import { useMemo } from 'react';
import useResume from '../../context/resumeContext';

export default function ATSSkillsSection() {
    const { resumeData } = useResume();
    
    const skills = useMemo(() => {
        return resumeData.skills || [];
    }, [resumeData.skills]);
    
    return (
        <div className="ats-skills-section">
            <ul className="skills-list ats-skills-list" id="atsSkills">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}