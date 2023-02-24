import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css"
import { language } from "../../services/language";
import { getPokemonType } from "../../services/request";
import { useState } from "react";
let numberCuriosity = 0;

function Modal({ pokemonData, winner, viewClue, setViewClue }) {
    const navigate = useNavigate();
    const languageSelected = parseInt(localStorage.getItem('LANGUAGE'));
    const languageSelectedID = parseInt(localStorage.getItem('LANGUAGE')) === 1 ? 'en' : 'es';
    const [type, setType] = useState('')
    const [attack, setAttack] = useState('')
    const CLUE_AVAILABLE = pokemonData.question.length > 0 ? true : false;

    const playAgain = () => {
        navigate(0);
    }
    useEffect(() => {
        numberCuriosity = Math.floor(Math.random() * ((pokemonData.question.length - 1) - 0) + 0);

        Promise.all([
            getPokemonType(pokemonData.url),
            getPokemonType(pokemonData.url_attack)
        ]).then(value => {
            setType(value[0].names.filter(lang => lang.language.name === languageSelectedID)[0].name);
            setAttack(value[1].names.filter(lang => lang.language.name === languageSelectedID)[0].name);

        })
    }, [])

    if (winner) {

        const prevValue = parseInt(localStorage.getItem('GAMES_WON')) + 1;
        localStorage.setItem('GAMES_WON', prevValue);

    } else if (!viewClue && !winner) {
        localStorage.setItem('GAMES_WON', 0);
    }
    
    return (
        <div className="modal">
            <div className={`modal__window modal__window--${viewClue}`}>

                {<span className={`paragraph__letter paragraph__letter--${viewClue ? 'curiosity' : winner}`}>
                    {viewClue ? CLUE_AVAILABLE ? language[languageSelected].modal.title.curiosity :
                        language[languageSelected].modal.title.unknown : winner ?
                        language[languageSelected].modal.title.winner : language[languageSelected].modal.title.loser}
                </span>}


                {(viewClue && CLUE_AVAILABLE) && <p className="modal__curiosity">{pokemonData.question[numberCuriosity]?.flavor_text}</p>}
                {(viewClue && !CLUE_AVAILABLE) && <img className="modal__image" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png'} alt={`pokemon image of ${pokemonData.name}`} />}
                {!viewClue && <img className="modal__image" src={pokemonData.image} alt={`pokemon image of ${pokemonData.name}`} />}
                {!viewClue && <span className="modal__name" style={{ color: `${pokemonData.color}` }}>{pokemonData.name.toUpperCase()}</span>}
                {!viewClue && <button className="modal__again" onClick={playAgain}>{winner ? language[languageSelected].modal.button.winner : language[languageSelected].modal.button.loser}</button>}
                {viewClue && <button className="modal__again" onClick={() => setViewClue(false)}>{language[languageSelected].modal.button.curiosity}</button>}
                {!viewClue && <div className="modal__container"  style={{ boxShadow: `0 0 5px 1px ${pokemonData.color}` }}>
                    <label className="modal__type">{languageSelected === 0 ? 'TIPO:' : 'TYPE:'}</label>
                    <label className={`modal__labelone modal__label`}>{type.toUpperCase()}</label>
                    <label className="modal__type">{languageSelected === 0 ? 'HABILIDAD:' : 'ABILITY:'}</label>
                    <label className={`modal__labeltwo modal__label`}>{attack.toUpperCase()}</label>
                </div>}
                {!viewClue && <div className="modal__containertwo"  style={{ boxShadow: `0 0 5px 1px ${pokemonData.color}` }}>
                    <label className="modal__stats">{languageSelected === 0 ? 'ESTADÍSTICAS' : 'STATS:'}</label>
                    <label className={`modal__label--hp modal__label--stats`}>{'HP:'}</label>
                    <div className="modal__bar--hp modal__bar" style={{ width: `${(100 / 250) * pokemonData.stats[0].base_stat}%` }} data={pokemonData.stats[0].base_stat}></div>
                    <label className={`modal__label--attack modal__label--stats`}>{languageSelected === 0 ? 'ATAQUE:' : 'ATTACK:'}</label>
                    <div className="modal__bar--attack modal__bar" style={{ width: `${(100 / 250) * pokemonData.stats[1].base_stat}%` }} data={pokemonData.stats[1].base_stat}></div>
                    <label className={`modal__label--defense modal__label--stats`}>{languageSelected === 0 ? 'DEFENSA:' : 'DEFENSE:'}</label>
                    <div className="modal__bar--defense modal__bar" style={{ width: `${(100 / 250) * pokemonData.stats[2].base_stat}%` }} data={pokemonData.stats[2].base_stat}></div>
                    <label className={`modal__label--speed modal__label--stats`}>{languageSelected === 0 ? 'VELOCIDAD:' : 'SPEED:'}</label>
                    <div className="modal__bar--speed modal__bar" style={{ width: `${(100 / 250) * pokemonData.stats[3].base_stat}%` }} data={pokemonData.stats[3].base_stat}></div>
                </div>}
            </div>
        </div>
    )
}

export { Modal }