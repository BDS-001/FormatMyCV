import '../styles/App.css'
import ResumeProvider from '../provider/resumeProvider'
import FormContainer from './FormContainer'

function App() {


  return (
    <ResumeProvider>
      <div className="container">
        <FormContainer/>
      </div>
      </ResumeProvider>
  )
}

export default App
