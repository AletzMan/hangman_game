import { Header } from '../../components/Header/header';
import { SectionGame } from '../../components/SectionGame/SectionGame';
import './App.css';
import { SecretWord } from '../../components/SecretWord/SecretWord';
import { Alphabet } from '../../components/Alphabet/Alphabet';
import { Footer } from '../../components/Footer/Footer';
import { HumanBody } from '../../components/HumanBody/HumanBody';
import { useStats } from '../../Hooks/UseStats';
import { Clues } from '../../components/Clues/Clues';
import { useGlobal } from "../../Hooks/UseGlobal";
import { usePokemonData } from '../../Hooks/UsePokemonData';
import { Modal } from '../../components/Modal/Modal';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UseLocalStorage } from '../../Hooks/useLocalStorage';

function GamePage() {
  const { stateStats, updateAttemp, updateLetter } = useStats();
  const { stateLives, setStateLives, winner, setWinner } = useGlobal();
  const { pokemonData } = usePokemonData();
  const [viewModal, setViewModal] = useState(false);

  
  if (stateLives < 1) {
    setTimeout(() => {
      setViewModal(true);
    }, 1000);
  } else if(winner) {
    setTimeout(() => {
      setViewModal(true);
    }, 400);
  }
  
  return (
    <>
      <Header ></Header>
      <SectionGame>
        <SecretWord
          updateAttemp={updateAttemp}
          selectedLetter={stateStats.selectedLetter}
          pokemonData={pokemonData}
        ></SecretWord>
        <HumanBody stateLives={stateLives}></HumanBody>
        <Clues setStateLives={setStateLives} stateLives={stateLives}></Clues>
      </SectionGame>
      <Footer>
        <Alphabet updateLetter={updateLetter} setStateLives={setStateLives} stateLives={stateLives} pokemonData={pokemonData} setWinner={setWinner}></Alphabet>
      </Footer>
      {viewModal && <Modal pokemonData={pokemonData} winner={winner}></Modal>}
    </>
  )
}

export { GamePage }
