import { useState, useContext } from 'react'
import { resumeContext } from '../context/resumeContext'
import { editorContext } from '../context/editContext'

export default function EditorProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null)
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [isJsonPanelOpen, setIsJsonPanelOpen] = useState(false)
  const { clearData } = useContext(resumeContext)

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

  const handleJsonSettingsClick = () => {
    setIsJsonPanelOpen(true)
  }

  const closeJsonPanel = () => {
    setIsJsonPanelOpen(false)
  }

  const closeEditPanel = () => {
    setIsEditPanelOpen(false)
    setActiveSection(null)
  }

  return (
    <editorContext.Provider
      value={{
        activeSection,
        isEditPanelOpen,
        showModal,
        isJsonPanelOpen,
        handleSectionClick,
        handleClearClick,
        handleConfirmClear,
        handleCancelClear,
        handleJsonSettingsClick,
        closeJsonPanel,
        closeEditPanel,
      }}
    >
      {children}
    </editorContext.Provider>
  )
}
