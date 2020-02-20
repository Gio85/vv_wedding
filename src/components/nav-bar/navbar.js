import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'

let isActive = false

const toggleClass = () => {
  isActive = !isActive
}

export function Navbar() {
  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <NavLink
        to=""
        role="button"
        className={isActive ? 'navbar-burger is-active' : 'navbar-burger'}
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
        onClick={() => toggleClass()}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </NavLink>
      <div id="navbarBasicExample" className={!isActive ? 'navbar-menu' : 'navbar-menu is-active'}>
        <div className="navbar-start">
          <NavLink exact to="/" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            Home
          </NavLink>
          <NavLink to="/our_story" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            Where it all began
          </NavLink>
          <NavLink to="/bridal_party" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            Bridal Party
          </NavLink>
          <NavLink to="/wedding_itinerary" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            4th July 2020
          </NavLink>
          <NavLink to="/recommendations" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            Where to stay
          </NavLink>
          <NavLink to="/registry" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            Honeymoon
          </NavLink>
          <NavLink to="/rsvp" className="navbar-item" onClick={() => toggleClass()} activeClassName="currentPage">
            RSVP
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
