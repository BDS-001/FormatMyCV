import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ModernTemplate.module.css'

export default function AboutMeSection() {
  const { resumeData } = useResume()

  const summary = useMemo(() => {
    return resumeData.personalInfo.summary || ''
  }, [resumeData.personalInfo.summary])

  return (
    <div className={styles.sidebarSection}>
      <div className={styles.sidebarSectionTitle}>About Me</div>
      <div className={styles.sidebarSectionContent} id="sidebarSummary">
        {summary}
      </div>
    </div>
  )
}
