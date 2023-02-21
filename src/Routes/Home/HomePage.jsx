import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"
import pokemonImage from "../../assets/pokemon-image.png";
import pikachuImage from "../../assets/pikachu-image.png";


function HomePage() {
    const [start, setStart] = useState(false);
    const navigate = useNavigate();

    const startGame = () => {
        setStart(true);
        setTimeout(() => {
            navigate("/game");
        }, 1000);
    }

    return (
        <section className="home">
            <h1 className="home__title">Hangman's Game</h1>
            <h2 className="home__subtitle">Who's that pokemon?</h2>            
            <div className="pokeball__container">
                <span className="home__play">Play</span>
                <div className={`pokeball__reflex pokeball__reflex--${start}`}></div>
                <div className={`home__pokeball pokeball pokeball__${start}`}></div>
                <div className="pokeball__line"></div>
                <div className="pokeball__circle">
                    <div className="pokeball__stela"></div>
                    <button className="pokeball__button" onClick={startGame}></button>
                </div>
            </div>
            <img className="images__pikachu" src={pikachuImage} alt="pikachu"></img>
            <img className="images__pokemon" src={pokemonImage} alt="pokemon square charmander bulbasaur"></img>

        </section>
    )

}

export { HomePage }