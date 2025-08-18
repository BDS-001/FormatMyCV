import useResume from '../../context/resumeContext'
import { useMemo, useState } from 'react'

export default function Education() {
  const { resumeData, setResumeData } = useResume()
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    location: '',
    startDate: '',
    endDate: '',
    gpa: '',
    courses: '',
  })

  const educations = useMemo(() => {
    return resumeData.education || []
  }, [resumeData.education])

  const handleInputChange = (field, value) => {
    setCurrentEducation({
      ...currentEducation,
      [field]: value,
    })
  }

  const addEducation = () => {
    // Create a new array with all existing education entries plus the new one
    const updatedEducations = [...educations, currentEducation]

    // Update resume data with the new educations array
    setResumeData({
      ...resumeData,
      education: updatedEducations,
    })

    // Reset the form
    setCurrentEducation({
      school: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      courses: '',
    })
  }

  const removeEducation = index => {
    const updatedEducations = [...educations]
    updatedEducations.splice(index, 1)

    setResumeData({
      ...resumeData,
      education: updatedEducations,
    })
  }

  const updateEducation = (index, field, value) => {
    const updatedEducations = [...educations]
    updatedEducations[index] = {
      ...updatedEducations[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      education: updatedEducations,
    })
  }

  return (
    <div className="formSection">
      {/* Display existing education entries */}
      {educations.length > 0 && (
        <div id="educationList" className="dynamicList">
          {educations.map((edu, index) => (
            <div key={index} className="listItem">
              <h3>
                {edu.degree} at {edu.school}
              </h3>
              <p>
                {edu.startDate} - {edu.endDate} | {edu.location}
              </p>
              <div className="formGroup">
                <label htmlFor={`school-${index}`}>School / University</label>
                <input
                  type="text"
                  id={`school-${index}`}
                  value={edu.school}
                  onChange={e =>
                    updateEducation(index, 'school', e.target.value)
                  }
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`degree-${index}`}>Degree</label>
                <input
                  type="text"
                  id={`degree-${index}`}
                  value={edu.degree}
                  onChange={e =>
                    updateEducation(index, 'degree', e.target.value)
                  }
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`eduLocation-${index}`}>
                  Location (Optional)
                </label>
                <input
                  type="text"
                  id={`eduLocation-${index}`}
                  value={edu.location}
                  onChange={e =>
                    updateEducation(index, 'location', e.target.value)
                  }
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`eduStart-${index}`}>Start Date</label>
                <input
                  type="text"
                  id={`eduStart-${index}`}
                  value={edu.startDate}
                  onChange={e =>
                    updateEducation(index, 'startDate', e.target.value)
                  }
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`eduEnd-${index}`}>End Date</label>
                <input
                  type="text"
                  id={`eduEnd-${index}`}
                  value={edu.endDate}
                  onChange={e =>
                    updateEducation(index, 'endDate', e.target.value)
                  }
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`gpa-${index}`}>GPA (Optional)</label>
                <input
                  type="text"
                  id={`gpa-${index}`}
                  value={edu.gpa}
                  onChange={e => updateEducation(index, 'gpa', e.target.value)}
                />
              </div>
              <div className="formGroup">
                <label htmlFor={`courses-${index}`}>
                  Relevant Courses (Optional)
                </label>
                <input
                  type="text"
                  id={`courses-${index}`}
                  value={edu.courses}
                  onChange={e =>
                    updateEducation(index, 'courses', e.target.value)
                  }
                />
              </div>
              <button
                type="button"
                className="btn danger"
                onClick={() => removeEducation(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Form to add new education entry */}
      <div className="formContainer">
        <div className="formGroup">
          <label htmlFor="school">School / University</label>
          <input
            type="text"
            id="school"
            placeholder="e.g. University of California"
            value={currentEducation.school}
            onChange={e => handleInputChange('school', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            placeholder="e.g. Bachelor of Science in Computer Science"
            value={currentEducation.degree}
            onChange={e => handleInputChange('degree', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="eduLocation">Location (Optional)</label>
          <input
            type="text"
            id="eduLocation"
            placeholder="e.g. Berkeley, CA"
            value={currentEducation.location}
            onChange={e => handleInputChange('location', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="eduStart">Start Date</label>
          <input
            type="text"
            id="eduStart"
            placeholder="e.g. Aug 2016"
            value={currentEducation.startDate}
            onChange={e => handleInputChange('startDate', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="eduEnd">End Date</label>
          <input
            type="text"
            id="eduEnd"
            placeholder="e.g. May 2020 or Present"
            value={currentEducation.endDate}
            onChange={e => handleInputChange('endDate', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="gpa">GPA (Optional)</label>
          <input
            type="text"
            id="gpa"
            placeholder="e.g. 3.8/4.0"
            value={currentEducation.gpa}
            onChange={e => handleInputChange('gpa', e.target.value)}
          />
        </div>
        <div className="formGroup">
          <label htmlFor="courses">Relevant Courses (Optional)</label>
          <input
            type="text"
            id="courses"
            placeholder="e.g. Data Structures, Algorithms, Machine Learning"
            value={currentEducation.courses}
            onChange={e => handleInputChange('courses', e.target.value)}
          />
        </div>
        <button type="button" className="btn brand" onClick={addEducation}>
          Add Education
        </button>
      </div>
    </div>
  )
}
