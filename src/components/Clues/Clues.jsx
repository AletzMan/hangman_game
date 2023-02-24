import React from "react";
import "./Clues.css"
import { language } from "../../services/language";

function Clues({ stateLives, setViewClue, setStateLives } ) {

    const showClue = () => {
        setViewClue(true)
        setStateLives(prevState => prevState - 2);
    }

    const languageSelected = parseInt(localStorage.getItem('LANGUAGE'));
    
    return (
        <div className="clues">
            <label className="clues__button--label">{language[languageSelected].clues.title}</label>
            <button disabled={stateLives < 3} className={`clues__button clues__button--${stateLives < 3}`} onClick={showClue}>?</button>
        </div>
    )
}

export { Clues };