import '../styles/App.css'
import ResumeProvider from '../provider/resumeProvider'
import FormContainer from './Form/FormContainer'
import PreviewContainer from './Preview/PreviewContainer'
import { useEffect, useState } from 'react'

function App() {
  const [isDesktopView, setIsDestopView] = useState(window.innerWidth >= 1366)
  const [showPreview, setShowPreview] = useState(false)

  const handleResize = () => {
    setIsDestopView(window.innerWidth >= 1366)
  }

  const togglePreview = () => {
    setShowPreview(prev => !prev)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <ResumeProvider>
      {!isDesktopView && <button onClick={togglePreview} >Show Preview</button>}
      <div className="container">
        <FormContainer/>
        <PreviewContainer isDesktopView={isDesktopView} showPreview={showPreview} />
      </div>
      </ResumeProvider>
  )
}

export default App
