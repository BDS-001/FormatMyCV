import styles from './AtsTemplate.module.css'
import Header from './components/Header'
import SummarySection from './components/SummarySection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import EducationSection from './components/EducationSection'

export default function AtsTemplate({ resumeData, accentColor = '' }) {
  const templateAccentColor = accentColor || '#000000'

  return (
    <div
      className={styles.uniContent}
      style={{ '--accent-color': templateAccentColor }}
    >
      <Header personalInfo={resumeData.personalInfo} />
      <main className={styles.uniMain}>
        <SummarySection summary={resumeData.personalInfo?.summary} />
        <SkillsSection skills={resumeData.skills} />
        <ExperienceSection experience={resumeData.experience} />
        <ProjectsSection projects={resumeData.projects} />
        <EducationSection education={resumeData.education} />
      </main>
    </div>
  )
}
