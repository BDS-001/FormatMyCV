import { useMemo } from 'react';
import useResume from '../../context/resumeContext';

export default function ProjectsSection() {
    const { resumeData } = useResume();
    
    const projects = useMemo(() => {
        return resumeData.projects || [];
    }, [resumeData.projects]);
    
    // Hide the section if there are no projects
    if (projects.length === 0) {
        return null;
    }
    
    return (
        <div className="resume-section" id="projectsSection">
            <div className="resume-section-title">PROJECTS</div>
            <div id="previewProjects">
                {projects.map((project, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <div className="resume-item-title">{project.title}</div>
                            {project.link && (
                                <div className="resume-item-link">
                                    <a href={project.link.startsWith('http') ? project.link : `https://${project.link}`} 
                                       target="_blank" 
                                       rel="noopener noreferrer">
                                        {project.link}
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="resume-item-description" 
                             dangerouslySetInnerHTML={{ __html: project.description.replace(/\n/g, '<br/>') }}>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}