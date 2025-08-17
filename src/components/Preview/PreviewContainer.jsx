import styles from './PreviewContainer.module.css'
import ModernTemplate from '../../templates/modernTemplate/ModernTemplate'
import ATSTemplate from '../../templates/atsTemplate/ATSTemplate'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { resumeContext } from '../../context/resumeContext'

export default function PreviewContainer() {
    const { currentTemplate, setCurrentTemplate } = useContext(resumeContext)
    const navigate = useNavigate()

    const handleTemplateChange = (e) => {
        setCurrentTemplate(e.target.value)
    }

    const handlePrint = () => {
        navigate(`print?template=${currentTemplate}`)
    }

    return (
        <div>
            <div className={styles.previewHeader}>
                <h1>Resume Preview</h1>
                <div className={styles.headerControls}>
                    <select value={currentTemplate} onChange={handleTemplateChange} className={styles.templateSelector}>
                        <option value="modern">Modern</option>
                        <option value="ats">ATS Optimized</option>
                    </select>
                    <button onClick={handlePrint} className={styles.printButton}>
                        Go to Print
                    </button>
                </div>
            </div>
            
            <div>
                {currentTemplate === 'modern' && <ModernTemplate />}
                {currentTemplate === 'ats' && <ATSTemplate />}
            </div>
        </div>
    );
}