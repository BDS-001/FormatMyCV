import { memo } from 'react'
import styles from '../CleanTemplate.module.css'

const SummarySection = memo(({ summary }) => {
  if (!summary || summary.trim() === '') return null

  return (
    <section className={styles.cleanSection}>
      <h2 className={styles.cleanSectionTitle}>Summary</h2>
      <div className={styles.cleanSummary}>{summary}</div>
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
