import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'

export default function PreviewContainer({isDesktopView, showPreview, onClose}) {
    const getContainerClass = () => {
        if (isDesktopView) {
            return "preview-container";
        } else {
            return showPreview ? "preview-fullscreen" : "preview-hidden";
        }
    };

    return (
        <div className={getContainerClass()}>
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
            
            {!isDesktopView && showPreview && (
                <button 
                    className="preview-close-button"
                    onClick={onClose}
                >
                    Back to Editor
                </button>
            )}
            
            <div className="resume" id="resumePreview">
                <ResumeSidebar />
                <ResumeMain />
            </div>
        </div>
    );
}