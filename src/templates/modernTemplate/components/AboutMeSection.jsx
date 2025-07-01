import { useMemo } from 'react';
import useResume from '../../../context/resumeContext';

export default function AboutMeSection() {
    const { resumeData } = useResume();
    
    const summary = useMemo(() => {
        return resumeData.personalInfo.summary || '';
    }, [resumeData.personalInfo.summary]);
    
    return (
        <div className="sidebar-section">
            <div className="sidebar-section-title">About Me</div>
            <div className="sidebar-section-content" id="sidebarSummary">
                {summary}
            </div>
        </div>
    );
}