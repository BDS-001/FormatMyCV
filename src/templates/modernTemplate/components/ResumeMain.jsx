import ResumeHeader from './ResumeHeader'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import styles from '../ModernTemplate.module.css'

export default function ResumeMain({ resumeData }) {
  return (
    <div className={styles.resumeMain}>
      <ResumeHeader personalInfo={resumeData?.personalInfo} />
      <ExperienceSection experience={resumeData?.experience} />
      <EducationSection education={resumeData?.education} />
      <ProjectsSection projects={resumeData?.projects} />
    </div>
  )
}
