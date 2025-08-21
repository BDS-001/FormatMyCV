import { memo } from 'react'
import styles from '../ModernTemplate.module.css'

const ProjectsSection = memo(({ projects = [] }) => {
  if (projects.length === 0) return null

  return (
    <div className={styles.resumeSection} id="projectsSection">
      <div className={styles.resumeSectionTitle}>PROJECTS</div>
      <div id="previewProjects">
        {projects.map((project, index) => (
          <div key={index} className={styles.resumeItem}>
            <div className={styles.resumeItemHeader}>
              <div className={styles.resumeItemTitle}>{project.title}</div>
              {project.link && (
                <div className={styles.resumeItemLink}>
                  <a
                    href={
                      project.link.startsWith('http')
                        ? project.link
                        : `https://${project.link}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.link}
                  </a>
                </div>
              )}
            </div>
            <div
              className={styles.resumeItemDescription}
              dangerouslySetInnerHTML={{
                __html: project.description.replace(/\n/g, '<br/>'),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
