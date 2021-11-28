import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBawah.css'

export default function NavBawah() {
  return (
    <div className="nav-bawah">
      <NavLink to="/" className="link nav-menu">
      
        Home
      </NavLink>
      <NavLink to="/rapper" className="link nav-menu">
       
        Rapper
      </NavLink>
      <NavLink to="/dj" className="link nav-menu">
      
        DJ
      </NavLink>
      <NavLink to="/about" className="link nav-menu">
      
        About
      </NavLink>
    </div>
  )
}
