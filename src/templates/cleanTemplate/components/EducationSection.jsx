import { memo } from 'react'
import styles from '../CleanTemplate.module.css'

const EducationSection = memo(({ education = [] }) => {
  if (!education || education.length === 0) return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className={styles.cleanEducationItem}>
          <h3 className={styles.cleanEducationDegree}>{edu.degree}</h3>
          <p className={styles.cleanEducationSchool}>{edu.school}</p>
          <p className={styles.cleanEducationDates}>
            {edu.startDate} - {edu.endDate}
          </p>
        </div>
      ))}
    </section>
  )
})

EducationSection.displayName = 'EducationSection'

export default EducationSection
