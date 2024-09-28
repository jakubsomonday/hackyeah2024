import React, { useEffect, useState } from 'react';
import SuggestionBox from './SuggestionBox.tsx';

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
                        <p>Dziękujemy że pomogłeś już w <b>{Math.floor(Math.random() * 10) + 1}</b> projektach! Jesteś super❤️! W tym portalu możesz zobaczyc przeszłe projekty jak również zaplanowac nowe!</p>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
            <h1 className="title">Portal partnera</h1>
            <p>Content for the partner portal.</p>
            <SuggestionBox />
        </div>
    );
}

export default Portal;
