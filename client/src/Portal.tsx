import React, { useEffect, useState } from 'react';
import SuggestionBox from './SuggestionBox.tsx';
import ProjectStatus from './ProjectStatus.tsx';
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

export interface Project {
  name: string;
  description: string;
  tags?: string[];
  status: string;
  status_color: string;
};

interface PortalProps {
  projects: Project[];
  similarProjects: Project[];
};

const DONE_STATUS = 'Zrobione';

const Portal = ({projects}: PortalProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  useEffect(() => {
    // setTimeout(() => {
    //     setIsActive(true);
    // }, 500);
  }, []);

  const closeModal = () => setIsActive(false);

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
      name: 'Szkoła Empatii',
      short_description: 'Warsztaty uczące empatii i budowania zdrowych relacji dla dzieci z różnych środowisk.',
      image: '/static/empathyschool.webp',
      values: ['empatia', 'relacje', 'integracja', 'wzajemność']
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
            <h2 className="title is-4">Impact Flow - Twoje aktualne projekty</h2>
            <div className="grid">
              {projects.filter(p => p.status !== DONE_STATUS).map((project) => <div key={project.name} className="cell">
                <ProjectStatus
                  projectName={project.name}
                  status={project.status} status_color={project.status_color} statusText={project.status}/></div>)}
              {projects.length > 0 || <div className="skeleton-block"></div>}
              {projects.length > 0 || <div className="skeleton-block"></div>}
              {projects.length > 0 || <div className="skeleton-block"></div>}
            </div>
          </div>
        </div>
      </div>
      <SuggestionBox projects={similarProjects}/>
      <ProjectListWithShare projects={projects.filter(p => p.status === DONE_STATUS)} onShareToFacebook={() => {
      }} onShareToInstagram={() => {
      }} onShareToLinkedIn={() => {
      }}/>
      <div className="grid is-col-min-12">
        <div className="cell"></div>
      </div>
      <GenerateReport imageUrl="/static/report.webp" onGenerateReport={() => alert('Raport wygenerowany!')}/>
    </div>
  )
    ;
}

export default Portal;
