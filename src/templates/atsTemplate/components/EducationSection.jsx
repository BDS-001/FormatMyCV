import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

const EducationSection = memo(({ education = [] }) => {
  const items = Array.isArray(education) ? education : []
  if (items.length === 0) return null

  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Education</h3>
      <div>
        {items.map((edu, idx) => {
          const dateRange =
            edu.startDate && edu.endDate
              ? `${edu.startDate} – ${edu.endDate}`
              : edu.startDate || edu.endDate || ''

          return (
            <article key={idx} className={styles.uniItem}>
              <div className={styles.uniItemHeader}>
                <h4 className={styles.uniItemTitle}>{edu.degree}</h4>
                {dateRange && (
                  <div className={styles.uniItemMeta}>{dateRange}</div>
                )}
              </div>
              {(edu.school || edu.location || edu.gpa) && (
                <div className={styles.uniItemSub}>
                  {edu.school}
                  {edu.location ? ` — ${edu.location}` : ''}
                  {edu.gpa ? ` • GPA: ${edu.gpa}` : ''}
                </div>
              )}
              {edu.courses && (
                <div className={styles.uniItemSub}>
                  Relevant coursework: {edu.courses}
                </div>
              )}
            </article>
          )
        })}
      </div>
    </section>
  )
})

EducationSection.displayName = 'EducationSection'

export default EducationSection
