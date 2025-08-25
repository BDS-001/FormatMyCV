import useResume from '../../context/resumeContext'
import { useMemo } from 'react'

export default function Projects() {
  const { resumeData, setResumeData } = useResume()

  const projects = useMemo(() => {
    return resumeData.projects || []
  }, [resumeData.projects])

  const addProject = () => {
    const newProject = {
      title: '',
      description: '',
      link: '',
    }
    setResumeData({
      ...resumeData,
      projects: [...projects, newProject],
    })
  }

  const removeProject = index => {
    const updatedProjects = [...projects]
    updatedProjects.splice(index, 1)

    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    })
  }

  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects]
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    }

    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    })
  }

  return (
    <div className="formSection">
      <div className="formGroup">
        <label>Projects</label>
        {projects.map((project, index) => (
          <div key={index} className="listItem">
            <div className="formGroup">
              <label htmlFor={`projectTitle-${index}`}>Project Title</label>
              <input
                type="text"
                id={`projectTitle-${index}`}
                placeholder="e.g. E-commerce Website"
                value={project.title}
                onChange={e => updateProject(index, 'title', e.target.value)}
              />
            </div>
            <div className="formGroup">
              <label htmlFor={`projectDescription-${index}`}>Description</label>
              <textarea
                id={`projectDescription-${index}`}
                placeholder="• Built a full-stack e-commerce platform using React, Node.js, and MongoDB
• Implemented payment processing with Stripe"
                value={project.description}
                onChange={e =>
                  updateProject(index, 'description', e.target.value)
                }
              ></textarea>
            </div>
            <div className="formGroup">
              <label htmlFor={`projectLink-${index}`}>Link</label>
              <input
                type="text"
                id={`projectLink-${index}`}
                placeholder="e.g. github.com/username/project"
                value={project.link}
                onChange={e => updateProject(index, 'link', e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn danger"
              onClick={() => removeProject(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="btn brand" onClick={addProject}>
        Add Project
      </button>
    </div>
  )
}
