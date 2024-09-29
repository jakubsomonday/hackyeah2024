import React from 'react';
import LineChart from './Chart.tsx';


interface GenerateReportProps {
  imageUrl: string;
  onGenerateReport: () => void;
}

const GenerateReport: React.FC<GenerateReportProps> = ({imageUrl, onGenerateReport}) => {
  const aggregatedCount = 10;
  return (
    <div className='suggestion-box box'>
      <h2 className='title is-4'>Impact Reports</h2>
      <div className='suggestion-list columns is-multiline'>
        <div className="reports-chart">
          <LineChart/>
        </div>
        <div className="reports-suggestion">
          <div className='image' style={{width: '150px', height: '150px', margin: '2rem'}}>
            <i className="fa-solid fa-file-invoice is-align-items-center" style={{fontSize: '9em'}}></i>
          </div>
          <div className='content'>
            <h2 className='title is-4'>Pobierz raport</h2>
            <p>W zeszlym roku wsparles <b>{aggregatedCount}</b> projektów! <br/><br/>Pobierz podsumowanie projektów,
              które
              wykorzystasz w swoim raporcie ESG. Nasze raporty są zgodne z najnowszymi wytycznymi UE dot. raportowania
              działań CSR/ESG.</p>
            <button className='button is-danger mt-3 has-text-white report-button' onClick={onGenerateReport}>Pobierz
              raport
              ESG
            </button>
            <button className='button is-danger mt-3 has-text-white report-button' onClick={onGenerateReport}>Pobierz
              raport
              CSR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReport;
