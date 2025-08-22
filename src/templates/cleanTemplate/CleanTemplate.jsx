import styles from './CleanTemplate.module.css'
import CleanHeader from './components/CleanHeader'
import CleanMain from './components/CleanMain'

export default function CleanTemplate({ resumeData }) {
  return (
    <div className={styles.cleanContent}>
      <CleanHeader personalInfo={resumeData.personalInfo} />
      <CleanMain resumeData={resumeData} />
    </div>
  )
}
