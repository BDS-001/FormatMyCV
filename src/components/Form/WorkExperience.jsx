import useResume from "../../context/resumeContext"
import { useMemo, useState } from "react"
import styles from './WorkExperience.module.css'

export default function WorkExperience() {
  const { resumeData, setResumeData } = useResume()
  const [currentExperience, setCurrentExperience] = useState({
    company: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    responsibilities: ""
  })

  const experiences = useMemo(() => {
    return resumeData.experience || []
  }, [resumeData.experience])

  const handleInputChange = (field, value) => {
    setCurrentExperience({
      ...currentExperience,
      [field]: value
    })
  }

  const addExperience = () => {
    // Create a new array with all existing experiences plus the new one
    const updatedExperiences = [...experiences, currentExperience]
    
    // Update resume data with the new experiences array
    setResumeData({
      ...resumeData,
      experience: updatedExperiences
    })
    
    // Reset the form
    setCurrentExperience({
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: ""
    })
  }

  const removeExperience = (index) => {
    const updatedExperiences = [...experiences]
    updatedExperiences.splice(index, 1)
    
    setResumeData({
      ...resumeData,
      experience: updatedExperiences
    })
  }

  const updateExperience = (index, field, value) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    }
    
    setResumeData({
      ...resumeData,
      experience: updatedExperiences
    })
  }


  return (
    <div className={styles.formSection}>
          {/* Display existing experiences */}
          {experiences.length > 0 && (
            <div id="experienceList" className={styles.dynamicList}>
              {experiences.map((exp, index) => (
                <div key={index} className={styles.listItem}>
                  <h3>{exp.position} at {exp.company}</h3>
                  <p>{exp.startDate} - {exp.endDate} | {exp.location}</p>
                  <div className={styles.formGroup}>
                    <label htmlFor={`company-${index}`}>Company</label>
                    <input 
                      type="text" 
                      id={`company-${index}`} 
                      value={exp.company} 
                      onChange={(e) => updateExperience(index, "company", e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor={`position-${index}`}>Position</label>
                    <input 
                      type="text" 
                      id={`position-${index}`} 
                      value={exp.position} 
                      onChange={(e) => updateExperience(index, "position", e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor={`workLocation-${index}`}>Location (Optional)</label>
                    <input 
                      type="text" 
                      id={`workLocation-${index}`} 
                      value={exp.location} 
                      onChange={(e) => updateExperience(index, "location", e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor={`workStart-${index}`}>Start Date</label>
                    <input 
                      type="text" 
                      id={`workStart-${index}`} 
                      value={exp.startDate} 
                      onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor={`workEnd-${index}`}>End Date</label>
                    <input 
                      type="text" 
                      id={`workEnd-${index}`} 
                      value={exp.endDate} 
                      onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor={`responsibilities-${index}`}>Responsibilities & Achievements</label>
                    <textarea 
                      id={`responsibilities-${index}`} 
                      value={exp.responsibilities} 
                      onChange={(e) => updateExperience(index, "responsibilities", e.target.value)}
                    ></textarea>
                  </div>
                  <button 
                    type="button" 
                    className={styles.removeButton} 
                    onClick={() => removeExperience(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Form to add new experience */}
          <div className={styles.experienceForm}>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input 
                type="text" 
                id="company" 
                placeholder="e.g. Google" 
                value={currentExperience.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input 
                type="text" 
                id="position" 
                placeholder="e.g. Senior Software Engineer" 
                value={currentExperience.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workLocation">Location (Optional)</label>
              <input 
                type="text" 
                id="workLocation" 
                placeholder="e.g. Mountain View, CA" 
                value={currentExperience.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workStart">Start Date</label>
              <input 
                type="text" 
                id="workStart" 
                placeholder="e.g. Jan 2020" 
                value={currentExperience.startDate}
                onChange={(e) => handleInputChange("startDate", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="workEnd">End Date</label>
              <input 
                type="text" 
                id="workEnd" 
                placeholder="e.g. Dec 2022 or Present" 
                value={currentExperience.endDate}
                onChange={(e) => handleInputChange("endDate", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="responsibilities">Responsibilities & Achievements</label>
              <textarea 
                id="responsibilities" 
                placeholder="• Developed a feature that increased user engagement by 20%&#10;• Led a team of 5 engineers to deliver project ahead of schedule"
                value={currentExperience.responsibilities}
                onChange={(e) => handleInputChange("responsibilities", e.target.value)}
              ></textarea>
            </div>
            <button 
              type="button" 
              id="addExperience"
              onClick={addExperience}
            >
              Add Experience
            </button>
          </div>
    </div>
  )
}