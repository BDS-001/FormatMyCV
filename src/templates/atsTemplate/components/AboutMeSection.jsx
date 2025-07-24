import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'

const AboutMeSection = () => {
    const { resumeData } = useResume()
    
    const summary = useMemo(() => 
        resumeData.personalInfo.summary || '', 
        [resumeData.personalInfo.summary]
    )
    
    if (!summary) return null
    
    return (
        <div className="sidebar-section">
            <div className="sidebar-section-content">
                {summary}
            </div>
        </div>
    )
}

export default AboutMeSection