import useResume from "../../context/resumeContext"
import { useMemo } from "react"
import { useState } from "react"

export default function PersonalInfo() {
  const [display, setDisplay] = useState(false)
  const { resumeData, setResumeData } = useResume()
  const personalInfo = useMemo(() => {
    return resumeData.personalInfo
  }, [resumeData.personalInfo])

  const handleUpdate = (field, value) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
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
    <h2>Personal Information</h2>
    <button onClick={toggleDisplay}>Test</button>
    {display && <div className="form-section">
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input 
          type="text" 
          id="fullName" 
          placeholder="e.g. John Smith" 
          value={personalInfo.fullName || ""} 
          onChange={(e) => handleUpdate("fullName", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="jobTitle">Job Title</label>
        <input 
          type="text" 
          id="jobTitle" 
          placeholder="e.g. Software Engineer" 
          value={personalInfo.jobTitle || ""} 
          onChange={(e) => handleUpdate("jobTitle", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          placeholder="e.g. john@example.com" 
          value={personalInfo.email || ""} 
          onChange={(e) => handleUpdate("email", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          id="phone" 
          placeholder="e.g. (123) 456-7890" 
          value={personalInfo.phone || ""} 
          onChange={(e) => handleUpdate("phone", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location</label>
        <input 
          type="text" 
          id="location" 
          placeholder="e.g. New York, NY" 
          value={personalInfo.location || ""} 
          onChange={(e) => handleUpdate("location", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn (Optional)</label>
        <input 
          type="text" 
          id="linkedin" 
          placeholder="e.g. linkedin.com/in/johnsmith" 
          value={personalInfo.linkedin || ""} 
          onChange={(e) => handleUpdate("linkedin", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="github">github (Optional)</label>
        <input 
          type="text" 
          id="github" 
          placeholder="e.g. github.com/johnsmith" 
          value={personalInfo.github || ""} 
          onChange={(e) => handleUpdate("github", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website (Optional)</label>
        <input 
          type="text" 
          id="website" 
          placeholder="e.g. johnsmith.com" 
          value={personalInfo.website || ""} 
          onChange={(e) => handleUpdate("website", e.target.value)}
        />
      </div>
    </div>}
    </>
  )
}