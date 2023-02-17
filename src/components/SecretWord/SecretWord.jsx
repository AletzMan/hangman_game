//import React, { useEffect } from "react";
//import { getPokemonByID } from "../../services/request";

import { useData } from '../Hooks/UseData'
import { useEffect, useState } from 'react';
import "./SecretWord.css";
let nameByLetter = new Array();

function SecretWord({ updateAttemp, selectedLetter }) {
    const { state } = useData();

    useEffect(() => {
        if (selectedLetter !== '') {
            updateAttemp();
        }
    }, [selectedLetter])
    let letters = [];

    for (let index = 0; index < state.name.length; index++) {
        if (state.name[index].toUpperCase() === selectedLetter) {
            nameByLetter[index] = selectedLetter;
        }
    }
    for (let index = 0; index < state.name.length; index++) {
        letters.push(<div key={index} className="letter" >{nameByLetter[index] === state.name[index].toUpperCase() ? nameByLetter[index] : ''}</div>);
    }

    return (
        <div className="secretword">
            {letters}
        </div>
    )
}

export { SecretWord }