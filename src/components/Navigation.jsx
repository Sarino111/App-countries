import React from 'react'

import { NavLink } from "react-router-dom";

// styles
import '../scss/_navigation.scss'




const Navigation = (props) => {

  return (

    <nav className='navMenu'>
        <NavLink className="home" to="/" end>home</NavLink>
        <NavLink className="search" to="/search">search</NavLink>
        <NavLink className="list" to="/list">list</NavLink>
    </nav>
    
  )
}

export default Navigation