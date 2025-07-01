import '../../styles/PreviewContainer.css'
import ModernTemplate from '../Templates/ModernTemplate'
import ATSTemplate from '../Templates/ATSTemplate'
import { useRef, useEffect, useState, useContext } from 'react'
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
    const [contentHeight, setContentHeight] = useState(0)
    
    const handleTemplateChange = (e) => {
        setCurrentTemplate(e.target.value)
    }

    useEffect(() => {
        if (!previewRef.current) return

        const resizeObserver = new ResizeObserver(() => {
            setContentHeight(previewRef.current.scrollHeight)
        })

        resizeObserver.observe(previewRef.current)
        setContentHeight(previewRef.current.scrollHeight)

        return () => resizeObserver.disconnect()
    }, [showPreview])

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
            
            <div className={`resume ${currentTemplate} ${contentHeight > 1056 ? 'show-cutoff-line' : ''}`} id="resumePreview" ref={previewRef}>
                {currentTemplate === 'modern' && <ModernTemplate />}
                {currentTemplate === 'ats' && <ATSTemplate />}
                {contentHeight > 1056 && 
                <div className="page-cutoff-warning">
                    ⚠️ Content below this line may be cut off on the second page when printing
                </div>}
            </div>
        </div>
    );
}