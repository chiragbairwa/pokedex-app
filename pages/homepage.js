import Header from './header'
import { useState } from 'react'
import pokedex from '../public/pokedex'

export default function Homepage() {
  const [number, setNumber] = useState(1)

  const imageSource =
    'https://github.com/fanzeyi/pokemon.json/raw/master/images/'
  let num = ''
  function numSort() {
    if (number < 10) {
      num = '00' + number
    } else if (number < 100) {
      num = '0' + number
    } else {
      num = number
    }

    return num
  }
  return (
    <div className="homepage">
      <Header></Header>

      {/* Picture */}
      <img
        src={imageSource + numSort() + '.png'}
        alt={`${pokedex[number - 1].id}`}
      />

      {/* Number & Name & Slider*/}
      <div className="bio-slider-container">
        <div className="poke-bio">
          <h2>#{numSort()}</h2>
          <h3>{pokedex[number - 1].name.english}</h3>
        </div>

        {/* Slider */}
        <div className="slider">
          <button
            onClick={() => setNumber(number - 2)}
            className="slider-btn-low"
          >
            {number - 2}
          </button>
          <button
            onClick={() => setNumber(number - 1)}
            className="slider-btn-mid"
          >
            {number - 1}
          </button>
          <button onClick={() => setNumber(number)}>{number}</button>
          <button
            onClick={() => setNumber(number + 1)}
            className="slider-btn-mid"
          >
            {number + 1}
          </button>
          <button
            onClick={() => setNumber(number + 2)}
            className="slider-btn-low"
          >
            {number + 2}
          </button>
        </div>
      </div>

      {/* Information */}
      <div className="poke-biodata">
        <div className="poke-info"></div>
        <div className="poke-type">
          <div>
            <p>Hp : {pokedex[number - 1].base.HP}</p>
          </div>
          <div>
            <p>Attack: {pokedex[number - 1].base.Attack}</p>
          </div>
          <div>
            <p>Defence: {pokedex[number - 1].base.Defense}</p>
          </div>
          <div>
            <p>hello: {pokedex[number - 1].base['Sp. Attack']}</p>
          </div>
          <div>
            <p>Sp. Defense: {`${pokedex[number - 1].base['Sp. Defense']}`}</p>
          </div>
          <div>
            <p>Speed: {pokedex[number - 1].base.Speed}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
