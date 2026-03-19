import './App.css'
import Exo01 from './components/Exo/Exo01'
import Welcome from './components/Welcome/Welcome'

function App() {

  return (
    <>
      <h1>Demo React - WAD25</h1>
      <Welcome name="Della" />

      <h2>Exercice 01</h2>
      <Exo01 value={42} />
      <Exo01 value={0} />
      <Exo01 value={13} />
    </>
  )
}

export default App
