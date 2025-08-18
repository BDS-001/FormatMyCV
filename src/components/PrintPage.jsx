import { useSearchParams, useNavigate } from 'react-router-dom'
import ModernTemplate from '../templates/modernTemplate/ModernTemplate'
import ATSTemplate from '../templates/atsTemplate/ATSTemplate'
import styles from './PrintPage.module.css'

export default function PrintPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const template = searchParams.get('template') || 'modern'

  return (
    <div className={styles.printPageWrapper}>
      <div className={`${styles.printControls} ${styles.noPrint}`}>
        <button onClick={() => navigate('/')} className="btn icon">
          Home
        </button>
        <button onClick={() => window.print()} className="btn icon">
          Print
        </button>
      </div>

      <div className={styles.templateContainer}>
        {template === 'modern' && <ModernTemplate />}
        {template === 'ats' && <ATSTemplate />}
      </div>
    </div>
  )
}
