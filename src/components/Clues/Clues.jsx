import React from "react";
import "./Clues.css"
import { language } from "../../services/language";

function Clues({ pokemonData, setViewClue, setStateLives } ) {

    const showClue = () => {
        setViewClue(true)
        setStateLives(prevState => prevState - 2);
    }

    const languageSelected = parseInt(localStorage.getItem('LANGUAGE'));
    
    return (
        <div className="clues">
            <label className="clues__button--label">{language[languageSelected].clues.title}</label>
            <button className="clues__button" onClick={showClue}>?</button>
        </div>
    )
}

export { Clues };