import SidebarPhoto from './SidebarPhoto'
import ContactSection from './ContactSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'
import styles from '../ModernTemplate.module.css'

export default function ResumeSidebar({ resumeData }) {
  return (
    <div className={styles.resumeSidebar}>
      <SidebarPhoto personalInfo={resumeData?.personalInfo} />
      <ContactSection personalInfo={resumeData?.personalInfo} />
      <AboutMeSection summary={resumeData?.personalInfo?.summary} />
      <SkillsSection skills={resumeData?.skills} />
    </div>
  )
}
