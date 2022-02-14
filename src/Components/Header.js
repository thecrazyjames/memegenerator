import React from 'react'
import TrollFace from '../troll-face.png'


function Header() {
  return (
    <header className="Header">
      <img src={TrollFace} className="trollface" alt="Troll Face"></img>
      <h2 className="headerleft">Meme Generator</h2>
      <h4 className="headerright">React Course - Project 3</h4>
        
    </header>
  );
}

export default Header;
