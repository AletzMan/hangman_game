
import React, { useEffect } from "react";
import { getPokemonImage } from "../../services/request";
import "./SectionGame.css";
import three from "../../assets/tree-image.svg";
import cord from "../../assets/cord-image.svg";

function SectionGame({children}) {
    const [actualPokemonImage, setActualPokemonImage] = React.useState('');
  
    /*
    const ID_POKEMON = 1;
    useEffect(() => {
        Promise.all([
            getPokemonImage(ID_POKEMON)
        ]).then(value => {
            setActualPokemonImage(value[0].sprites.other.dream_world.front_default)
        })
    }, [])

*/

    return (
        <section className="section">
            {/*<img className="section__image" src={actualPokemonImage}></img>      */     }
            <img className="section__three" src={three}></img>
            <img className="section__cord" src={cord}></img>
            {children}
        </section>
    )
}

export { SectionGame };