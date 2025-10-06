import styles from './CleanTemplate.module.css'
import CleanHeader from './components/CleanHeader'
import CleanMain from './components/CleanMain'

export default function CleanTemplate({ resumeData, accentColor = '' }) {
  const templateAccentColor = accentColor || '#000000'

  return (
    <div
      className={styles.cleanContent}
      style={{ '--accent-color': templateAccentColor }}
    >
      <CleanHeader personalInfo={resumeData.personalInfo} />
      <CleanMain resumeData={resumeData} />
    </div>
  )
}
