import { memo } from 'react'
import styles from '../ATSTemplate.module.css'

const ATSSkillsSection = memo(({ skills = [] }) => {
  if (skills.length === 0) return null

  return (
    <section className={styles.resumeSection}>
      <h3 className={styles.resumeSectionTitle}>SKILLS</h3>
      <div className={styles.atsSkillsSection}>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
})

ATSSkillsSection.displayName = 'ATSSkillsSection'

export default ATSSkillsSection
