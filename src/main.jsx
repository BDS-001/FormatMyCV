import React from 'react'
import ReactDOM from 'react-dom/client'
import PrintPage from './components/PrintPage.jsx'
import ResumeProvider from './provider/resumeProvider.jsx'
import EditorProvider from './provider/editorProvider.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeProvider>
      <EditorProvider>
        <PrintPage />
      </EditorProvider>
    </ResumeProvider>
  </React.StrictMode>
)
