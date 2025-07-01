import '../styles/App.css'
import ResumeProvider from '../provider/resumeProvider'
import FormContainer from './Form/FormContainer'
import PreviewContainer from './Preview/PreviewContainer'
import Toast from './Toast/Toast'
import { useEffect, useState, useContext } from 'react'
import { resumeContext } from '../context/resumeContext'

function AppContent() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1366)
  const [showPreview, setShowPreview] = useState(false)
  const { toast, hideToast } = useContext(resumeContext)

  const handleResize = () => {
    setIsDesktopView(window.innerWidth >= 1366)
  }

  const togglePreview = () => {
    setShowPreview(prev => !prev)
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
      
      <div className="container">
        <FormContainer />
        <PreviewContainer 
          isDesktopView={isDesktopView} 
          showPreview={showPreview} 
          onClose={togglePreview} 
        />
      </div>
    </>
  )
}

function App() {
  return (
    <ResumeProvider>
      <AppContent />
    </ResumeProvider>
  )
}

export default App