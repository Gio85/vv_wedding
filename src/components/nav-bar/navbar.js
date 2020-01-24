import React from 'react';
import { Link, withRouter } from 'react-router-dom';

let isActive = false;

const toggleClass = () => {
    isActive = !isActive;
};
export function Navbar() {
    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <a
                href="#/"
                role="button"
                className={
                    isActive ? 'navbar-burger is-active' : 'navbar-burger'
                }
                data-target="navMenu"
                aria-label="menu"
                aria-expanded="false"
                onClick={() => toggleClass()}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
            <div
                id="navbarBasicExample"
                className={!isActive ? 'navbar-menu' : 'navbar-menu is-active'}
            >
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        Home
                    </Link>
                    <Link
                        to="/our_story"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        Where it all began
                    </Link>
                    <Link
                        to="/bridal_party"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        Bridal Party
                    </Link>
                    <Link
                        to="/wedding_itinerary"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        4th July 2020
                    </Link>
                    <Link
                        to="/recommendations"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        Where to stay
                    </Link>
                    <Link
                        to="/registry"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        Honeymoon
                    </Link>
                    <Link
                        to="/rsvp"
                        className="navbar-item"
                        onClick={() => toggleClass()}
                    >
                        RSVP
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default withRouter(Navbar);
