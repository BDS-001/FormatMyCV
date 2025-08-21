import { resumeContext } from '../context/resumeContext'
import { useState, useCallback } from 'react'
import {
  getEmptyResume,
  getExampleResume,
  getValidatedResumeData,
} from '../utils/resumeValidator'
import { useToast } from './toastProvider'

export default function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(getEmptyResume())
  const [currentTemplate, setCurrentTemplate] = useState('modern')
  const { showToast } = useToast()

  const clearData = useCallback(() => {
    setResumeData(getEmptyResume())
  }, [])

  const loadExample = useCallback(() => {
    setResumeData(getExampleResume())
  }, [])

  const exportResumeJson = useCallback(() => {
    const jsonString = JSON.stringify(resumeData, null, 2)

    // Create a blob and download link
    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    // Create download link and trigger click
    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = 'resume-data.json'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

    // Clean up
    URL.revokeObjectURL(url)

    showToast('Resume JSON downloaded successfully!')
  }, [resumeData, showToast])

  const importResumeJson = useCallback(
    event => {
      const file = event.target.files[0]
      if (!file) return

      const reader = new FileReader()
      reader.onload = function (e) {
        try {
          const importedResumeData = JSON.parse(e.target.result)
          const validatedData = getValidatedResumeData(importedResumeData)
          setResumeData(validatedData)

          showToast('Resume data imported successfully!')
        } catch (error) {
          console.error('Error importing resume data:', error)
          showToast(
            'Error importing resume data. Please check if the file format is correct.',
            'error'
          )
        }

        // Reset file input
        event.target.value = ''
      }

      reader.readAsText(file)
    },
    [showToast]
  )

  const copyResumeToClipbaord = async () => {
    try {
      const resumeString = JSON.stringify(resumeData, null, 2)
      await navigator.clipboard.writeText(resumeString)
      showToast('Resume copied to clipboard')
    } catch (error) {
      showToast('Resume failed to copy', 'error')
    }
  }

  const uploadJsonString = resumeDataString => {
    const newResumeData = JSON.parse(resumeDataString)
    try {
      const validatedData = getValidatedResumeData(newResumeData)
      setResumeData(validatedData)
      showToast('Resume data imported successfully!')
    } catch (error) {
      showToast(
        'Error importing resume data. Please check if the file format is correct.',
        'error'
      )
    }
  }

  return (
    <resumeContext.Provider
      value={{
        resumeData,
        setResumeData,
        clearData,
        loadExample,
        exportResumeJson,
        importResumeJson,
        currentTemplate,
        setCurrentTemplate,
        copyResumeToClipbaord,
        uploadJsonString,
      }}
    >
      {children}
    </resumeContext.Provider>
  )
}
