import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'


export default function Home() {
    return (
      <div className="home" id="home">

          
        <header>
          <img src="/vinyll.png" className="vinyll" alt="logo"   />
          <img src="/turntables.png" alt="logo" className="turntable"/>
          <h1 className="title">HipHopJunkie</h1>
        </header>

        <div className="container-menu">
          <div className="box-menu">
            <NavLink to="/rapper" className="link link-menu">
              Rapper
            </NavLink>
          </div>

          <div className="box-menu">
            <NavLink to="/dj" className="link link-menu">
              DJ
            </NavLink>
          </div>

        
          <div className="box-menu">
            <NavLink to="/about" className="link link-menu">
              About
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
