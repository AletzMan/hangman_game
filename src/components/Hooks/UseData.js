import { useReducer, useEffect } from "react";
import { getPokemonByID, getPokemonImage } from "../../services/request";

function useData() {
    const initState = {
        id: '',
        name: '',
        type: '',
        habitat: '',
        attack: '',
    }

    const ACTIONS_TYPES = {
        ALL_UPDATE: 'ALL_UPDATE',
    }

    const reducer = (state, action) => {
        if (action.type === ACTIONS_TYPES.ALL_UPDATE) {
            return {
                ...state,
                id: action.payload[0],
                name: action.payload[1],
                type: action.payload[2],
                habitat: action.payload[3],
                attack: action.payload[4],
            }
        } else {
            state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initState);


    const ID_POKEMON = 4;

    useEffect(() => {
        Promise.all([
            getPokemonByID(ID_POKEMON),
            getPokemonImage(ID_POKEMON)
        ]).then(value => {
            console.log(value[0])
            //setActualPokemon(value[0].name.toUpperCase())
            dispatch({
                type: ACTIONS_TYPES.ALL_UPDATE,
                payload:
                    [value[0].id,
                    value[0].name, value[1].types[0].type.name,
                    value[0].habitat.name,
                    value[1].abilities[0].ability.name]
            })
        })
    }, [])



    return ({
        state
    })
}


export { useData };