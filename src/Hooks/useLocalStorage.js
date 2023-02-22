import { useEffect, useRef } from "react";

function UseLocalStorage(){

const gamesWon = useRef(0);

useEffect(() => {
        localStorage.setItem('GAMES_WON', gamesWon.current);
}, [gamesWon.current]);

return({
    gamesWon
})
}

export { UseLocalStorage }