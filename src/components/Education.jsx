export default function Education() {
    return (
        <div className="form-section">
            <h2>Education</h2>
            <div id="educationList" className="dynamic-list"></div>
            <div className="education-form">
              <div className="form-group">
                <label htmlFor="school">School / University</label>
                <input type="text" id="school" placeholder="e.g. University of California" />
              </div>
              <div className="form-group">
                <label htmlFor="degree">Degree</label>
                <input type="text" id="degree" placeholder="e.g. Bachelor of Science in Computer Science" />
              </div>
              <div className="form-group">
                <label htmlFor="eduLocation">Location (Optional)</label>
                <input type="text" id="eduLocation" placeholder="e.g. Berkeley, CA" />
              </div>
              <div className="form-group">
                <label htmlFor="eduStart">Start Date</label>
                <input type="text" id="eduStart" placeholder="e.g. Aug 2016" />
              </div>
              <div className="form-group">
                <label htmlFor="eduEnd">End Date</label>
                <input type="text" id="eduEnd" placeholder="e.g. May 2020 or Present" />
              </div>
              <div className="form-group">
                <label htmlFor="gpa">GPA (Optional)</label>
                <input type="text" id="gpa" placeholder="e.g. 3.8/4.0" />
              </div>
              <div className="form-group">
                <label htmlFor="courses">Relevant Courses (Optional)</label>
                <input type="text" id="courses" placeholder="e.g. Data Structures, Algorithms, Machine Learning" />
              </div>
              <button type="button" id="addEducation">Add Education</button>
            </div>
          </div>
    )
}