import useResume from "../../context/resumeContext"
import { useMemo, useState } from "react"

export default function Summary() {
  const { resumeData, setResumeData } = useResume()
  const [display, setDisplay] = useState(false)
  const personalInfo = useMemo(() => {
    return resumeData.personalInfo
  }, [resumeData.personalInfo])

  const handleUpdate = (value) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        summary: value
      }
    })
  }

  const toggleDisplay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDisplay(prev => !prev)
  }

  return (
    <>
      <h2>Professional Summary</h2>
      <button onClick={toggleDisplay}>{display ? "Hide" : "Show"}</button>
      
      {display && (
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="summary">Brief summary of your professional background</label>
            <textarea 
              id="summary" 
              placeholder="e.g. Experienced software engineer with 5+ years in web development..." 
              value={personalInfo.summary || ""}
              onChange={(e) => handleUpdate(e.target.value)}
            />
          </div>
        </div>
      )}
    </>
  )
}