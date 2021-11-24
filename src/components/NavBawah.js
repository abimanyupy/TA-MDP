import React from 'react'
import { NavLink } from 'react-router-dom'
// import { CgHome, CgPokemon, CgProfile } from 'react-icons/cg'
// import { TiShoppingBag } from 'react-icons/ti'
import './NavBawah.css'

export default function NavBawah() {
  return (
    <div className="nav-bawah">
      <NavLink to="/" className="link nav-menu">
        {/* <CgHome className="icon" /> */}
        Home
      </NavLink>
      <NavLink to="/rapper" className="link nav-menu">
        {/* <CgPokemon className="icon" /> */}
        Rapper
      </NavLink>
      <NavLink to="/dj" className="link nav-menu">
        {/* <TiShoppingBag className="icon" /> */}
        DJ
      </NavLink>
      <NavLink to="/about" className="link nav-menu">
        {/* <CgProfile className="icon" /> */}
        About
      </NavLink>
    </div>
  )
}
