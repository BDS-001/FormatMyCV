import { memo } from 'react'
import { stripProtocol } from '../../../utils/formatters'
import styles from '../CleanTemplate.module.css'

const ExperienceSection = memo(({ experience = [] }) => {
  if (!experience || experience.length === 0) return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className={styles.cleanExperienceItem}>
          <div className={styles.cleanJobHeader}>
            <div>
              <h3 className={styles.cleanJobTitle}>{job.position}</h3>
              <p className={styles.cleanJobCompany}>
                {job.company}
                {job.link && (
                  <>
                    {' '}
                    •{' '}
                    <a
                      href={
                        job.link.startsWith('http') ? job.link : `//${job.link}`
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {stripProtocol(job.link)}
                    </a>
                  </>
                )}
              </p>
            </div>
            <div className={styles.cleanJobDates}>
              {job.startDate} - {job.endDate}
            </div>
          </div>
          {job.responsibilities && (
            <div
              className={styles.cleanJobDescription}
              dangerouslySetInnerHTML={{
                __html: job.responsibilities.replace(/\n/g, '<br/>'),
              }}
            />
          )}
        </div>
      ))}
    </section>
  )
})

ExperienceSection.displayName = 'ExperienceSection'

export default ExperienceSection
