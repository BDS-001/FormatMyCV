import styles from './CutoffIndicator.module.css'

export default function CutoffIndicator() {
  return (
    <div className={styles.cutoffIndicator}>
      <div className={styles.cutoffLine}></div>
      <div className={styles.cutoffLabel}>End of page</div>
    </div>
  )
}
