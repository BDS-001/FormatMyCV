import styles from '../CleanTemplate.module.css'
import SummarySection from './SummarySection'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'

export default function CleanMain({ resumeData }) {
  return (
    <main className={styles.cleanMain}>
      <SummarySection summary={resumeData.personalInfo?.summary} />
      <ExperienceSection experience={resumeData.experience} />
      <EducationSection education={resumeData.education} />
      <ProjectsSection projects={resumeData.projects} />
      <SkillsSection skills={resumeData.skills} />
    </main>
  )
}
