import { useState, useEffect } from 'react';
import '../../styles/PreviewContainer.css'
import ResumeSidebar from './ResumeSidebar'
import ResumeMain from './ResumeMain'
import useResume from '../../context/resumeContext';

export default function PreviewContainer() {
    const { resumeData } = useResume();
    const [showOverflowWarning, setShowOverflowWarning] = useState(false);
    
    // Check for content overflow
    useEffect(() => {
        const checkOverflow = () => {
            const resumePreview = document.getElementById('resumePreview');
            if (resumePreview) {
                // Check if content height exceeds A4 page height (approx. 1123px for 300dpi)
                const isOverflowing = resumePreview.scrollHeight > 1123;
                setShowOverflowWarning(isOverflowing);
            }
        };
        
        // Run check after render and when resumeData changes
        checkOverflow();
        window.addEventListener('resize', checkOverflow);
        
        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, [resumeData]);
    
    return (
        <div className="preview-container">
            <h1>Resume Preview</h1>
            {showOverflowWarning && (
                <div className="overflow-warning" id="overflowWarning">
                    Warning: Your resume content may exceed one page. Consider shortening some sections.
                </div>
            )}
            <div className="resume" id="resumePreview">
                <ResumeSidebar />
                <ResumeMain />
            </div>
        </div>
    );
}