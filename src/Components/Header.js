import React from "react"
import TrollFace from "../troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={TrollFace} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Random Meme Creation Tool</h4>
        </header>
    )
}