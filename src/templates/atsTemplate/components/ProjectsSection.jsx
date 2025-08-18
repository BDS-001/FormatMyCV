import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const ProjectsSection = () => {
  const { resumeData } = useResume()

  const projects = useMemo(
    () => resumeData.projects || [],
    [resumeData.projects]
  )

  if (projects.length === 0) return null

  const formatDescription = description => ({
    __html: description.replace(/\n/g, '<br/>'),
  })

  const formatProjectLink = link =>
    link.startsWith('http') ? link : `https://${link}`

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
              className={styles.resumeItemDescription}
              dangerouslySetInnerHTML={formatDescription(project.description)}
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
