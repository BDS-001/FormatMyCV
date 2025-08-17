import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const AboutMeSection = () => {
    const { resumeData } = useResume()
    
    const summary = useMemo(() => 
        resumeData.personalInfo.summary || '', 
        [resumeData.personalInfo.summary]
    )
    
    if (!summary) return null
    
    return (
        <div className={styles.sidebarSection}>
            <div className={styles.sidebarSectionContent}>
                {summary}
            </div>
        </div>
    )
}

export default AboutMeSection