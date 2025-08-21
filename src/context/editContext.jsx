import { useContext, createContext } from 'react'

export const editorContext = createContext(null)

export default function useEditor() {
  const context = useContext(editorContext)
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider')
  }
  return context
}
