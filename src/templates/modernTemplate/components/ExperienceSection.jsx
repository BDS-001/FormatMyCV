import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ModernTemplate.module.css'

export default function ExperienceSection() {
  const { resumeData } = useResume()

  const experience = useMemo(() => {
    return resumeData.experience || []
  }, [resumeData.experience])

  // Hide the section if there is no experience
  if (experience.length === 0) {
    return null
  }

  return (
    <div className={styles.resumeSection}>
      <div className={styles.resumeSectionTitle}>EXPERIENCE</div>
      <div id="previewExperience">
        {experience.map((exp, index) => (
          <div key={index} className={styles.resumeItem}>
            <div className={styles.resumeItemHeader}>
              <div className={styles.resumeItemTitle}>{exp.position}</div>
              <div className={styles.resumeItemDate}>
                {exp.startDate} - {exp.endDate}
              </div>
            </div>
            <div className={styles.resumeItemSubtitle}>
              {exp.company} | {exp.location}
            </div>
            <div
              className={styles.resumeItemDescription}
              dangerouslySetInnerHTML={{
                __html: exp.responsibilities.replace(/\n/g, '<br/>'),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
