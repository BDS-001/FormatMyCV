import './ATSTemplate.css'
import { useMemo } from 'react'
import useResume from '../../context/resumeContext'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import AboutMeSection from './components/AboutMeSection'
import ATSSkillsSection from './components/ATSSkillsSection'

const ATSHeader = () => {
    const { resumeData } = useResume()
    
    const headerData = useMemo(() => {
        const { personalInfo } = resumeData
        return {
            fullName: personalInfo.fullName,
            jobTitle: personalInfo.jobTitle,
            email: personalInfo.email,
            phone: personalInfo.phone,
            location: personalInfo.location,
            linkedin: personalInfo.linkedin,
            website: personalInfo.website,
            github: personalInfo.github
        }
    }, [resumeData])
    
    const contactItems = useMemo(() => {
        const items = [
            headerData.email,
            headerData.phone,
            headerData.location,
            headerData.linkedin && `LinkedIn: ${headerData.linkedin}`,
            headerData.github && `GitHub: ${headerData.github}`,
            headerData.website && `Portfolio: ${headerData.website}`
        ]
        return items.filter(Boolean).join(' | ')
    }, [headerData])
    
    return (
        <header className="ats-header">
            <div className="ats-name-title">
                <h1 className="ats-name">{headerData.fullName}</h1>
                <h2 className="ats-title">{headerData.jobTitle}</h2>
            </div>
            <div className="ats-contact-info">{contactItems}</div>
        </header>
    )
}

const ATSTemplate = ({ className = '' }) => {
    return (
        <div className={`ats-template-container ${className}`}>
            <main className="ats-main">
                <ATSHeader />
                <section className="ats-section">
                    <h3 className="ats-section-title">Summary</h3>
                    <AboutMeSection />
                </section>
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ATSSkillsSection />
            </main>
        </div>
    )
}

export default ATSTemplate