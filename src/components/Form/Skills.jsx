import useResume from '../../context/resumeContext'
import { useMemo } from 'react'
import styles from './Skills.module.css'

export default function Skills() {
  const { resumeData, setResumeData } = useResume()

  const updateResume = newSkills => {
    setResumeData(prev => ({
      ...prev,
      skills: [...newSkills],
    }))
  }
  const skills = useMemo(() => {
    return resumeData.skills || []
  }, [resumeData.skills])

  const addSkill = () => {
    setResumeData(prev => ({ ...prev, skills: [...skills, ''] }))
  }

  const deleteSkill = index => {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    updateResume(newSkills)
  }

  const handleInputChange = (e, index) => {
    const newSkills = [...skills]
    newSkills[index] = e.target.value
    updateResume(newSkills)
  }

  return (
    <div className="formSection">
      <div className="formGroup">
        <label>List your skills</label>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            <input
              type="text"
              id={`skill-${index}`}
              className={styles.skillInput}
              placeholder="e.g. JavaScript, React, Node.js, Python, AWS"
              value={skill}
              onChange={e => handleInputChange(e, index)}
            />
            <button
              type="button"
              className={`btn danger ${styles.deleteButton}`}
              onClick={() => deleteSkill(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="btn brand" onClick={addSkill}>
        Add Skill
      </button>
    </div>
  )
}
