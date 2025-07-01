import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'
import { useRef, useEffect, useState } from 'react';

export default function PreviewContainer({isDesktopView, showPreview, onClose}) {
    const getContainerClass = () => {
        if (isDesktopView) {
            return "preview-container";
        } else {
            return showPreview ? "preview-fullscreen" : "preview-hidden";
        }
    };

    const previewRef = useRef(null)
    const [contentHeight, setContentHeight] = useState(0)

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
            
            <div className={`resume ${contentHeight > 1056 ? 'show-cutoff-line' : ''}`} id="resumePreview" ref={previewRef}>
                <ResumeSidebar />
                <ResumeMain />
                {contentHeight > 1056 && 
                <div className="page-cutoff-warning">
                    ⚠️ Content below this line may be cut off on the second page when printing
                </div>}
            </div>
        </div>
    );
}