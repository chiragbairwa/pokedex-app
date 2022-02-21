import Header from './header'
import React, { useState, useEffect } from 'react'
import pokedex from '../public/pokedex'

/* react-color-extractor Used for Color extraction from image  */
import { ColorExtractor } from 'react-color-extractor'

export default function Homepage() {
  let imageSource =
    'https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/'

  const [number, setNumber] = useState(1)
  const [bgcolor, setbgcolor] = useState('rgb(132, 204, 180)')
  // useEffect(() => {
  //   if (window) {
  //     document.getElementsByClassName('searched-items').style.display = 'none'
  //   }
  // })
  function numSort() {
    let num = ''
    if (number < 10) {
      num = '00' + number
    } else if (number < 100) {
      num = '0' + number
    } else {
      num = number
    }
    return num
  }
  function imageUrl() {
    return imageSource + numSort() + '.png'
  }
  const changeBySearch = (gotSearchedName) => {
    setNumber(gotSearchedName)
  }

  return (
    <div
      className="homepage"
      style={{ backgroundColor: bgcolor, transition: 'background 0.5s' }}
    >
      <Header changeBySearch={changeBySearch}></Header>

      <ColorExtractor
        src={imageUrl()}
        getColors={(colors) => setbgcolor(colors[0])}
      />
      {/* Picture */}
      <img src={imageUrl()} alt={`${pokedex[number - 1].id}`} />

      {/* Number & Name*/}

      <div className="poke-bio">
        <h2>#{numSort()}</h2>
        <h3>{pokedex[number - 1].name.english}</h3>
      </div>

      {/* Slider */}
      <div className="slider">
        <button onClick={() => setNumber(number - 2)} className="slider-btn-1">
          {number - 2}
        </button>
        <button onClick={() => setNumber(number - 1)} className="slider-btn-2">
          {number - 1}
        </button>
        <button onClick={() => setNumber(number)} className="slider-btn-3">
          {number}
        </button>
        <button onClick={() => setNumber(number + 1)} className="slider-btn-4">
          {number + 1}
        </button>
        <button onClick={() => setNumber(number + 2)} className="slider-btn-5">
          {number + 2}
        </button>
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
            <p>Sp. Attack: {pokedex[number - 1].base['Sp. Attack']}</p>
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
