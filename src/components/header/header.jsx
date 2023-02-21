import React from "react"
import "./header.css";

function Header ({ gamesWon }) {
    return(
        <header className="header">
            <h1 className="header__title">HangMan</h1>
            <span className="header__games">{`Games Won: `}<span className="header__games--number">{localStorage.getItem('GAMES_WON')}</span></span>
        </header>
    )
}

export { Header }