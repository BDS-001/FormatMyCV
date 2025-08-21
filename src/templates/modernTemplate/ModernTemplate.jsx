import styles from './ModernTemplate.module.css'
import ResumeSidebar from './components/ResumeSidebar'
import ResumeMain from './components/ResumeMain'

export default function ModernTemplate({ resumeData }) {
  return (
    <div className={styles.modernContent}>
      <ResumeSidebar resumeData={resumeData} />
      <ResumeMain resumeData={resumeData} />
    </div>
  )
}
