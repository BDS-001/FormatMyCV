import styles from './ModernTemplate.module.css'
import ResumeSidebar from './components/ResumeSidebar'
import ResumeMain from './components/ResumeMain'

export default function ModernTemplate({ resumeData, accentColor = '' }) {
  const templateAccentColor = accentColor || '#57372c'

  return (
    <div
      className={styles.modernContent}
      style={{
        '--accent-color': templateAccentColor,
        '--accent-color-light': `${templateAccentColor}1a`,
        '--accent-color-border': `${templateAccentColor}4d`,
      }}
    >
      <ResumeSidebar resumeData={resumeData} />
      <ResumeMain resumeData={resumeData} />
    </div>
  )
}
