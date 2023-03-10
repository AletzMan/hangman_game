const API_URL = 'https://pokeapi.co/api/v2/pokemon-species/';
const API_URL_IMAGES = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonByID = async id => {
    try {
        const response = await fetch(`${API_URL}${id}`)
        const data = await response.json();
        //console.log((data.flavor_text_entries.filter(text => text.language.name === 'en')).filter(flavor => !flavor.flavor_text.toLowerCase().includes(data.name)))
        return data;
    } catch (err) {
        return console.error(err);
    }
}

export const getPokemonImage = async id => {
    try {
        const response = await fetch(`${API_URL_IMAGES}${id}`)
        const data = await response.json();
        return data;
    } catch (err) {
        return console.error(err);
    }
}

export const getPokemonType = async (url) => {
    try {
        const response = await fetch(`${url}`)
        const data = await response.json();
        //console.log(url, data);
        return data;
    } catch (err) {
        return console.error(err);
    }
}