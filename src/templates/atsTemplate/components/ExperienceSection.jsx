import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'

const ExperienceSection = () => {
    const { resumeData } = useResume()
    
    const experience = useMemo(() => resumeData.experience || [], [resumeData.experience])
    
    if (experience.length === 0) return null
    
    const formatResponsibilities = (responsibilities) => ({
        __html: responsibilities.replace(/\n/g, '<br/>')
    })
    
    return (
        <section className="resume-section">
            <h3 className="resume-section-title">EXPERIENCE</h3>
            <div>
                {experience.map((exp, index) => (
                    <article key={index} className="resume-item">
                        <header className="resume-item-header">
                            <h4 className="resume-item-title">{exp.position}</h4>
                            <time className="resume-item-date">{exp.startDate} - {exp.endDate}</time>
                        </header>
                        <div className="resume-item-subtitle">{exp.company} | {exp.location}</div>
                        <div 
                            className="resume-item-description"
                            dangerouslySetInnerHTML={formatResponsibilities(exp.responsibilities)}
                        />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection