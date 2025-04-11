# FormatMyCV

A sleek, responsive resume builder application to help you format resumes with ease. Originally built as a personal project using vanilla HTML, CSS, and JavaScript, FormatMyCV has now evolved into a fully-featured React application.

## 🌟 Features

- **Intuitive Form Interface**: Easy-to-use form for entering your resume details
- **Real-time Preview**: See your changes reflected instantly in the resume preview
- **Professional Template**: Clean, modern resume design with customizable sections
- **Export Options**: Save your resume as a PDF with print functionality
- **Data Management**: Import and export your resume data in JSON format
- **Example Resume**: Load an example resume to get started quickly
- **Responsive Design**: Looks great on desktop and mobile devices

## 📋 Sections Included

- Personal Information
- Professional Summary
- Work Experience
- Education
- Skills
- Projects

## 📄 JSON Data Template

```json
{
  "personalInfo": {
    "fullName": "",
    "jobTitle": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "github": "",
    "website": "",
    "summary": ""
  },
  "education": [
    {
      "school": "",
      "degree": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "gpa": "",
      "courses": ""
    }
  ],
  "experience": [
    {
      "company": "",
      "position": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "responsibilities": ""
    }
  ],
  "skills": [
    ""
  ],
  "projects": [
    {
      "title": "",
      "description": "",
      "link": ""
    }
  ]
}
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or newer)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/formatmycv.git
   cd formatmycv
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- Context API - State management

## 📱 Project Structure

```
formatmycv/
├── src/
│   ├── components/
│   │   ├── App.jsx                # Main application component
│   │   ├── Form/                  # Form components
│   │   │   ├── FormContainer.jsx  # Container for all form sections
│   │   │   ├── PersonalInfo.jsx   # Personal information section
│   │   │   ├── Summary.jsx        # Professional summary section
│   │   │   ├── Education.jsx      # Education section
│   │   │   ├── WorkExperience.jsx # Work experience section
│   │   │   ├── Skills.jsx         # Skills section
│   │   │   ├── Projects.jsx       # Projects section
│   │   │   └── ConfirmationModal.jsx # Confirmation dialog
│   │   └── Preview/               # Resume preview components
│   │       ├── PreviewContainer.jsx # Container for resume preview
│   │       ├── ResumeSidebar.jsx  # Sidebar of the resume
│   │       ├── ResumeMain.jsx     # Main content of the resume
│   │       ├── ResumeHeader.jsx   # Header of the resume
│   │       ├── ContactSection.jsx # Contact information section
│   │       ├── AboutMeSection.jsx # Summary section
│   │       ├── EducationSection.jsx # Education section
│   │       ├── ExperienceSection.jsx # Experience section
│   │       ├── ProjectsSection.jsx # Projects section
│   │       ├── SkillsSection.jsx  # Skills section
│   │       └── SidebarPhoto.jsx   # Profile photo/initials
│   ├── context/                   # React context for state management
│   │   └── resumeContext.jsx      # Resume context provider
│   ├── data/                      # Data files
│   │   └── defaultJson.js         # Default and example resume data
│   ├── provider/                  # Context providers
│   │   └── resumeProvider.jsx     # Resume provider component
│   ├── styles/                    # CSS stylesheets
│   │   ├── index.css              # Global styles
│   │   ├── App.css                # App component styles
│   │   ├── FormContainer.css      # Form styles
│   │   ├── PreviewContainer.css   # Preview styles
│   │   └── ConfirmationModal.css  # Modal styles
│   └── main.jsx                   # Entry point
└── ...
```

## 🖨️ Printing Your Resume

To save your resume as a PDF:

1. Click the "Print / Save PDF" button in the preview section
2. In the print dialog, select "Save as PDF" as the destination
3. Click "Save" to download your resume as a PDF file

## 💾 Importing and Exporting Data

- **Export Data**: Click the "Export Data" button to save your resume data as a JSON file
- **Import Data**: Click the "Import Data" button to load previously saved resume data

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.