import { memo } from 'react'
import styles from '../AtsTemplate.module.css'

const SummarySection = memo(({ summary }) => {
  if (!summary) return null
  return (
    <section className={styles.uniSection}>
      <h3 className={styles.uniSectionTitle}>Summary</h3>
      <p className={styles.uniText}>{summary}</p>
    </section>
  )
})

SummarySection.displayName = 'SummarySection'

export default SummarySection
