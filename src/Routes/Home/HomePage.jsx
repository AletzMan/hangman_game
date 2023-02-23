import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"
import pokemonImage from "../../assets/pokemon-image.png";
import pikachuImage from "../../assets/pikachu-image.png";
import { language } from "../../services/language";


function HomePage() {
    const [start, setStart] = useState(false);
    const [lang, setLang] = useState(0);
    const navigate = useNavigate();

    const changeLanguage = (e) => {
        if (e.target.checked) {
            localStorage.setItem('LANGUAGE', 0);
            setLang(0);
            console.log('si')
        } else {
            localStorage.setItem('LANGUAGE', 1);
            setLang(1);
            console.log('si')
        }
    }

    const startGame = () => {
        setStart(true);
        setTimeout(() => {
            navigate("/game");
        }, 1000);
        localStorage.setItem('GAMES_WON', 0);
        localStorage.setItem('LANGUAGE', lang);
    }
    
    return (
        <section className="home">
            <div className="home__language language">
                <input onChange={changeLanguage} type="checkbox" className="language__checkbox" defaultChecked />
                <div className="language__selector"></div>
            </div>
            <h1 className="home__title">{language[lang].header.title}</h1>
            <h2 className="home__subtitle">{language[lang].header.subtitle}</h2>
            <div className="pokeball__container">
                <span className="home__play">{language[lang].header.button}</span>
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