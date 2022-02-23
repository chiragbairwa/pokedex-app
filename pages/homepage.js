import Header from './header'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import pokedex from '../public/pokedex'
import pokedex1 from '../public/pokedex1'

/* react-color-extractor Used for Color extraction from image  */
import { ColorExtractor } from 'react-color-extractor'

export default function Homepage() {
  const [number, setNumber] = useState(1)
  const [bgcolor, setbgcolor] = useState('rgb(132, 204, 180)')
  const [button, setButton] = useState([
    'block',
    'block',
    'block',
    'block',
    'block',
  ])

  let imageSource = '/pokemons/'
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
  const changeBySearch = (gotSearchedName) => setNumber(gotSearchedName)
  const buttonDisable = () => {
    // if (number <= 1) setButton(['none', 'none', 'block', 'block', 'block'])
    // else if (number == 1)
    //   setButton(['none', 'block', 'block', 'block', 'block'])
    // else if (number == 808)
    //   setButton(['block', 'block', 'block', 'block', 'none'])
    // else if (number == 809)
    //   setButton(['block', 'block', 'block', 'none', 'none'])
    // else setButton(['block', 'block', 'block', 'block', 'block'])
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

      {/* Height & Weight */}
      <div className="poke-HW">
        <p>Height : {pokedex1.pokemon[number - 1].height}</p>
        <p>Weight : {pokedex1.pokemon[number - 1].weight}</p>
      </div>
      {/* Picture */}
      <div className="poke-image">
        <Image
          src={imageUrl()}
          width={400}
          height={400}
          alt={`${pokedex[number - 1].id}`}
        />
      </div>

      {/* Number & Name*/}

      <div className="poke-bio">
        <h2>#{numSort()}</h2>
        <h3>{pokedex[number - 1].name.english}</h3>
        <div className="type-container">
          {pokedex[number - 1].type.map((val) => {
            return (
              <div className="type">
                <Image
                  src={`/types/${val}.png`}
                  width={40}
                  height={40}
                  alt="type"
                  optimized
                ></Image>
              </div>
            )
          })}
        </div>
      </div>

      {/* Slider */}
      <div className="slider">
        <button
          onClick={() => {
            setNumber(number - 2)
            buttonDisable()
          }}
          style={{ display: button[0] }}
          className="slider-btn-1"
        >
          {number - 2}
        </button>
        <button
          onClick={() => {
            setNumber(number - 1)
            buttonDisable()
          }}
          style={{ display: button[1] }}
          className="slider-btn-2"
        >
          {number - 1}
        </button>
        <button className="slider-btn-3"> {number} </button>
        <button
          onClick={() => {
            setNumber(number + 1)
            buttonDisable()
          }}
          style={{ display: button[3] }}
          className="slider-btn-4"
        >
          {number + 1}
        </button>
        <button
          onClick={() => {
            setNumber(number + 2)
            buttonDisable()
          }}
          style={{ display: button[4] }}
          className="slider-btn-5"
        >
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
