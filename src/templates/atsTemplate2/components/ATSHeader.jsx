import { useMemo, memo } from 'react'
import styles from '../ATSTemplate.module.css'

const ATSHeader = memo(({ personalInfo }) => {
  const headerData = useMemo(() => {
    return {
      fullName: personalInfo?.fullName,
      jobTitle: personalInfo?.jobTitle,
      email: personalInfo?.email,
      phone: personalInfo?.phone,
      location: personalInfo?.location,
      linkedin: personalInfo?.linkedin,
      website: personalInfo?.website,
      github: personalInfo?.github,
    }
  }, [personalInfo])

  const contactItems = useMemo(() => {
    const items = [
      headerData.email,
      headerData.phone,
      headerData.location,
      headerData.linkedin && `LinkedIn: ${headerData.linkedin}`,
      headerData.github && `GitHub: ${headerData.github}`,
      headerData.website && `Portfolio: ${headerData.website}`,
    ]
    return items.filter(Boolean).join(' | ')
  }, [headerData])

  return (
    <header className={styles.atsHeader}>
      <div className={styles.atsNameTitle}>
        <h1 className={styles.atsName}>{headerData.fullName}</h1>
        <h2 className={styles.atsTitle}>{headerData.jobTitle}</h2>
      </div>
      <div className={styles.atsContactInfo}>{contactItems}</div>
    </header>
  )
})

ATSHeader.displayName = 'ATSHeader'

export default ATSHeader
