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
                <div className="skills-container" id="sidebarSkills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-name">{skill}</div>
                            <div className="skill-bar">
                                <div className="skill-level" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}