import React from "react";
import { useState } from "react";
import { usePokemonData } from "../../Hooks/UsePokemonData";
import "./Clues.css"

function Clues({ setStateLives, stateLives }) {
    const [stateButtonOne, setStateButtonOne] = useState(false);
    const [stateButtonTwo, setStateButtonTwo] = useState(false);
    const [stateButtonThree, setStateButtonThree] = useState(false);
    const [stateValues, setStateValues] = useState(['', '', '']);
    const { pokemonData } = usePokemonData();


    const viewClue = (valueOne, valueTwo, valueThree) => {
        if (stateLives > 0) {
            setStateLives(prevState => prevState - 1);
            console.log(valueOne, valueTwo, valueThree)
            setStateButtonOne(valueOne ? true : false);
            setStateButtonTwo(valueTwo ? true : false);
            setStateButtonThree(valueThree ? true : false);
            console.log(stateButtonOne, stateButtonTwo, stateButtonThree)
            setStateValues([valueOne.toUpperCase(), valueTwo.toUpperCase(), valueThree.toUpperCase()])
        }
    }


    return (
        <div className="clues">
            <span className="clues__span">CLUES</span>
            <label className={`clues__labelone clues__label clues__label--${stateButtonOne}`}>{stateValues[0]}</label>
            <button onClick={() => viewClue(pokemonData.type, stateValues[1], stateValues[2])} className={`clues__buttonone clues__button clues__button--${stateButtonOne}`}>TYPE</button>
            <label className={`clues__labeltwo clues__label clues__label--${stateButtonTwo}`}>{stateValues[1]}</label>
            <button onClick={() => viewClue(stateValues[0], pokemonData.habitat, stateValues[2])} className={`clues__buttontwo clues__button clues__button--${stateButtonTwo}`}>HABITAT</button>
            <label className={`clues__labelthree clues__label clues__label--${stateButtonThree}`}>{stateValues[2]}</label>
            <button onClick={() => viewClue(stateValues[0], stateValues[1], pokemonData.attack)} className={`clues__buttonthree clues__button clues__button--${stateButtonThree}`}>ATTACK</button>
        </div>
    )
}

export { Clues };