import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import pokemonData from './pokemonData'

function App() {    
  const [count, setCount] = useState(0)
  const [playerPokemon, setPlayerPokemon] = useState(null)
  const [opponentPokemon, setOpponentPokemon] = useState(null)
  const [message, setMesage] = useState[""]
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [attacklogs, setAttacklogs] = useState([])

  const choosePokemon = (pokemon)=>{
    setPlayerPokermon({...pokemon, attack: [...pokemon.attacks]
    })
    setMessage(`You chose ${pokemon.name}! Opponent sent out ${randomOpponent.name}`)
    
    setIsPlayerTurn(true)

    setAttacklogs([])
  }

  const randomOpponent = pokemonData[Math.floor(Math.random()* pokemonData.lenght)]

  setOpponentPokemon({
    ...randomOpponent
  })
  return (
    <>
      <div className="nes-container is-rounded is-dark">
        <i className="nes-pokeball"></i>
        <h1>Pokemon Battle Game</h1>

        {setPlayerPokermon?.hp == null && opponentPokemon?.hp == null && (
          <div className="pokemon-selection">
            <h2>Choose your Pokemon</h2>
            <div>
              {pokemonData.map{(pokemon) => (
            <button key={pokemon.name} type="button" className="nes-btn">
              {pokemon.name}
            </button>

              )} }
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default App
