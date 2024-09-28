import React from 'react';
import FontAwesomeIcon from '@fortawesome/fontawesome-free'

interface GenerateReportProps {
  imageUrl: string;
  onGenerateReport: () => void;
}

const GenerateReport: React.FC<GenerateReportProps> = ({ imageUrl, onGenerateReport }) => {
  const aggregatedCount = 10;
  return (
    <div className='box is-flex is-align-items-center'>
      <div className='image' style={{ width: '150px', height: '150px', marginLeft: '1.5rem' }}>
        <i className="fa-solid fa-file-invoice is-align-items-center" style={{ fontSize: '9em' }}></i>
      </div>
      <div className='content'>
        <h2 className='title is-4'>Generuj Raport</h2>
        <p>W zeszlym roku wsparles {aggregatedCount} projektów! Klikajac w ponizszy guzik mozesz wygenerowac podsumowanie projektow i twojego udzialu w nich, ktory mozesz wykorzystac w swoim raporcie ESG</p>
        <button className='button is-danger mt-3' onClick={onGenerateReport}>Generuj PDF</button>
      </div>
    </div>
  );
};

export default GenerateReport;
