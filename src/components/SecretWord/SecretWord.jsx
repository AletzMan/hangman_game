
import { useEffect } from 'react';
import "./SecretWord.css";
let spelledName = new Array();

function SecretWord({ updateAttemp, selectedLetter, pokemonData }) {

    useEffect(() => {
        if (selectedLetter !== '') {
            updateAttemp();
        }
    }, [selectedLetter])
    
    useEffect(() => {
        spelledName = [];
    }, [])
    let letters = [];

    for (let index = 0; index < pokemonData.name.length; index++) {
        if (pokemonData.name[index].toUpperCase() === selectedLetter) {
            spelledName[index] = selectedLetter;

        }
    }
    for (let index = 0; index < pokemonData.name.length; index++) {
        letters.push(<div key={index} className={`letter letter__${spelledName[index] ? 'correct' : 'incorrect'}`} >{spelledName[index] === pokemonData.name[index].toUpperCase() ? spelledName[index] : ''}</div>);
    }
    return (
        <div className="secretword">
            {letters}
        </div>
    )
}

export { SecretWord }