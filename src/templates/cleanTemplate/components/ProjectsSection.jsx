import { memo } from 'react'
import styles from '../CleanTemplate.module.css'

const ProjectsSection = memo(({ projects = [] }) => {
  if (!projects || projects.length === 0) return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className={styles.cleanProjectItem}>
          <h3 className={styles.cleanProjectName}>{project.title}</h3>
          {project.description && (
            <p
              className={styles.cleanProjectDescription}
              dangerouslySetInnerHTML={{
                __html: project.description.replace(/\n/g, '<br/>'),
              }}
            />
          )}
        </div>
      ))}
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
