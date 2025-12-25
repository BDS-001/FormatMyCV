import { resumeContext } from '../context/resumeContext'
import { useState, useCallback, useEffect, useRef } from 'react'
import * as storageManager from '../utils/storageManager'
import {
  getEmptyResume,
  getExampleResume,
  getValidatedResumeData,
  getResumeSchema,
} from '../utils/resumeValidator'
import { useToast } from './toastProvider'

export default function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(
    () => storageManager.getData() ?? getEmptyResume()
  )
  const [currentTemplate, setCurrentTemplate] = useState('')
  const [accentColor, setAccentColor] = useState('#1a5fb4')
  const [accentColorEnabled, setAccentColorEnabled] = useState(false)
  const { showToast } = useToast()
  const isFirstRender = useRef(true)

  const clearData = useCallback(() => {
    setResumeData(getEmptyResume())
    storageManager.clearData()
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    storageManager.save(resumeData)
  }, [resumeData])

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

  const exportSchemaJson = useCallback(() => {
    const schema = getResumeSchema()
    const jsonString = JSON.stringify(schema, null, 2)

    const blob = new Blob([jsonString], { type: 'application/json' })
    const url = URL.createObjectURL(blob)

    const downloadLink = document.createElement('a')
    downloadLink.href = url
    downloadLink.download = 'resume-schema.json'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)

    URL.revokeObjectURL(url)

    showToast('Schema JSON downloaded successfully!')
  }, [showToast])

  const copySchemaToClipboard = async () => {
    try {
      const schema = getResumeSchema()
      const schemaString = JSON.stringify(schema, null, 2)
      await navigator.clipboard.writeText(schemaString)
      showToast('Schema copied to clipboard')
    } catch (error) {
      showToast('Schema failed to copy', 'error')
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
        exportSchemaJson,
        copySchemaToClipboard,
        accentColor,
        setAccentColor,
        accentColorEnabled,
        setAccentColorEnabled,
      }}
    >
      {children}
    </resumeContext.Provider>
  )
}
