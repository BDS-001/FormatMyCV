import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

const SkillsSection = memo(({ skills = [] }) => {
  if (!skills || skills.length === 0) return null

  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Skills</h3>
      <ul className={styles.uniSkillsList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
})

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
