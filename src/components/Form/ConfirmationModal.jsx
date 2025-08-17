import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <p>{message}</p>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel} className={styles.cancelButton}>No</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;