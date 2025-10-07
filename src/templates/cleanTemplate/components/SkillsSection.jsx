import { memo } from 'react'
import styles from '../CleanTemplate.module.css'

const SkillsSection = memo(({ skills = [] }) => {
  if (!skills || skills.length === 0) return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Skills</h2>
      <ul className={styles.cleanSkillsList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
})

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
