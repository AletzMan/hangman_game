import { useReducer } from "react"

const initState = {
    attemps: 7,
    selectedLetter: ''
}

const ACTIONS_TYPES = {
    ATTEMPS: 'ATTEMPS',
    LAST_LETTER: 'LAST_LETTER'
}

const reducer = (state, action) => {
    
    if (action.type === ACTIONS_TYPES.ATTEMPS) {
        return {
            ...state,
            attemps: action.payload
        }
    } else if (action.type === ACTIONS_TYPES.LAST_LETTER) {
        return {
            ...state,
            selectedLetter: action.payload
        }
    } else {
        return (
            state
        )
    }
}
function useStats() {
    const [stateStats, dispatch] = useReducer(reducer, initState)

    
    return {
        stateStats,
        updateAttemp: () => dispatch({ type: ACTIONS_TYPES.ATTEMPS, payload: stateStats.attemps -  1}),
        updateLetter: letter => dispatch({ type: ACTIONS_TYPES.LAST_LETTER, payload: letter}),
    }
}

export { useStats }