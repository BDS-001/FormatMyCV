import styles from './JsonModal.module.css'

const JsonModal = ({
  isOpen,
  onConfirm,
  onCancel,
  message,
  title = 'Confirm action',
}) => {
  if (!isOpen) return null

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContent}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
      >
        <div className={styles.modalHeader}>
          <h3 id="modal-title" className={styles.modalTitle}>
            {title}
          </h3>
        </div>

        <p id="modal-desc" className={styles.modalBody}>
          {message}
        </p>

        <div className={styles.modalButtons}>
          <button
            className={`${styles.modalBtn} ${styles.confirmButton}`}
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className={`${styles.modalBtn} ${styles.cancelButton}`}
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default JsonModal
