import { memo } from 'react'
import styles from '../AtsTemplate.module.css'
import { stripProtocol } from '../../../utils/formatters'

const ProjectsSection = memo(({ projects = [] }) => {
  const items = (projects || []).slice(0, 3)
  if (items.length === 0) return null

  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Projects</h3>
      <div>
        {items.map((p, idx) => (
          <article key={idx} className={styles.uniItem}>
            <div className={styles.uniProjectHeader}>
              <h4 className={styles.uniItemTitle}>{p.title}</h4>
              {p.link && (
                <span className={styles.uniLink}>
                  <a
                    href={p.link.startsWith('http') ? p.link : `//${p.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {stripProtocol(p.link)}
                  </a>
                </span>
              )}
            </div>
            {p.description && (
              <div className={styles.uniItemSub}>{p.description}</div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
