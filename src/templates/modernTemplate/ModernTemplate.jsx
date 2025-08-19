import styles from './ModernTemplate.module.css'
import ResumeSidebar from './components/ResumeSidebar'
import ResumeMain from './components/ResumeMain'

export default function ModernTemplate() {
  return (
    <div className={styles.modernContent}>
      <ResumeSidebar />
      <ResumeMain />
    </div>
  )
}
