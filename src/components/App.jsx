import styles from './App.module.css'
import ResumeProvider from '../provider/resumeProvider'
import PreviewContainer from './Preview/PreviewContainer'
import Toast from './Toast/Toast'
import PersonalInfo from './Form/PersonalInfo'
import Summary from './Form/Summary'
import Education from './Form/Education'
import WorkExperience from './Form/WorkExperience'
import Skills from './Form/Skills'
import Projects from './Form/Projects'
import ConfirmationModal from './Form/ConfirmationModal'
import PrintPage from './PrintPage'
import { useEffect, useState, useContext, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import { resumeContext } from '../context/resumeContext'

function AppContent() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1366)
  const [showPreview, setShowPreview] = useState(false)
  const [activeSection, setActiveSection] = useState(null)
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const { toast, hideToast, clearData, loadExample, exportResumeJson, importResumeJson } = useContext(resumeContext)
  const fileInputRef = useRef(null)

  const handleResize = () => {
    setIsDesktopView(window.innerWidth >= 1366)
  }

  const togglePreview = () => {
    setShowPreview(prev => !prev)
  }

  const handleSectionClick = (section) => {
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

  const handleImportJson = () => {
    fileInputRef.current.click()
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

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Toast 
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
      
      {!isDesktopView && (
        <button 
          onClick={togglePreview} 
          className={styles.mobilePreviewButton}
          aria-label="Toggle Resume Preview"
        >
          View Resume
        </button>
      )}
      
      <div className={styles.documentEditor}>
        <div className={styles.controlsHeader}>
          <div className={styles.controlsGroup}>
            <button type="button" onClick={loadExample} className={styles.controlBtn}>
              Load Example
            </button>
            <button type="button" onClick={handleClearClick} className={styles.controlBtn}>
              Clear Resume
            </button>
            <button type="button" onClick={exportResumeJson} className={styles.controlBtn}>
              Save JSON
            </button>
            <button type="button" onClick={handleImportJson} className={styles.controlBtn}>
              Load JSON
            </button>
            <input 
              type="file" 
              accept=".json" 
              className={styles.hiddenInput} 
              ref={fileInputRef} 
              onChange={importResumeJson}
            />
          </div>
        </div>

        <div className={styles.navigationHeader}>
          <div className={styles.navSections}>
            <button 
              className={`${styles.navBtn} ${activeSection === 'personal' ? styles.active : ''}`}
              onClick={() => handleSectionClick('personal')}
            >
              Personal Info
            </button>
            <button 
              className={`${styles.navBtn} ${activeSection === 'summary' ? styles.active : ''}`}
              onClick={() => handleSectionClick('summary')}
            >
              Summary
            </button>
            <button 
              className={`${styles.navBtn} ${activeSection === 'education' ? styles.active : ''}`}
              onClick={() => handleSectionClick('education')}
            >
              Education
            </button>
            <button 
              className={`${styles.navBtn} ${activeSection === 'experience' ? styles.active : ''}`}
              onClick={() => handleSectionClick('experience')}
            >
              Experience
            </button>
            <button 
              className={`${styles.navBtn} ${activeSection === 'skills' ? styles.active : ''}`}
              onClick={() => handleSectionClick('skills')}
            >
              Skills
            </button>
            <button 
              className={`${styles.navBtn} ${activeSection === 'projects' ? styles.active : ''}`}
              onClick={() => handleSectionClick('projects')}
            >
              Projects
            </button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={`${styles.editPanel} ${isEditPanelOpen ? styles.open : ''}`}>
            <div className={styles.editPanelContent}>
              {isEditPanelOpen && (
                <>
                  <div className={styles.editPanelHeader}>
                    <h2>{activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : ''}</h2>
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
            <PreviewContainer 
              isDesktopView={isDesktopView} 
              showPreview={showPreview} 
              onClose={togglePreview} 
            />
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