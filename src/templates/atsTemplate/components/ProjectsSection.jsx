import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

function ensureHttps(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
}

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
                    href={ensureHttps(p.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {ensureHttps(p.link)}
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
