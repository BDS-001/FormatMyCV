import '../../styles/PreviewContainer.css'
import ModernTemplate from '../../templates/modernTemplate/ModernTemplate'
import ATSTemplate from '../../templates/atsTemplate/ATSTemplate'
import { useRef, useContext } from 'react'
import { resumeContext } from '../../context/resumeContext'

export default function PreviewContainer({isDesktopView, showPreview, onClose}) {
    const { currentTemplate, setCurrentTemplate } = useContext(resumeContext)
    
    const getContainerClass = () => {
        if (isDesktopView) {
            return "preview-container";
        } else {
            return showPreview ? "preview-fullscreen" : "preview-hidden";
        }
    };

    const previewRef = useRef(null)
    
    const handleTemplateChange = (e) => {
        setCurrentTemplate(e.target.value)
    }

    return (
        <div className={getContainerClass()}>
            <div className="preview-header">
                <h1>Resume Preview</h1>
                <div className="header-controls">
                    <select 
                        value={currentTemplate} 
                        onChange={handleTemplateChange}
                        className="template-selector"
                    >
                        <option value="modern">Modern</option>
                        <option value="ats">ATS Optimized</option>
                    </select>
                    <button 
                        type="button" 
                        id="printResume" 
                        className="print-button"
                        onClick={() => window.print()} 
                    >
                        Print / Save PDF
                    </button>
                </div>
            </div>
            
            {!isDesktopView && showPreview && (
                <button 
                    className="preview-close-button"
                    onClick={onClose}
                >
                    Back to Editor
                </button>
            )}
            
            <div className="template-wrapper" id="resumePreview" ref={previewRef}>
                {currentTemplate === 'modern' && <ModernTemplate className="show-cutoff-line" />}
                {currentTemplate === 'ats' && <ATSTemplate className="show-cutoff-line" />}
                <div className="page-cutoff-warning">
                    ⚠️ Content below this line may be cut off on the second page when printing
                </div>
            </div>
        </div>
    );
}