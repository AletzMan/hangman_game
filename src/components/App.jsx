import { Header } from './Header/header'
import { SectionGame } from './SectionGame/SectionGame'
import './App.css'
import { SecretWord } from './SecretWord/SecretWord'
import { Alphabet } from './Alphabet/Alphabet'
import { Footer } from './Footer/Footer'
import { HumanBody } from './HumanBody/HumanBody'
import { useStats } from './Hooks/UseStats'

function App() {
  const { state, updateAttemp, updateLetter } = useStats();
  return (
    <>
      <Header></Header>
      <SectionGame>
        <SecretWord
          updateAttemp={updateAttemp}
          selectedLetter={state.selectedLetter}
        ></SecretWord>
        <HumanBody></HumanBody>
      </SectionGame>
      <Footer>
        <Alphabet updateLetter={updateLetter}></Alphabet>
      </Footer>
    </>
  )
}

export default App
