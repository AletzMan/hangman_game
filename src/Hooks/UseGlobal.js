import { useEffect, useRef, useState } from "react"

function useGlobal() {
    const [stateLives, setStateLives] = useState(7);
    const [winner, setWinner] = useState(false);
   
    return ({
        stateLives,
        setStateLives,
        winner,
        setWinner
    })
}

export { useGlobal }