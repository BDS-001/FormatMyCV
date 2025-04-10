import SidebarPhoto from './SidebarPhoto'
import ContactSection from './ContactSection'
import AboutMeSection from './AboutMeSection'
import SkillsSection from './SkillsSection'

export default function ResumeSidebar() {
    return (
        <div className="resume-sidebar">
            <SidebarPhoto />
            <ContactSection />
            <AboutMeSection />
            <SkillsSection />
        </div>
    );
}