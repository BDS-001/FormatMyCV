import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'

export default function PreviewContainer({isDesktopView, showPreview}) {
    console.log(isDesktopView)
    return (
        <div className={isDesktopView ? "preview-container" : showPreview ? 'test2' : 'test'}>
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