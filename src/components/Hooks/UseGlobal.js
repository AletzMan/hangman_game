import { useState } from "react"

function useGlobal() {
    const [ stateLives, setStateLives ] = useState(7);
    return({
        stateLives,
        setStateLives
    })
}

export { useGlobal }