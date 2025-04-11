import { useState, useContext, useRef } from "react";
import PersonalInfo from "./PersonalInfo";
import Summary from "./Summary";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";
import ConfirmationModal from "./ConfirmationModal";
import { resumeContext } from "../../context/resumeContext";
import '../../styles/FormContainer.css';

const FormContainer = () => {
    const { clearData, loadExample, exportResumeJson, importResumeJson } = useContext(resumeContext);
    const [showModal, setShowModal] = useState(false);
    const fileInputRef = useRef(null);

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

    const handleImportJson = () => {
        fileInputRef.current.click();
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
  
            {/* Projects */}
            <Projects/>
  
            <div className="button-group">
                <button type="button" id="loadExample" onClick={loadExample} >Load Example</button>
                <button type="button" onClick={handleClearClick}>Clear Form</button>
                <button type="button" id="exportJson" onClick={exportResumeJson} >Export Data</button>
                <button type="button" id="importJsonBtn" onClick={handleImportJson}>Import Data</button>
                <input type="file" id="importJson" accept=".json" style={{display: 'none'}} ref={fileInputRef} onChange={importResumeJson}/>
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