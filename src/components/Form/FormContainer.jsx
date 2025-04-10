import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import AdditionalInfo from "./AdditionalInfo";
import '../../styles/FormContainer.css'

const FormContainer = () => {
    return (
      <div className="form-container">
        <h1>Resume Builder</h1>
        <p>Fill in the form to generate your professional resume</p>
  
        <form id="resumeForm">
            {/* Personal Information */}
            <PersonalInfo/>
  
            {/* Professional Summary */}
            <Summary/>
  
            {/* Education */}
            <Education/>
  
            {/* Work Experience */}
            <WorkExperience/>
  
            {/* Skills */}
            <Skills/>
  
            {/* Projects / Additional Information */}
            <AdditionalInfo/>
  
            <div className="button-group">
                <button type="button" id="printResume">Print / Save PDF</button>
                <button type="button" id="exportJson">Export Data</button>
                <button type="button" id="importJsonBtn">Import Data</button>
                <input type="file" id="importJson" accept=".json" style={{display: 'none'}} />
                <button type="button" id="clearForm">Clear Form</button>
            </div>
        </form>
      </div>
    );
  };
  
  export default FormContainer;