import { useState } from 'react'
import ModernTemplate from '../templates/modernTemplate/ModernTemplate'
import ATSTemplate from '../templates/atsTemplate/ATSTemplate'
import styles from './PrintPage.module.css'
import Header from './Header/Header'
import { editorContext } from '../context/editContext'
import EditPanel from './EditPanel/EditPanel'
import TemplateSelector from './TemplateSelector/TemplateSelector'
import ConfirmationModal from './ConfirmationModal/ConfirmationModal'
import JsonModal from './JsonModal/JsonModal'
import CutoffIndicator from './CutoffIndicator/CutoffIndicator'
import { useContext } from 'react'
import useResume from '../context/resumeContext'

function PrintPageContent() {
  const [template, setTemplate] = useState('modern')
  const { resumeData } = useResume()
  const {
    activeSection,
    showModal,
    showJsonModal,
    handleSectionClick,
    handleClearClick,
    handleConfirmClear,
    handleCancelClear,
    handleJsonSettingsClick,
    handleCloseJsonModal,
  } = useContext(editorContext)

  return (
    <>
      <div className={styles.noPrint}>
        <Header
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          onClearClick={handleClearClick}
          onJsonSettingsClick={handleJsonSettingsClick}
        />
      </div>
      <div className={styles.printPageWrapper}>
        <EditPanel />
        <div className={`${styles.printControls} ${styles.noPrint}`}>
          <TemplateSelector
            value={template}
            onChange={e => setTemplate(e.target.value)}
          />
          <button onClick={() => window.print()} className="btn icon">
            Print
          </button>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.preview}>
            {template === 'modern' && (
              <ModernTemplate resumeData={resumeData} />
            )}
            {template === 'ats' && <ATSTemplate resumeData={resumeData} />}
            <CutoffIndicator />
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showModal}
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
        message="Are you sure you want to clear all form data? This action cannot be undone."
      />

      <JsonModal isOpen={showJsonModal} onCancel={handleCloseJsonModal} />
    </>
  )
}

export default function PrintPage() {
  return <PrintPageContent />
}
