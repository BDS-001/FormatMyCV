import { memo } from 'react'
import styles from '../ModernTemplate.module.css'

const SkillsSection = memo(({ skills = [] }) => {
  if (skills.length === 0) return null

  return (
    <div className={styles.sidebarSection}>
      <div className={styles.sidebarSectionTitle}>Skills</div>
      <div className={styles.sidebarSectionContent}>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
})

SkillsSection.displayName = 'SkillsSection'

export default SkillsSection
