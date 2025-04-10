import { resumeContext } from "../context/resumeContext"
import { useState } from "react";
import { resumeDefault } from "../data/defaultJson";

export default function ResumeProvider({children}) {
    const [resumeData, setResumeData] = useState(resumeDefault)
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData}}>
            {children}
        </resumeContext.Provider>
    )
}