import { resumeContext } from "../context/resumeContext"
import { useState } from "react";

export default function ResumeProvider({children}) {
    const [resumeData, setResumeData] = useState({})
    
    return (
        <resumeContext.Provider value={{resumeData, setResumeData}}>
            {children}
        </resumeContext.Provider>
    )
}