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

  cont choosePokemon = (pokemon)=>{
    setPlayerPokermon({...pokemon})
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
      </div>

    </>
  )
}

export default App
