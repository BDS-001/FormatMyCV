export default function WorkExperience() {
    return (
        <div className="form-section">
            <h2>Work Experience</h2>
            <div id="experienceList" className="dynamic-list"></div>
            <div className="experience-form">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="e.g. Google" />
              </div>
              <div className="form-group">
                <label htmlFor="position">Position</label>
                <input type="text" id="position" placeholder="e.g. Senior Software Engineer" />
              </div>
              <div className="form-group">
                <label htmlFor="workLocation">Location (Optional)</label>
                <input type="text" id="workLocation" placeholder="e.g. Mountain View, CA" />
              </div>
              <div className="form-group">
                <label htmlFor="workStart">Start Date</label>
                <input type="text" id="workStart" placeholder="e.g. Jan 2020" />
              </div>
              <div className="form-group">
                <label htmlFor="workEnd">End Date</label>
                <input type="text" id="workEnd" placeholder="e.g. Dec 2022 or Present" />
              </div>
              <div className="form-group">
                <label htmlFor="responsibilities">Responsibilities & Achievements</label>
                <textarea id="responsibilities" placeholder="• Developed a feature that increased user engagement by 20%&#10;• Led a team of 5 engineers to deliver project ahead of schedule"></textarea>
              </div>
              <button type="button" id="addExperience">Add Experience</button>
            </div>
          </div>
    )
}