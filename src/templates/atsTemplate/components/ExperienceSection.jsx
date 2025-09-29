import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

function parseBullets(text = '') {
  return text
    .split('\n')
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.replace(/^•\s*/, ''))
}

const ExperienceSection = memo(({ experience = [] }) => {
  const items = Array.isArray(experience) ? experience : []
  if (items.length === 0) return null

  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Experience</h3>
      <div>
        {items.map((exp, idx) => {
          const bullets = parseBullets(exp.responsibilities).slice(0, 3)
          return (
            <article key={idx} className={styles.uniItem}>
              <div className={styles.uniItemHeader}>
                <h4 className={styles.uniItemTitle}>{exp.position}</h4>
                <div className={styles.uniItemMeta}>
                  {exp.startDate && exp.endDate
                    ? `${exp.startDate} – ${exp.endDate}`
                    : exp.startDate || exp.endDate || ''}
                </div>
              </div>
              <div className={styles.uniItemSub}>
                {exp.company} — {exp.location}
              </div>
              {bullets.length > 0 && (
                <ul className={styles.uniBulletList}>
                  {bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection
