import { resumeContext } from "../context/resumeContext"
import { useState } from "react";
import { resumeDefault, example } from "../data/defaultJson";

export default function ResumeProvider({children}) {
    const [resumeData, setResumeData] = useState(resumeDefault)

    function clearData() {
        setResumeData(resumeDefault)
    }

    function loadExample() {
        setResumeData(example)
    }

    function exportResumeJson() {
        const jsonString = JSON.stringify(resumeData, null, 2);
        
        // Create a blob and download link
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        
        // Create download link and trigger click
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'resume-data.json';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Clean up
        URL.revokeObjectURL(url);
    }
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData, clearData, loadExample, exportResumeJson}}>
            {children}
        </resumeContext.Provider>
    )
}