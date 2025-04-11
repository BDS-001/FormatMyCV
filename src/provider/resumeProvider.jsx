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
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData, clearData, loadExample}}>
            {children}
        </resumeContext.Provider>
    )
}