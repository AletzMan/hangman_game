import { Header } from './Header/header'
import { SectionGame } from './SectionGame/SectionGame'
import './App.css'
import { SecretWord } from './SecretWord/SecretWord'
import { Alphabet } from './Alphabet/Alphabet'
import { Footer } from './Footer/Footer'
import { HumanBody } from './HumanBody/HumanBody'
import { useCheking } from './Hooks/UseCheking'

function App() {
const {selectedLetter, setSelectedLetter} = useCheking();
  return (
    <>
      <Header></Header>
      <SectionGame>
        <SecretWord
          selectedLetter={selectedLetter}
        ></SecretWord>
        <HumanBody></HumanBody>
      </SectionGame>
      <Footer>
        <Alphabet setSelectedLetter={setSelectedLetter}></Alphabet>
      </Footer>
    </>
  )
}

export default App
