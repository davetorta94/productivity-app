import React from 'react'
import { Link, NavLink } from "react-router-dom";



export const NavBar = () => {
  return (
<nav className="navbar navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Productivity App</Link>

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

         
          
          
      </ul>
    </div>
  </div>
</nav>

  )
}


//<NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }`}
//          to="/">
//            Home
//         </NavLink>
//
//         <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }`}
//           to="/login">
//            Login
//         </NavLink>
//
//         <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }`}
//           to="/search">
//            Buscar Tareas
//         </NavLink>