import { useState, useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import AdditionalInfo from "./AdditionalInfo";
import ConfirmationModal from "./ConfirmationModal";
import { resumeContext } from "../../context/resumeContext";
import '../../styles/FormContainer.css';

const FormContainer = () => {
    const { clearData, loadExample } = useContext(resumeContext);
    const [showModal, setShowModal] = useState(false);

    const handleClearClick = () => {
        setShowModal(true);
    };

    const handleConfirmClear = () => {
        clearData();
        setShowModal(false);
    };

    const handleCancelClear = () => {
        setShowModal(false);
    };

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
                <button type="button" id="printResume" onClick={() => window.print()} >Print / Save PDF</button>
                <button type="button" id="loadExample" onClick={loadExample} >Load Example</button>
                <button type="button" id="exportJson">Export Data</button>
                <button type="button" id="importJsonBtn">Import Data</button>
                <input type="file" id="importJson" accept=".json" style={{display: 'none'}} />
                <button type="button" onClick={handleClearClick}>Clear Form</button>
            </div>
        </form>

        <ConfirmationModal 
            isOpen={showModal}
            onConfirm={handleConfirmClear}
            onCancel={handleCancelClear}
            message="Are you sure you want to clear all form data? This action cannot be undone."
        />
      </div>
    );
  };
  
  export default FormContainer;