import React from "react"
import "./header.css";
import cord from "../../assets/soga-image.png";
import arrowBack from "../../assets/back-arrow.svg";
import { language } from "../../services/language";
import { NavLink } from "react-router-dom";

function Header() {
    const languageSelected = parseInt(localStorage.getItem('LANGUAGE'));
    return (
        <header className="header">
            <NavLink to={"/"}>
                <img className="header__back" src={arrowBack} alt="back page"></img>
            </NavLink>
            <h1 className="header__title">{language[languageSelected].header.title}</h1>
            <h2 className="header__subtitle">{language[languageSelected].header.subtitle}</h2>
            <span className="header__games">{`${language[languageSelected].header.games} `}<span className="header__games--number">{localStorage.getItem('GAMES_WON')}</span></span>
            <img className="header__cord header__cord--left" src={cord} alt="cord"></img>
            <img className="header__cord header__cord--right" src={cord} alt="cord"></img>
        </header>
    )
}

export { Header }