import React from 'react'
import memesData from './memesData'


function Meme() {

    function getMemeImage() {
        const memesArray = memesData
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        console.log(memesArray[randomNumber].url);
    }

console.log("This is only a dream");

  return (
    <div className="Meme">
        <form className="form">
            <input type="text" placeholder="Top text" className="form--input" name="toptext"/>
            <input type="text" placeholder="Bottom text" className="form--input" name="toptext"/>
            <button onClick={getMemeImage} type="button" className="form--button">Get a new meme image 🖼</button>
        </form> 
    </div>
  );
}

export default Meme;
