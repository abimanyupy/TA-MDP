import React from 'react'
import { NavLink } from 'react-router-dom'
// import { CgHome, CgPokemon, CgProfile } from 'react-icons/cg'
// import { TiShoppingBag } from 'react-icons/ti'
import './NavBawah.css'

export default function NavBawah() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        {/* <CgHome className="icon" /> */}
        Home
      </NavLink>
      <NavLink to="/rapper" className="link nav-link">
        {/* <CgPokemon className="icon" /> */}
        Rapper
      </NavLink>
      <NavLink to="/dj" className="link nav-link">
        {/* <TiShoppingBag className="icon" /> */}
        Dj
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        {/* <CgProfile className="icon" /> */}
        About
      </NavLink>
    </div>
  )
}
