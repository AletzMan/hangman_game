import React, { useEffect } from "react";
import { getPokemonByID, getPokemonImage } from "../../services/request";
import "./header.css";

function Header() {
    const [actualPokemon, setActualPokemon] = React.useState('');
    const [actualPokemonImage, setActualPokemonImage] = React.useState('');
    /*
    const prompt = `Here are the instructions to generate three sentences describing an animal:

    Respond only to the answer.
    Do not mention the name of the animal in the answer.
    Do not mention the word animal in the answer.
    The animal name is random.
       
        
    For characteristics:
    1-They love contact with water 
    2-They are excellent swimmers 
    3-They are the largest feline in the world
    The animal is: tiger.
    
    For characteristics: 
    1)They are the largest mammal on earth 
    2)They can weigh up to eight tons 
    3)They have large fan-shaped ears
    The animal is: elephant.
    
    For characteristics: 
    1)They are very affectionate with humans 
    2)They have a very acute sense of smell 
    3)They have a broad auditory spectrum
    The animal is : dog: 
    
    For characteristics: 
    1)Likes to hunt mice 
    2)Have small claws 
    3)Have impressive flexibility and agility
    The animal is : cat: 
    
        
    For animal characteristics: 
    The Animal is: Random Animal`;

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Cohere-Version': '2022-12-06',
          'content-type': 'application/json',
          authorization: 'Bearer jsHP6gZTMMXJoWDQQwl1wtEQ22rT2BiV6nZFnX1Q'
        },
        body: JSON.stringify({
          max_tokens: 70,
          temperature: 0.3,
          return_likelihoods: 'NONE',
          truncate: 'END',
          model: 'command-xlarge-20221108',
          prompt: `${prompt}`,
        })
      };
      
      fetch('https://api.cohere.ai/generate', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
*/
    const ID_POKEMON = 25;
    useEffect(() => {
        Promise.all([
            getPokemonByID(ID_POKEMON),
            getPokemonImage(ID_POKEMON)
        ]).then(value => {
            setActualPokemon(value[0].toUpperCase())
            setActualPokemonImage(value[1])
        })
    }, [])



    return (
        <header className="header">
            <img className="header__image" src={actualPokemonImage}></img>
            <span className="header__name">{actualPokemon}</span>
        </header>
    )
}

export { Header };