import useResume from "../../context/resumeContext"
import { useMemo, useState } from "react"

export default function Projects() {
  const { resumeData, setResumeData } = useResume()
  const [currentProject, setCurrentProject] = useState({
    title: "",
    description: "",
    link: ""
  })

  const projects = useMemo(() => {
    return resumeData.projects || []
  }, [resumeData.projects])

  const handleInputChange = (field, value) => {
    setCurrentProject({
      ...currentProject,
      [field]: value
    })
  }

  const addProject = () => {
    // Create a new array with all existing projects plus the new one
    const updatedProjects = [...projects, currentProject]
    
    // Update resume data with the new projects array
    setResumeData({
      ...resumeData,
      projects: updatedProjects
    })
    
    setCurrentProject({
      title: "",
      description: "",
      link: ""
    })
  }

  const removeProject = (index) => {
    const updatedProjects = [...projects]
    updatedProjects.splice(index, 1)
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects
    })
  }

  const updateProject = (index, field, value) => {
    const updatedProjects = [...projects]
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value
    }
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects
    })
  }


  return (
    <div className="form-section">
          {/* Display existing projects */}
          {projects.length > 0 && (
            <div id="projectsList" className="dynamic-list">
              {projects.map((project, index) => (
                <div key={index} className="list-item">
                  <h3>{project.title}</h3>
                  <p>{project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>}</p>
                  <div className="form-group">
                    <label htmlFor={`projectTitle-${index}`}>Project Title</label>
                    <input 
                      type="text" 
                      id={`projectTitle-${index}`} 
                      value={project.title} 
                      onChange={(e) => updateProject(index, "title", e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor={`projectDescription-${index}`}>Description</label>
                    <textarea 
                      id={`projectDescription-${index}`} 
                      value={project.description} 
                      onChange={(e) => updateProject(index, "description", e.target.value)}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor={`projectLink-${index}`}>Link (Optional)</label>
                    <input 
                      type="text" 
                      id={`projectLink-${index}`} 
                      value={project.link} 
                      onChange={(e) => updateProject(index, "link", e.target.value)}
                    />
                  </div>
                  <button 
                    type="button" 
                    className="remove-button" 
                    onClick={() => removeProject(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Form to add new project */}
          <div className="projects-form">
            <div className="form-group">
              <label htmlFor="projectTitle">Project Title</label>
              <input 
                type="text" 
                id="projectTitle" 
                placeholder="e.g. E-commerce Website" 
                value={currentProject.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="projectDescription">Description</label>
              <textarea 
                id="projectDescription" 
                placeholder="• Built a full-stack e-commerce platform using React, Node.js, and MongoDB&#10;• Implemented payment processing with Stripe"
                value={currentProject.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="projectLink">Link (Optional)</label>
              <input 
                type="text" 
                id="projectLink" 
                placeholder="e.g. github.com/username/project" 
                value={currentProject.link}
                onChange={(e) => handleInputChange("link", e.target.value)}
              />
            </div>
            <button 
              type="button" 
              id="addProject"
              onClick={addProject}
            >
              Add Project
            </button>
          </div>
    </div>
  )
}