import useResume from '../../context/resumeContext'
import { useMemo } from 'react'

export default function WorkExperience() {
  const { resumeData, setResumeData } = useResume()

  const experiences = useMemo(() => {
    return resumeData.experience || []
  }, [resumeData.experience])

  const addExperience = () => {
    const newExperience = {
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    }
    setResumeData({
      ...resumeData,
      experience: [...experiences, newExperience],
    })
  }

  const removeExperience = index => {
    const updatedExperiences = [...experiences]
    updatedExperiences.splice(index, 1)

    setResumeData({
      ...resumeData,
      experience: updatedExperiences,
    })
  }

  const updateExperience = (index, field, value) => {
    const updatedExperiences = [...experiences]
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      experience: updatedExperiences,
    })
  }

  return (
    <div className="formSection">
      <div className="formGroup">
        <label>Work Experience</label>
        {experiences.map((exp, index) => (
          <div key={index} className="listItem">
            <div className="formGroup">
              <label htmlFor={`company-${index}`}>Company</label>
              <input
                type="text"
                id={`company-${index}`}
                placeholder="e.g. Google"
                value={exp.company}
                onChange={e =>
                  updateExperience(index, 'company', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`position-${index}`}>Position</label>
              <input
                type="text"
                id={`position-${index}`}
                placeholder="e.g. Senior Software Engineer"
                value={exp.position}
                onChange={e =>
                  updateExperience(index, 'position', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`workLocation-${index}`}>Location</label>
              <input
                type="text"
                id={`workLocation-${index}`}
                placeholder="e.g. Mountain View, CA"
                value={exp.location}
                onChange={e =>
                  updateExperience(index, 'location', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`workStart-${index}`}>Start Date</label>
              <input
                type="text"
                id={`workStart-${index}`}
                placeholder="e.g. Jan 2020"
                value={exp.startDate}
                onChange={e =>
                  updateExperience(index, 'startDate', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`workEnd-${index}`}>End Date</label>
              <input
                type="text"
                id={`workEnd-${index}`}
                placeholder="e.g. Dec 2022 or Present"
                value={exp.endDate}
                onChange={e =>
                  updateExperience(index, 'endDate', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`responsibilities-${index}`}>
                Responsibilities & Achievements
              </label>
              <textarea
                id={`responsibilities-${index}`}
                placeholder="• Developed a feature that increased user engagement by 20%
• Led a team of 5 engineers to deliver project ahead of schedule"
                value={exp.responsibilities}
                onChange={e =>
                  updateExperience(index, 'responsibilities', e.target.value)
                }
              ></textarea>
            </div>
            <button
              type="button"
              className="btn danger"
              onClick={() => removeExperience(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="btn brand" onClick={addExperience}>
        Add Experience
      </button>
    </div>
  )
}
