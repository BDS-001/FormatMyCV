import { useMemo } from 'react'
import useResume from '../../../context/resumeContext'
import styles from '../ATSTemplate.module.css'

const EducationSection = () => {
    const { resumeData } = useResume()
    
    const education = useMemo(() => resumeData.education || [], [resumeData.education])
    
    if (education.length === 0) return null
    
    return (
        <section className={styles.resumeSection}>
            <h3 className={styles.resumeSectionTitle}>EDUCATION</h3>
            <div>
                {education.map((edu, index) => (
                    <article key={index} className={styles.resumeItem}>
                        <header className={styles.resumeItemHeader}>
                            <h4 className={styles.resumeItemTitle}>{edu.school}</h4>
                            <time className={styles.resumeItemDate}>{edu.startDate} - {edu.endDate}</time>
                        </header>
                        <div className={styles.resumeItemSubtitle}>{edu.degree}</div>
                        <div className={styles.resumeItemLocation}>{edu.location}</div>
                        {edu.gpa && <div className={styles.resumeItemDetail}>GPA: {edu.gpa}</div>}
                        {edu.courses && <div className={styles.resumeItemDetail}>Courses: {edu.courses}</div>}
                    </article>
                ))}
            </div>
        </section>
    )
}

export default EducationSection