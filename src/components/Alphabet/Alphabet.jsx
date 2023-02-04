import { useEffect } from "react";
import "./Alphabet.css";
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let characters = [];
characters.length = ALPHABET.length;
let pressedKey = [];
pressedKey.length = ALPHABET.length;
function Alphabet({ setSelectedLetter }) {

const OnPressed = (index) => {
    setSelectedLetter(ALPHABET[index])
    pressedKey[index] = true
}

        for (let index = 0; index < ALPHABET.length; index++) {
            characters[index] = (
                <button
                    key={index}
                    className="alphabet__letter"
                    onClick={() => OnPressed(index)}
                    disabled={pressedKey[index]}
                >
                    {ALPHABET[index]}
                </button>
            ); 
        }
    
    return (
        <div className="alphabet">
            {characters}
        </div>
    )
}

export { Alphabet }