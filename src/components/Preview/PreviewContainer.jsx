import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'

export default function PreviewContainer() {
    return (
        <div className="preview-container">
            <div className="preview-header">
                <h1>Resume Preview</h1>
                <button 
                    type="button" 
                    id="printResume" 
                    className="print-button"
                    onClick={() => window.print()} 
                >
                    Print / Save PDF
                </button>
            </div>
            <div className="resume" id="resumePreview">
                <ResumeSidebar />
                <ResumeMain />
            </div>
        </div>
    );
}