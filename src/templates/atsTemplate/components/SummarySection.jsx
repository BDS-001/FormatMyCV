import { useMemo, memo } from 'react'
import styles from '../ATSTemplate.module.css'

const SummarySection = memo(({ summary }) => {
  if (!summary) return null

  const formatSummary = useMemo(
    () => ({
      __html: summary.replace(/\n/g, '<br/>'),
    }),
    [summary]
  )

  return (
    <section className={styles.resumeSection}>
      <h3 className={styles.resumeSectionTitle}>SUMMARY</h3>
      <div
        className={styles.resumeItemDescription}
        dangerouslySetInnerHTML={formatSummary}
      />
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
