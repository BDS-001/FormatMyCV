import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

const EducationLine = ({ edu }) => {
  const parts = []
  if (edu.degree) {
    const date = edu.endDate ? ` (${edu.endDate})` : ''
    parts.push(`${edu.degree}${date}`)
  }
  if (edu.location) parts.push(edu.location)
  return (
    <div className={styles.uniItemSub}>
      {edu.school} — {parts.join(', ')}
    </div>
  )
}

const EducationSection = memo(({ education = [] }) => {
  const items = Array.isArray(education) ? education : []
  if (items.length === 0) return null
  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Education</h3>
      <div>
        {items.map((edu, idx) => (
          <article key={idx} className={styles.uniItem}>
            <EducationLine edu={edu} />
          </article>
        ))}
      </div>
    </section>
  )
})

EducationSection.displayName = 'EducationSection'

export default EducationSection
