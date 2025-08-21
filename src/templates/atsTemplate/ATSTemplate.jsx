import styles from './ATSTemplate.module.css'
import { useMemo } from 'react'
import useResume from '../../context/resumeContext'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import SummarySection from './components/SummarySection'
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
      github: personalInfo.github,
    }
  }, [resumeData])

  const contactItems = useMemo(() => {
    const items = [
      headerData.email,
      headerData.phone,
      headerData.location,
      headerData.linkedin && `LinkedIn: ${headerData.linkedin}`,
      headerData.github && `GitHub: ${headerData.github}`,
      headerData.website && `Portfolio: ${headerData.website}`,
    ]
    return items.filter(Boolean).join(' | ')
  }, [headerData])

  return (
    <header className={styles.atsHeader}>
      <div className={styles.atsNameTitle}>
        <h1 className={styles.atsName}>{headerData.fullName}</h1>
        <h2 className={styles.atsTitle}>{headerData.jobTitle}</h2>
      </div>
      <div className={styles.atsContactInfo}>{contactItems}</div>
    </header>
  )
}

const ATSTemplate = () => {
  return (
    <div className={styles.atsContent}>
      <main className={styles.atsMain}>
        <ATSHeader />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ATSSkillsSection />
      </main>
    </div>
  )
}

export default ATSTemplate
