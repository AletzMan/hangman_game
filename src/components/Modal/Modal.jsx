import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css"

function Modal({ pokemonData, winner }) {
    const navigate = useNavigate();

    const playAgain = () => {
        navigate(0, { state: {lives: '2'} });
    }

    
    return (
        <div className="modal">
            <div className="modal__window">
                <p className="modal_paragraph paragraph">
                    <span className="paragraph__letter paragraph__letter--one">{winner ? '' : 'G'}</span>
                    <span className="paragraph__letter paragraph__letter--two">{winner ? '' : 'A'}</span>
                    <span className="paragraph__letter paragraph__letter--three">{winner ? 'W' : 'M'}</span>
                    <span className="paragraph__letter paragraph__letter--four">{winner ? 'I' : 'E'}</span>
                    <span className="paragraph__letter paragraph__letter--five"> {winner ? 'N' : ' - '} </span>
                    <span className="paragraph__letter paragraph__letter--six">{winner ? 'N' : 'O'}</span>
                    <span className="paragraph__letter paragraph__letter--seven">{winner ? 'E' : 'V'}</span>
                    <span className="paragraph__letter paragraph__letter--eight">{winner ? 'R' : 'E'}</span>
                    <span className="paragraph__letter paragraph__letter--nine">{winner ? '' : 'R'}</span>
                </p>
                <img className="modal__image" src={pokemonData.image} alt={`pokemon image of ${pokemonData.name}`} />
                <span className="modal__name" style={{ color: `${pokemonData.color}` }}>{pokemonData.name.toUpperCase()}</span>
                <button className="modal__again" onClick={playAgain}>{winner ? 'NEXT' : 'Play Again'}</button>
            </div>
        </div>
    )
}

export { Modal }