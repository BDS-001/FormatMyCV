import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'

const EducationSection = () => {
    const { resumeData } = useResume()
    
    const education = useMemo(() => resumeData.education || [], [resumeData.education])
    
    if (education.length === 0) return null
    
    return (
        <section className="resume-section">
            <h3 className="resume-section-title">EDUCATION</h3>
            <div>
                {education.map((edu, index) => (
                    <article key={index} className="resume-item">
                        <header className="resume-item-header">
                            <h4 className="resume-item-title">{edu.school}</h4>
                            <time className="resume-item-date">{edu.startDate} - {edu.endDate}</time>
                        </header>
                        <div className="resume-item-subtitle">{edu.degree}</div>
                        <div className="resume-item-location">{edu.location}</div>
                        {edu.gpa && <div className="resume-item-detail">GPA: {edu.gpa}</div>}
                        {edu.courses && <div className="resume-item-detail">Courses: {edu.courses}</div>}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default EducationSection