import { useMemo } from 'react';
import useResume from '../../../context/resumeContext';

export default function EducationSection() {
    const { resumeData } = useResume();
    
    const education = useMemo(() => {
        return resumeData.education || [];
    }, [resumeData.education]);
    
    // Hide the section if there is no education
    if (education.length === 0) {
        return null;
    }
    
    return (
        <div className="resume-section">
            <div className="resume-section-title">EDUCATION</div>
            <div id="previewEducation">
                {education.map((edu, index) => (
                    <div key={index} className="resume-item">
                        <div className="resume-item-header">
                            <div className="resume-item-title">{edu.school}</div>
                            <div className="resume-item-date">{edu.startDate} - {edu.endDate}</div>
                        </div>
                        <div className="resume-item-subtitle">{edu.degree}</div>
                        <div className="resume-item-location">{edu.location}</div>
                        {edu.gpa && <div className="resume-item-detail">GPA: {edu.gpa}</div>}
                        {edu.courses && <div className="resume-item-detail">Courses: {edu.courses}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}