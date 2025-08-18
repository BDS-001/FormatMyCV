import useResume from '../../context/resumeContext'
import { useMemo } from 'react'
import styles from './Summary.module.css'

export default function Summary() {
  const { resumeData, setResumeData } = useResume()
  const personalInfo = useMemo(() => {
    return resumeData.personalInfo
  }, [resumeData.personalInfo])

  const handleUpdate = value => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        summary: value,
      },
    })
  }

  return (
    <div className={styles.formSection}>
      <div className={styles.formGroup}>
        <label htmlFor="summary">
          Brief summary of your professional background
        </label>
        <textarea
          id="summary"
          placeholder="e.g. Experienced software engineer with 5+ years in web development..."
          value={personalInfo.summary || ''}
          onChange={e => handleUpdate(e.target.value)}
        />
      </div>
    </div>
  )
}
