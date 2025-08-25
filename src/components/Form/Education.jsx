import useResume from '../../context/resumeContext'
import { useMemo } from 'react'

export default function Education() {
  const { resumeData, setResumeData } = useResume()

  const educations = useMemo(() => {
    return resumeData.education || []
  }, [resumeData.education])

  const addEducation = () => {
    const newEducation = {
      school: '',
      degree: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      courses: '',
    }
    setResumeData({
      ...resumeData,
      education: [...educations, newEducation],
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
      <div className="formGroup">
        <label>Education</label>
        {educations.map((edu, index) => (
          <div key={index} className="listItem">
            <div className="formGroup">
              <label htmlFor={`school-${index}`}>School / University</label>
              <input
                type="text"
                id={`school-${index}`}
                placeholder="e.g. University of California"
                value={edu.school}
                onChange={e => updateEducation(index, 'school', e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`degree-${index}`}>Degree</label>
              <input
                type="text"
                id={`degree-${index}`}
                placeholder="e.g. Bachelor of Science in Computer Science"
                value={edu.degree}
                onChange={e => updateEducation(index, 'degree', e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`eduLocation-${index}`}>Location</label>
              <input
                type="text"
                id={`eduLocation-${index}`}
                placeholder="e.g. Berkeley, CA"
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
                placeholder="e.g. Aug 2016"
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
                placeholder="e.g. May 2020 or Present"
                value={edu.endDate}
                onChange={e =>
                  updateEducation(index, 'endDate', e.target.value)
                }
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`gpa-${index}`}>GPA</label>
              <input
                type="text"
                id={`gpa-${index}`}
                placeholder="e.g. 3.8/4.0"
                value={edu.gpa}
                onChange={e => updateEducation(index, 'gpa', e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`courses-${index}`}>Relevant Courses</label>
              <input
                type="text"
                id={`courses-${index}`}
                placeholder="e.g. Data Structures, Algorithms, Machine Learning"
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
      <button type="button" className="btn brand" onClick={addEducation}>
        Add Education
      </button>
    </div>
  )
}
