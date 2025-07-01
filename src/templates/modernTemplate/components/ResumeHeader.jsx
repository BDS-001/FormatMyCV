import { useMemo } from 'react';
import useResume from '../../../context/resumeContext';

export default function ResumeHeader() {
    const { resumeData } = useResume();
    
    const headerData = useMemo(() => {
        return {
            fullName: resumeData.personalInfo.fullName,
            jobTitle: resumeData.personalInfo.jobTitle
        };
    }, [resumeData.personalInfo.fullName, resumeData.personalInfo.jobTitle]);
    
    return (
        <div className="resume-header">
            <div className="resume-name" id="previewName">{headerData.fullName}</div>
            <div className="resume-title" id="previewTitle">{headerData.jobTitle}</div>
        </div>
    );
}