import './ModernTemplate.css'
import ResumeSidebar from './components/ResumeSidebar'
import ResumeMain from './components/ResumeMain'

export default function ModernTemplate({ className = '' }) {
    return (
        <div className={`modern-template-container ${className}`}>
            <ResumeSidebar />
            <ResumeMain />
        </div>
    )
}