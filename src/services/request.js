const API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
const API_URL_IMAGES = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonByID = async id => {
    try {
        const response = await fetch(`${API_URL}${id}`)
        const data = await response.json()
        //console.log(data.habitat.name)
        //console.log(data.egg_groups)
        return data;
    } catch (err) {
        return console.error(err);
    }
}

export const getPokemonImage = async id => {
    try {
        const response = await fetch(`${API_URL_IMAGES}${id}`)
        const data = await response.json()
        //console.log(data.types[0].type.name)
        return data /*.sprites.other.dream_world.front_default*/;
    } catch (err) {
        return console.error(err);
    }
}