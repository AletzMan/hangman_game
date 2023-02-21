import { useEffect, useRef, useState } from "react"

function useGlobal() {
    const [stateLives, setStateLives] = useState(7);
    const [winner, setWinner] = useState(false);
    const gamesWon = useRef(0);

    useEffect(() => {
        if (gamesWon.current !== 0)
            localStorage.setItem('GAMES_WON', gamesWon.current);
    }, [gamesWon.current]);

    return ({
        stateLives,
        setStateLives,
        winner,
        setWinner,
        gamesWon
    })
}

export { useGlobal }