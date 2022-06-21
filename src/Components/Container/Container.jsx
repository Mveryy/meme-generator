import { Body } from "./styled";
import { useEffect, useState } from "react";

function Container() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemeImages(data.data.memes);
        }
        getMemes();
    }, []);

    const [allMemeImages, setAllMemeImages] = useState({});

    const getMemeImage = () => {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    };

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return (
        <Body>
            <div>
                <input type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange} />
                <input
                    type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>

            <section>
                <img src={meme.randomImage} alt="meme image" />
                <h2 className="top">{meme.topText}</h2>
                <h2 className="bottom">{meme.bottomText}</h2>
            </section>
        </Body>
    );
}

export default Container;
