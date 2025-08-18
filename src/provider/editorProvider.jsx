import { createContext, useState, useContext } from 'react'
import { resumeContext } from '../context/resumeContext'

export const editorContext = createContext()

export default function EditorProvider({ children }) {
  const [activeSection, setActiveSection] = useState(null)
  const [isEditPanelOpen, setIsEditPanelOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
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
        handleSectionClick,
        handleClearClick,
        handleConfirmClear,
        handleCancelClear,
        closeEditPanel,
      }}
    >
      {children}
    </editorContext.Provider>
  )
}
