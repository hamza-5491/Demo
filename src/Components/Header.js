import React from 'react'
import { NavLink } from "react-router-dom";


const Header = () => {
   return (
      <>
         <header>
            <div className="container px-0">
               <nav className="navbar navbar-expand-lg px-0">
                  <NavLink className="navbar-brand" to="/"><img src="assets/images/home-page/logo.png" alt="" /></NavLink>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
                     <span className=""><img src="assets/images/align-justify.svg" alt="" /></span>
                  </button>

                  <div className="collapse navbar-collapse justify-content-end" id="navbar">
                     <ul className="navbar-nav">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/About">About</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/RecentWork">Recent Work</NavLink></li>
                        {/* dropdown */}
                        <li className="nav-item dropdown">
                           <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button"
                              data-toggle="dropdown">
                              Services
                           </NavLink>
                           <div className="dropdown-menu">
                              <NavLink className="dropdown-item" to="/WebApp">Web & Mobile Apps</NavLink>
                              <NavLink className="dropdown-item" to="/GraphicDesigning">Graphis Designing</NavLink>
                              <NavLink className="dropdown-item" to="/DigitalMarket">Digital Marketing</NavLink>
                              <NavLink className="dropdown-item" to="/Seoandlink">SEO & Link Building</NavLink>
                              <NavLink className="dropdown-item" to="/DigitalSkills">Digital Skills</NavLink>
                           </div>
                        </li>
                        <li className="nav-item"><NavLink className="nav-link" to="/TechAffair">Tech Affairs</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/Career">Career</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
                     </ul>
                  </div>
               </nav>
            </div>
         </header>
      </>
   )
}

export default Header
