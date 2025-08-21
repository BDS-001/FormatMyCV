import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const SummarySection = () => {
  const { resumeData } = useResume()

  const summary = useMemo(
    () => resumeData.personalInfo.summary || '',
    [resumeData.personalInfo.summary]
  )

  if (!summary) return null

  const formatSummary = summary => ({
    __html: summary.replace(/\n/g, '<br/>'),
  })

  return (
    <section className={styles.resumeSection}>
      <h3 className={styles.resumeSectionTitle}>SUMMARY</h3>
      <div
        className={styles.resumeItemDescription}
        dangerouslySetInnerHTML={formatSummary(summary)}
      />
    </section>
  )
}

export default SummarySection
