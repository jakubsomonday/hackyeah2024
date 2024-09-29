import React, { useEffect, useState } from 'react';
import SuggestionBox from './SuggestionBox.tsx';
import ProjectStatus from './ProjectStatus.tsx';
import GenerateReport from './GenerateReport.tsx';
import ProjectListWithShare from './ProjectListWithShare.tsx';

export interface Project {
    name: string;
    description: string;
    tags?: string[];
    status: string;
    status_color: string;
    companies: string[];
    altButtonText?: string;
    logo?: string;
};

interface PortalProps {
  projects: Project[];
  similarProjects: Project[];
};

const DONE_STATUS = 'Zrobione';

const Portal = ({ projects, similarProjects }: PortalProps) => {
    console.log(similarProjects);
    
    const [isActive, setIsActive] = useState<boolean>(false);
    useEffect(() => {
        // TBD: Uncomment this code to show the welcome modal on page load
        // setTimeout(() => {
        //     setIsActive(true);
        // }, 500);
    }, []);

  const closeModal = () => setIsActive(false);

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
                          {projects.filter(p => p.status !== DONE_STATUS).map((project) => <div key={project.name} className="cell">
                            <ProjectStatus
                                projectName={project.name}
                                status_color={project.status_color}
                                statusText={project.status}/>
                            </div>)}
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
              <div className="cell">

              </div>
          </div>
          <GenerateReport imageUrl="/static/report.webp" onGenerateReport={() => alert('Raport wygenerowany!')}/>
    </div>
  )
    ;
}

export default Portal;
