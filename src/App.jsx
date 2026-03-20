import './App.css'
import Exo01 from './components/Exo/Exo01'
import Exo02 from './components/Exo/Exo02'
import Exo03 from './components/Exo/Exo03'
import PokemonTable from './components/PokemonTable/PokemonTable'
import Welcome from './components/Welcome/Welcome'
import pokemons from './data/pokemons.json'
import products from './data/products.json'

function App() {

  return (
    <>
      <h1>Demo React - WAD25</h1>
      <Welcome name="Della" />

      <h2>Exercice 01</h2>
      <Exo01 value={42} />
      {/* <Exo01 value={0} /> */}
      {/* <Exo01 value={13} /> */}

      <h2>Demo collection</h2>
      {/* <PokemonTable pokemons={pokemons} /> */}

      <h2>Exercice 02</h2>
      {/* <Exo02 products={products} /> */}

      <h3>Exercice 03</h3>
      <Exo03 />
    </>
  )
}

export default App
