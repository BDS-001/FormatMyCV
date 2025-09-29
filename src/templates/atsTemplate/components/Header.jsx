import { memo, useMemo } from 'react'
import styles from '../AtsTemplate.module.css'

function removeProtocol(url) {
  if (!url) return ''
  return url.replace(/^https?:\/\//, '')
}

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

  const contactLine = useMemo(() => {
    const items = []
    if (data.email) items.push(data.email)
    if (data.phone) items.push(data.phone)
    if (data.location) items.push(data.location)
    if (data.linkedin) items.push(`LinkedIn: ${removeProtocol(data.linkedin)}`)
    if (data.github) items.push(`GitHub: ${removeProtocol(data.github)}`)
    if (data.website) items.push(`Portfolio: ${removeProtocol(data.website)}`)
    return items.filter(Boolean).join(' | ')
  }, [data])

  return (
    <header className={styles.uniHeader}>
      <h1 className={styles.uniName}>{data.fullName}</h1>
      <div className={styles.uniTitle}>{data.jobTitle}</div>
      <div className={styles.uniContact}>{contactLine}</div>
    </header>
  )
})

Header.displayName = 'Header'

export default Header
