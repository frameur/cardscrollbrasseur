import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>Accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          Brasseurs
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Mac Never's and co.</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>La Poule</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Les Bières Hoffmann</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>du Bugey</li>
            </NavLink>
            <NavLink
              to="/projet-5"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Bois des Mousses</li>
            </NavLink>
            <NavLink
              to="/projet-6"
              activeClassName="nav-active"
              className="hover"
            >
              <li>ÔBrasseur</li>
            </NavLink>
            <NavLink
              to="/projet-7"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Saint Clair</li>
            </NavLink>
            <NavLink
              to="/projet-8"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Rivière d'Ain</li>
            </NavLink>
            <NavLink
              to="/projet-9"
              activeClassName="nav-active"
              className="hover"
            >
              <li>3B</li>
            </NavLink>
            <NavLink
              to="/projet-10"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Les Bières du Crépuscule</li>
            </NavLink>
            <NavLink
              to="/projet-11"
              activeClassName="nav-active"
              className="hover"
            >
              <li>de Grilly</li>
            </NavLink>
            <NavLink
              to="/projet-12"
              activeClassName="nav-active"
              className="hover"
            >
              <li>La Voie Maltée</li>
            </NavLink>
            <NavLink
              to="/projet-13"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Les Deux Frères</li>
            </NavLink>
            <NavLink
              to="/projet-14"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Bière Yourself</li>
            </NavLink>
            <NavLink
              to="/projet-15"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Grange Noire</li>
            </NavLink>
            <NavLink
              to="/projet-16"
              activeClassName="nav-active"
              className="hover"
            >
              <li>La Poulette des Ebaudis</li>
            </NavLink>
            <NavLink
              to="/projet-17"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Two Hats Brewing</li>
            </NavLink>
            <NavLink
              to="/projet-18"
              activeClassName="nav-active"
              className="hover"
            >
              <li>SARL STAJAM Gessienne</li>
            </NavLink>
            <NavLink
              to="/projet-19"
              activeClassName="nav-active"
              className="hover"
            >
              <li>IUT Lyon 1 - Site de Bourg-en-bresse</li>
            </NavLink>
            <NavLink
              to="/projet-20"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Ferme-Brasserie de Belmonthé</li>
            </NavLink>
            <NavLink
              to="/projet-21"
              activeClassName="nav-active"
              className="hover"
            >
              <li>Malt Emoi</li>
            </NavLink>
          </ul>
        </li>

        {/* <NavLink to="/contact" activeClassName="nav-active" className="hover">
          <li>contact</li>
        </NavLink> */}
      </ul>
    </div>
  )
}

export default Navigation
