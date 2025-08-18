import SidebarPhoto from './SidebarPhoto'
import ContactSection from './ContactSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'
import styles from '../ModernTemplate.module.css'

export default function ResumeSidebar() {
  return (
    <div className={styles.resumeSidebar}>
      <SidebarPhoto />
      <ContactSection />
      <AboutMeSection />
      <SkillsSection />
    </div>
  )
}
