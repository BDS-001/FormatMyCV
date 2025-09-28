import styles from './ATSTemplate.module.css'
import ATSHeader from './components/ATSHeader'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'
import ProjectsSection from './components/ProjectsSection'
import SummarySection from './components/SummarySection'
import ATSSkillsSection from './components/ATSSkillsSection'

const ATSTemplate2 = ({ resumeData }) => {
  return (
    <div className={styles.atsContent}>
      <main className={styles.atsMain}>
        <ATSHeader personalInfo={resumeData.personalInfo} />
        <SummarySection summary={resumeData.personalInfo?.summary} />
        <ExperienceSection experience={resumeData.experience} />
        <EducationSection education={resumeData.education} />
        <ProjectsSection projects={resumeData.projects} />
        <ATSSkillsSection skills={resumeData.skills} />
      </main>
    </div>
  )
}

export default ATSTemplate2
