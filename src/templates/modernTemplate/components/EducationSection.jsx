import { memo } from 'react'
import styles from '../ModernTemplate.module.css'

const EducationSection = memo(({ education = [] }) => {
  if (education.length === 0) return null

  return (
    <div className={styles.resumeSection}>
      <div className={styles.resumeSectionTitle}>EDUCATION</div>
      <div id="previewEducation">
        {education.map((edu, index) => (
          <div key={index} className={styles.resumeItem}>
            <div className={styles.resumeItemHeader}>
              <div className={styles.resumeItemTitle}>{edu.school}</div>
              <div className={styles.resumeItemDate}>
                {edu.startDate} - {edu.endDate}
              </div>
            </div>
            <div className={styles.resumeItemSubtitle}>{edu.degree}</div>
            <div className={styles.resumeItemLocation}>{edu.location}</div>
            {edu.gpa && (
              <div className={styles.resumeItemDetail}>GPA: {edu.gpa}</div>
            )}
            {edu.courses && (
              <div className={styles.resumeItemDetail}>
                Courses: {edu.courses}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
})

EducationSection.displayName = 'EducationSection'

export default EducationSection
