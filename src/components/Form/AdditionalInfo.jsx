export default function AdditionalInfo() {
    return (
        <div className="form-section">
            <h2>Projects / Additional Information (Optional)</h2>
            <div id="projectsList" className="dynamic-list"></div>
            <div className="projects-form">
              <div className="form-group">
                <label htmlFor="projectTitle">Project Title</label>
                <input type="text" id="projectTitle" placeholder="e.g. E-commerce Website" />
              </div>
              <div className="form-group">
                <label htmlFor="projectDescription">Description</label>
                <textarea id="projectDescription" placeholder="• Built a full-stack e-commerce platform using React, Node.js, and MongoDB&#10;• Implemented payment processing with Stripe"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="projectLink">Link (Optional)</label>
                <input type="text" id="projectLink" placeholder="e.g. github.com/username/project" />
              </div>
              <button type="button" id="addProject">Add Project</button>
            </div>
          </div>
    )
}