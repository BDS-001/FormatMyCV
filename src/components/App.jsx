import '../styles/App.css'
import ResumeProvider from '../provider/resumeProvider'
import FormContainer from './Form/FormContainer'
import PreviewContainer from './Preview/PreviewContainer'
import { useEffect, useState } from 'react'

function App() {
  const [isDesktopView, setIsDesktopView] = useState(window.innerWidth >= 1366)
  const [showPreview, setShowPreview] = useState(false)

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
    <ResumeProvider>
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
    </ResumeProvider>
  )
}

export default App