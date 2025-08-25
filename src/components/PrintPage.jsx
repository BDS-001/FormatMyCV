import { useState } from 'react'
import ModernTemplate from '../templates/modernTemplate/ModernTemplate'
import ATSTemplate from '../templates/atsTemplate/ATSTemplate'
import CleanTemplate from '../templates/cleanTemplate/CleanTemplate'
import styles from './PrintPage.module.css'
import Header from './Header/Header'
import { editorContext } from '../context/editContext'
import EditPanel from './EditPanel/EditPanel'
import TemplateSelector from './TemplateSelector/TemplateSelector'
import ConfirmationModal from './ConfirmationModal/ConfirmationModal'
import JsonPanel from './JsonPanel/JsonPanel'
import CutoffIndicator from './CutoffIndicator/CutoffIndicator'
import { useContext } from 'react'
import useResume from '../context/resumeContext'

function PrintPageContent() {
  const [template, setTemplate] = useState('modern')
  const { resumeData } = useResume()
  const {
    activeSection,
    showModal,
    isJsonPanelOpen,
    handleSectionClick,
    handleClearClick,
    handleConfirmClear,
    handleCancelClear,
    handleJsonSettingsClick,
    closeJsonPanel,
  } = useContext(editorContext)

  return (
    <>
      <div className={`${styles.headerWrapper} noPrint`}>
        <Header
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          onClearClick={handleClearClick}
          onJsonSettingsClick={handleJsonSettingsClick}
        />
      </div>
      <div className={styles.printPageWrapper}>
        <EditPanel />
        <JsonPanel isOpen={isJsonPanelOpen} onClose={closeJsonPanel} />
        <div className={`${styles.printControls} noPrint`}>
          <TemplateSelector
            value={template}
            onChange={e => setTemplate(e.target.value)}
          />
          <button onClick={() => window.print()} className="btn icon">
            Print / Save PDF
          </button>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.preview}>
            {template === 'modern' && (
              <ModernTemplate resumeData={resumeData} />
            )}
            {template === 'ats' && <ATSTemplate resumeData={resumeData} />}
            {template === 'clean' && <CleanTemplate resumeData={resumeData} />}
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
    </>
  )
}

export default function PrintPage() {
  return <PrintPageContent />
}
