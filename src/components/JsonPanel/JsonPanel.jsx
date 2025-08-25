import { useRef, useContext, useState } from 'react'
import styles from './JsonPanel.module.css'
import { resumeContext } from '../../context/resumeContext'
import { useToast } from '../../provider/toastProvider'

const JsonPanel = ({ isOpen, onClose }) => {
  const {
    exportResumeJson,
    importResumeJson,
    copyResumeToClipbaord,
    uploadJsonString,
    exportSchemaJson,
    copySchemaToClipboard,
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

  return (
    <div className={`${styles.jsonPanel} ${isOpen ? styles.open : ''} noPrint`}>
      <div className={styles.jsonPanelContent}>
        {isOpen && (
          <>
            <div className={styles.jsonPanelHeader}>
              <h2>JSON Settings</h2>
              <button className={styles.closePanelBtn} onClick={onClose}>
                ×
              </button>
            </div>

            <div className={styles.jsonPanelForm}>
              <textarea
                value={jsonText}
                onChange={e => setJsonText(e.target.value)}
                placeholder="Paste your JSON data here..."
                rows={8}
              />
              <button className="btn brand" onClick={handlePasteJson}>
                Import from Text
              </button>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Resume Data</h3>
                <div className={styles.buttonGroup}>
                  <button className="btn download" onClick={exportResumeJson}>
                    Download JSON
                  </button>
                  <button
                    className="btn brand"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Import JSON
                  </button>
                  <button
                    className="btn clipboard"
                    onClick={copyResumeToClipbaord}
                  >
                    Copy to Clipboard
                  </button>
                </div>
              </div>

              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Template Schema</h3>
                <div className={styles.buttonGroup}>
                  <button className="btn download" onClick={exportSchemaJson}>
                    Download Schema
                  </button>
                  <button
                    className="btn clipboard"
                    onClick={copySchemaToClipboard}
                  >
                    Copy to Clipboard
                  </button>
                </div>
              </div>

              <input
                type="file"
                accept=".json"
                style={{ display: 'none' }}
                ref={fileInputRef}
                onChange={importResumeJson}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default JsonPanel
