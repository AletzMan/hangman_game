import React, { useEffect } from "react";
import { getPokemonByID } from "../../services/request";
import "./SecretWord.css";
let nameByLetter = new Array();

function SecretWord({ selectedLetter }) {
    const [actualPokemon, setActualPokemon] = React.useState('');
    const ID_POKEMON = 4;
    
    
    useEffect(() => {
        Promise.all([
            getPokemonByID(ID_POKEMON)
        ]).then(value => {
            setActualPokemon(value[0].toUpperCase())
        })
    }, [])

    for (let index = 0; index < actualPokemon.length; index++) {        
        if(actualPokemon[index] === selectedLetter){
            nameByLetter[index] = selectedLetter;
        }
    }

    let letters = [];
    for (let index = 0; index < actualPokemon.length; index++) {
        letters.push(<div key={index} className="letter" >{ nameByLetter[index] === actualPokemon[index]?nameByLetter[index]:''}</div>);
    }

    console.log(nameByLetter)
    return (
        <div className="secretword">
            {letters}
        </div>
    )
}

export { SecretWord }