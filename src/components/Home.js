import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom'

// export default function Home() {
//   return (
//     <div className="Home" id="Home">
//       <header className="App-header">
//         <div><img src="/vinyll.png" className="App-logo" alt="logo" /></div>
//         <div><img src="/turntable.png" className="turntable" alt=""/></div>
//         <p>HipHopJunkie</p>
//       </header>
//     </div>
//   )
// }

export default function Home() {
    return (
      <div className="home" id="home">
        <header>
          <div className="vinyl"><img src="/vinyll.png" alt="logo" /></div>
          <img src="/turntable.png" alt="logo" className="turntable"/>
          <h1 className="title">HipHopJunkie</h1>
        </header>
        <div className="menu-box">
          <NavLink to="/rapper" className="link app-link">
            Mc
          </NavLink>
        </div>
        <div className="menu-box">
          <NavLink to="/dj" className="link app-link">
            Dj
          </NavLink>
        </div>
        <div className="menu-container">
          <div className="menu-box">
            <NavLink to="/about" className="link app-link">
              About
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
