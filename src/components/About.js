import React from 'react';
import './About.css'

export default function About() {
  return (
      <div className="about grid-container">
        <img 
        className="vinyl" 
        src="./vinyll.png"
        alt=""
        />
        <div className="grids"><h1>About App</h1>
        <p>
        This application is created to let users know what is about hiphop with information from 2 of 4 hiphop elements.
        Hip hop is a culture and art movement that was created by African Americans.
        Hip hop is characterized by four key elements: 
        RAPPING is a rhythmic vocal rhyming style, 
        DJ which is the practice of making music with record players and DJ mixers, 
        B-BOY, and GRAFFITI. 
        </p>
        </div>
      </div>
  )
}
