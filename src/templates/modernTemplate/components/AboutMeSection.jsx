import { memo } from 'react'
import styles from '../ModernTemplate.module.css'

const AboutMeSection = memo(({ summary }) => {
  if (!summary) return null

  return (
    <div className={styles.sidebarSection}>
      <div className={styles.sidebarSectionTitle}>About Me</div>
      <div className={styles.sidebarSectionContent} id="sidebarSummary">
        {summary}
      </div>
    </div>
  )
})

AboutMeSection.displayName = 'AboutMeSection'

export default AboutMeSection
