import { resumeContext } from "../context/resumeContext"
import { useState, useCallback } from "react";
import { resumeDefault, example } from "../data/defaultJson";

export default function ResumeProvider({children}) {
    const [resumeData, setResumeData] = useState(resumeDefault)

    const clearData = useCallback(() => {
        setResumeData(resumeDefault)
    }, []);

    const loadExample = useCallback(() => {
        setResumeData(example)
    }, []);

    const exportResumeJson = useCallback(() => {
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
    }, [resumeData]);

    const importResumeJson = useCallback((event) => {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const importedResumeData = JSON.parse(e.target.result);
                setResumeData({...resumeDefault, ...importedResumeData});
                
                alert('Resume data imported successfully!');
                
            } catch (error) {
                console.error('Error importing resume data:', error);
                alert('Error importing resume data. Please check if the file format is correct.');
            }
            
            // Reset file input
            event.target.value = '';
        };
        
        reader.readAsText(file);
    }, []);
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData, clearData, loadExample, exportResumeJson, importResumeJson}}>
            {children}
        </resumeContext.Provider>
    )
}