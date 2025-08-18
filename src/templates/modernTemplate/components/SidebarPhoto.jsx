import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ModernTemplate.module.css'

export default function SidebarPhoto() {
  const { resumeData } = useResume()

  const initials = useMemo(() => {
    const name = resumeData.personalInfo.fullName || ''
    const nameParts = name.split(' ')
    if (nameParts.length >= 2) {
      return `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
    }
    return name.substring(0, 2).toUpperCase()
  }, [resumeData.personalInfo.fullName])

  return (
    <div className={styles.sidebarPhoto}>
      <div className={styles.sidebarPhotoPlaceholder}>{initials}</div>
    </div>
  )
}
