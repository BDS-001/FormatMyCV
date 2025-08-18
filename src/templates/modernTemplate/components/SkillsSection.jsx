import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ModernTemplate.module.css'

export default function SkillsSection() {
  const { resumeData } = useResume()

  const skills = useMemo(() => {
    return resumeData.skills || []
  }, [resumeData.skills])

  // Hide the section if there are no skills
  if (skills.length === 0) {
    return null
  }

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
}
