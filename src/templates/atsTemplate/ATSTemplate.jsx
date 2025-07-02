import './ATSTemplate.css'
import { useMemo } from 'react'
import useResume from '../../context/resumeContext'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import ATSSkillsSection from './components/ATSSkillsSection'

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
                {[
                    headerData.email,
                    headerData.phone,
                    headerData.location,
                    headerData.linkedin && `LinkedIn: ${headerData.linkedin}`,
                    headerData.github && `GitHub: ${headerData.github}`,
                    headerData.website && `Portfolio: ${headerData.website}`
                ].filter(Boolean).join('   |   ')}
            </div>
        </div>
    )
}

export default function ATSTemplate({ className = '' }) {
    return (
        <div className={`ats-template-container ${className}`}>
            <div className="ats-main">
                <ATSHeader />
                <div className="ats-section">
                    <div className="ats-section-title">Summary</div>
                    <AboutMeSection />
                </div>
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ATSSkillsSection />
            </div>
        </div>
    )
}