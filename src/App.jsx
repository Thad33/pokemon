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

  setMessage(`You chose ${pokemon.name}! Opponent sent out ${randomOpponent.name}`)

    setIsPlayerTurn(true)

    setAttacklogs("")
   }

   const resetGame = () => {
    setPlayerPokemon(null)
    setOpponentPokemon(null)
    setMessage("")
    setIsPlayerTurn(true)
    setAttacklogs("")
   }

   const renderLifeBar = (hp, maxHp) => {
    const widthPercentage = (hp/maxHp) * 100

    return(
      <div className='life-bar-container'>
        <div className='life-bar'
        style={{width: `${widthPercentage}%`}}
        ></div>
      </div>
    )
   }

   const addLog = (log) => {
    console.log(log);
    
    setAttacklogs((attacklogs) => attacklogs + "<li>" + log + "</li>")
   }

   const playerAttack = (selectedAttack) => {
    if(!playerPokemon || !opponentPokemon) {
      setMessage("Choose your Pokemon to start battle")
      return
    }



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

              )} 
              }
            </div>
          </div>
        )}
      </div>
      <div>Pokemon Live effects</div>
    </>
  )
}

export default App
