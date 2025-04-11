import { resumeContext } from "../context/resumeContext"
import { useState } from "react";
import { resumeDefault } from "../data/defaultJson";

export default function ResumeProvider({children}) {
    const [resumeData, setResumeData] = useState(resumeDefault)

    function clearData() {
        setResumeData(resumeDefault)
    }
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData, clearData}}>
            {children}
        </resumeContext.Provider>
    )
}