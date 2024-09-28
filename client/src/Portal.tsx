import React, { useEffect, useState } from 'react';
import SuggestionBox from './SuggestionBox.tsx';
import ProjectStatus from './ProjectStatus.tsx';
import LineChart from './Chart.tsx';
import GenerateReport from './GenerateReport.tsx';

const currentProjects = [
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
        setTimeout(() => {
            setIsActive(true);
        }, 500);
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
                        <p>Dziękujemy że pomogłeś już w <b>{Math.floor(Math.random() * 10) + 1}</b> projektach w tym roku! Jesteś super❤️! W tym portalu możesz zobaczyc przeszłe projekty jak również zaplanowac nowe!</p>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
            <h1 className="title">Portal partnera</h1>
            <div className="grid is-col-min-12">
                <div className="cell">
                    Tu możesz zobaczyć swoje przeszłe projekty oraz zaplanować nowe!

                    Jest to najlpesze miejsce do zarządzania swoimi projektami!
                    <LineChart />
                        
                </div>
                <div className="cell">
                    <div className="box">
                        <h2 className="title is-4">Twoje aktualne projekty</h2>
                        <div className="grid">
                            {currentProjects.map((project) => <div key={project.name} className="cell"><ProjectStatus projectName={project.name} progress={project.progress} deadline={project.deadline} status={project.status} statusText={project.statusText} /></div>)}
                        </div>
                    </div>
                </div>
            </div>
            <GenerateReport imageUrl="/static/report.webp" onGenerateReport={() => alert('Raport wygenerowany!')} />
            <SuggestionBox />
        </div>
    );
}

export default Portal;
