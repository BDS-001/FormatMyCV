import React from 'react'
import ReactDOM from 'react-dom/client'
import PrintPage from './components/PrintPage.jsx'
import ResumeProvider from './provider/resumeProvider.jsx'
import EditorProvider from './provider/editorProvider.jsx'
import ToastProvider from './provider/toastProvider.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <ResumeProvider>
        <EditorProvider>
          <PrintPage />
        </EditorProvider>
      </ResumeProvider>
    </ToastProvider>
  </React.StrictMode>
)
