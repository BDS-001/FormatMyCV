import { memo } from 'react'
import styles from '../ModernTemplate.module.css'

const ResumeHeader = memo(({ personalInfo }) => {
  return (
    <div className={styles.resumeHeader}>
      <div className={styles.resumeName} id="previewName">
        {personalInfo?.fullName}
      </div>
      <div className={styles.resumeTitle} id="previewTitle">
        {personalInfo?.jobTitle}
      </div>
    </div>
  )
})

ResumeHeader.displayName = 'ResumeHeader'

export default ResumeHeader
