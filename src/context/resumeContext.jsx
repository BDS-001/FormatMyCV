import { useContext, createContext } from 'react'

export const resumeContext = createContext(null)

export default function useResume() {
  const context = useContext(resumeContext)
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider')
  }
  return context
}
