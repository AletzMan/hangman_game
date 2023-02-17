
import "./Alphabet.css";
import { useStats } from '../Hooks/UseStats'
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let characters = [];
characters.length = ALPHABET.length;
let pressedKey = [];
pressedKey.length = ALPHABET.length;
let pressedLetter;

function Alphabet({updateLetter}) {

const OnPressed = (index) => {
    pressedLetter = ALPHABET[index];
    updateLetter(ALPHABET[index]);
    pressedKey[index] = true;
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