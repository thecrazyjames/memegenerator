import React from "react"
// import html2canvas from "html2canvas";
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }

    // function copyImage() { html2canvas(document.querySelector(".meme"), {allowTaint: true}).then(function(canvas) {
    //     // document.body.appendChild(canvas);
    //     const dataURI = canvas.toDataURL();

    //     console.log(dataURI);
    // })
    // };

    function copyImage() {
        htmlToImage.toPng(document.querySelector(".meme"))
  .then(function (dataUrl) {
    download(dataUrl, 'newMeme.png');
  });
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    

    const loadFile = function(event) {
        var url = URL.createObjectURL(event.target.files[0]);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

        // console.log(url)
    };
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼 
                </button>

                
        
                    <input className="upload1" type="file"  accept="image/*" name="image" id="file"  onChange={loadFile} />
                    <label className="form--button2" htmlFor="file">Upload Your Own Image<i class="material-icons">file_upload</i></label>
                    <img className="imageMeme" alt="file upload icon" id="output"/>

                

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="random meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <div className="form">
                <button 
                    className="form--button--export"
                    onClick={copyImage}
                >
                    Export Meme
                </button>
            </div>
            
        </main>
    )
}