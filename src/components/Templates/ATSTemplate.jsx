import './ATSTemplate.css'
import { useMemo } from 'react'
import useResume from '../../context/resumeContext'
import ExperienceSection from '../Preview/ExperienceSection'
import EducationSection from '../Preview/EducationSection'
import ProjectsSection from '../Preview/ProjectsSection'
import AboutMeSection from '../Preview/AboutMeSection'
import SkillsSection from '../Preview/SkillsSection'

function ATSHeader() {
    const { resumeData } = useResume()
    
    const headerData = useMemo(() => {
        return {
            fullName: resumeData.personalInfo.fullName,
            jobTitle: resumeData.personalInfo.jobTitle,
            email: resumeData.personalInfo.email,
            phone: resumeData.personalInfo.phone,
            location: resumeData.personalInfo.location,
            linkedin: resumeData.personalInfo.linkedin,
            website: resumeData.personalInfo.website,
            github: resumeData.personalInfo.github
        }
    }, [resumeData.personalInfo])
    
    return (
        <div className="ats-header">
            <div className="ats-name">{headerData.fullName}</div>
            <div className="ats-title">{headerData.jobTitle}</div>
            <div className="ats-contact-info">
                {headerData.email && <span>{headerData.email}</span>}
                {headerData.phone && <span>{headerData.phone}</span>}
                {headerData.location && <span>{headerData.location}</span>}
                {headerData.linkedin && <span>{headerData.linkedin}</span>}
                {headerData.github && <span>{headerData.github}</span>}
                {headerData.website && <span>{headerData.website}</span>}
            </div>
        </div>
    )
}

export default function ATSTemplate() {
    return (
        <div className="ats-main">
            <ATSHeader />
            <div className="ats-section">
                <div className="ats-section-title">Summary</div>
                <AboutMeSection />
            </div>
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
            <div className="ats-section">
                <div className="ats-section-title">Skills</div>  
                <SkillsSection />
            </div>
        </div>
    )
}