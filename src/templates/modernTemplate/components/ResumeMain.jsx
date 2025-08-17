import ResumeHeader from './ResumeHeader'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import styles from '../ModernTemplate.module.css'

export default function ResumeMain() {
    return (
        <div className={styles.resumeMain}>
            <ResumeHeader />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
        </div>
    );
}