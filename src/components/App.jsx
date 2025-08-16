import '../styles/App.css'
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
          className="mobile-preview-button"
          aria-label="Toggle Resume Preview"
        >
          View Resume
        </button>
      )}
      
      <div className="document-editor">
        <div className="controls-header">
          <div className="controls-group">
            <button type="button" onClick={loadExample} className="control-btn">
              Load Example
            </button>
            <button type="button" onClick={handleClearClick} className="control-btn">
              Clear Resume
            </button>
            <button type="button" onClick={exportResumeJson} className="control-btn">
              Save JSON
            </button>
            <button type="button" onClick={handleImportJson} className="control-btn">
              Load JSON
            </button>
            <input 
              type="file" 
              accept=".json" 
              style={{display: 'none'}} 
              ref={fileInputRef} 
              onChange={importResumeJson}
            />
          </div>
        </div>

        <div className="navigation-header">
          <div className="nav-sections">
            <button 
              className={`nav-btn ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => handleSectionClick('personal')}
            >
              Personal Info
            </button>
            <button 
              className={`nav-btn ${activeSection === 'summary' ? 'active' : ''}`}
              onClick={() => handleSectionClick('summary')}
            >
              Summary
            </button>
            <button 
              className={`nav-btn ${activeSection === 'education' ? 'active' : ''}`}
              onClick={() => handleSectionClick('education')}
            >
              Education
            </button>
            <button 
              className={`nav-btn ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={() => handleSectionClick('experience')}
            >
              Experience
            </button>
            <button 
              className={`nav-btn ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => handleSectionClick('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-btn ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => handleSectionClick('projects')}
            >
              Projects
            </button>
          </div>
        </div>

        <div className="main-content">
          <div className={`edit-panel ${isEditPanelOpen ? 'open' : ''}`}>
            <div className="edit-panel-content">
              {isEditPanelOpen && (
                <>
                  <div className="edit-panel-header">
                    <h2>{activeSection ? activeSection.charAt(0).toUpperCase() + activeSection.slice(1) : ''}</h2>
                    <button 
                      className="close-panel-btn"
                      onClick={() => setIsEditPanelOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="edit-panel-form">
                    {renderActiveSection()}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="preview-area">
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