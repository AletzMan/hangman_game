import { useReducer, useEffect } from "react";
import { getPokemonByID, getPokemonImage, getPokemonType } from "../services/request";

function usePokemonData() {
    const initState = {
        id: '',
        name: '',
        type: '',
        habitat: '',
        question: '',
        image: '',
        color: '',
        url: '',
        url_attack: '',
    }

    const ACTIONS_TYPES = {
        ALL_UPDATE: 'ALL_UPDATE',
        TYPE: 'TYPE'
    }

    const reducer = (state, action) => {
        if (action.type === ACTIONS_TYPES.ALL_UPDATE) {
            return {
                ...state,
                id: action.payload[0],
                name: action.payload[1],
                habitat: action.payload[2],
                question: action.payload[3],
                image: action.payload[4],
                color: action.payload[5],
                url: action.payload[6],
                url_attack: action.payload[7],
            }
        } else if (action.type === ACTIONS_TYPES.TYPE) {
            return {
                ...state,
                type: action.payload
            }
        } else {
            state;
        }
    }
    const [pokemonData, dispatch] = useReducer(reducer, initState);
    const languageSelected = parseInt(localStorage.getItem('LANGUAGE')) === 1 ? 'en' : 'es';
    
    useEffect(() => {
        const ID_POKEMON = Math.floor(Math.random() * (999 - 1) + 1);;
        //const ID_POKEMON = 386;
        //const ID_POKEMON = 6;
        //const ID_POKEMON = 955;
        console.log(ID_POKEMON);
        Promise.all([
            getPokemonByID(ID_POKEMON),
            getPokemonImage(ID_POKEMON),
        ]).then(value => {
            //console.log(value[1].sprites.other["official-artwork"].front_default)
            dispatch({
                type: ACTIONS_TYPES.ALL_UPDATE,
                payload:
                    [value[1].id,
                    value[0].name,
                    value[0].habitat?.name,
                    (value[0].flavor_text_entries?.filter(text => text.language.name === languageSelected)).filter(flavor => !flavor.flavor_text.toLowerCase().includes(value[0].name)),
                    value[1].sprites.other["official-artwork"].front_default,
                    value[0].color?.name,
                    value[1].types[0].type.url,
                    value[1].abilities[0].ability.url],
            })            
        })
    }, [])



    return ({
        pokemonData
    })
}


export { usePokemonData };