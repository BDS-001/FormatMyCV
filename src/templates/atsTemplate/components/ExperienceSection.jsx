import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const ExperienceSection = () => {
    const { resumeData } = useResume()
    
    const experience = useMemo(() => resumeData.experience || [], [resumeData.experience])
    
    if (experience.length === 0) return null
    
    const formatResponsibilities = (responsibilities) => ({
        __html: responsibilities.replace(/\n/g, '<br/>')
    })
    
    return (
        <section className={styles.resumeSection}>
            <h3 className={styles.resumeSectionTitle}>EXPERIENCE</h3>
            <div>
                {experience.map((exp, index) => (
                    <article key={index} className={styles.resumeItem}>
                        <header className={styles.resumeItemHeader}>
                            <h4 className={styles.resumeItemTitle}>{exp.position}</h4>
                            <time className={styles.resumeItemDate}>{exp.startDate} - {exp.endDate}</time>
                        </header>
                        <div className={styles.resumeItemSubtitle}>{exp.company} | {exp.location}</div>
                        <div 
                            className={styles.resumeItemDescription}
                            dangerouslySetInnerHTML={formatResponsibilities(exp.responsibilities)}
                        />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection