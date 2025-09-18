import { memo } from 'react'
import styles from '../ATSTemplate.module.css'

const SummarySection = memo(({ summary }) => {
  if (!summary) return null

  return (
    <section className={styles.resumeSection}>
      <h3 className={styles.resumeSectionTitle}>SUMMARY</h3>
      <div className={styles.resumeItemDescription}>{summary}</div>
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
