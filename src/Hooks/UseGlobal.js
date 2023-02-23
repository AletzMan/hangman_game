import { useState } from "react"

function useGlobal() {
    const [stateLives, setStateLives] = useState(7);
    const [winner, setWinner] = useState(false);
    const [language, setLanguage] = useState('');
   
    return ({
        stateLives,
        setStateLives,
        winner,
        setWinner,
        language, 
        setLanguage
    })
}

export { useGlobal }