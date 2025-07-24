import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'

const ProjectsSection = () => {
    const { resumeData } = useResume()
    
    const projects = useMemo(() => resumeData.projects || [], [resumeData.projects])
    
    if (projects.length === 0) return null
    
    const formatDescription = (description) => ({
        __html: description.replace(/\n/g, '<br/>')
    })
    
    const formatProjectLink = (link) => 
        link.startsWith('http') ? link : `https://${link}`
    
    return (
        <section className="resume-section">
            <h3 className="resume-section-title">PROJECTS</h3>
            <div>
                {projects.map((project, index) => (
                    <article key={index} className="resume-item">
                        <header className="resume-item-header">
                            <h4 className="resume-item-title">{project.title}</h4>
                            {project.link && (
                                <div className="resume-item-link">
                                    <a 
                                        href={formatProjectLink(project.link)} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        {project.link}
                                    </a>
                                </div>
                            )}
                        </header>
                        <div 
                            className="resume-item-description"
                            dangerouslySetInnerHTML={formatDescription(project.description)}
                        />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection