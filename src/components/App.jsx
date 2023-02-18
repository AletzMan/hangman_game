import { Header } from './Header/header';
import { SectionGame } from './SectionGame/SectionGame';
import './App.css';
import { SecretWord } from './SecretWord/SecretWord';
import { Alphabet } from './Alphabet/Alphabet';
import { Footer } from './Footer/Footer';
import { HumanBody } from './HumanBody/HumanBody';
import { useStats } from './Hooks/UseStats';
import { Clues } from './Clues/Clues';
import { useGlobal } from "../components/Hooks/UseGlobal";
import { usePokemonData } from './Hooks/UsePokemonData';

function App() {
  const { stateStats, updateAttemp, updateLetter } = useStats();
  const { stateLives, setStateLives } = useGlobal();
  const { pokemonData } = usePokemonData();
  return (
    <>
      <Header></Header>
      <SectionGame>
        <SecretWord
          updateAttemp={updateAttemp}
          selectedLetter={stateStats.selectedLetter}
          pokemonData={pokemonData}
        ></SecretWord>
        <HumanBody stateLives={stateLives}></HumanBody>
        <Clues></Clues>
      </SectionGame>
      <Footer>
        <Alphabet updateLetter={updateLetter} setStateLives={setStateLives} stateLives={stateLives} pokemonData={pokemonData}></Alphabet>
      </Footer>
    </>
  )
}

export default App
