
import { useEffect } from "react";
import { useRef } from "react";
import "./Alphabet.css";
const ALPHABET = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
let characters = [];
characters.length = ALPHABET.length;
let pressedKey = [];
pressedKey.length = ALPHABET.length;
let pressedLetter;
let numberOfHits = 0;

function Alphabet({ updateLetter, setStateLives, stateLives, pokemonData, setWinner }) {
    const correctLetters = useRef(0);
    useEffect(() => {
        updateLetter('');
        setStateLives(7);
        pressedLetter = '';
        for (let index = 0; index < ALPHABET.length; index++) {
            pressedKey[index] = false;
        }
    }, [])
    const OnPressed = (index) => {
        if (stateLives > 0 && numberOfHits < pokemonData.name.length) {

            pressedLetter = ALPHABET[index];
            updateLetter(ALPHABET[index]);
            pressedKey[index] = true;

            if (!pokemonData.name.includes(ALPHABET[index].toLowerCase())) {
                setStateLives(prevState => prevState - 1);
            } else {
                let numberLetters = [];
                for (var i = 0; i < pokemonData.name.length; i++) {
                    if (pokemonData.name[i] === ALPHABET[index].toLowerCase()) numberLetters.push(i);
                }
                numberOfHits = correctLetters.current += (1 * numberLetters.length);
            }
        }
        if (numberOfHits === pokemonData.name.length) {
            setWinner(true);
        }
        else if (stateLives === 1) {
            setWinner(false);
        }

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