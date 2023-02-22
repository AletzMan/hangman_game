import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css"

function Modal({ pokemonData, winner }) {
    const navigate = useNavigate();

    const playAgain = () => {
        navigate(0);
    }
    if(winner){
        const prevValue = parseInt(localStorage.getItem('GAMES_WON')) + 1;
        localStorage.setItem('GAMES_WON', prevValue);
    } else {
        localStorage.setItem('GAMES_WON', 0);
    }
    
    
    return (
        <div className="modal">
            <div className="modal__window">
                <p className="modal_paragraph paragraph">
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? '' : 'G'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'S' : 'A'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'U' : 'M'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'C' : 'E'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}> {winner ? 'C' : ''} </span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'E' : 'O'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'S' : 'V'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? 'S' : 'E'}</span>
                    <span className={`paragraph__letter paragraph__letter--${winner}`}>{winner ? '' : 'R'}</span>
                </p>
                <img className="modal__image" src={pokemonData.image} alt={`pokemon image of ${pokemonData.name}`} />
                <span className="modal__name" style={{ color: `${pokemonData.color}` }}>{pokemonData.name.toUpperCase()}</span>
                <button className="modal__again" onClick={playAgain}>{winner ? 'NEXT' : 'Play Again'}</button>
            </div>
        </div>
    )
}

export { Modal }