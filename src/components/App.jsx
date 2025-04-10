import '../styles/App.css'
import ResumeProvider from '../provider/resumeProvider'
import FormContainer from './Form/FormContainer'
import PreviewContainer from './Preview/PreviewContainer'

function App() {


  return (
    <ResumeProvider>
      <div className="container">
        <FormContainer/>
        <PreviewContainer/>
      </div>
      </ResumeProvider>
  )
}

export default App
