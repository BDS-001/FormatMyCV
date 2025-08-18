import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ModernTemplate.module.css'

export default function ResumeHeader() {
  const { resumeData } = useResume()

  const headerData = useMemo(() => {
    return {
      fullName: resumeData.personalInfo.fullName,
      jobTitle: resumeData.personalInfo.jobTitle,
    }
  }, [resumeData.personalInfo.fullName, resumeData.personalInfo.jobTitle])

  return (
    <div className={styles.resumeHeader}>
      <div className={styles.resumeName} id="previewName">
        {headerData.fullName}
      </div>
      <div className={styles.resumeTitle} id="previewTitle">
        {headerData.jobTitle}
      </div>
    </div>
  )
}
