import React, { useEffect, useState } from 'react';
import SuggestionBox from './SuggestionBox.tsx';
import ProjectStatus from './ProjectStatus.tsx';
import LineChart from './Chart.tsx';
import GenerateReport from './GenerateReport.tsx';
import ProjectListWithShare from './ProjectListWithShare.tsx';

const currentProjects1 = [
    {
        name: 'Project 1',
        progress: 50,
        deadline: '2022-03-31',
        status: 'On Track',
        statusText: 'Wszytko ok',
    },
    {
        name: 'Project 2',
        progress: 100,
        deadline: '2022-04-15',
        status: 'On Track',
        statusText: 'Wszytko ok',
    },
    {
        name: 'Project 3',
        progress: 75,
        deadline: '2022-05-01',
        status: 'Delayed',
        statusText: 'Potrzebna pomoc!',
    },
];

const Portal = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    useEffect(() => {
        // setTimeout(() => {
        //     setIsActive(true);
        // }, 500);
    }, []);

    const closeModal = () => setIsActive(false);

    const currentProjects = [
        {
            name: 'Strefa Ucznia',
            short_description: 'Bezpłatne korepetycje i wsparcie w odrabianiu zadań dla dzieci z trudnościami edukacyjnymi.',
        },
        {
            name: 'Przestrzeń Dialogu',
            short_description: 'Zajęcia uczące umiejętności komunikacji i rozwiązywania konfliktów w grupie rówieśniczej.',
        },
        {
            name: 'Zdrowy Start',
            short_description: 'Program promujący zdrowe nawyki żywieniowe i aktywność fizyczną wśród dzieci.',
        },
        {
            name: 'Małe Rękodzieło',
            short_description: 'Warsztaty rękodzielnicze rozwijające umiejętności manualne i kreatywność dzieci.',
        },
        {
            name: 'Klub Młodego Czytelnika',
            short_description: 'Spotkania dla dzieci wspierające rozwój czytania i miłość do książek.',
        },
    ];

    const similarProjects = [
        {
            name: 'Akademia Równych Szans',
            short_description: 'Bezpłatne zajęcia wyrównawcze dla dzieci z rodzin o niskich dochodach.',
            image: '/static/academy.webp',
            values: ['równość', 'edukacja', 'wsparcie', 'dostępność']
        },
        {
            name: 'Klub Kreatywności',
            short_description: 'Warsztaty artystyczne i technologiczne dla dzieci z marginalizowanych środowisk.',
            image: '/static/creativeclub.webp',
            values: ['kreatywność', 'integracja', 'równość', 'rozwój']
        },
        {
            name: 'Młodzi Odkrywcy Świata',
            short_description: 'Zajęcia edukacyjne z przyrody i nauki dla dzieci z trudnych warunków.',
            image: '/static/youngexplorers.webp',
            values: ['inspiracja', 'nauka', 'zabawa', 'dostępność']
        },
        {
            name: 'Twój projekt!',
            short_description: 'Masz pomysł na projekt? Razem mozemy go zrealizować!',
            image: '/static/question.webp',
            values: [],
            altButtonText: 'Zgłoś'
        },
    ]

    return (
      <div className='section'>
          <div className={`modal ${isActive ? 'is-active' : ''}`}>
              <div className="modal-background"></div>
              <div className="modal-card">
                  <header className="modal-card-head">
                      <p className="modal-card-title">Witaj z powrotem!</p>
                      <button className="delete" aria-label="close" onClick={closeModal}></button>
                  </header>
                  <section className="modal-card-body">
                      <p>Dziękujemy że pomogłeś już w <b>{Math.floor(Math.random() * 10) + 1}</b> projektach w tym roku!
                          Jesteś super❤️! W tym portalu możesz zobaczyc przeszłe projekty jak również zaplanowac nowe!
                      </p>
                  </section>
                  <footer className="modal-card-foot">
                  </footer>
              </div>
          </div>
          <h1 className="title">ImpactCertified&reg; - Portal partnera</h1>
          <div className="grid is-col-min-12">
              <div className="cell">
                  <div className="box">
                      <h2 className="title is-4">Twoje aktualne projekty</h2>
                      <div className="grid">
                          {currentProjects1.map((project) => <div key={project.name} className="cell"><ProjectStatus
                            projectName={project.name} progress={project.progress} deadline={project.deadline}
                            status={project.status} statusText={project.statusText}/></div>)}
                      </div>
                  </div>
              </div>
          </div>
          <ProjectListWithShare projects={currentProjects} onShareToFacebook={() => {
          }} onShareToInstagram={() => {
          }} onShareToLinkedIn={() => {
          }}/>
          <div className="grid is-col-min-12">
              <div className="cell">

              </div>
          </div>
          <GenerateReport imageUrl="/static/report.webp" onGenerateReport={() => alert('Raport wygenerowany!')}/>
          <SuggestionBox projects={similarProjects}/>

      </div>
    );
}

export default Portal;
