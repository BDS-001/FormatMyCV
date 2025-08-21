import { useRef, useContext, useState } from 'react'
import styles from './JsonModal.module.css'
import { resumeContext } from '../../context/resumeContext'
import { useToast } from '../../provider/toastProvider'

const JsonModal = ({ isOpen, onCancel }) => {
  const {
    exportResumeJson,
    importResumeJson,
    copyResumeToClipbaord,
    uploadJsonString,
  } = useContext(resumeContext)
  const { showToast } = useToast()
  const fileInputRef = useRef(null)
  const [jsonText, setJsonText] = useState('')

  const handlePasteJson = () => {
    if (!jsonText.trim()) {
      showToast('Please enter JSON data in the textarea', 'error')
      return
    }
    uploadJsonString(jsonText)
    setJsonText('')
  }

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
            JSON Settings
          </h3>
          <button
            className={styles.closeButton}
            onClick={onCancel}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          <textarea
            value={jsonText}
            onChange={e => setJsonText(e.target.value)}
            placeholder="Paste your JSON data here..."
            rows={8}
          />
          <button className="btn ghost" onClick={handlePasteJson}>
            Import from Text
          </button>
        </div>

        <div className={styles.modalButtons}>
          <button className="btn brand" onClick={exportResumeJson}>
            Export Resume JSON
          </button>
          <button
            className="btn brand"
            onClick={() => fileInputRef.current?.click()}
          >
            Import Resume JSON
          </button>
          <button className="btn brand" onClick={copyResumeToClipbaord}>
            Copy to Clipboard
          </button>
          <input
            type="file"
            accept=".json"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={importResumeJson}
          />
        </div>
      </div>
    </div>
  )
}

export default JsonModal
