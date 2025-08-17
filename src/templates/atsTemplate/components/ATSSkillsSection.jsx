import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const ATSSkillsSection = () => {
    const { resumeData } = useResume()
    
    const skills = useMemo(() => resumeData.skills || [], [resumeData.skills])
    
    if (skills.length === 0) return null
    
    return (
        <section className={styles.atsSection}>
            <h3 className={styles.atsSectionTitle}>Skills</h3>
            <div className={styles.atsSkillsSection}>
                <ul className={styles.skillsList}>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ATSSkillsSection