import React from "react"
import "./header.css";
import cord from "../../assets/soga-image.png"

function Header () {
    return(
        <header className="header">
            <h1 className="header__title">HangMan</h1>
            <h2 className="header__subtitle">Who's that pokemon?</h2>   
            <span className="header__games">{`Games Won: `}<span className="header__games--number">{localStorage.getItem('GAMES_WON')}</span></span>
            <img className="header__cord header__cord--left" src={cord} alt="cord"></img>
            <img className="header__cord header__cord--right" src={cord} alt="cord"></img>
        </header>
    )
}

export { Header }