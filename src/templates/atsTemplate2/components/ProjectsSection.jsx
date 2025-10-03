import { memo } from 'react'
import styles from '../ATSTemplate.module.css'
import { stripProtocol } from '../../../utils/formatters'

const ProjectsSection = memo(({ projects = [] }) => {
  if (projects.length === 0) return null

  const formatDescription = description => ({
    __html: description.replace(/\n/g, '<br/>'),
  })

  const hrefFor = link => (link.startsWith('http') ? link : `//${link}`)

  return (
    <section className={styles.resumeSection}>
      <h3 className={styles.resumeSectionTitle}>PROJECTS</h3>
      <div>
        {projects.map((project, index) => (
          <article key={index} className={styles.resumeItem}>
            <header className={styles.resumeItemHeader}>
              <h4 className={styles.resumeItemTitle}>{project.title}</h4>
              {project.link && (
                <div className={styles.resumeItemLink}>
                  <a
                    href={hrefFor(project.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {stripProtocol(project.link)}
                  </a>
                </div>
              )}
            </header>
            <div
              className={styles.resumeItemDescription}
              dangerouslySetInnerHTML={formatDescription(project.description)}
            />
          </article>
        ))}
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
