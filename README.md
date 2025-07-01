# FormatMyCV

A sleek, responsive resume builder application with multiple professional templates. Originally built as a personal project using vanilla HTML, CSS, and JavaScript, FormatMyCV has now evolved into a fully-featured React application with a modular template architecture.

## 🌟 Features

- **Multiple Professional Templates**: Choose between Modern and ATS-Optimized resume designs
- **Modular Template System**: Self-contained templates with their own components and styling
- **Intuitive Form Interface**: Easy-to-use form for entering your resume details
- **Real-time Preview**: See your changes reflected instantly in the resume preview
- **Template Switching**: Switch between templates with a single click
- **Export Options**: Save your resume as a PDF with print functionality
- **Data Management**: Import and export your resume data in JSON format
- **Example Resume**: Load an example resume to get started quickly
- **Responsive Design**: Looks great on desktop and mobile devices
- **Page Cutoff Indicator**: Visual indicator showing content that may be cut off when printing

## 🎨 Available Templates

### Modern Template
- **Design**: Two-column layout with sidebar and main content
- **Features**: Colorful design with primary/secondary color scheme
- **Best For**: Creative professionals, designers, modern industries
- **Layout**: Sidebar (contact, skills, summary) + Main content (experience, education, projects)

### ATS Optimized Template
- **Design**: Single-column, clean black-and-white layout
- **Features**: ATS-friendly formatting with consistent font sizing
- **Best For**: Corporate environments, automated resume screening
- **Layout**: Linear layout optimized for Applicant Tracking Systems

## 📋 Sections Included

- Personal Information (Name, Job Title, Contact Details)
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
- Modular CSS - Template-specific styling

## 🏗️ Architecture

FormatMyCV uses a modular template architecture where each template is completely self-contained:

### Template Structure
```
src/templates/
├── modernTemplate/
│   ├── ModernTemplate.jsx      # Main template component
│   ├── ModernTemplate.css      # Template-specific styles
│   └── components/             # Template-specific components
│       ├── ResumeSidebar.jsx
│       ├── ResumeMain.jsx
│       ├── ResumeHeader.jsx
│       ├── ContactSection.jsx
│       ├── AboutMeSection.jsx
│       ├── EducationSection.jsx
│       ├── ExperienceSection.jsx
│       ├── ProjectsSection.jsx
│       ├── SkillsSection.jsx
│       └── SidebarPhoto.jsx
└── atsTemplate/
    ├── ATSTemplate.jsx         # Main template component
    ├── ATSTemplate.css         # Template-specific styles
    └── components/             # Template-specific components
        ├── ExperienceSection.jsx
        ├── EducationSection.jsx
        ├── ProjectsSection.jsx
        ├── AboutMeSection.jsx
        └── ATSSkillsSection.jsx
```

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
│   │   └── Preview/               # Preview system
│   │       └── PreviewContainer.jsx # Main preview container
│   ├── templates/                 # Modular template system
│   │   ├── modernTemplate/        # Modern template module
│   │   └── atsTemplate/           # ATS template module
│   ├── context/                   # React context for state management
│   │   └── resumeContext.jsx      # Resume context provider
│   ├── data/                      # Data files
│   │   └── defaultJson.js         # Default and example resume data
│   ├── provider/                  # Context providers
│   │   └── resumeProvider.jsx     # Resume provider component
│   ├── styles/                    # Global CSS stylesheets
│   │   ├── index.css              # Global styles
│   │   ├── App.css                # App component styles
│   │   ├── FormContainer.css      # Form styles
│   │   ├── PreviewContainer.css   # Preview container styles
│   │   └── ConfirmationModal.css  # Modal styles
│   └── main.jsx                   # Entry point
└── ...
```

## 🎨 Adding New Templates

To add a new template:

1. Create a new directory in `src/templates/` (e.g., `src/templates/yourTemplate/`)
2. Create the main template component (`YourTemplate.jsx`)
3. Create template-specific CSS (`YourTemplate.css`)
4. Add any template-specific components in a `components/` subdirectory
5. Update the template selector in `PreviewContainer.jsx`

Each template should be completely self-contained with its own:
- Main component
- CSS styles with scoped class names
- Any template-specific components
- Print media queries

## 🖨️ Printing Your Resume

To save your resume as a PDF:

1. Select your preferred template using the template selector
2. Click the "Print / Save PDF" button in the preview section
3. In the print dialog, select "Save as PDF" as the destination
4. Click "Save" to download your resume as a PDF file

The page cutoff indicator shows content that may appear on a second page when printing.

## 💾 Importing and Exporting Data

- **Export Data**: Click the "Export Data" button to save your resume data as a JSON file
- **Import Data**: Click the "Import Data" button to load previously saved resume data
- **Example Data**: Click "Load Example" to populate the form with sample resume data

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or bug fixes.

### Areas for Contribution
- New resume templates
- UI/UX improvements
- Additional export formats
- Performance optimizations
- Accessibility enhancements

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.