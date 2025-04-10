import { useMemo } from 'react';
import useResume from '../../context/resumeContext';

export default function ContactSection() {
    const { resumeData } = useResume();
    
    const contactData = useMemo(() => {
        return {
            email: resumeData.personalInfo.email,
            phone: resumeData.personalInfo.phone,
            location: resumeData.personalInfo.location,
            linkedin: resumeData.personalInfo.linkedin,
            website: resumeData.personalInfo.website,
            github: resumeData.personalInfo.github
        };
    }, [
        resumeData.personalInfo.email,
        resumeData.personalInfo.phone, 
        resumeData.personalInfo.location,
        resumeData.personalInfo.linkedin,
        resumeData.personalInfo.website,
        resumeData.personalInfo.github
    ]);
    
    return (
        <div className="sidebar-section">
            <div className="sidebar-section-title">Contact</div>
            <div className="sidebar-section-content">
                <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                        <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"/>
                    </svg>
                    <div id="sidebarEmail" className="contact-text">{contactData.email}</div>
                </div>
                <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                        <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.1 14.8 15.7 14.9 15.5 15.1L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.9 8.5C9.1 8.3 9.2 7.9 9.1 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.4 8 3 7.5 3H4C3.4 3 3 3.4 3 4C3 13.4 10.6 21 20 21C20.6 21 21 20.6 21 20V16.5C21 15.9 20.6 15.5 20 15.5Z"/>
                    </svg>
                    <div id="sidebarPhone" className="contact-text">{contactData.phone}</div>
                </div>
                <div className="contact-item">
                    <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                    </svg>
                    <div id="sidebarLocation" className="contact-text">{contactData.location}</div>
                </div>
                {contactData.linkedin && (
                    <div className="contact-item" id="linkedinContainer">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H6.5V10H9V17ZM7.7 8.7C6.9 8.7 6.2 8 6.2 7.2C6.2 6.4 6.9 5.7 7.7 5.7C8.6 5.7 9.2 6.4 9.2 7.2C9.2 8 8.6 8.7 7.7 8.7ZM18 17H15.5V13.9C15.5 10.7 11 10.9 11 13.9V17H8.5V10H11V11.2C12.4 9.4 18 9.2 18 13.4V17Z"/>
                        </svg>
                        <div id="sidebarLinkedin" className="contact-text">{contactData.linkedin}</div>
                    </div>
                )}
                {contactData.website && (
                    <div className="contact-item" id="websiteContainer">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"/>
                        </svg>
                        <div id="sidebarWebsite" className="contact-text">{contactData.website}</div>
                    </div>
                )}
                {contactData.github && (
                    <div className="contact-item" id="githubContainer">
                        <svg className="contact-icon" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z"/>
                        </svg>
                        <div id="sidebarGithub" className="contact-text">{contactData.github}</div>
                    </div>
                )}
            </div>
        </div>
    );
}