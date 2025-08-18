import styles from './App.module.css'
import ResumeProvider from '../provider/resumeProvider'
import PreviewContainer from './Preview/PreviewContainer'
import Header from './Header/Header'
import Toast from './Toast/Toast'
import PersonalInfo from './Form/PersonalInfo'
import Summary from './Form/Summary'
import Education from './Form/Education'
import WorkExperience from './Form/WorkExperience'
import Skills from './Form/Skills'
import Projects from './Form/Projects'
import ConfirmationModal from './Form/ConfirmationModal'
import PrintPage from './PrintPage'
import { useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { resumeContext } from '../context/resumeContext'

function AppContent() {
  const [activeSection, setActiveSection] = useState(null)
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { toast, hideToast, clearData } = useContext(resumeContext)

  const handleSectionClick = section => {
    if (activeSection === section && isEditPanelOpen) {
      setIsEditPanelOpen(false)
      setActiveSection(null)
    } else {
      setActiveSection(section)
      setIsEditPanelOpen(true)
    }
  }

  const handleClearClick = () => {
    setShowModal(true)
  }

  const handleConfirmClear = () => {
    clearData()
    setShowModal(false)
  }

  const handleCancelClear = () => {
    setShowModal(false)
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />
      case 'summary':
        return <Summary />
      case 'education':
        return <Education />
      case 'experience':
        return <WorkExperience />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      default:
        return null
    }
  }

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

      <div className={styles.documentEditor}>
        <Header
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          onClearClick={handleClearClick}
        />

        <div className={styles.mainContent}>
          <div
            className={`${styles.editPanel} ${isEditPanelOpen ? styles.open : ''}`}
          >
            <div className={styles.editPanelContent}>
              {isEditPanelOpen && (
                <>
                  <div className={styles.editPanelHeader}>
                    <h2>
                      {activeSection?.charAt(0).toUpperCase() +
                        activeSection?.slice(1)}
                    </h2>
                    <button
                      className={styles.closePanelBtn}
                      onClick={() => setIsEditPanelOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className={styles.editPanelForm}>
                    {renderActiveSection()}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className={styles.previewArea}>
            <PreviewContainer />
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

function App() {
  return (
    <ResumeProvider>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/print" element={<PrintPage />} />
      </Routes>
    </ResumeProvider>
  )
}

export default App
