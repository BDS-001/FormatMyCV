export default function PersonalInfo() {
    return (
        <div className="form-section">
        <h2>Personal Information</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="e.g. John Smith" />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input type="text" id="jobTitle" placeholder="e.g. Software Engineer" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="e.g. john@example.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" placeholder="e.g. (123) 456-7890" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="e.g. New York, NY" />
        </div>
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn (Optional)</label>
          <input type="text" id="linkedin" placeholder="e.g. linkedin.com/in/johnsmith" />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website (Optional)</label>
          <input type="text" id="website" placeholder="e.g. johnsmith.com" />
        </div>
      </div>
    )
}