import { useSearchParams, useNavigate } from 'react-router-dom';
import ModernTemplate from '../templates/modernTemplate/ModernTemplate';
import ATSTemplate from '../templates/atsTemplate/ATSTemplate';
import '../styles/PrintPage.css';

export default function PrintPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const template = searchParams.get('template') || 'modern';
  
  return (
    <div className="simple-print-page">
      <div className="print-controls">
        <button onClick={() => navigate('/')} className="control-button">Home</button>
        <button onClick={() => window.print()} className="control-button">Print</button>
      </div>
      
      <div className="resume-content">
        {template === 'modern' && <ModernTemplate />}
        {template === 'ats' && <ATSTemplate />}
      </div>
    </div>
  );
}