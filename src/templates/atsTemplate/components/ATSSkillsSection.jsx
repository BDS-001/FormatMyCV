import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'

const ATSSkillsSection = () => {
    const { resumeData } = useResume()
    
    const skills = useMemo(() => resumeData.skills || [], [resumeData.skills])
    
    if (skills.length === 0) return null
    
    return (
        <section className="ats-section">
            <h3 className="ats-section-title">Skills</h3>
            <div className="ats-skills-section">
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ATSSkillsSection