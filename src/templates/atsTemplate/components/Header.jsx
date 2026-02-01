import { memo, useMemo } from 'react'
import styles from '../AtsTemplate.module.css'
import { formatPhone, stripProtocol } from '../../../utils/formatters'

const Header = memo(({ personalInfo }) => {
  const data = useMemo(() => {
    return {
      fullName: personalInfo?.fullName,
      jobTitle: personalInfo?.jobTitle,
      email: personalInfo?.email,
      phone: personalInfo?.phone,
      location: personalInfo?.location,
      linkedin: personalInfo?.linkedin,
      github: personalInfo?.github,
      website: personalInfo?.website,
    }
  }, [personalInfo])

  const contactItems = useMemo(() => {
    const items = []
    if (data.email) items.push(data.email)
    if (data.phone) items.push(formatPhone(data.phone))
    if (data.location) items.push(data.location)
    if (data.linkedin) items.push(`LinkedIn: ${stripProtocol(data.linkedin)}`)
    if (data.github) items.push(`GitHub: ${stripProtocol(data.github)}`)
    if (data.website) items.push(`Portfolio: ${stripProtocol(data.website)}`)
    return items.filter(Boolean)
  }, [data])

  return (
    <header className={styles.uniHeader}>
      <div className={styles.uniNameRow}>
        <h1 className={styles.uniName}>{data.fullName}</h1>
        {data.jobTitle && (
          <>
            <span className={styles.uniSeparator}>|</span>
            <span className={styles.uniTitle}>{data.jobTitle}</span>
          </>
        )}
      </div>
      <div className={styles.uniContact}>
        {contactItems.map((item, idx) => (
          <span key={idx} className={styles.uniContactItem}>
            {idx > 0 && ' | '}
            {item}
          </span>
        ))}
      </div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
