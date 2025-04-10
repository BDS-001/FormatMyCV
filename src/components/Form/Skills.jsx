export default function Skills() {
    return (
        <div className="form-section">
            <h2>Skills</h2>
            <div className="form-group">
                <label htmlFor="skills">List your skills (separated by commas)</label>
                <input type="text" id="skills" placeholder="e.g. JavaScript, React, Node.js, Python, AWS" />
            </div>
            <button type="button" id="updateSkills">Update Skills</button>
      </div>
    )
}