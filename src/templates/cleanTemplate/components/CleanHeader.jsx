import { memo } from 'react'
import styles from '../CleanTemplate.module.css'
import { formatPhone, stripProtocol } from '../../../utils/formatters'

const CleanHeader = memo(({ personalInfo }) => {
  if (!personalInfo) return null

  const { fullName, jobTitle, email, phone, location, linkedin, website } =
    personalInfo

  return (
    <header className={styles.cleanHeader}>
      {fullName && <h1 className={styles.cleanName}>{fullName}</h1>}
      {jobTitle && <p className={styles.cleanTitle}>{jobTitle}</p>}

      <div className={styles.cleanContact}>
        {email && <div className={styles.cleanContactItem}>{email}</div>}
        {phone && (
          <div className={styles.cleanContactItem}>{formatPhone(phone)}</div>
        )}
        {location && <div className={styles.cleanContactItem}>{location}</div>}
        {linkedin && (
          <div className={styles.cleanContactItem}>
            {stripProtocol(linkedin)}
          </div>
        )}
        {website && (
          <div className={styles.cleanContactItem}>
            {stripProtocol(website)}
          </div>
        )}
      </div>
    </header>
  )
})

CleanHeader.displayName = 'CleanHeader'

export default CleanHeader
