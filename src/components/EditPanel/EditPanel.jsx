import { useContext } from 'react'
import { editorContext } from '../../context/editContext'
import PersonalInfo from '../Form/PersonalInfo'
import Summary from '../Form/Summary'
import Education from '../Form/Education'
import WorkExperience from '../Form/WorkExperience'
import Skills from '../Form/Skills'
import Projects from '../Form/Projects'
import AccentColor from '../Form/AccentColor'
import styles from './EditPanel.module.css'

export default function EditPanel() {
  const { activeSection, isEditPanelOpen, closeEditPanel } =
    useContext(editorContext)

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfo />
      case 'summary':
        return <Summary />
      case 'education':
        return <Education />
      case 'experience':
        return <WorkExperience />
      case 'skills':
        return <Skills />
      case 'projects':
        return <Projects />
      case 'accentColor':
        return <AccentColor />
      default:
        return null
    }
  }

  return (
    <div
      className={`${styles.editPanel} ${isEditPanelOpen ? styles.open : ''} noPrint`}
    >
      <div className={styles.editPanelContent}>
        {isEditPanelOpen && (
          <>
            <div className={styles.editPanelHeader}>
              <h2>
                {activeSection?.charAt(0).toUpperCase() +
                  activeSection?.slice(1)}
              </h2>
              <button className={styles.closePanelBtn} onClick={closeEditPanel}>
                ×
              </button>
            </div>
            <div className={styles.editPanelForm}>{renderActiveSection()}</div>
          </>
        )}
      </div>
    </div>
  )
}
