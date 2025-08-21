import { useMemo, memo } from 'react'
import styles from '../ModernTemplate.module.css'

const SidebarPhoto = memo(({ personalInfo }) => {
  const initials = useMemo(() => {
    const name = personalInfo?.fullName || ''
    const nameParts = name.split(' ')
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
    }
    return name.substring(0, 2).toUpperCase()
  }, [personalInfo?.fullName])

  return (
    <div className={styles.sidebarPhoto}>
      <div className={styles.sidebarPhotoPlaceholder}>{initials}</div>
    </div>
  )
})

SidebarPhoto.displayName = 'SidebarPhoto'

export default SidebarPhoto
