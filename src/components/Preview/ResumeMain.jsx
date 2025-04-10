import ResumeHeader from './ResumeHeader'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'

export default function ResumeMain() {
    return (
        <div className="resume-main">
            <ResumeHeader />
            <ExperienceSection />
            <EducationSection />
            <ProjectsSection />
        </div>
    );
}