import useResume from "../../context/resumeContext"
import { useState } from "react"

export default function Skills() {
  const { resumeData, setResumeData } = useResume()
  const [display, setDisplay] = useState(false)
  const [skillInput, setSkillInput] = useState(resumeData.skills.join(', '))

  const updateSkills = () => {
    // Split the comma-separated input into an array of skills
    const skillsArray = skillInput
      .split(",")
      .map(skill => skill.trim())
      .filter(skill => skill !== "") // Remove any empty strings
    
    // Update the resume data with the new skills array
    setResumeData({
      ...resumeData,
      skills: skillsArray
    })
  }

  const toggleDisplay = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDisplay(prev => !prev)
  }

  return (
    <>
      <h2>Skills</h2>
      <button onClick={toggleDisplay}>{display ? "Hide" : "Show"}</button>
      
      {display && (
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="skills">List your skills (separated by commas)</label>
            <input 
              type="text" 
              id="skills" 
              placeholder="e.g. JavaScript, React, Node.js, Python, AWS" 
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
            />
          </div>
          <button 
            type="button" 
            id="updateSkills"
            onClick={updateSkills}
          >
            Update Skills
          </button>
        </div>
      )}
    </>
  )
}