import { memo } from 'react'
import styles from '../CleanTemplate.module.css'

const SkillsSection = memo(({ skills = [] }) => {
  if (!skills || skills.length === 0) return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Skills</h2>
      <div className={styles.cleanSkillsGrid}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.cleanSkillTag}>
            {skill}
            {index < skills.length - 1 ? ' • ' : ''}
          </span>
        ))}
      </div>
    </section>
  )
})

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
