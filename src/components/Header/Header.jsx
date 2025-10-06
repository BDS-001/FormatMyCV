import styles from './Header.module.css'
import { useContext } from 'react'
import { resumeContext } from '../../context/resumeContext'

export default function Header({
  activeSection,
  onSectionClick,
  onClearClick,
  onJsonSettingsClick,
}) {
  const { loadExample } = useContext(resumeContext)

  return (
    <header className={styles.header}>
      <div className={styles.pill} role="group" aria-label="Editor sections">
        <span className={styles.sectionLabel}>Editor</span>
        {[
          'personal',
          'summary',
          'education',
          'experience',
          'skills',
          'projects',
          'accentColor',
        ].map(section => (
          <button
            key={section}
            className={`btn icon edit ${activeSection === section ? styles.active : ''}`}
            data-edit={
              section === 'personal'
                ? 'Personal Info'
                : section === 'accentColor'
                  ? 'Accent Color'
                  : section.charAt(0).toUpperCase() + section.slice(1)
            }
            onClick={() => onSectionClick(section)}
          >
            <span>
              {section === 'personal'
                ? 'Personal Info'
                : section === 'accentColor'
                  ? 'Accent Color'
                  : section.charAt(0).toUpperCase() + section.slice(1)}
            </span>
          </button>
        ))}
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.pill} role="group" aria-label="Controls">
        <span className={styles.sectionLabel}>Controls</span>
        <button className="btn ghost" onClick={loadExample}>
          Load Example
        </button>
        <button className="btn ghost" onClick={onClearClick}>
          Clear Resume
        </button>
        <button className="btn brand" onClick={onJsonSettingsClick}>
          JSON Settings
        </button>
      </div>
    </header>
  )
}
