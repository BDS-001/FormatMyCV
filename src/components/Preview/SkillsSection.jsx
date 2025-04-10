import { useMemo } from 'react';
import useResume from '../../context/resumeContext';

export default function SkillsSection() {
    const { resumeData } = useResume();
    
    const skills = useMemo(() => {
        return resumeData.skills || [];
    }, [resumeData.skills]);
    
    return (
        <div className="sidebar-section">
            <div className="sidebar-section-title">Skills</div>
            <div className="sidebar-section-content">
                <ul className={`skills-list ${skills.length > 5 ? 'two-column' : ''}`} id="sidebarSkills">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}