import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'

export default function PreviewContainer() {
    return (
        <div className="preview-container">
            <h1>Resume Preview</h1>
            <div className="overflow-warning" id="overflowWarning">
                Warning: Your resume content may exceed one page. Consider shortening some sections.
            </div>
            <div className="resume" id="resumePreview">
                <ResumeSidebar />
                <ResumeMain />
            </div>
        </div>
    );
}