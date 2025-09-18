import { memo, useMemo } from 'react'
import styles from '../AtsTemplate.module.css'

function ensureHttps(url) {
  if (!url) return ''
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
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
    if (data.linkedin)
      items.push(
        `<a href="${ensureHttps(data.linkedin)}" target="_blank" rel="noopener noreferrer">${ensureHttps(
          data.linkedin
        )}</a>`
      )
    if (data.github)
      items.push(
        `<a href="${ensureHttps(data.github)}" target="_blank" rel="noopener noreferrer">${ensureHttps(
          data.github
        )}</a>`
      )
    if (data.website)
      items.push(
        `<a href="${ensureHttps(data.website)}" target="_blank" rel="noopener noreferrer">${ensureHttps(
          data.website
        )}</a>`
      )
    return items.filter(Boolean).join(' | ')
  }, [data])

  return (
    <header className={styles.uniHeader}>
      <h1 className={styles.uniName}>{data.fullName}</h1>
      <div className={styles.uniTitle}>{data.jobTitle}</div>
      <div
        className={styles.uniContact}
        dangerouslySetInnerHTML={{ __html: contactLine }}
      />
    </header>
  )
})

Header.displayName = 'Header'

export default Header
