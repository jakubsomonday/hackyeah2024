import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://serdeczna.org/wp-content/uploads/2021/06/Serdeczna-Fundacja-Hearty-logo-svg-1.svg" alt="Logo" style={{ width: '200px' }} />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic" href='/#'>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasic" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">O fundacji</a>
                    <a className="navbar-item" href="/">Projekty</a>
                    <a className="navbar-item" href="/">Współpraca z biznesem</a>
                    <a className="navbar-item" href="/">Wspieraj z nami</a>
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <Link to="/portal" className="button is-danger has-text-white" >
                                    <span>Portal partnera</span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
